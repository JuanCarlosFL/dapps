export const loadMapApi = () => {
  const mapsURL = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBh6L5XRrM7DBcuOaGEp0Xtzj5zdB6uKZY&libraries=places&language=no&region=NO&v=quarterly`;
  const scripts = document.getElementsByTagName('script');
  // Go throug existing script tags, and return google maps api tag when found.
  for (let i = 0; i < scripts.length; i++){
    if (scripts[i].src.indexOf(mapsURL) === 0){
      return scripts[i];
    }
  }

  const googleMapScript = document.createElement('script');
  googleMapScript.src = mapsURL;
  googleMapScript.async = true;
  googleMapScript.defer = true;
  window.document.body.appendChild(googleMapScript);

  return googleMapScript;
}

