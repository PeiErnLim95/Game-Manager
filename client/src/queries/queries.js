import { gql } from "apollo-boost";

const displayUsersQ = gql`
    {
        users{
            id
            name
            password
            email
        }
    }
`;

const searchUserQ = gql`
    query User($name: String!){
        user(name: $name){
            id
            name
            email
        }
    }
`;

const addUserQ = gql`
    mutation AddUser($name: String!, $password: String!, $email: String!) {
    addUser(name: $name, password: $password, email: $email) {
      id
      name
      email
    }
  }
`;

const editUserQ = gql`
    mutation EditUser($id: ID!, $password: String!, $email: String!){
        editUser(id: $id, password: $password, email: $email){
            id
            name
            email
        }
    }
`;

const deleteUserQ = gql`
    mutation DeleteUser($id: ID!){
        deleteUser(id: $id){
            name
        }
    }
`

export { displayUsersQ, addUserQ, editUserQ, deleteUserQ, searchUserQ }