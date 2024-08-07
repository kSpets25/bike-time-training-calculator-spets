const {fetchData} = require("../models");

async function images(req, res) {
    console.log("in images")
try {
    const image = req.body
    const data = await fetchData();
        res.render('home', {data});
} catch (err) {
    res.status(500). send('Server Error');
}
};

module.exports = {images};
