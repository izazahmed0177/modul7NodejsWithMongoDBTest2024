

const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

// ==========mongoDb serner===============



const { MongoClient, ServerApiVersion } = require('mongodb');


const uri = "mongodb+srv://izazahmedemon018:VJxlIwPncralbAi6@cluster0.843jjic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection


    const userDB = client.db("userDB");
    const userCollection = userDB.collection("user_collection");

    // const user={
    //     name:"Emon",
    //     age:26,
    //     mobileNumber:0177777555555,
    //     adress:"Gharherchar",
    // };
    // const result=await userCollection.insertOne(user)
    // console.log(result);

    app.post('/user',async(req,res)=>{
        
    // const user={
    //     name:"Emon Ahamed",
    //     age:28,
    //     mobileNumber:1777657846,
    //     adress:"Gharherchar,shantinagor ,Dhaka",
    // };

    //json data  

    // {
    //     "name":"Emon Ahamed",
    //     "age":28,
    //     "mobileNumber":1777657846,
    //     "adress":"Gharherchar,shantinagor ,Dhaka",
    // }

    const user=req.body;
    const result=await userCollection.insertOne(user)
    console.log(result);

    })






    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();

  }
}
run().catch(console.log);










// =========================
// ==========mongoDb serner===============

app.get('/', (req, res) => {
  res.send('Hello World Emon hi !')
});
app.get('/users', (req, res) => {

    const user={
        id:1,
        name:"Emon",
        age:26,
        adress:"Gharherchar"

    };
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 



// izazahmedemon018@gmail.com
// izazahmedemon018
// VJxlIwPncralbAi6