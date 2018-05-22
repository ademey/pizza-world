import { connect } from 'react-redux';
import { expensive__getGetMenuItemsByCategory } from 'store/menu';
import MenuCategory from './MenuCategory';

const mapStateToProps = (state, ownProps) => ({
  items: expensive__getGetMenuItemsByCategory(state, ownProps.category)
});

export default connect(mapStateToProps)(MenuCategory);