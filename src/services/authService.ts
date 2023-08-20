import { differenceInDays } from 'date-fns';
import { v4 as uuid } from 'uuid';

/* generating a random identifier for `deviceId` */
export const generateDeviceId = (): string => uuid();

/* generate a timestamp when user signup & login */
export const generateTimeStamp = (): number => new Date().getTime();

// TODO : Implementation needed to verify accessToken expiry
export const validateAuthToken = async (): Promise<void> => {
  setTimeout(() => {
    return true;
  }, 2000);
};

export const isLastLoginInDate = (lastLoginDate: string): boolean => {
  const now = new Date();
  const lastLogin = new Date(lastLoginDate);
  const diff = differenceInDays(now, lastLogin);
  return diff > 28;
};
