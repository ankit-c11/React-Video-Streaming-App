import React from 'react'
import {createStream} from '../../actions'
import { connect } from 'react-redux'
import StreamForm from './StreamForm'

class StreamCreate extends React.Component{

    render(){
        return(
            <div>
                <h2>Create a Stream</h2>
                <StreamForm onFormSubmit={this.props.createStream} />
            </div>
        )
    }
}


export default connect(null,{createStream})(StreamCreate)