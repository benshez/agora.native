import { Animation } from 'ui/animation';
import { prompt } from 'ui/dialogs';
import { Color } from 'tns-core-modules/color';
import {
  connectionType,
  getConnectionType
} from 'tns-core-modules/connectivity';
import { mapState } from 'vuex';
import { AgoraConfiguration } from '../../common/system/constants/AgoraConfiguration';
import * as mutationTypes from '../../common/store/modules/types';
import { IUserByEmail, IUserByName } from '../../common/interfaces/user/IUser';
import { IRootState } from '../../common/interfaces/store/IRootState';

export const LoginMain = {
  name: 'login-main',
  props: {
    visible: Boolean
  },
  data() {
    return {
      isLoggingIn: true,
      isAuthenticating: false,
      user: '',
      app: AgoraConfiguration,
      loginUsername: '',
      loginPassword: ''
    };
  },
  computed: {
    ...mapState({
      error: (state: IRootState) => {
        return state.user.error;
      },
      message: (state: IRootState) => {
        return state.user.message;
      }
    })
  },
  watch: {
    visible: function(val) {
      // when element turns visible, start animations
      if (val) {
        const animations = [];

        animations.push({
          target: this.$refs.mainContainer.nativeView,
          opacity: 1,
          duration: 500
        });

        // Slide up the form controls and sign up container.
        animations.push({
          target: this.$refs.signUpStack.nativeView,
          translate: { x: 0, y: 0 },
          opacity: 1,
          delay: 500,
          duration: 150
        });
        animations.push({
          target: this.$refs.formControls.nativeView,
          translate: { x: 0, y: 0 },
          opacity: 1,
          delay: 650,
          duration: 150
        });

        // Kick off the animation queue
        new Animation(animations, false).play();
      }
    }
  },
  methods: {
    toggleDisplay() {
      this.isLoggingIn = !this.isLoggingIn;
      let mainContainer = this.$refs.mainContainer.nativeView;
      mainContainer.animate({
        backgroundColor: this.isLoggingIn
          ? new Color('white')
          : new Color('#301217'),
        duration: 200
      });
    },
    focusPassword() {
      this.$refs.password.nativeView.focus();
    },
    submit() {
      console.log('submit', this.user);

      this.isAuthenticating = true;
      if (this.isLoggingIn) {
        this.login();
      } else {
        this.signUp();
      }
    },

    login() {},
    signUp() {},
    forgotPassword() {}
  },
  mounted() {
    console.log('LoginOrSignup mounted');
  },
  template: `
    <StackLayout ref="mainContainer" class="main-container" :visibility="visible?'visible':'collapse'">
      <Label class="main-label" :text="app.APP_SETTINGS.APP_NAME_TO_UPPER" :color="isLoggingIn? 'black' : 'white'"></Label>

      <!-- form controls -->
      <GridLayout ref="formControls" class="form-controls" rows="auto, auto" translateY="50">
        <TextField
          hint="Email Address"
          keyboardType="email"
          returnKeyType="next"
          @returnPress="focusPassword()"
          v-model="user.email"
          :iEnabled="!isAuthenticating"
          autocorrect="false"
          autocapitalizationType="none"
          :class="{ light: !isLoggingIn}"
          row="0">
        </TextField>
        <TextField ref="password"
          hint="Password"
          secure="true"
          returnKeyType="done"
          @returnPress="submit()"
          v-model="user.password"
          :isEnabled="!isAuthenticating"
          :class="{ light: !isLoggingIn }"
          row="1">
        </TextField>

        <ActivityIndicator :busy="isAuthenticating" rowSpan="2"></ActivityIndicator>
      </GridLayout>

      <!-- login / sign up button -->
      <Button
        :text="isLoggingIn ? 'Login' : 'Sign up'"
        :isEnabled="!isAuthenticating"
        class="submit-button"
        @tap="submit()">
      </Button>

      <!-- forgot password button -->
      <Label
        class="forgot-password-label"
        text="Forgot password?"
        @tap="forgotPassword()"
        :opacity="isLoggingIn ? 1 : 0">
      </Label>

      <!-- forgot password button -->
      <StackLayout ref="signUpStack" class="sign-up-stack" @tap="toggleDisplay()" translateY="50">
        <Label :text="isLoggingIn ? 'Sign up here' : 'Back to login'"></Label>
      </StackLayout>
    </StackLayout>
    `
};
