import mongoose from 'mongoose';
import colors from 'colors';
const connectDB = async () => {
    try {
        //ek sec ruki
                const conn = await mongoose.connect(`mongodb://127.0.0.1/ecommerce`);

        // const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to Mongodb Database ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white);
    }
};

export default connectDB;