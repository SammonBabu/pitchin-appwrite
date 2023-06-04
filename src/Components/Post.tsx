import React from 'react';
import Image from 'next/image';

export default function Post({
  image = 'https://picsum.photos/200/200/',
  urgent = false,
  bloodType = 'O-',
}) {
  return (
    <div className='w-full flex flex-col shadow-md relative'>
      <div className='w-full p-4 flex justify-between border-b'>
        {/* LEFT */}
        <div className=''>
          <div className='py-4 flex items-center'>
            <Image
              className='rounded-full'
              width={75}
              height={75}
              src={image}
              alt='profile'
            />
            <div className='ml-4'>
              <h3 className='font-bold'>John Doe</h3>
              <p className='text-xs'>3 units required</p>
            </div>
          </div>
          <p className='py-1 text-xs'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            fugiat.
          </p>
          <ul className='text-xs'>
            <li className='py-1'>🤵 Lorem, ipsum dolor.</li>
            <li className='py-1'>🗺 Lorem ipsum dolor sit.</li>
            <li className='py-1'>📆 Lorem, ipsum.</li>
          </ul>
        </div>
        {/* RIGHT */}
        <div className='flex items-center'>
          {urgent && (
            <span
              className='px-3 py-1 absolute font-semibold text-white bg-red-500 top-0 right-0 xs:px-4 md:px-6 md:py-3'
              style={{
                clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)',
              }}>
              Urgent
            </span>
          )}
          <span className='relative'>
            <Image width={75} height={75} src='/blood.svg' alt='blood' />
            <span
              className='text-xl text-white font-bold absolute top-1/2 left-1/2 md:text-4xl'
              style={{ transform: 'translateX(-50%)' }}>
              {bloodType}
            </span>
          </span>
        </div>
      </div>
      <div className='w-full flex'>
        <div className='px-4 py-1 border'>❤</div>
        <div className='px-4 py-1 border'>💬</div>
        <div className='px-4 py-1 ml-auto border'>🤝</div>
      </div>
    </div>
  );
}
