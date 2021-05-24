import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../../actions'
class StreamShow extends React.Component{
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    }
    render(){
        if(!this.props.currentStream){
            return (
                <div>
                    Loading...
                </div>
            )
        }
        return(
            <div className="ui message">
                <div className="header">
                    {this.props.currentStream.title}
                </div>
                <p>{this.props.currentStream.description}</p>
            </div>
        )
    }
}
const mapStateToProps = (state,props) => {
    return {currentStream: state.streams[props.match.params.id]}
}
export default connect(mapStateToProps,{fetchStream})(StreamShow)