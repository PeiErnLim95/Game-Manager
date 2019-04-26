import React from 'react'
import {useMutation} from 'react-apollo-hooks';
import {addUserQ} from '../queries/queries';

const AddUserForm = () => {
    let name = '';
    let password = '';
    let email = '';
    const addUser = useMutation(addUserQ);

    return(
        <div>
            <form id="add-user">
                <div className="field">
                    <label htmlFor="name">User Name</label>
                    <input type="text" id="name" onChange={ (event) => { name = event.target.value } }/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="text"  id="password" onChange={ (event) => { password = event.target.value } }/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text"  id="email" onChange={ (event) => { email = event.target.value } }/>
                </div>
                <div>
                    <button onClick={(event) => {
                        event.preventDefault();
                        addUser({ variables: { name: name, password: password, email: email } })
                            .then(() => {
                                console.log('User added successfully.');
                            })
                            .catch((error) => {
                                console.log(`Error Occur: ${error}`);
                            })
                    }}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddUserForm;