import { connect } from 'react-redux';
import { buy } from '../../actions/button';
import Button from '../../components/Button';

const mapStateToProps = (state) => {
  return {
    value: 'Buy one',
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => {
      dispatch(buy(1));
    },
  };
};

const BuyAcorn = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default BuyAcorn;