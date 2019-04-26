import React from 'react'
import { useQuery } from 'react-apollo-hooks';
import {displayUsersQ} from '../queries/queries';

const displayUsers = () => {
    const { data, loading, error} = useQuery(displayUsersQ, {
        suspend: false
    });

    if (loading) {
        return <p>Loading User...</p>
    }

    if (error){
        console.log(`Error Occur: ${ error }`);
        return <p>Error Occur!</p>
    }

    return data.users.map(user => (
        <li key={user.id}>Username: { user.name }  Email: { user.email }</li>
    ));
};

const UserList = () => {
    return(
        <div>
            <ul id="users-list">
                { displayUsers() }
            </ul>
        </div>
    )
}

export default UserList;