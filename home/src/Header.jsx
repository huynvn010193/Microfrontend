import React from "react";
import Login from "cart/Login";
import MiniCart from "cart/MiniCart";

const Header = () => {
  return (
    <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
      <div className='flex'>
        <div className='flex-grow'>Fidget Spinner World</div>
        <div className='flex-end relative'>
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Header;
