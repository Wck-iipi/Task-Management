//Heads up this is NOT a button but a link stylised as one for accessibility.
import React from 'react';
import { secondaryDark1, secondaryDark2 } from '../data/mainColors.json';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
  to: string;
}

const Button = ({ children, to }: Props) => {
  return (
    <Link to={to} className={`flex mx-auto mt-16 text-white bg-[${secondaryDark2}] border-0 py-2 px-8 focus:outline-none hover:bg-[${secondaryDark1}] rounded text-lg`}>{ children }</Link>
  )
}

export default Button;
