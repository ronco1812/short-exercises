const csv = require('csvtojson');
const path = require('path');
const mongoose = require('mongoose');
const Accountant = require('../models/accountant');

mongoose.connect('mongodb://localhost:27017/accounting', {
  useNewUrlParser: true
})

const csvFilePath = path.resolve('./assets/accountants.csv');

csv()
  .fromFile(csvFilePath)
  .then((accountants)=>{

    const accountantCollection = accountants.map((accountant) => {

      const licenseId = Object.values(accountant)[0].trim();
      const licenseDate = (() => {
        const date = new Date(Object.values(accountant)[1].trim());

        return date == 'Invalid Date' ? null : date;
      })();
      const firstName = Object.values(accountant)[2].trim();
      const lastName = Object.values(accountant)[3].trim();
      const city = Object.values(accountant)[4].trim();
      const status = Object.values(accountant)[5].trim();

      return {
        license_id: licenseId,
        license_date: licenseDate,
        first_name: firstName,
        last_name: lastName,
        city: city,
        status: status
      }

    })
      .filter(accountant => {
        return accountant.status
          && accountant.city
          && accountant.first_name
          && accountant.last_name
          && accountant.license_date
          && accountant.license_id
      })

    Accountant.insertMany(accountantCollection)
      .then(function(){
        console.log("Data inserted")  // Success
      }).catch(function(error){
        console.log(error)      // Failure
    });

  })


