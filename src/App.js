import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Projects from './Projects';
import './App.css';

const client = new ApolloClient({
  uri: "https://mjwlm3xv89.lp.gql.zone/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
<div className="container">
    <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand" href="App.js">React and GraphQL</a>
    </nav>

  <div>
    <Projects />
  </div>
  </div>
  </ApolloProvider>
)
 
export default App;
