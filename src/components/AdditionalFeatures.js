import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (    //mapping over the array of additional features
                                                    //Creating a component for each item in the component
            <AdditionalFeature key={item.id} feature={item} buyItem={props.buyItem}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
function mapStateToProps(state){
  return{
    additionalFeatures: state.additionalFeatures
  }

}

export default connect(
  mapStateToProps,
  {}
)(AdditionalFeatures);
