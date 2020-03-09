const { appInitConfig } = require('./config/apiConfig');
const app = appInitConfig();
const Starters = require('./models/starters');
const mainCourses = require('./models/mainCourses');
const Desserts = require('./models/desserts');
const Drinks = require('./models/drinks');
const Admin = require('./models/admin');
const {dbConnect} = require ('./config/dbConfig');
dbConnect();

//Get admin
app.get('/api/admin', function (req, res) {
  Admin.find((err, data) => {
    if (err) {
      console.log('ERROR someting is wrong!')
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET: menu, congraxxxx!',
        admin: data
      });
    }
  });
});



//Get drinks
app.get('/api/drinks', function (req, res) {
  Drinks.find((err, data) => {
    if (err) {
      console.log('ERROR someting is wrong!')
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET: menu, congraxxxx!',
        drinks: data
      });
    }
  });
});

//Get starters
app.get('/api/starters', function (req, res) {
  Starters.find((err, data) => {
    if (err) {
      console.log('ERROR someting is wrong!')
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET: menu, congraxxxx!',
        starters: data
      });
    }
  });
});


//Get mainCourses
app.get('/api/maincourses', function (req, res) {
  mainCourses.find((err, data) => {
    if (err) {
      console.log('ERROR someting is wrong!')
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET: menu, congraxxxx!',
        mainCourses: data
      });
    }
  });
});


//Get desserts
app.get('/api/desserts', function (req, res) {
  Desserts.find((err, data) => {
    if (err) {
      console.log('ERROR someting is wrong!')
    } else {
      res.status(200).send({
        succes: 'true',
        message: 'GET: menu, congraxxxx!',
        desserts: data
      });
    }
  });
});








const PORT = 3000;
app.listen(PORT, function () {
    console.log(`API Restaurant corriendo en puerto ${PORT}`);
});