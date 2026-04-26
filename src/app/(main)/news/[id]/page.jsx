import { getNewsDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';
import { IoStar } from 'react-icons/io5';

export const generateMetadata =async ({params}) => {
 const { id } = await params;
 const news = await getNewsDetailsById(id)
 console.log(news,'n');

 return {
     title: news.title,
     description:news.details, 
 }

}


const NewsDetailsPage =async ({params}) => {
     const { id } = await params;
const news = await getNewsDetailsById(id)
// console.log(news,'ne');

          return (
               <div className='max-w-4xl mx-auto py-8'>
                    <div className="card bg-base-100  shadow-sm">
                      <div className="card-body">
                    {/* author info */}
                    <div className='flex justify-between items-center bg-slate-200 p-4'>
                              <div className='flex gap-2 items-center'>            
                                <Image className='rounded-full' src={news.author?.img} alt={news.author?.name} height={40} width={40}></Image>
                             <div>
                               <h2 className='font-semibold'>{news.author?.name}</h2>
                              <p className='text-xs'>{news.author?.published_date}</p>
                             </div>
                              </div>
                    
                    
                    
                              <div className='flex gap-2 items-center text-xl'><CiBookmark />  <CiShare2 /> </div>
                    </div>
                    
                    
                    
                    
                        <h2 className="card-title">{news.title}</h2>
                    
                      <figure>
                        <Image
                          src={news.image_url}
                          alt={news.title} width={300} height={300} className='w-full' />
                      </figure>
                    <p className=''>{news.details}</p>
                    
                    <div className='flex justify-between items-center'>
                         <div className='flex items-center  gap-2'>
                    
                    <h2  className='flex items-center  gap-2'><IoStar className='text-lg text-yellow-500' /> {news.rating.number}</h2>
                    <h2  className='flex items-center  gap-2'><FaEye className='text-lg' /> {news.total_view}</h2>
                    
                         </div>
                         <Link href={`/category/${news.category_id}`}>
                         <button className='btn bg-purple-500 text-white'><GoArrowLeft className='text-lg' /> All news in this category </button>
                         </Link>
                    </div>
                    
                    
                      </div>
                    </div>
               </div>
          );
};

export default NewsDetailsPage;