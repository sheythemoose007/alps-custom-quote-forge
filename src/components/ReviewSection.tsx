
import { Star, StarHalf } from 'lucide-react';

const ReviewSection = () => {
  const reviews = [
    {
      name: "Mike R.",
      rating: 5,
      review: "Incredible attention to detail on my Tacoma build. The team went above and beyond.",
      date: "March 2025"
    },
    {
      name: "Sarah K.",
      rating: 4.5,
      review: "Professional installation and great communication throughout the process.",
      date: "February 2025"
    },
    {
      name: "John D.",
      rating: 5,
      review: "Best off-road shop in the area. Fair pricing and quality work.",
      date: "January 2025"
    }
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-alpine-orange text-alpine-orange" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="h-4 w-4 fill-alpine-orange text-alpine-orange" />);
    }

    return stars;
  };

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 text-alpine-blue">Customer Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex gap-1 mb-2">
              {renderStars(review.rating)}
            </div>
            <p className="text-gray-700 mb-4">{review.review}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{review.name}</span>
              <span>{review.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
