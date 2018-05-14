import React, { Component } from 'react';
import './App.css';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AddressField from './components/AddressField';
import GoogleMapReact from 'google-map-react'
import { GOOGLE } from './store/googlemaps/comm/Consts'

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class App extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 15
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header" >
            <h1 className="App-title">Delivery Way</h1>
          </header>
          <div className="App-intro">
            <AddressField/>
            <div className='google-map'>
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE.KEY }}
              defaultCenter={ this.props.center }
              defaultZoom={ this.props.zoom }>
              <AnyReactComponent
                lat={ 40.7473310 }
                lng={ -73.8517440 }
                text={ "BLABLA" }
              />
            </GoogleMapReact>
          </div>
          </div>
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
