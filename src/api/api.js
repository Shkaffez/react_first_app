import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "dca62038-4b8e-42fe-a354-95d74ec414b1"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
    getUsers (currentPage, pageSize) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            { withCredentials: true }).then(response => response.data);
    },

    follow (id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    unfollow (id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    }
}
