import React, { Component } from 'react'

class CreateModel extends Component {
    state = {
        Name: '',
        Faction: '',
    }  

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
    
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create a Model</h5>
                    <div className="input-field">
                        <label htmlFor="Name">Name</label>
                        <input type="text" id="Name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="Faction">Faction</label>
                        <textarea id="Faction" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateModel