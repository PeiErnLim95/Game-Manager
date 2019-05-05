import React, { useState } from 'react';
import { useQuery, useMutation } from 'react-apollo-hooks';
import {displayUsersQ, deleteUserQ} from '../queries/queries';
import EditUserForm from './editUser';

export let sName, sID, sPassword, sEmail;

const displayUsers = () => {
    const deleteUser = useMutation(deleteUserQ);

    const { data, loading, error } = useQuery(displayUsersQ, {
        suspend: false
    });

    if (loading) {
        return <tr><td>Loading User...</td></tr>
    }

    if (error){
        console.log(`Error Occur: ${ error }`);
        return <tr><td>Error Occur!</td></tr>
    }

    if (data.users.length > 0){
        return data.users.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>
                    <button onClick={ (event) => {
                        event.preventDefault();
                        sID = user.id;
                        sName = user.name;
                        sPassword = user.password;
                        sEmail = user.email;
                    }}>Edit</button>
                    <button onClick={ (event) => {
                        event.preventDefault();
                        deleteUser({ variables: { id: user.id } })
                            .then(() => {
                                console.log('User deleted successfully.');
                            })
                            .catch((error) => {
                                console.log(`Error Occur: ${error}`);
                            })
                    } }>Delete</button>
                </td>
            </tr>
        ));
    }
};

const UserList = () => {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    { displayUsers() }
                </tbody>
            </table>
        </div>
    )
}

export default UserList;