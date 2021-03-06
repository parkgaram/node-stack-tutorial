import express from 'express'
import { MongoClient } from 'mongodb'
import Schema from './data/schema'
import GraphQLHTTP from 'express-graphql'

let app = express()
let MONGO_URI = '';
// app.get('/' , (req,res) => res.send('Hello World'))
app.use(express.static('public'))

let db;


MongoClient.connect(
  MONGO_URI,
  (err,database) => {
    if(err) throw err;

    db = database;
    app.use('/graphql',GraphQLHTTP({
      schema : Schema(db),
      graphiql:true
    }))
    app.listen(3000, () => console.log("Listening on port 3000"));

  }
)

app.get("/data/links",(req,res) => {
  db.collection("links").find({}).toArray((err,links) => {
    if(err) throw err;
    res.json(links);
  })
});
