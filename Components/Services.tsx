import React from 'react';
import HeadLine from './HeadLine';
import { data } from '@/Data/_data';

const Services = () => {
  return (
    <section className='p-4 px-4 py-16 mx-auto' id='Services'>
      <div className='flex flex-col bg-light'>
        <div className=' w-full'>
          <HeadLine title={'Services'} />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-20 py-16'>
            {Object.values(data.items).map((item) => (
              <div className='py-6 bg-light' key={item.title}>
                <div className='flex flex-col items-center justify-center'>
                  <div className=' mb-3 flex items-center justify-center text-gray-500'>
                    {item.icon}
                  </div>
                  <div className='text-center'>
                    {item.title && (
                      <h3 className='text-2xl font-bold font-airspace text-main text-md mb-3'>
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className='leading-relaxed text-gray-500 font-campfire font-thin'>{item.description}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
