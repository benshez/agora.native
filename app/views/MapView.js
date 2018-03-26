const SideDrawerMapSearchComponent = require('../components/SideDrawerMapSearchComponent');

const MapView = {
  methods: {
    onOpenDrawerTap() {
      this.$refs.sideDrawerMapSearchComponent.onOpenDrawerTap();
    }
  },
  components: {
    SideDrawerMapSearchComponent
  },
  template: `
    <Page class="page">
      <ActionBar title="Map">
        <ActionItem text="Menu" @tap="onOpenDrawerTap()"/>
      </ActionBar>  
      <GridLayout rows="*" height="1500px">
        <SideDrawerMapSearchComponent ref="sideDrawerMapSearchComponent"
        mainContentText="Home"
        titleText="Search Location" />
      </GridLayout>
    </Page>
  `
};

module.exports = MapView;
