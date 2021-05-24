import React from 'react'
import { connect } from 'react-redux'
import {fetchStreams} from '../../actions'
import {Link} from 'react-router-dom'
class StreamList extends React.Component{
    componentDidMount = () => {
        this.props.fetchStreams()
    }
    renderButtons = (stream) =>{
        if(this.props.currentUserId === stream.userId){
            return (
                <div className='right floated content'>
                    <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>EDIT</Link>
                    <Link to={`/streams/delete/${stream.id}`} className='ui button negative'>DELETE</Link>
                </div>
            )
        }
        return null
        
    }
    jsxToRender = () => {
        var streamsList = []
        for(const [id,stream] of Object.entries(this.props.streams)){
            var jsx = (
                    <div className='item' key={id}>
                        {this.renderButtons(stream)}
                        <i className='large middle aligned icon camera' />
                        <div className='content'>
                            <Link to={`/streams/show/${id}`} >
                                {stream.title}
                            </Link>
                            <div className='description'>
                                {stream.description}
                            </div>
                        </div>
                    </div>
                );
            streamsList.push(jsx)
        }

        return streamsList
    }

    renderCreate = () => {
        if(this.props.isSignedIn){
            return (
                <div style={{textAlign:'right'}}>
                    <Link to='/streams/new' className='ui button primary'>
                        Create Stream
                    </Link>
                </div>
                
            )
        }
        return null
    }

    render(){
        return(
            <div className='item'>
                <h2>Streams</h2>
                <div className='ui celled list'>
                    {this.jsxToRender()}
                </div>
                {this.renderCreate()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        streams: state.streams,
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps,{fetchStreams})(StreamList);