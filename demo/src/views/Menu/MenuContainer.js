import { connect } from "react-redux";
import {
  fetchMenu,
  getMenuData,
  setSelectedId,
  getSelectedItem,
  getCartSize
} from "store/modules/menu";
import Menu from "./Menu";

const mapStateToProps = state => ({
  items: getMenuData(state),
  selectedItem: getSelectedItem(state),
  cartCount: getCartSize(state)
});

const mapDispatchToProps = dispatch => ({
  onFetchMenu: () => dispatch(fetchMenu()),
  onSelectItem: id => dispatch(setSelectedId(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
