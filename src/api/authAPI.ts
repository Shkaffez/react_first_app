import { instance, ResultCodeEnum, ResultCodeWithCaptchaEnum } from "./api";

export type AuthMeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export type LoginLogoutResponseType = {
    resultCode: ResultCodeEnum | ResultCodeWithCaptchaEnum
    messages: Array<string>
    data: {}  
}


export const authAPI = {
    authMe() {
        return instance.get<AuthMeResponseType>('auth/me').then(response => response.data);
    },

    login(email: string, password: string, rememberMe = false, captcha: string | null = null) {
        return instance.post<LoginLogoutResponseType>('/auth/login', { email, password, rememberMe, captcha }).then(response => response.data);
    },

    logout() {
        return instance.delete<LoginLogoutResponseType>('/auth/login').then(response => response.data);
    }
};
