import Image from 'next/image';
import React from 'react';

function Login() {
  return (
    <main className='h-screen w-screen grid bg-gray-50'>
      <div className='m-auto p-4 flex flex-col items-start justify-center border rounded'>
        <Image
          src='/logo.svg'
          alt='Vercel Logo'
          className='mb-12 self-center rounded'
          width={100}
          height={24}
          priority
        />
        <h1 className='mb-5 text-xl font-semibold'>Welcome back</h1>
        <form className='w-96 flex flex-col'>
          <label className='text-sm font-extralight' htmlFor='email'>
            Sign in with your email address.
          </label>
          <input
            className='mb-4 p-2 bg-gray-100 rounded'
            type='email'
            name='email'
            id='email'
            placeholder='Email'
          />
          <label className='text-sm font-extralight' htmlFor='password'>
            Password
          </label>
          <input
            className='mb-4 p-2 bg-gray-100 rounded'
            type='password'
            name='password'
            id='password'
            placeholder='Password'
          />
          <button className='h-8 rounded bg-red-500 text-white' type='submit'>
            Login
          </button>
        </form>
        <p className='mt-4 self-center text-xs font-extralight'>
          New to pitchIn?{' '}
          <a
            className='text-red-500'
            href='/signUp'
            target='_self'
            rel='noopener noreferrer'>
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
}

export default Login;
