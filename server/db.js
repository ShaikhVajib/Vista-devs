const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://shaikhvajib99:02TRSeO2yDtLoaMe@cluster0.fryevoo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

module.exports = connectDB;
