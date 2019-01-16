import { connect } from "react-redux";
import {
  getSelectedItem,
  getSelectedId,
  clearSelectedId,
  addToCart
} from "store/modules/menu";
import MenuItemModal from "./MenuItemModal";

const mapStateToProps = state => ({
  isOpen: !!getSelectedId(state),
  menuItem: getSelectedItem(state)
});

const mapDispatchToProps = dispatch => ({
  onCancel: () => dispatch(clearSelectedId()),
  onAddToCart: id => dispatch(addToCart(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItemModal);
