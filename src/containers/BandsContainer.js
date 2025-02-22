import React, { Component } from 'react'
import BandInput from "../components/BandInput"
import Bands from "../components/Bands"
import { connect } from "react-redux"

class BandsContainer extends Component {
  
  

  render() {
    return (
      <div>
        <BandInput
          addBand={this.props.addBand}
        />
        <Bands />
      </div>
    )
  }
}

const mapGlobalStateToProps = state => {
  return (
    { bands: state }
  )
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapGlobalStateToProps, mapDispatchToProps)(BandsContainer)
