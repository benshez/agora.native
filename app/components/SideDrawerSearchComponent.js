const { MapboxViewApi, MapStyle, LatLng } = require('nativescript-mapbox');

const SideDrawerNavigationComponent = {
  name: 'side-drawer-search-component',
  props: {
    mainContentText: '',
    titleText: ''
  },
  created() {
    this.routes = [];
  },
  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    },
    onCloseDrawerTap() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    },
    onLoaded(e) {
      let map = args.map;
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
        <Label :text="mainContentText" textWrap="true" fontSize="13" padding="10" />
      </StackLayout>
    </RadSideDrawer>
 `
};

module.exports = SideDrawerNavigationComponent;
