const Country = require('../models/model');

const getCountries = async () => {
    data = null;
    await Country.find()
    .then((ele) => data = ele)
    .catch((err) => console.log('something went wrong'))
};

const save_country = async () => {
    const country = new Country({
        name:"India", 
        title:'Asia'
    });
    country.save()
    .then((res) => {
        // res.send({"data":"Success"});
        console.log(res)
    })
    .catch((err) => {
        // res.send({'error':err.message})
    })
}

module.exports = {getCountries, save_country};