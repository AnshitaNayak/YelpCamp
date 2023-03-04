const express = require('express');
const router = express.Router({ mergeParams: true });
const CatchAsync = require('../utils/CatchAsync');
const ExpressError = require('../utils/ExpressError');
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware');
const reviews = require('../controller/reviews');

router.post('/', isLoggedIn, validateReview, CatchAsync(reviews.createReview));

router.delete('/:reviewId', isLoggedIn, isReviewAuthor, CatchAsync(reviews.deleteReview));

module.exports = router;