export const AgoraConstants = {
  APP_API:
    process.env.NODE_ENV === 'production'
      ? 'http://localhost:8000/api/v1'
      : 'http://localhost:8000/api/v1',
  APP_NAME_TO_UPPER: 'AGORA',
  APP_NAME: 'Agora',
  MAPBOX_ACCESS_PLACES_API:
    'https://api.mapbox.com/geocoding/v5/mapbox.places/',
  MAPBOX_ACCESS_TOKEN:
    'pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A',
  MAPBOX_MAP_STYLES: {
    TRAFFIC_DAY: 'mapbox://styles/mapbox/traffic-day-v2',
    TRAFFIC_NIGHT: 'mapbox://styles/mapbox/traffic-night-v2',
    SATELLITE_STREETS: 'mapbox://styles/mapbox/satellite-streets-v10',
    SATELLITE: 'mapbox://styles/mapbox/satellite-v9',
    STREET: 'mapbox://styles/mapbox/streets-v10',
    DARK: 'mapbox://styles/mapbox/dark-v9',
    LIGHT: 'mapbox://styles/mapbox/light-v9',
    OUTDOORS: 'mapbox://styles/mapbox/outdoors-v10'
  }
};
