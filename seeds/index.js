const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./in');
const { descriptors, places } = require('./seedHelpers');
const mongo = require('../mongo.js');

const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/yelp-camp';

// mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log("DATABASE CONNECTED!!");
//     })
//     .catch(err => {
//         console.log("OH NO MONGO ERROR!!");
//         console.log(err);
//     })

const sample = array => array[Math.floor(Math.random() * array.length)];
const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 250; i++) {
        const randomNo = Math.floor(Math.random() * 406);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '63c54a8e6a4130a45481aab0',
            location: `${cities[randomNo].city},${cities[randomNo].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque debitis tenetur minima tempore, consectetur magnam a culpa deserunt recusandae vitae enim voluptatibus quas laborum voluptatem necessitatibus ratione quos pariatur possimus!.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque debitis tenetur minima tempore, consectetur magnam a culpa deserunt recusandae vitae enim voluptatibus quas laborum voluptatem necessitatibus ratione quos pariatur possimus!',
            price,
            geometry: {
                type: "Point",
                coordinates: [
                    cities[randomNo].longitude,
                    cities[randomNo].latitude,
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/duqviuiqu/image/upload/v1674025407/YelpCamp/gmhmvwvislo5susnjplh.jpg',
                    filename: 'YelpCamp/gmhmvwvislo5susnjplh',
                },
                {
                    url: 'https://res.cloudinary.com/duqviuiqu/image/upload/v1674025407/YelpCamp/ueo0xvksui8pmwtger6l.jpg',
                    filename: 'YelpCamp/ueo0xvksui8pmwtger6l',
                }
            ]
        })
        await camp.save();
    }
}

seedDB();
mongo();