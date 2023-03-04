const express = require('express');
const app = express();
const ejsMate = require('ejs-mate');
const path = require('path');
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapBoxToken = "pk.eyJ1Ijoia2FuaGFiaW5kYWwiLCJhIjoiY2xkMmk1c3cxMDhyODNvbzBkaGZmajdnNyJ9.PXzrnUplLBb6t8TSYFnhUw"
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('test2.ejs');
})

app.listen(8080, () => {
    console.log('Serving on port 3000');
})