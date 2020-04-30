import React, {useReducer} from 'react';

import {initialState, carReducer } from './reducers/carReducer'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

import {addFeature} from './actions';
import {removeFeat} from './actions';


const App = (props) => {

  const [state, dispatch] = useReducer(carReducer, initialState)

  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.add(item)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} buyItem={buyItem}/>
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return{
    state
  };
}
const mapDispatchToProps = {
  add: addFeature,
  remove: removeFeat
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
