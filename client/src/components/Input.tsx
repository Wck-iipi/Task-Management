import React from 'react';

interface Props {
  type: string;
  placeholder: string;
  label: string;
}

const Input = ({ type, placeholder, label }: Props) => {
  return (
    <input className="block w-full px-4 py-2 mt-2 text-gray-300 placeholder-gray-500 bg-primaryDark1 border border-primaryDark2 rounded-xl focus:border-secondaryDark3 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-secondaryDark1" type={type} placeholder={placeholder} aria-label={label} />
  )
}

export default Input;

