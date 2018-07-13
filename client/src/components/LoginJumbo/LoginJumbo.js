import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import "./LoginJumbo.css";
const LoginJumbo = (props) => {
  return (
    <div>
      <Jumbotron className= "alertJumbo">
        <h1 className="display-3">Login as a Site Administrator</h1>

      </Jumbotron>
    </div>
  );
};

export default LoginJumbo;
