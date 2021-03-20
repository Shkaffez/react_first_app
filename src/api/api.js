import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "dca62038-4b8e-42fe-a354-95d74ec414b1"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            { withCredentials: true }).then(response => response.data);
    },

    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}

export const authAPI = {
    authMe() {
        return instance.get('auth/me').then(response => response.data);
    },

    login(email, password, rememberMe = false, captcha = null) {
        return instance.post('/auth/login', { email, password, rememberMe, captcha }).then(response => response.data);
    },

    logout() {
        return instance.delete('/auth/login').then(response => response.data);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId).then(response => response.data);
    },

    getStatus(userId) {
        return instance.get('profile/status/' + userId).then(response => response.data);
    },

    updateStatus(status) {
        return instance.put('profile/status/', { status: status }).then(response => response.data);
    },

    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile)
        return instance.put('profile/photo/', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(response => response.data);
    },

    saveProfile(profile) {
        return instance.put('profile', profile).then(response => response.data);
    }
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get('security/get-captcha-url').then(response => response.data);
    }
}
