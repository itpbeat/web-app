import React from 'react';
import {Link} from 'react-router-dom';

function App() {
  return (
    <div>
      Testing
      <Link to='/signup'>Sign Up</Link>
      <Link to='/login'>Log In</Link>
    </div>
  );
}

export default App;
