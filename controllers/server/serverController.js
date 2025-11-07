import Movie from "../../models/moviemodel.js";
import fs from 'fs';
export const dashboard = (req, res) => {
    return res.render('server/index.ejs')
}
export const addMovieData = (req, res) => {
    return res.render('server/pages/addMovieData.ejs')
}
export const viewMovieData = async (req, res) => {
    let movies = await Movie.find({});
    return res.render('server/pages/viewMovieData.ejs', {
        movies
    })
}
export const addMovie = async (req, res) => {
    try {
        req.body.image = req.file.path;
        let data = await Movie.create(req.body);
        return res.redirect('/admin/viewMovieData');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Internal Server Error");
    }
}
export const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        let data = await Movie.findByIdAndDelete(id);
        fs.unlinkSync(data.image);
        return res.redirect('/admin/viewMovieData');
    } catch (error) {
        console.log(error);
        return res.redirect('/admin/viewMovieData');
    }
}

export const editMovie = async(req,res)=>{
    try {
        const id = req.params.id;
        let data = await Movie.findById(id);
        return res.render('server/pages/editMovieData.ejs',{
            data
        });

    } catch (error) {
        res.render('server/pages/editMovieData.ejs',{
            data:[]
        })
        console.log(error.message);
        
    }
}

export const editMovies = async(req,res)=>{
    try {
        const id = req.params.id;

        const existingMovie = await Movie.findById(id);

        if(req.file){
            fs.unlinkSync(existingMovie.image);
            req.body.image = req.file.path;
        }
        else{
            req.body.image = existingMovie.image;
        }
        let movieData = await Movie.findByIdAndUpdate(id,req.body);
        return res.redirect('/admin/viewMovieData');

    } catch (error) {
        
    }
}