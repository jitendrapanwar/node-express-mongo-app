const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route')
const app = express();

app.use(express.json());
// when you want to read from encoded data
app.use(express.urlencoded({ extended: false }));
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
  res.send('hello')
})




mongoose.connect('mongodb+srv://test:test%40123@cluster0.hz5to.mongodb.net/test')
  .then(() => {
    console.log('DB connected')
    app.listen(3000, () => console.log('server is running at port 3000'))
  })
  .catch(() => console.log('DB connection error'))
