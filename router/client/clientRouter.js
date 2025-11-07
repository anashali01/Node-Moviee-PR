import { Router } from "express";
import { homepage , aboutPage , contactPage , joinusPage , reviewPage , singlePage} from "../../controllers/client/clientController.js";

const clientRouter = Router();

clientRouter.get('/' , homepage);
clientRouter.get('/about',aboutPage);
clientRouter.get('/contact',contactPage);
clientRouter.get('/joinus',joinusPage);
clientRouter.get('/review',reviewPage);
clientRouter.get('/single/:id',singlePage);
export default clientRouter;