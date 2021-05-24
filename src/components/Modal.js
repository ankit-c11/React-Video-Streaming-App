import React from 'react'
import ReactDOM from 'react-dom'

class Modal extends React.Component{
    render(){
        return ReactDOM.createPortal(
            <div onClick={this.props.outsideModalClick} className='ui dimmer modals visible active'>
                <div onClick={(e)=>e.stopPropagation()} className='ui standard modal visible active' >
                    <div className='header'>
                        {this.props.title}
                        <div className='content'>
                            {this.props.message}
                        </div>
                        <div>
                            {this.props.actions}
                        </div>
                        
                    </div>
                </div>
            </div>,
            document.getElementById('modal')
        )
    }
}

export default Modal;