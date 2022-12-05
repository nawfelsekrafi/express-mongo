const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './.env' });
const DB = process.env.DB_ATLAS_URI;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(con => {
    console.log(con.connections);
    console.log('DB connection successful!');
  });

const port = 3000;

console.log(process.env);

app.listen(port, () => {
  console.log(`App runnig on port ${port}...`);
});
