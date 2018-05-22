import { connect } from 'react-redux';
import { makeGetMenuItemsByCategory } from 'store/menu';
import MenuCategory from './MenuCategory';

const mapStateToProps = () => {
  const getMenuItemsByCategory = makeGetMenuItemsByCategory();
  return (state, ownProps) => ({
    items: getMenuItemsByCategory(state, ownProps.category)
  });
};

export default connect(mapStateToProps)(MenuCategory);