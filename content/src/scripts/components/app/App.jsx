import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.addEventListener('mouseup', () => {
      var text = this.doSomethingWithSelectedText();
      console.log(text);
      this.props.dispatch({
        type: 'ADD_HIGHLIGHT_TO_CARDDEF',
        payload: text
      });
    });

    window.addEventListener('keyup', () => {
      var text =  this.doSomethingWithSelectedText();
      console.log(text);
      this.props.dispatch({
        type: 'ADD_HIGHLIGHT_TO_CARDWORD',
        payload: text
      });
    }); 

    window.addEventListener("click", () => {
      console.log("You did it!");
    })
  }

  getSelectedText() {
    var text = "";
    if (typeof window.getSelection != "undefined") {
        text = window.getSelection().toString();
    } else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
        text = document.selection.createRange().text;
    }
    console.log(text);
    return text;
}

  doSomethingWithSelectedText() {
    var selectedText = this.getSelectedText();
    if (selectedText) {
        return (selectedText);
    }
  }

  render() {
    console.log("Chrome extension running");
    return (
      <div>
        Hello there!
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
