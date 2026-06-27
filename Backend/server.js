require("dotenv").config()
const dns = require('dns')
// Use reliable public DNS for SRV lookups (works around local DNS refusal)
dns.setServers(['8.8.8.8', '8.8.4.4'])

const app = require("./src/app.js")
const connectToDB = require("./src/config/database.js")



connectToDB()



app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})