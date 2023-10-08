import React from 'react';
import HeadLine from './HeadLine';
import { data } from '@/pages/_data';

const Services = () => {
  return (
    <section className='flex flex-col py-20 bg-light' id='Services'>
      <div className='container px-4 mx-auto'>
        <div className='mx-auto mb-20'>
          <HeadLine title={'Services'} />
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-20 py-16'>
            {Object.values(data.items).map((item) => (
              <div className='py-6 bg-light' key={item.title}>
                <div className='flex flex-col items-center justify-center'> {/* Use justify-center to center horizontally */}
                  <div className='w-20 h-20 p-4 rounded-full bg-white shadow-2xl mb-3 flex items-center justify-center'> {/* Use flex and justify-center to center vertically and horizontally */}
                    {item.icon}
                  </div>
                  <div className='text-center'>
                    {item.title && (
                      <h3 className='text-heading font-bold text-md mb-3'>
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className='leading-relaxed'>{item.description}</p>
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
