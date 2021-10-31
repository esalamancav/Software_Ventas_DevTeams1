import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

export const LoginButton = () =>{

const{ isAuthenticated, loginWithRedirect } =useAuth0();

  return <Button onClick={()=>loginWithRedirect() }> Login </Button>
}