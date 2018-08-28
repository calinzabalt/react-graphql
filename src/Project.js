import React from 'react';

const Project = (props) => (
    <div className="card" stlye={{'width': '100%', 'margin-top': '10px'}}>
        <div className="card-body">
            <h5 className="card-title">{props.project.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{props.project.author}</h6>
            <p className="card-text">{props.project.description}</p>
            <a href={props.project.url} className="card-link">Try the app...</a>
    
        </div>
    </div>
);

export default Project;