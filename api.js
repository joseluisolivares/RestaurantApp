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

//Delete dessert
app.delete('/api/desserts/:id',  (req, res) => {
  Desserts.findByIdAndDelete(req.params.id, (err, data) =>{
    if(err){
      console.log(err);
    }else{
      res.status(200).send({
        succes:"true",
        message: 'DELETE: dessert',
        dessert: data
      })
    }
  });
});


//Post desserts
app.post('/api/desserts', function (req, res) {
  const {name, price} = req.body;
  const Dessert = new Desserts({
    name: name,
    price: price
  });
  Dessert.save( (err, data) => {
      if(err){
        console.log('ERROR someting is wrong!')
      }else{
        res.status(201).send({
          succes: 'true',
          message: 'GET: Desserts',
          Desserts:data
        });
      }
  });
});


//Put modify dessert
app.put('/api/desserts/:id',  (req, res) => {
Desserts.findById( (req.params.id),(err, data) => {
    if(err){
      console.log('ERROR someting is wrongg!');
      console.log(err);
    }else{
      const {name, price} = req.body;
      
      data.name = name ? name : data.name;
      data.price = price ? price : data.price;
      data.save( (err) => {
        if(err){
          console.log('ERROR someting is wrongg!')
        }else{
          res.status(201).send({
            succes: 'true',
            message: 'PUT: Desserts',
            newDessert: data
          });
        }
      });
    }
});
});


//Get one
app.get('/api/desserts/:id', function (req, res) {
  Desserts.findById( (req.params.id),(err, data) => {
      if(err){
        console.log('ERROR someting is wrong!')
      }else{
        res.status(200).send({
          succes: 'true',
          message: 'GET: desserts',
          desserts: data
        });
      }
  });
});







const PORT = 3000;
app.listen(PORT, function () {
    console.log(`API Restaurant corriendo en puerto ${PORT}`);
});