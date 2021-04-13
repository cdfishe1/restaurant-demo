// const express = require('express');
// const path = require('path');

// // Sets up the Express App

// const app = express();
// const PORT = 8080;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.post('/api/tableArray', (req, res) => {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body parsing middleware
//     const newCustomer = req.body;
  
//     // Using a RegEx Pattern to remove spaces from newCharacter
//     // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//     // newCustomer.routeName = newCustomer.name.replace(/\s+/g, '').toLowerCase();
//     console.log(newCustomer);
  
//     tableArray.push(newCustomer);
//     res.json(newCustomer);
//   });

const tableArray = [
    {
        customerName: 'mary',
        customerEmail: 'mary@mail.com',
        customerID: '1234',
        customerPhone: '312-555-4567'

    }
];

// app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

module.exports = tableArray;