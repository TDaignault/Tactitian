import React, { Component } from 'react'
import Notifications from './Notifications'
import ModelList from '../models/ModelList'
import { connect } from 'react-redux'

class Dashboard extends Component {
    render(){
        const { models } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ModelList models={models}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        models: state.model.models
    }
}

export default connect(mapStateToProps)(Dashboard)