import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "dca62038-4b8e-42fe-a354-95d74ec414b1"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export enum ResultCodeEnum  {
    Success = 0,
    Error = 1
}

export enum ResultCodeWithCaptchaEnum  {
    CaptchaIsRequired = 10
}









