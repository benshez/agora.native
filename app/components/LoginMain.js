const { Animation } = require('tns-core-modules/ui/animation');
const prompt = require('tns-core-modules/ui/dialogs');
const { Color } = require('tns-core-modules/color');
const {
  connectionType,
  getConnectionType
} = require('tns-core-modules/connectivity');
const AppConstants = require('../constants/app');
// const User = require('@/models/User');
// const LoginService = require('@/services/LoginService');
// const alert = require('@/utils/alert');

const LoginMain = {
  name: 'login-main',
  props: {
    visible: true
  },
  data: function() {
    return {
      isLoggingIn: true,
      isAuthenticating: false,
      user: '',
      app: AppConstants
    };
  },
  watch: {
    visible: function(val) {
      if (val) {
        const animations = [];
        animations.push({
          target: this.$refs.mainContainer.nativeView,
          opacity: 1,
          duration: 500
        });
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
      <Label class="main-label" :text="app.APP_NAME_TO_UPPER" :color="isLoggingIn? 'black' : 'white'"></Label>

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

module.exports = LoginMain;
