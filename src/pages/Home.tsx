import { useGetTopHeadlinesQuery } from '../api/newsApi';
import ArticleCard from '../components/articleCard';
import FeaturedArticle from '../components/featureArticle';
import SkeletonLoader from '../components/skeletonLoader';
import icon from '/src/assets/icon.png';

export default function Home() {
  const { data, error, isLoading } = useGetTopHeadlinesQuery();

  if (isLoading)
    return (
      <div className='text-center mt-20'>
        <SkeletonLoader />
      </div>
    );
  if (error)
    return (
      <div className='text-center mt-20 text-red-500'>Error loading news</div>
    );

  const articles = data?.articles ?? [];
  const [featured, ...rest] = articles;

  return (
    <div className='max-w-4xl mx-auto p-4 space-y-6'>
      <div className='grid grid-flow-col w-max gap-2 justify-center mx-auto items-center'>
        <img src={icon} className='w-10 h-10  rounded-full' alt='icon' />
        <h1 className=' text-3xl font-bold '>Fortnightly News</h1>
      </div>

      {featured && <FeaturedArticle article={featured} index={0} />}
      <div className='space-y-4'>
        {rest.map((article, i) => (
          <ArticleCard key={i + 1} article={article} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
