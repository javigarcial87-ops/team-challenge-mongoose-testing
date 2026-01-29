const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongo db esta conectado")
    } catch (error) {
        console.error("error al conectar mongo", error)
            process.exit(1)
        
    }
}

module.exports = connectDB

