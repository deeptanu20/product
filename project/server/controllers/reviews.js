import Review from '../models/Review.js';
import Service from '../models/Service.js';
import Booking from '../models/Booking.js';

export const createReview = async (req, res) => {
  try {
    const booking = await Booking.findById(req.body.bookingId);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    if (booking.status !== 'completed') {
      return res.status(400).json({ message: 'Can only review completed bookings' });
    }

    const review = await Review.create({
      service: booking.service,
      user: req.user._id,
      booking: booking._id,
      rating: req.body.rating,
      comment: req.body.comment,
    });

    // Update service rating
    const service = await Service.findById(booking.service);
    const reviews = await Review.find({ service: booking.service });
    
    const avgRating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
    service.rating = avgRating;
    service.reviews.push(review._id);
    await service.save();

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getServiceReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ service: req.params.serviceId })
      .populate('user', 'name')
      .sort('-createdAt');
      
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (review.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    review.rating = req.body.rating || review.rating;
    review.comment = req.body.comment || review.comment;
    await review.save();

    // Update service rating
    const service = await Service.findById(review.service);
    const reviews = await Review.find({ service: review.service });
    
    const avgRating = reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length;
    service.rating = avgRating;
    await service.save();

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    if (review.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await review.remove();

    // Update service rating
    const service = await Service.findById(review.service);
    const reviews = await Review.find({ service: review.service });
    
    const avgRating = reviews.length > 0
      ? reviews.reduce((acc, item) => item.rating + acc, 0) / reviews.length
      : 0;
      
    service.rating = avgRating;
    service.reviews = service.reviews.filter(r => r.toString() !== review._id.toString());
    await service.save();

    res.json({ message: 'Review removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};