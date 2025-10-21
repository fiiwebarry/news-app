import { Link } from 'react-router-dom';
import type { Article } from '../types/news';

interface ArticleCardProps {
  article: Article;
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <Link
      to={`/article/${index}`}
      className='flex justify-between items-center bg-white rounded-2xl shadow-md p-4 hover:bg-gray-50 transition'
    >
      <div className='flex-1 pr-4'>
        <h3 className='font-semibold text-lg'>{article.title}</h3>
        {article.description && (
          <p className='text-gray-500 text-sm mt-1 line-clamp-2'>
            {article.description}
          </p>
        )}
      </div>
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className='w-24 h-24 object-cover rounded-xl ml-4'
        />
      )}
    </Link>
  );
}
