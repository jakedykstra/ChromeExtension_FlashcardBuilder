import React, {Component} from 'react';
import {connect} from 'react-redux';
import Login from ".auth/Login";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  
    }

  render() {
    return (
      <div>
      <Login/>
      </div>
    );
  }
}

const mapStateToProps = ({addcard}) => {
  return {
   addcard
  };
};

export default connect(mapStateToProps)(App);
