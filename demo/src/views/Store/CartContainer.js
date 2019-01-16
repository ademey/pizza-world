import { connect } from "react-redux";
import { Cart } from "components/Cart";
import { getCartSize } from "store/modules/menu";

const mapStateToProps = state => ({
  count: getCartSize(state)
});

export default connect(mapStateToProps)(Cart);
