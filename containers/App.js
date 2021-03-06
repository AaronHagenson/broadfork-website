import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';
import {Navbar} from '../components/Navbar';
import {Footer} from '../components/Footer';
import {LandingComponent} from '../components/Landing';

class App extends Component {

	// _onChange = (value) => {
	// 	this.props.dispatch(setMessage(value))
	// }

    render () {

        //const {message} = this.props.messageReducer;
        const preps = this.props;
        const strt = this.state;

        return (
        	<div>
                <Navbar />
                <LandingComponent />
                {/* <InputPreview
                    value={message}
                    onChange={this._onChange}/>
                <Link to="/about">
                    <button>Go to About</button>
                </Link> */}
                <Footer /> 
            </div>
        )
    }
}

export default connect(state => state)(App);
//export default App;