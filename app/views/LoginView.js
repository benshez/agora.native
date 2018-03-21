const LoginView = {
  methods: {},
  components: {},
  template: `
    <Page class="page">
      <ActionBar title="Login">
          <NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.push('/')"/>
      </ActionBar>  
      <GridLayout rows="*" height="1500px">

      </GridLayout>
    </Page>
  `
};

module.exports = LoginView;
