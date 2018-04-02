import { NavigationComponent } from '../components/navigation/NavigationComponent';

export const About = {
  methods: {
    onOpenDrawerTap() {
      this.$refs.navigationDrawer.onOpenDrawerTap();
    }
  },
  components: { NavigationComponent },
  template: `
    <Page ref="page" class="page">
      <ActionBar title="About">
          <NavigationButton icon="res://menu" @tap="onOpenDrawerTap()" />
      </ActionBar>
      <GridLayout rows="*" height="1500px">
        <NavigationComponent ref="navigationDrawer"/>
      </GridLayout>
    </Page>
  `
};
