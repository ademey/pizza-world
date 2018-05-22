import { connect } from 'react-redux';
// import { types, logType } from 'utils/log';
import { focusItem } from 'store/menu';
import {
  getItemName,
  getItemPrice,
  getFocused,
  getItemDescription
} from 'store/menu';
import MenuItem from './MenuItem';

const mapStateToProps = (state, ownProps) => {
  const itemData = ownProps.itemData;
  // logType(types.MAP_STATE, 'MenuItemContainer', getIsFocused.recomputations());
  return {
    name: getItemName(itemData),
    price: getItemPrice(itemData),
    description: getItemDescription(itemData),
    selected: getFocused(state) === ownProps.itemData.id
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSelect: () => dispatch(focusItem(ownProps.itemData.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);
