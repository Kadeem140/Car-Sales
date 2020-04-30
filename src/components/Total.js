import React from 'react';
import { connect } from 'react-redux';


const Total = props => {
  console.log(props);
  return (
    <div className="content">
      <h4>Total Amount: ${props.state.car.price + props.state.additionalPrice}</h4>
    </div>
  );
};
function mapStateToProps(state) {
  return{
    state: state
  }
}

export default connect(
  mapStateToProps
)(Total);
