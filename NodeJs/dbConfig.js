import mongoose from 'mongoose';

export async function connect() {
    try {
        const res = await mongoose.connect("mongodb+srv://jainkunal2003:r638EjwHbgXmyDck@cluster0.fpzau9q.mongodb.net/task-management");
        console.log("DB Connected >>>");
    } catch (err) {
        console.log(err);
    }
}

connect();