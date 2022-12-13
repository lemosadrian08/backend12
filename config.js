const dotenv = require('dotenv');
const minimist = require ('minimist')
dotenv.config();


const args = minimist(process.argv.slice(2),{
  alias:{
    p: 'PORT'
  },
  default:{
    PORT: 8080
  }
})

module.exports = {
  PORT: args.PORT,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DATASOURCE: process.env.DATASOURCE
}