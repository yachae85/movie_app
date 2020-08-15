import React from 'react';
import PropTypes from 'prop-types';

function Food (dish) {
  return (<h1> I like {dish.name} </h1>);
}

Food.propTypes = {
  name: PropTypes.string.isRequired
};

function App() {
  return (
    <div className="App" >
      <h1>hello</h1> 
      <Food name = "kimchi"/>
    </div>
  );
}

export default App;
