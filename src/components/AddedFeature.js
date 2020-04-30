import React from 'react';
import {connect} from 'react-redux'
import { removeFeat } from '../actions'

const AddedFeature = props => {
  return (
    <div className="card">
      <div className='card-content'>
        <span>{props.feature.name}</span>
        <button onClick = {() => props.removeFeat(props.feature)}
        className="button">
        X
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  {removeFeat}
)(AddedFeature);
