import React, { Component } from 'react';
import './index.css';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import UserList from './component/displayUser';
import AddUserForm from './component/addUser';
import NavBar from './component/navBar';

//Create the Apollo Client
const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
          <ApolloProviderHooks client={client}>
              <div className="App">
                  <NavBar/>
                  <h1>Game Management Service</h1>
                  <h3>All Users</h3>
                  <UserList />
                  <AddUserForm/>
              </div>
          </ApolloProviderHooks>
      </ApolloProvider>
    );
  }
}

export default App;
