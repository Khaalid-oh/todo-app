import React from 'react'

function Task() {
  return (
    <>
      <div className='flex items-center px-8'>
        <input title='input-check' type="checkbox"  className='accent-black mr-2'/>
        <label id='input-check' className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</label>
      </div>
    </>
  );
}

export default Task
