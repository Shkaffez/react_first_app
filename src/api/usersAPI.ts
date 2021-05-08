import { IUsers } from "../components/Redux/Users_Reduser";
import { instance, ResultCodeEnum } from "./api";


export type GetUsersResponseType = {
    items: Array<IUsers>
    totalCount: number
    error: string
}

export type FollowUnfollowResponseType = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: {}
}


export const usersAPI = {
    getUsers(currentPage: number | null, pageSize: number | null) {
        return instance.get<GetUsersResponseType>(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
            { withCredentials: true }).then(response => response.data);
    },

    follow(id: number) {
        return instance.post<FollowUnfollowResponseType>(`follow/${id}`).then(response => response.data);
    },

    unfollow(id: number) {
        return instance.delete<FollowUnfollowResponseType>(`follow/${id}`).then(response => response.data);
    }
};
