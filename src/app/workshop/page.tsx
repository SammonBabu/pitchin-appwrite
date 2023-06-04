'use client';
import { Formik } from 'formik';
import React, { useState } from 'react';

const initialValues = {
  name: 'abc',
  description: '',
  units: 1,
  isUrgent: false,
};

export default function Test({}) {
  const [isUrgent, setIsUrgent] = useState(false);

  return (
    <div className='w-screen h-screen grid place-items-center'>
      {/*  */}
      <div className='w-10/12'>
        <div className='w-full flex flex-col shadow-md relative'>
          <Formik initialValues={initialValues} onSubmit={() => {}}>
            {({ errors, values, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className='w-full p-4 border-b'>Raise blood request</div>
                {console.log({ values })}
                <div className='p-1 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3'>
                  <input
                    className='w-full my-1 px-2 py-1 bg-gray-200 rounded'
                    type='text'
                    name='name'
                    id='name'
                    placeholder="Patient's name"
                  />
                  <input
                    className='w-full my-1 px-2 py-1 bg-gray-200 rounded'
                    type='text'
                    name='description'
                    id='description'
                    placeholder='Write a note for potential donors'
                  />
                  <input
                    className='w-full my-1 px-2 py-1 bg-gray-200 rounded'
                    type='number'
                    name='units'
                    id='units'
                    placeholder='Number of Units'
                  />
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      id='isUrgent'
                      name='isUrgent'
                      // className='hidden'
                      // checked={isUrgent}
                      // onChange={() => setIsUrgent(!isUrgent)}
                    />
                    <label
                      htmlFor='myCheckbox'
                      className='flex items-center cursor-pointer'>
                      <div className='w-6 h-6 border border-gray-300 rounded-full mr-3 flex-shrink-0'>
                        {values.isUrgent && (
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            stroke-width='2'>
                            <path d='M6 12l4 4L18 6' />
                          </svg>
                        )}
                      </div>
                      <span className='text-gray-700'>Mark as urgent</span>
                    </label>
                  </div>
                </div>
                <div className='w-full flex'>
                  <div className='px-4 py-1 border'>🩸</div>
                  <div className='px-4 py-1 border'>🗺</div>
                  <div className='px-4 py-1 border'>📆</div>
                  <div className='px-4 py-1 ml-auto border'>
                    <button
                      className='px-2 bg-red-500 text-white rounded-full'
                      type='submit'>
                      Request
                    </button>
                  </div>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
