import express from "express"
import homeController from "../controller/homeController" 
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/get-ticket', homeController.getTicket)
    router.post('/search-ticket', homeController.searchTicket)
    router.post('/add-ticket', homeController.addTicket)

    return app.use("/", router)
}

module.exports = initWebRoutes;