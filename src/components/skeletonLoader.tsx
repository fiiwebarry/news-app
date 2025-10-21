export default function SkeletonLoader() {
  return (
    <div className='max-w-4xl mx-auto p-4 space-y-6 animate-pulse'>
      {/* Title */}
      <div className='h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3 mb-6'></div>

      {/* Featured article placeholder */}
      <div className='w-full h-64 bg-gray-300 dark:bg-gray-700 rounded-2xl'></div>

      <div className='space-y-4 mt-6'>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className='flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-700'
          >
            <div className='flex-1 space-y-2'>
              <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4'></div>
              <div className='h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2'></div>
            </div>
            <div className='w-24 h-24 bg-gray-300 dark:bg-gray-700 rounded-md ml-4'></div>
          </div>
        ))}
      </div>
    </div>
  );
}
