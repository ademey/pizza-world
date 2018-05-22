import { connect } from 'react-redux';
import { unitsToDollar } from 'utils/format';
import {
   getItemName,
   getItemUnits,
   getFocused,
   getFocusedMenuItem,
   getOptionsTotal,
   cache__getItemTotal
} from 'store/menu';
import OptionsSidebar from './OptionsSidebar';

const mapStateToProps = (state, ownProps) => {
  const menuItem = getFocusedMenuItem(state) || {};
  return {
    name: getItemName(menuItem),
    price: unitsToDollar(getItemUnits(menuItem)),
    optionsPrice: unitsToDollar(getOptionsTotal(state)),
    total: unitsToDollar(cache__getItemTotal(state)),
    isOpen: !!getFocused(state)
  };
};

export default connect(mapStateToProps)(OptionsSidebar);
