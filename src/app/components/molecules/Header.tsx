import React from 'react'
import Profile from './Profile';

function Header() {
  return (
    <>
      <div className="flex px-8 items-start justify-between">
        <h1 className="text-3xl font-semibold">Today</h1>
        <div className='flex flex-col items-end gap-8'>
          <Profile/>
          <span className="text-sm text-blue-500">Hide completed</span>
        </div>
      </div>
    </>
  );
}

export default Header
