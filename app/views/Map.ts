import { NavigationComponent } from '../components/navigation/NavigationComponent';

export const Map = {
  methods: {
    onOpenDrawerTap() {
      this.$refs.navigationDrawer.onOpenDrawerTap();
    }
  },
  components: { NavigationComponent },
  template: `
    <Page ref="page" class="page">
      <ActionBar title="Map">
          <ActionItem class="action-bar-item" text="Menu" @tap="onOpenDrawerTap()"/>
      </ActionBar>
      <GridLayout rows="*" height="1500px">
        <NavigationComponent ref="navigationDrawer"/>
      </GridLayout>
    </Page>
  `
};
