const NavigationComponent = require('../components/navigation/NavigationComponent');

const HomeView = {
  methods: {
    onOpenDrawerTap() {
      this.$refs.sideDrawerNavigationComponent.onOpenDrawerTap();
    }
  },
  components: {
    NavigationComponent
  },
  template: `
    <Page class="page">
      <ActionBar title="Home">
          <ActionItem text="Menu" @tap="onOpenDrawerTap()"/>
      </ActionBar>  
      <GridLayout rows="*" height="1500px">
        <NavigationComponent ref="sideDrawerNavigationComponent" mainContentText="Home" titleText="Navigation Menu"/>
      </GridLayout>
    </Page>
  `
};

module.exports = HomeView;
