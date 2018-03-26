const Vue = require('nativescript-vue');
const MapBoxConstants = require('../constants/mapbox');
const AppSettings = require('application-settings');
Vue.registerElement('Mapbox', () => require('nativescript-mapbox').MapboxView);
// Vue.registerElement(
//   'RadSideDrawer',
//   () => require('nativescript-ui-sidedrawer').RadSideDrawer
// );
// const map = require('nativescript-mapbox');
// Vue.registerElement('Mapbox', () => map.MapboxView);

const SideDrawerMapSearchComponent = {
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
        maximumAge: 60000,
        zoomLevel: 0
      },
      accessToken: '',
      style: ''
    }
  },
  created() {
    this.map = {
      position: { longitude: 153.1138667, latitude: -26.7669347 },
      options: {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
        zoomLevel: 12
      },
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
          :accessToken="map.accessToken"
          :mapStyle="map.style"
          :latitude="map.position.latitude"
          :longitude="map.position.longitude"
          :zoomLevel="map.options.zoomLevel">
        </Mapbox>
      </StackLayout>
    </RadSideDrawer>
 `
};

module.exports = SideDrawerMapSearchComponent;
