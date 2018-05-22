import { connect } from 'react-redux';
import { getName, getDescription, getImage } from 'store/location';
import StoreHeader from './StoreHeader';

const mapStateToProps = state => ({
  name: getName(state),
  description: getDescription(state),
  imageUrl: getImage(state)
});

export default connect(mapStateToProps)(StoreHeader);
