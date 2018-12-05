import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import FlashCardDecks from './FlashCardDecks';

class Signin extends Component {
  onSubmit = formProps => {
    this.signin(formProps, () => {
      <FlashCardDecks/>
    });
  };

  signin = (formProps, cb) => async dispatch => {
    try {
      const response = await axios.post(
        'http://localhost:3090/signin',
        formProps
      );
  
      dispatch({
        type: AUTH_USER,
        payload: response.data.token
      });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (e) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Invalid login credentials'
      });
    }
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label>Email</label>
          <Field
            name="email"
            type="text"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <fieldset>
          <label>Password</label>
          <Field
            name="password"
            type="password"
            component="input"
            autoComplete="none"
          />
        </fieldset>
        <div>{this.props.errorMessage}</div>
        <button>Sign In!</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, null),
  reduxForm({ form: 'signin' })
)(Signin);
