import { UserProfileType } from "../components/Redux/PostsPage_Reduser";
import { instance, ResultCodeEnum } from "./api";


export type UpdateStatusResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}  
}

export type savePhotoResponseType = {
    data: {
        small: string | null
        large: string | null
    }  
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export type saveProfile = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}  
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<UserProfileType>('profile/' + userId).then(response => response.data);
    },

    getStatus(userId: number) {
        return instance.get<string>('profile/status/' + userId).then(response => response.data);
    },

    updateStatus(status: string) {
        return instance.put<UpdateStatusResponseType>('profile/status/', { status: status }).then(response => response.data);
    },

    savePhoto(photoFile: File) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<savePhotoResponseType>('profile/photo/', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => response.data);
    },

    saveProfile(profile: UserProfileType) {
        return instance.put<saveProfile>('profile', profile).then(response => response.data);
    }
};
