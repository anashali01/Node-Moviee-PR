import { Router } from "express";
import { addMovie, addMovieData, dashboard, deleteMovie, editMovie, editMovies, viewMovieData } from "../../controllers/server/serverController.js";
import imageupload from "../../middlewares/imageupload.js";

const serverRouter = Router();

serverRouter.get('/' , dashboard);
serverRouter.get('/addMovieData' , addMovieData);
serverRouter.get('/viewMovieData' , viewMovieData);
serverRouter.post('/addMovieData' , imageupload ,addMovie);
serverRouter.get('/delete/movie/:id', deleteMovie);
serverRouter.get('/edit/movie/:id',editMovie);
serverRouter.post('/edit/movie/:id',imageupload,editMovies);

export default serverRouter;