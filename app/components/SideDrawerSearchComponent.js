//import { Mapbox } from 'nativescript-mapbox';

const Vue = require('nativescript-vue');
//const { MapboxViewApi, MapStyle, LatLng } = require('nativescript-mapbox');
const MapBoxConstants = require('../constants/mapbox');
//Vue.registerElement('Mapbox', () => require('nativescript-mapbox').MapboxView);
const map = require('nativescript-mapbox');
Vue.registerElement('Mapbox', () => map.MapboxView);

const SideDrawerNavigationComponent = {
  name: 'side-drawer-search-component',
  props: {
    mainContentText: '',
    titleText: ''
  },
  data: {
    map: {
      position: {
        longitude: 0,
        latitude: 0
      },
      options: {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      },
      accessToken: '',
      style: ''
    }
  },
  created() {
    this.map = {
      position: { longitude: 0, latitude: 0 },
      options: { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
      accessToken: MapBoxConstants.MAPBOX_ACCESS_TOKEN,
      style: MapBoxConstants.MAPBOX_MAP_STYLES.DARK
    };

    console.log(this.map);
  },
  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    },
    onLoaded(e) {
      //let map = args.map;
      console.log(Mapbox);
    },
    onItemTap({ item }) {
      console.log('The item list has been tapped');
    }
  },
  template: ` 
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="lightgray">
        <StackLayout height="56" style="text-align: left; vertical-align: center;">
          <NavigationButton icon="res://ic_menu_black_24dp"></NavigationButton>
          <Label :text="titleText" padding="10" />
        </StackLayout>
        <StackLayout backgroundColor="white">

        </StackLayout>
      </StackLayout>
      <StackLayout ~mainContent>
        <Mapbox
            accessToken="pk.eyJ1IjoiYmVuc2hleiIsImEiOiJjajFmZ2ludHMwMGx0MzJ0NDJzbW14MWc5In0.3W8kUIEbiliNAEl85DqD-A"
            mapStyle="traffic_night"
            latitude="52.3702160"
            longitude="4.8951680"
            zoomLevel="3">
        </Mapbox>
      </StackLayout>
    </RadSideDrawer>
 `
};

module.exports = SideDrawerNavigationComponent;
