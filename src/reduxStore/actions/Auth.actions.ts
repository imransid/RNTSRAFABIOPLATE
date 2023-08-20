import { SIGN_IN_REQUEST } from '@/constants/Auth.constants';
import { type SignInPayload, type SignInRequest } from '@/types/Auth.types';

export const signInRequest = (payload: SignInPayload): SignInRequest => ({
  type: SIGN_IN_REQUEST,
  payload
});
