import { ActionContext, Store } from 'vuex';
import { IUser } from '../../interfaces/user/IUser';
import { IUserState } from '../../interfaces/user/IUserState';
import { IRootState } from '../../interfaces/store/IRootState';
import { UserService } from '../../services/user/UserService';
import { getStoreBuilder } from '../../system/utilities/vue-typex';

const initialUserState: IUserState = {
  UserByUserName: {
    '': {
      id: null,
      entity: null,
      role: null,
      enabled: false,
      locked: false,
      username: '',
      usersurname: '',
      address: '',
      city: '',
      state: '',
      post_code: '',
      phone: '',
      email: '',
      website: '',
      facebook: '',
      twitter: '',
      logo: '',
      abn: '',
      token_char: '',
      token_expiry: ''
    }
  },
  UserByEmail: {
    '': {
      id: null,
      entity: null,
      role: null,
      enabled: false,
      locked: false,
      username: '',
      usersurname: '',
      address: '',
      city: '',
      state: '',
      post_code: '',
      phone: '',
      email: '',
      website: '',
      facebook: '',
      twitter: '',
      logo: '',
      abn: '',
      token_char: '',
      token_expiry: ''
    }
  }
};

const usr = getStoreBuilder<IRootState>().module('user', initialUserState);

const getUserByUserName = usr.read(
  state => (username: string) => state.UserByUserName[username],
  'getUserByUserName'
);

const getUserByEmail = usr.read(
  state => (email: string) => state.UserByEmail[email],
  'getUserByEmail'
);

const stateGetter = usr.state();

const UserStore = {
  get state() {
    return stateGetter();
  },

  getUserByUserName(username: string) {
    return getUserByUserName()(username);
  },

  getUserByEmail(email: string) {
    return getUserByEmail()(email);
  },

  dispatchUserByUserName: usr.dispatch(new UserService().getUserByUserName),

  dispatchUserByEmail: usr.dispatch(new UserService().getUserByEmail)
};

export default UserStore;
