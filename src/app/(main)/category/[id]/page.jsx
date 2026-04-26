import LeftSidebar from '@/components/homepage/news/LeftSidebar';
import NewsCard from '@/components/homepage/news/NewsCard';
import RightSidebar from '@/components/homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';






const NewsCategoryPage = async ({params}) => {
const { id } = await params;



const categories = await getCategories();
const news = await getNewsByCategoryId(id);
console.log(news,'new');

          return (
                    <div className="grid grid-cols-12 gap-4 container mx-auto my-[60px]">

{/* leftsidebar */}
<div className="col-span-3 ">
<LeftSidebar categories={categories} activeId={id}></LeftSidebar>
</div>




<div className="col-span-6 ">
<h2 className='font-bold text-lg '>News by category</h2>
<div className="space-y-4 mt-6">
{news.length > 0 ? 
news.map(n => {

  return <NewsCard key={n._id} news={n}></NewsCard>
}) : <h2 className='font-bold text-4xl text-center mt-5'>No found page</h2>
}
</div>
</div>




<div className="col-span-3 ">
<RightSidebar></RightSidebar>
</div>




         </div>
          );
};

export default NewsCategoryPage;