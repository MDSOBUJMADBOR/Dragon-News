import Link from 'next/link';
import React from 'react';

const NotFound = () => {
          return (
                    <div className='h-[80vh] flex justify-center items-center flex-col gap-4'>

<h2 className='text-5xl font-bold text-purple-500'>This is page Not Found</h2>

<Link href={'/'}>
<button className='btn bg-purple-500 text-white '>Back to Home</button>
</Link>
                    </div>
          );
};

export default NotFound;