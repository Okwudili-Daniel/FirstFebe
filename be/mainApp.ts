import {Application, Request, Response } from "express";
import child from "./router/childRouter"

const mainApp= (app: Application) =>{
    try {
        app.use("/api/v1", child)
        app.get("/", (req: Request, res: Response) =>{
            try {
               return res.status(200).json({
                    message: "Welcome"
                })
            } catch (error) {
               return res.status(404).json({
                message: "Error"
            });
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export default mainApp;