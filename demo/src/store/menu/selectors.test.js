import reducer from './reducer';
import delivery from 'data/delivery.json';
import {
  getMenuItems
} from './selectors';

const state = {
  menu: reducer(delivery.menu, {})
};

describe('getMenuItems', () => {
  const items = getMenuItems(state);
  it('Gets item list', () => {
    expect(items).toBeDefined();
  })
});
