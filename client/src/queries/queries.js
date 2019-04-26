import { gql } from "apollo-boost";

const displayUsersQ = gql`
    {
        users{
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

export { displayUsersQ, addUserQ }