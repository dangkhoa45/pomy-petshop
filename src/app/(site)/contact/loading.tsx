export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="animate-pulse space-y-8">
        {/* Title skeleton */}
        <div className="h-10 bg-gray-200 rounded w-1/2 mx-auto"></div>

        {/* Form skeleton */}
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded"></div>
          <div className="h-32 bg-gray-200 rounded"></div>
          <div className="h-12 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}
