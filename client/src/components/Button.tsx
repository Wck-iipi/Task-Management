import React from 'react';
import { secondaryDark1, secondaryDark2 } from '../data/mainColors.json';

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ children, onClick }: Props) => {
  return (
    <button onClick={ onClick } className={`flex mx-auto mt-16 text-white bg-[${secondaryDark2}] border-0 py-2 px-8 focus:outline-none hover:bg-[${secondaryDark1}] rounded text-lg`}>{ children }</button>
  )
}

export default Button;
