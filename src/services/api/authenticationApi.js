import { get, post } from "../../helpers/apiWrapper";

export const signupUser = async (userData) => {
  const config = {
    data: userData,
  };
  return await post(`/auth/signup`, config);
};

export const verifyEmail = async (data) => {
  const config = {
    data: data,
  };
  return await post(`/auth/verify-email`, config);
};

export const resendVerificationEmailService = async (data) => {
  const config = {
    data: data,
  };
  return await post(`/auth/resend-verification-email`, config);
};