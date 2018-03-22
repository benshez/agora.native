const SideDrawerNavigationComponent = require('../components/SideDrawerNavigationComponent');

const HomeView = {
  methods: {
    onOpenDrawerTap() {
      this.$refs.sideDrawerNavigationComponent.onOpenDrawerTap();
    }
  },
  components: {
    SideDrawerNavigationComponent
  },
  template: `
    <Page class="page">
      <ActionBar title="Home">
          <ActionItem text="Menu" @tap="onOpenDrawerTap()"/>
      </ActionBar>  
      <GridLayout rows="*" height="1500px">
        <SideDrawerNavigationComponent ref="sideDrawerNavigationComponent" mainContentText="Home" titleText="Navigation Menu"/>
      </GridLayout>
    </Page>
  `
};

module.exports = HomeView;
