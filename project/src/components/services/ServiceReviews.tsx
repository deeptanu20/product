import { Star, ThumbsUp } from 'lucide-react';
import { type Review } from '../../types';

interface ServiceReviewsProps {
  serviceId: string;
  reviews: Review[];
}

export function ServiceReviews({ reviews }: ServiceReviewsProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Customer Reviews</h2>
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{review.userName}</div>
                <div className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </div>
              </div>
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
            <button className="flex items-center gap-1 text-sm text-gray-500 mt-2 hover:text-blue-600">
              <ThumbsUp className="w-4 h-4" />
              Helpful
            </button>
          </div>
        ))}

        {reviews.length === 0 && (
          <p className="text-center text-gray-500">No reviews yet.</p>
        )}
      </div>
    </div>
  );
}