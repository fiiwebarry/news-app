import { useGetTopHeadlinesQuery } from '../api/newsApi';
import ArticleCard from '../components/articleCard';
import FeaturedArticle from '../components/featureArticle';
import SkeletonLoader from '../components/skeletonLoader';

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
      <h1 className=' grid justify-center text-3xl font-bold mb-6'>
        Fortnightly News
      </h1>
      {featured && <FeaturedArticle article={featured} index={0} />}
      <div className='space-y-4'>
        {rest.map((article, i) => (
          <ArticleCard key={i + 1} article={article} index={i + 1} />
        ))}
      </div>
    </div>
  );
}
