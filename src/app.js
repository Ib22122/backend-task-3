const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = 'myProject'
mongoClient.connect(connectionUrl, (error, res1) => {
    if (error) {
        return console.log('cannot connect to database')
    }
    console.log('connect to database')

    const db = res1.db(dbname)

    db.collection('products').insertOne({
        name : "HP",
        price : 800
    },(error,data) =>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(data.insertedId)
    })


    db.collection ('products').insertMany([
        {
            name : "lenovo",
            price : 500
        },
        {
            name : "lenovo",
            age : 450
        },
        {
            name : "dell",
            age : 1500
        },


    ] , (error,data)=>{
        if(error){
            console.log("Unable to insert data")
        }
    })

    db.collection('products').findOne({_id:mongodb.ObjectId("65f88f4d51a5907a2a5a78a4")}
    , (error,product)=>{
        if(error){
            console.log("Unable to insert data")
        }
        console.log(product)
    })


    db.collection('products').find({name:"lenovo"}).limit(2).toArray((error,product)=>{
                if(error){
                    return console.log('Error has occurred')
                }
                console.log(product)
            })


    db.collection('products').find({ name: "lenovo" }).limit(5).count((error, product) => {
        if (error) {
            return console.log('Error has occurred')
        }
        console.log(product)
    })
})