import { TEST_CHECK } from '@/constants/Auth.constants';
import { type AuthAction, type AuthState } from '@/types/Auth.types';

const initialState: AuthState = {
  pending: false,
  token: null,
  error: null
};

const reducers = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case TEST_CHECK:
      return {
        ...state,
        token: action.payload.token
      };
    default:
      return state;
  }
};

export default reducers;
