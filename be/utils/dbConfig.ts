import mongoose from "mongoose"

const URL: string= "mongodb://127.0.0.1:27017/Children"

const dbConnection = async () =>{
    try {
        await mongoose.connect(URL).then(() =>{
            console.log("Connection established")
        })
    } catch (error) {
        console.log(error)
    }
}
export default dbConnection;