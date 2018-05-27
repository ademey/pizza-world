# Selectors in
# React-Redux
### Optimization through memoization



### Overview
- What is a Selector?
- Reselect Library
- Combining Selectors
- Demo
- Sharing Selectors
- Advanced Memoization



### What is a Selector?
- A function that accepts `state` and derives a value.
- A pure function. It will always return the same value for the same input.

```js
const state = {
  store: {...},
  menu: {
    options: [...],
    selectedOptions: {...}
  }
};

const getMenuOptions = state => state.menu.options;
const getCheckedOptions = state => state.menu.selectedOptions;

getMenuOptions(state);
getCheckedOptions(state);
```



### Where to use Selectors?
React-Redux `connect()`
```js
const mapStateToProps = state => ({
  menuOptions: getMenuOptions(state),
  selected: getCheckedOptions(state)
});

export default connect(mapStateToProps)(MenuComponent)
```

Redux-Thunk
```js
const submitOrder = (dispatch, getState) => {
  const order = getOrder(getState());
  return axios.post('/submit', order);
}
// ...
const mapDispatchToProps = dispatch => ({
  onOrderSubmit: () => dispatch(submitOrder)
});
```
Note:
Selectors are separating the logic and knowledge of state




### Why use Selectors?
`mapStateToProps` will execute every time there is an update to the `Redux`
state!
```js
const mapStateToProps = (state) => {
  const options = state.menu.menuOptions;
  const selected = state.menu.selectedOptions;

  const total = options.reduce((acc, curr) => {
    if (selected[curr.id]) return acc + curr.price;
    return acc;
  }, 0);

  return { total }
}

export default connect(mapStateToProps)(CartComponent)
```
Note:
We have seen how selectors can separate concerns,
but how can we use it to optimize




### Reselect
[Github](https://github.com/reduxjs/reselect/blob/master/README.md)
- Selectors can compute derived data, allowing Redux to store the minimal possible state.
- Selectors are efficient. A selector is not recomputed unless one of its arguments changes.
- Selectors are composable. They can be used as input to other selectors.



### Selector Composition
```js
import { createSelector } from 'reselect';

const getMenuOptions = state => state.menu.options
const getCheckedOptions = state => state.menu.selectedOptions

const getOptionsTotal = createSelector(
  getMenuOptions,
  getCheckedOptions,
  (options, selected) => options.reduce((acc, curr) => {
    if (selected[curr.id]) return acc + getItemUnits(curr);
    return acc;
  }, 0)
);

const getItemTotal = createSelector(
  getOptionsTotal,
  getSelectedCost,
  (optionsTotal, selectedCost) => optionsTotal + selectedCost
);
```
Note:
Once selectors need to start looping it is important to memoize



### Memoization
Selectors have a cache size of 1. Subsequent calls with the same state will return
a cached value.
```js
const getBase = state => state.base;
const getExponent = state => state.exponent;
const getPower = createSelector(
  getBase, getExponent,
  (base, expo) => base ** expo
);

getPower({ base: 2, exponent: 2 }); // 4
getPower({ base: 2, exponent: 2 }); // 4
getPower.recomputations() // 1
getPower({ base: 2, exponent: 3 }); // 8
getPower.recomputations() // 2
getPower({ base: 2, exponent: 2 }); // 4
getPower.recomputations() // 3
```



## Demo
### Pizza World
Note:
Start with state of the header




### Pizza World State
```js
{
  location: {
    name: 'Pizza World',
    description: 'Pizza, Sandwiches, Chicken Wings',
    phone_number: '+17739055387',
    ...
  },
  menu: {
    selectedOptions: { 10591376: true, 8723470: false },
    items: [
      { name: 'Hawaiian', type: 'pizza', ... },
      { name: 'Greek Salad', type: 'salad', ... },
      ...
    ],
    options: [ { name: 'Anchovies', id: 10591372 }, ...],
  }
}
```
Note:
Notice items array. There are not separate ones for Pizza and Salad
Show UI again



## Demo
### Logger
Note:
I want to demonstrate how proper memoization will reduce unneeded computations and renders
Start with getFocusedMenuItem



### Expensive container
```html
<MenuCategoryContainer title="Pizza" category="pizza" />
<MenuCategoryExpensive title="Salads" category="salad" />
```
```js
// Simplified examples. See `store/menu/selectors.js`
const getMenuItemsByCategory = createSelector(
  getMenuItems,
  getProps,
  (items, type) => {
    return items.filter(item => item.type === type)
  }
);

const expensive__getGetMenuItemsByCategory = (state, type) => {
  const items = getMenuItems(state);
  return items.filter(item => item.type === type)
}
```



### Shared Selectors
```html
<MenuCategoryContainer title="Pizza" category="pizza" />
<MenuCategoryContainer title="Salads" category="salad" />
```
```js
const mapStateToProps = () => {
  const getMenuItems = makeGetMenuItemsByCategory()

  return (state, ownProps) => ({
    items: getMenuItems(state, ownProps.category)
  });
};
```
```js
const getProps = (state, props) => props;
const getMenuItems = state => state.menu.items;

const makeGetMenuItemsByCategory = () => createSelector(
  getMenuItems,
  getProps,
  (items, type) => {
    return items.filter(item => item.type === type)
  }
);
```
Note:
If a new selector was not created for this component, each could invalidate eachother.
Each component must create a unique instance.




### Advanced Memoization
```js
import { createSelector, createSelectorCreator } from 'reselect';
import memoize from 'lodash.memoize'

const hashFn = (...args) => {
  const hashed = args.reduce(
    (acc, val) => acc + '-' + JSON.stringify(val),
    ''
  );
  return hashed;
}
const deepCacheSelector = createSelectorCreator(memoize, hashFn)

export const cache__getItemTotal = deepCacheSelector(
  getOptionsTotal,
  getSelectedCost,
  (optionsTotal, selectedCost) => {
    return optionsTotal + selectedCost
);
```
Note:
Turn on hash logger



## Thank You

[https://github.com/ademey/pizza-world](https://github.com/ademey/pizza-world)

