//dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import Header from './header'
import Body from './body'

class App extends Component {
    static propTypes = {
        children: PropTypes.object.isRequired
    }
    render() {

        const {children} = this.props;

        return (
            <div style={{margin:'0px',padding:'0px'}}>
               <Header/>
               <Body body={children}/>
            </div>
        )
    }
}

export default App;