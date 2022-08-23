import React from 'react';

function Display({wea}) {
  return (
    <div className='flex items-center justify-center'>
        <p className='text-white text-3xl font-medium'>{`${wea.name}`}</p>
    </div>
  )
}

export default Display;