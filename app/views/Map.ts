import platformModule = require('tns-core-modules/platform');
import * as enums from 'ui/enums';
import { LoginInitial } from '../components/user/LoginInitial';
import { LoginMain } from '../components/user/LoginMain';
import { NavigationComponent } from '../components/navigation/NavigationComponent';
import { mapState } from 'vuex';
import store from '../common/store';
import * as mutationTypes from '../common/store/types';
import { IUserByEmail, IUserByName } from '../common/interfaces/user/IUser';
import { IRootState } from '../common/interfaces/store/IRootState';

export const Map = {
  data() {
    return {
      state: 'initial',
      link: '',
      loginUsername: '',
      loginPassword: ''
    };
  },
  created() {},
  mounted() {
    let data: IUserByEmail = {
      password: 'B3nSh3z*',
      email: 'benshez@gmail.com'
    };
    this.link = this.getUserByUserName(data);
    let x = 1;
  },
  computed: {
    ...mapState({
      error: (state: IRootState) => {
        return state.user.error;
      },
      message: (state: IRootState) => {
        return state.user.message;
      }
    }),
    pageClasses: function() {
      return {
        'platform-ios': platformModule.isIOS,
        'platform-android': platformModule.isAndroid
      };
    }
  },
  methods: {
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
