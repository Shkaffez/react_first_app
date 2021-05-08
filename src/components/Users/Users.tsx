import React, { FC } from 'react';
import Paginator from '../common/paginator';
import { IUsers } from '../Redux/Users_Reduser';
import User from './User';

type PropsType = {
    totalItemsCount: number | null
    pageSize: number | null
    currentPage: number | null
    onPageChanged: (pageNumber: number) => void
    portionSize: number | null
    followingInProgress: Array<number>
    users: Array<IUsers>
    follow: (userId: number) => void
    unfollow: (userId: number) => void    
    
}

const Users: FC<PropsType> = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize, ...props }) => {
    return (
        <div>
            <Paginator totalItemsCount={totalItemsCount} pageSize={pageSize}
                currentPage={currentPage} onPageChanged={onPageChanged} portionSize={portionSize}
            />
            {
                props.users.map(u => <User user={u} key={u.id}
                                followingInProgress={props.followingInProgress}
                                follow={props.follow}
                                unfollow={props.unfollow}
                 />)
            }

        </div>
    )


}

export default Users