/* All form validations will resides here */

import * as Yup from 'yup';

export const mobileSignInFormValidation = Yup.object({
  phone: Yup.string()
    .required('Phone number is required')
    .max(10, 'Phone number cannot be more than 10')
    .min(10, 'Phone number cannot be less than 10')
});

export const OTPFormValidation = Yup.object({
  otp: Yup.string()
    .required('Otp is required')
    .max(6, 'Otp must be at least 6 characters')
    .min(6, 'Otp must be at more 6 characters')
});
