import React from 'react'

const ModelDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Model Title - {id}</span>
                    <p>Blah Blah</p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <div>Posted by Me</div>
                    <div>January 1-, 7am</div>
                </div>
            </div>
        </div>
    )
}

export default ModelDetails