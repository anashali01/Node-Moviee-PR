import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    }
})

const Movie = mongoose.model('movies' , movieSchema);

export default Movie;