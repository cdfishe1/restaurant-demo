const express = require('express');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const tableData = require('./data/tableData');

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, './public/reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, './public/tables.html')));



require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.post('/api/tableArray', (req, res) => {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    const newCustomer = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    // newCustomer.routeName = newCustomer.name.replace(/\s+/g, '').toLowerCase();
    console.log(newCustomer);
  
    tableData.push(newCustomer);
    res.json(newCustomer);
  });

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));