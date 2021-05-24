import React from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'986924967240-b6e2vq1bs40srurun4elj93l2cvr506u.apps.googleusercontent.com',
                scope:'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        } );
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            // console.log(`${this.auth.currentUser.get().getId()} is the current user ID`)
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else{
            this.props.signOut();
        }
    }
    
    signInClick = () => {
        this.auth.signIn();
    }
    signOutClick = () =>{
        this.auth.signOut();
    }

    jsxToRender = () => {
        if(this.props.isSignedIn === null){
            return null;
        }
        else if(this.props.isSignedIn){
            return (
                <button className='ui red google button' onClick={this.signOutClick}>
                    <i className='google icon' />
                    Sign Out!
                </button>
            )
        }
        else{
            return (
                <button className='ui red google button' onClick={this.signInClick}>
                    <i className='google icon' />
                    Sign In!
                </button>
            )
        }
    }

    render(){
        return (
            <div>
                {this.jsxToRender()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn,userId:state.auth.userId}
}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);