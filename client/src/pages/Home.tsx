import React from 'react';
import LinkButton from '../components/LinkButton'

const Home = () => {
  return (
    <div className="flex flex-row items-center justify-center h-screen">
      <LinkButton to="/login">Login</LinkButton>
      <LinkButton to="/register">Register</LinkButton>
    </div>
  );
}

export default Home;
