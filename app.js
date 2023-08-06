const express = require('express')
const connectWithDb = require('./config/db');
const app = express()
const port = 5000


// connect with database
connectWithDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes'));

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})