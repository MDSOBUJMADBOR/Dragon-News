import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
    {
        id:"1",
        title:"      Breading News : Major Event Unfolds in the City",
        
    },
    {
        id:"2",
        title:"Breaking News: New Policy Announced by the Government",
        
    },
    {
        id:"3",
        title:"Breaking News: Sports Team Wins Championship",
        
    }
];


const BreakingNews = () => {
          return (
                    <div className='flex justify-between items-center bg-gray-200  py-4 px-2 container mx-auto'>
                        <button className='btn bg-pink-500 text-white'>Latest News</button>
                <Marquee pauseOnHover={true} speed={100}>
{
news.map(n => (
       <span key={n.id} className="mr-15">{n.title}</span>
)
)
}

                </Marquee>


                    </div>
          );
};

export default BreakingNews;