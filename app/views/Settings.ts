import { NavigationComponent } from '../components/navigation/NavigationComponent';

export const Settings = {
  methods: {
    onOpenDrawerTap() {
      this.$refs.navigationDrawer.onOpenDrawerTap();
    }
  },
  components: { NavigationComponent },
  template: `
    <Page ref="page" class="page" loaded="pageLoaded()" >
      <ActionBar title="Settings">
          <ActionItem class="action-bar-item" text="Menu" @tap="onOpenDrawerTap()"/>
      </ActionBar>
      <GridLayout rows="*" height="1500px">
        <NavigationComponent ref="navigationDrawer"/>
      </GridLayout>
    </Page>
  `
};
