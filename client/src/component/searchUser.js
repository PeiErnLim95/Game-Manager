import React, {useState} from 'react'
import {useQuery, useMutation} from 'react-apollo-hooks';
import {searchUserQ, editUserQ, deleteUserQ} from '../queries/queries';

let cycle = 0;
let sName;

const SearchUserForm = () => {
    //Search User Query
    const [name, setName] = useState('');
    const { data, error, loading } = useQuery(searchUserQ, {
        variables: { name }
    });

    let content;

    //If no user was found
    if (cycle > 0){
        if (data.user === null) { content = 'User Not Found' };
    }

    //If user was found
    if (data.user !== undefined && data.user !== null) {
        if (loading) { content = 'Loading User...' };

        if (error) { content = `Error Occur: ${error}` };

        const user = data.user;
        content = `Username: ${ user.name }    ID: ${ user.id }`;
    }

    //Return On Front End
    return (
        <div id="edit-user">
            <div className="field">
                <label htmlFor="name">Search UserName</label>
                <input type="text" id="name" onChange={(event) => {
                    sName = event.target.value;
                }}/>
                <button onClick={(event) => {
                    setName(sName);
                    cycle++;
                }} value={name}>
                    Search
                </button>
            </div>
            <div>
                <p>{ content }</p>
            </div>
        </div>
    )

};

export default SearchUserForm;