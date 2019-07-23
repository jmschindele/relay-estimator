import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div className='container mx-auto text-center'>
      <div className='row'>
        <div className="col-12 text-center">
          <img src='https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif' alt='party parrot'/>
          <h1>The Party is Here!</h1>
          <h3> but the content isn't</h3>
          <Link to='/'><h1>← Party On</h1></Link>
        </div>
      </div>
    </div>
  );
}

export default NoMatch;
