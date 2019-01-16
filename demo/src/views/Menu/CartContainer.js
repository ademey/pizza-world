import { connect } from "react-redux";
import { Cart } from "components/Cart";
import {
  getFormattedCartItems,
  getCartSummary,
  getCheckoutInProgress,
  getCheckoutSuccess,
  getDeliveryTime,
  submitOrder
} from "store/modules/menu";

const mapStateToProps = state => ({
  cartItems: getFormattedCartItems(state),
  summary: getCartSummary(state),
  submitting: getCheckoutInProgress(state),
  success: getCheckoutSuccess(state),
  deliveryTime: getDeliveryTime(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: cart => dispatch(submitOrder(cart)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
