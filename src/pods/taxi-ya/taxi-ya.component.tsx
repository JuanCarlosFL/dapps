import React, { useState, useRef, useCallback } from 'react'
// import { loadMapApi } from "./utils/GoogleMapsUtils";
import { Button, Container, makeStyles } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import useGeoPosition from "core/hooks/useGeoPosition";
import { MapView } from './components/MapView';
import {
  InfoWindow,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import './taxi-ya.styles.css';
import Geocode from 'react-geocode';
import AutoComplete from 'react-google-autocomplete';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoib2JpanVhbmt5IiwiYSI6ImNrdm1tb2NndTNycDYydnBnd2ZmeDJ0aTEifQ.CmCFrXmcoMCXOkGw9HLaHQ'

Geocode.setApiKey('AIzaSyBh6L5XRrM7DBcuOaGEp0Xtzj5zdB6uKZY');
Geocode.enableDebug();

const useStyles = makeStyles({
  title: {
    textAlign: 'center',
    fontSize: 32,
    fontWeight: 'bold',
    margin: '2rem',
  },
  form: {
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2rem',

  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  input: {
    width: '40%',
    height: 40,
  },
  inputs: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: '2rem',
  }
});

const MapWithAMarker = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <Marker
      position={{ lat: -34.397, lng: 150.644 }}
      >
        <InfoWindow>
          <div>
            Origen
          </div>
        </InfoWindow>
    </Marker>


  </GoogleMap>
));


export const TaxiYaComponent = () => {
  const classes = useStyles();

  const [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  })
  const geocoderContainerOriginRef = useRef()
  const geocoderContainerDestinationRef = useRef()
  const mapRef = useRef()
  const handleViewportChange = useCallback((newViewport) => setViewport(newViewport), [])

  // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
  const handleGeocoderViewportChange = useCallback(
    (newViewport) => {
      const geocoderDefaultOverrides = { transitionDuration: 1000 }

      return handleViewportChange({
        ...newViewport,
        ...geocoderDefaultOverrides
      })
    },
    [handleViewportChange]
  )
  const [latOrigen, setLatOrigen] = useState({});

  return (

    <Container>
      <Typography component="h2" className={classes.title}>Taxi Ya!!</Typography>
      <MapWithAMarker
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBh6L5XRrM7DBcuOaGEp0Xtzj5zdB6uKZY&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

<Container className={classes.form}>
          <div className={classes.inputs}>
          <AutoComplete
            placeholder="Introduce el origen"
            className={classes.input}
            typeof={'(streets)'}
            onPlaceSelected={(place) => {
              console.log(place)
            }}
          />
          <AutoComplete
            placeholder="Introduce el destino"
            className={classes.input}
            typeof={'(streets)'}
            onPlaceSelected={(place) => {
              console.log(place);
            }}
          />
          </div>
          <div className={classes.button}>
            <Button variant="contained" color="primary">Solicitar</Button>

          </div>
        </Container>

      {/* <div style={{ width: '60%', height: '50vh', marginRight: 'auto', marginLeft: 'auto', display: 'flex', flexDirection: 'column' }} >
        <MapGL
          ref={mapRef}
          {...viewport}
          width="100%"
          height="100%"
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN}>
        </MapGL>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
          <Typography>Origen </Typography>
          <Typography style={{paddingRight: 15}}>Destino</Typography>

        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '2rem'}}>
          <div ref={geocoderContainerOriginRef}  />
          <div ref={geocoderContainerDestinationRef} />

        </div>
          <Geocoder
            mapRef={mapRef}
            containerRef={geocoderContainerOriginRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
          />
          <Geocoder
            mapRef={mapRef}
            containerRef={geocoderContainerDestinationRef}
            onViewportChange={handleGeocoderViewportChange}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            position="top-left"
          />
      </div> */}
    </Container>
  )
}


