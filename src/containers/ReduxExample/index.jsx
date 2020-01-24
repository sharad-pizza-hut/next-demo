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

const mapStateToProps = state => ({
  clock: state.clock,
  counter: state.counter
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);
