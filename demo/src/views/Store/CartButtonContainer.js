import { connect } from "react-redux";
import { CartButton } from "components/Cart";
import { getCartSize } from "store/modules/menu";

const mapStateToProps = state => ({
  count: getCartSize(state)
});

export default connect(mapStateToProps)(CartButton);
