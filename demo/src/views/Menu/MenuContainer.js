import { connect } from "react-redux";
import { fetchMenu, getMenuData } from "store/modules/menu";
import Menu from "./Menu";

const mapStateToProps = state => ({
  items: getMenuData(state)
});

const mapDispatchToProps = dispatch => ({
  onFetchMenu: () => dispatch(fetchMenu())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
