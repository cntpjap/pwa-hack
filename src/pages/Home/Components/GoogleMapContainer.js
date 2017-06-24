import React, { Component } from 'react'

import GoogleMapWrapper from './GoogleMapWrapper'

class GoogleMapContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      center: {
        lat: 0,
        lng: 0
      }
    }
  }

  componentWillMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((geoposition) => {
        this.setState({
          center: {
            lat: geoposition.coords.latitude,
            lng: geoposition.coords.longitude
          }
        })
      })
    }
  }

  render() {
    return (
      <div className="google-map-wrapper">
        <GoogleMapWrapper
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          center={this.state.center}
        />
      </div>
    )
  }
}
// lat: 13.6517367, lng: 100.4949226

export default GoogleMapContainer