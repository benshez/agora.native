const SideDrawerSearchComponent = require('../components/SideDrawerSearchComponent');

const MapView = {
  methods: {
    onOpenDrawerTap() {
      this.$refs.sideDrawerSearchComponent.onOpenDrawerTap();
    }
  },
  components: {
    SideDrawerSearchComponent
  },
  template: `
    <Page class="page">
      <ActionBar title="Map">
        <ActionItem text="Menu" @tap="onOpenDrawerTap()"/>
      </ActionBar>  
      <GridLayout rows="*" height="1500px">
        <SideDrawerSearchComponent ref="sideDrawerSearchComponent" mainContentText="Home" titleText="Search Location"/>
      </GridLayout>
    </Page>
  `
};

module.exports = MapView;
