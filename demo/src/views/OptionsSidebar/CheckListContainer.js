import { connect } from 'react-redux';
// import { types, logType } from 'utils/log';
import {
   getMenuOptions,
   getCheckedOptions
} from 'store/menu';
import { toggleOption } from 'store/menu';
import { CheckList } from 'components/CheckList';


const mapStateToProps = (state, ownProps) => ({
  options: getMenuOptions(state),
  checked: getCheckedOptions(state),
});

const mapDispatchToProps = dispatch => ({
  onCheck: (id) => dispatch(toggleOption(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckList);
