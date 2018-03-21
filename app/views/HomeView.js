const SideDrawerComponent = require('../components/SideDrawerComponent');

const HomeView = {
  methods: {
    onOpenDrawerTap() {
      this.$refs.sideDrawerComponent.onOpenDrawerTap();
    }
  },
  components: {
    SideDrawerComponent
  },
  template: `
    <Page class="page">
      <ActionBar title="Home">
          <ActionItem text="Menu" @tap="onOpenDrawerTap()"/>
      </ActionBar>  
      <GridLayout rows="*" height="1500px">
        <SideDrawerComponent ref="sideDrawerComponent" mainContentText="Home" titleText="Navigation Menu"/>
      </GridLayout>
    </Page>
  `
};

module.exports = HomeView;
