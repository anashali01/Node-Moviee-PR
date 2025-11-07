import Movie from "../../models/moviemodel.js"

export const homepage = (req,res) => {
    return res.render('client/index.ejs')
}
export const aboutPage = (req,res) => {
    return res.render('client/pages/about.ejs')
}
export const contactPage = (req,res) => {
    return res.render('client/pages/contact.ejs')
}
export const joinusPage = (req,res) => {
    return res.render('client/pages/joinus.ejs')
}
export const reviewPage = async (req,res) => {
    try {
        let reviews = await Movie.find({});
        return res.render('client/pages/review.ejs',
            {
                reviews
            }
        )
    } catch (error) {
        console.log(error.message);
        
    }
}
export const singlePage = async(req,res) => {
    try {
        const {id} = req.params;
        let singleInfo = await Movie.findById(id);
        // console.log(singleInfo);
        
        return res.render('client/pages/single.ejs',{
            singleInfo
        })
    } catch (error) {
        console.log(error.message);
        
    }
}

