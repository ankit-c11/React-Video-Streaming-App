import React from 'react'
import Modal from '../Modal'
import history from '../../history'
import {connect} from 'react-redux'
import { fetchStream,deleteStream} from '../../actions'
import { Link } from 'react-router-dom'

class StreamDelete extends React.Component{
    componentDidMount = () => {
        this.props.fetchStream(this.props.match.params.id)
    }
    onDeleteClick = ()=>{
        console.log('Delete button clicked')
        this.props.deleteStream(this.props.currentStream.id)
    }
    render(){
        if(!this.props.currentStream){
            return <div>Loading...</div>
        }

        var jsx=(
            <div style={{display:'flex',justifyContent:'flex-end'}}>
                <button onClick={this.onDeleteClick} className='ui button negative'>Delete</button>
                <Link to='/' className='ui button'>Cancel</Link>
            </div>
        )
        return(
            <div>
                Stream Delete Component
                <Modal 
                    title='Delete Stream'
                    message='Are you sure you want to delete this stream?'
                    outsideModalClick={()=>history.push('/')}
                    actions={jsx}
                />
            </div>
        )
    }
}
const mapStateToProps = (state,props) => {
    return {currentStream: state.streams[props.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream,deleteStream})(StreamDelete)