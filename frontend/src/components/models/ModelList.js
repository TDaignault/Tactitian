import React from 'react'
import ModelSummary from './ModelSummary'

const ModelList = ({models}) => {
    return (
        <div className="project-list section">
            {models && models.map(model => {
                return (
                    <ModelSummary model={model} key={model.id}/>
                )
            })}
        </div>
    )
}

export default ModelList