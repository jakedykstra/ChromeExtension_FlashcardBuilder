import React from 'react';
import FlashCardDecks from "./FlashCardDecks"
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Login(props) {
  if (!localStorage.getItem("token")){
    return (
      <FlashCardDecks/>
    )
  } else {
    return (
      <SignIn/>
      <SignUp/>
    )
  }


  return (
    {loggedIn()}
    );
}