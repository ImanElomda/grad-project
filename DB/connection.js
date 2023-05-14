import mongoose from 'mongoose'
const connectDB = async () => {
    return await mongoose.connect(process.env.DBURL)
        .then(res => {
            console.log(`connected DB`);
        }).catch(err => {
            console.log(`failed to connectDB ${err}`);
        })
}
mongoose.set("strictQuery",false)
export default connectDB;