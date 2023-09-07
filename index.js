const connectToMongo = require("./db")
const express = require("express")
const port = 5000
const app = express()
connectToMongo()

app.use(express.json())
app.get("/test", (req, res) => {
    res.send("Test successful")
})
// app.use("/test_route", require("./routes/test_route")) 

// Wallet address route 
app.use("/wallet_address", require("./routes/wallet_address"))



app.listen(port, function(){
    console.log(`App listening at port ${port}`)
})