import { connect } from 'react-redux';

// Actions
import { startClock } from '../../actions/clock';

// Component
import ReduxExample from "../../components/Redux"


const mapDispatchToProps = dispatch => ({
  startClock: () =>
    setInterval(() => {
      dispatch(startClock(true));
    }, 1000)
});

export default connect(null, mapDispatchToProps)(ReduxExample);
