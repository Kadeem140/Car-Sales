import React from 'react'
import { connect } from 'react-redux'

import { addFeature } from '../actions'

const AdditionalFeature = (props) => {
  console.log('add feature', props)
  return (
    <div className='card'>
      <div className='card-content'>
        <span>
          {props.feature.name} (${props.feature.price})
        </span>
        &nbsp;&nbsp;
        <button
          onClick={() => {
            props.addFeature(props.feature)
          }}
          className='button is-warning is-offset-6'
        >
          Add
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    store: state.store,
    car: state.car
  }
}

export default connect(
  mapStateToProps,
  { addFeature }
)(AdditionalFeature)
