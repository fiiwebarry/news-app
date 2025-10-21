import { useParams, Link } from 'react-router-dom';
import { useGetTopHeadlinesQuery } from '../api/newsApi';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const { data } = useGetTopHeadlinesQuery();
  const article = data?.articles?.[Number(id)];

  if (!article)
    return <div className='text-center mt-20'>Article not found</div>;

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <Link to='/' className='text-blue-600 hover:underline'>
        &larr; Back to Home
      </Link>
      <h1 className='text-3xl font-bold mt-4'>{article.title}</h1>
      <p className='text-gray-500 text-sm mt-2'>
        {article.author || 'Unknown author'}
      </p>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className='w-full h-80 object-cover rounded-2xl mt-4'
        />
      )}
      <p className='text-lg mt-6 leading-relaxed'>{article.description}</p>
      <p className='text-gray-600 mt-4'>{article.content}</p>
    </div>
  );
}
