import React from 'react'

const ModelSummary = ({model}) => {
    return (
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{model.name}</span>
                <p>Posted by Me</p>
                <p className="grey-text">January 10, 7 am</p>
            </div>
        </div>
    )
}

export default ModelSummary