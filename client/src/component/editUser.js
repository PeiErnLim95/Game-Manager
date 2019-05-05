import React from 'react'
import { useMutation } from 'react-apollo-hooks';
import {editUserQ} from '../queries/queries';
import { sID, sName, sPassword, sEmail } from './displayUser';

const EditUserForm = () => {
    const editUser = useMutation(editUserQ);
    let password, email;

    return(
        <div id="edit-user">
            <form>
                <div className="field">
                    <label htmlFor="name">User Name</label>
                    <input type="text" id="name" value={ sName } readOnly={true}/>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="text"  id="password"  value={ sPassword } onChange={ (event) => { password = event.target.value } }/>
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text"  id="email"  value={ sEmail } onChange={ (event) => { email = event.target.value } }/>
                </div>
                <div>
                    <button onClick={ (event) => {
                        event.preventDefault();
                        editUser({ variables: { id: sID, password: password, email: email } })
                            .then(() => {
                                console.log('User edited successfully.');
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
};

export default EditUserForm;