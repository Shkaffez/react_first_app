import React from 'react';
import Paginator from '../common/paginator';
import User from './User';


const Users = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize, ...props }) => {
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