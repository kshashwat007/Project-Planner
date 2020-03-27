import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor vitae, ratione, deserunt, iusto eligendi voluptatum laboriosam inventore quo atque dolorum labore blanditiis sunt totam animi consequatur repellat obcaecati cupiditate qui.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Author by Krishanu</div>
                    <div>23rd March, 10pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
