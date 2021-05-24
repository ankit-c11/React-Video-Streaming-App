import React from 'react'
import {Router,Route} from 'react-router-dom'
import StreamCreate from './Streams/StreamCreate'
import StreamEdit from './Streams/StreamEdit'
import StreamDelete from './Streams/StreamDelete'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'
import Header from './Header'
import history from '../history'

class App extends React.Component{
    render(){
        return (
            <div className='ui container'>
                <Router history={history}>
                    <div>
                        <Header/>
                    </div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' component={StreamCreate} />
                    <Route path='/streams/edit/:id' component={StreamEdit} />
                    <Route path='/streams/delete/:id' component={StreamDelete} />
                    <Route path='/streams/show/:id' component={StreamShow} />                
                </Router>
            </div> 
        )
    }
}

export default App