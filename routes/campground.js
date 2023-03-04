const express = require('express');
const router = express.Router();
const { campgroundSchema } = require('../schemas.js');
const Campground = require('../models/campground');
const CatchAsync = require('../utils/CatchAsync');
const ExpressError = require('../utils/ExpressError');
const { isLoggedIn, isAuthor, validateCampground } = require('../middleware');
const campgrounds = require('../controller/campgrounds');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

router.route('/')
    .get(CatchAsync(campgrounds.index))
    .post(isLoggedIn, upload.array('image'), validateCampground, CatchAsync(campgrounds.createCampground));

router.route('/new')
    .get(isLoggedIn, campgrounds.renderNewForm);

router.route('/:id')
    .get(isLoggedIn, CatchAsync(campgrounds.showCampground))
    .put(isLoggedIn, isAuthor, upload.array('image'), validateCampground, CatchAsync(campgrounds.updateCampground))
    .delete(isLoggedIn, isAuthor, CatchAsync(campgrounds.deleteCampground));

router.route('/:id/edit')
    .get(isLoggedIn, CatchAsync(campgrounds.renderEditForm));

module.exports = router;