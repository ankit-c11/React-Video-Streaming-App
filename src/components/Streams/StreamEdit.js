import React from 'react'
import { connect } from 'react-redux'
import { fetchStream,editStream} from '../../actions'
import StreamForm from './StreamForm'
import _ from 'lodash'

class StreamEdit extends React.Component{
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id,formValues)
    }
    render(){
        if(!this.props.currentStream){
            return <div>Loading...</div>
        }
        return(
            <div>
                <h2>Edit your stream</h2>
                <StreamForm 
                    onFormSubmit={this.onSubmit} 
                    initialValues={_.pick(this.props.currentStream,'title','description')} />
            </div>
        )
    }
}
const mapStateToProps = (state,props) => {
    return {currentStream: state.streams[props.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream,editStream})(StreamEdit)