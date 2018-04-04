import platformModule = require('tns-core-modules/platform');
import * as enums from 'ui/enums';
import { LoginInitial } from '../components/user/LoginInitial';
import { LoginMain } from '../components/user/LoginMain';
import { NavigationComponent } from '../components/navigation/NavigationComponent';
import { mapActions, mapGetters } from 'vuex';

export const Map = {
  data() {
    return { state: 'initial', link: '' };
  },
  created() {},
  mounted() {
    this.link = this.getConversations('https://forum.vuejs.org');
    let x = 1;
  },
  computed: {
    pageClasses: function() {
      return {
        'platform-ios': platformModule.isIOS,
        'platform-android': platformModule.isAndroid
      };
    }
  },
  methods: {
    ...mapActions({ getConversations: 'user/getConversations' }),
    onOpenDrawerTap() {
      this.$refs.navigationDrawer.onOpenDrawerTap();
    },
    showMainContent: function() {
      console.log('showMainContent');
      this.$refs.logoContainer.nativeView
        .animate({
          translate: {
            x: 0,
            y: platformModule.isAndroid ? -70 : -90
          },
          duration: 500,
          curve: enums.AnimationCurve.easeIn
        })
        .then(() => {
          console.log('switching from ' + this.state + ' to main');
          this.state = 'main';
        });
    },
    startBackgroundAnimation: function() {
      console.log('starting bg animation...');
      this.$refs.background.nativeView.animate({
        scale: { x: 1.0, y: 1.0 },
        duration: 10000
      });
    }
  },
  components: { LoginInitial, LoginMain, NavigationComponent },
  template: `
    <Page ref="page" :class="pageClasses" actionBarHidden="true" backgroundSpanUnderStatusBar="true">
      <GridLayout class='login'>
        <!-- background -->
        <GridLayout ref="background" scaleX="1.4" scaleY="1.4" class="background" @loaded="startBackgroundAnimation()"></GridLayout>

        <!-- initial login button -->
        <LoginInitial ref="loginInitial" @login="showMainContent()" :visible="state === 'initial'"></LoginInitial>
        <LoginMain ref="loginMain" :visible="state === 'main'"></LoginMain>

        <!-- The fruit logo -->
        <AbsoluteLayout marginTop="-260" ref="logoContainer" class="logo-container">
          <Image translateY="0" src="res://logo_login" stretch="none"></Image>
        </AbsoluteLayout>
      </GridLayout>
    </Page>
  `
};
