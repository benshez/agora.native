import { AgoraConstants } from '../../common/system/constants/constants';
import { EventBus } from '../../common/system/events/index';

export const LoginInitial = {
  name: 'login-initial',
  props: {
    visible: Boolean
  },
  data: function() {
    return {
      app: AgoraConstants
    };
  },
  methods: {
    login: function() {
      this.$refs.initialContainer.nativeView
        .animate({
          opacity: 0,
          duration: 500
        })
        .then(() => {
          console.log('emitting login');
          EventBus.$emit('login');
          //this.$emit('login');
        });
    }
  },
  template: `
    <StackLayout ref="initialContainer" class="initial-container" :visibility="visible?'visible':'collapse'">
      <Label :text="app.APP_NAME_TO_UPPER" class="initial-label"></Label>
      <StackLayout @tap="login()" class="initial-button">
      <Label text="Login" class="initial-button-label"></Label>
      </StackLayout>
    </StackLayout>
  `
};
