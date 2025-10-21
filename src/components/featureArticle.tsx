import { Link } from 'react-router-dom';
import type { Article } from '../types/news';

interface FeaturedArticleProps {
  article: Article;
  index: number;
}

export default function FeaturedArticle({
  article,
  index,
}: FeaturedArticleProps) {
  return (
    <Link
      to={`/article/${index}`}
      className='block rounded-2xl overflow-hidden shadow-lg'
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className='w-full h-64 object-cover'
        />
      )}
      <div className='p-4'>
        <h2 className='text-2xl font-semibold'>{article.title}</h2>
        <p className='text-gray-500 text-sm mt-2'>
          {article.author || 'Unknown author'}
        </p>
      </div>
    </Link>
  );
}
