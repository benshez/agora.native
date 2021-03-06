import { RadSideDrawer } from 'nativescript-ui-sidedrawer';

export const NavigationComponent = {
  name: 'navigation-component',
  props: {
    mainContentText: '',
    titleText: ''
  },
  data: () => {
    return {
      routes: []
    };
  },
  created() {
    this.routes = [];
    this.fetchRoutes();
  },
  methods: {
    onOpenDrawerTap() {
      this.$refs.drawer.nativeView.toggleDrawerState();
    },
    fetchRoutes() {
      this.routes = this.$_.filter(this.$router.options.routes, function(o) {
        return o.path !== '*' && o.path !== '/';
      });
    }
  },
  template: `
    <RadSideDrawer ref="drawer">
      <StackLayout ~drawerContent backgroundColor="lightgray">
        <StackLayout height="56" style="text-align: left; vertical-align: center;">
          <Label :text="titleText" padding="10" />
        </StackLayout>
        <StackLayout backgroundColor="white">
          <ListView for="(route, $index) in routes">
            <v-template>
              <Label :text="route.meta.description" padding="10" backgroundColor="lightgray" @tap="$router.push(route.path)"/>
            </v-template>
          </ListView>
        </StackLayout>
      </StackLayout>
      <StackLayout ~mainContent>

      </StackLayout>
    </RadSideDrawer>
 `
};
