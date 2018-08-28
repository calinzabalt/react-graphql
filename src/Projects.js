import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Project from './Project';

const Projects = () => (
    <Query query= { gql`
    {
        allProjects {
            id
            title
            author
            description
            topic
            url
            
        }
    }
 `}>

    {({loading, error, data}) => {
        if (loading) return <p>loading...</p>;
        if (error) return <p>Error :))</p>;

        return data.allProjects.map((currentProject) => (
          <Project project={currentProject} />
        ));
    }}

    </Query>
);

export default Projects;