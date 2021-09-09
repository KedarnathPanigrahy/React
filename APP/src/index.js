import React from 'react';
import ReactDOM from 'react-dom';
import './../styles.css';
import Header from './components/header';
//
const Index = () => {
  return <div><Header /> <h2>Welcome to Skillsoft Live Learning</h2></div>;
};
//
ReactDOM.render(<Index />, document.getElementById('root'));
