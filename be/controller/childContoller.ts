import { Request, Response } from "express";
import childModel from "../model/childModdel"

export const createChild = async (req: Request, res: Response) =>{
    try {
        const {alphabet,
            alphaImage,
            number,
            numImage,
            shape,
            shapeImage} = req.body

        const child = await childModel.create({ alphabet,
            alphaImage,
            number,
            numImage,
            shape,
            shapeImage})

        return res.status(200).json({
            message: "Created",
            data: child
        })
    } catch (error) {
      return res.status(404).json({
            messsage: "Error creating child",
        })
    }
}

export const readChilds = async (req: Request, res: Response) =>{
    try {
        const {name, image} = req.body

        const child = await childModel.find()

        return res.status(200).json({
            message: "Created",
            data: child
        })
    } catch (error) {
      return res.status(404).json({
            messsage: "Error creating child",
        })
    }
}

export const readChild = async (req: Request, res: Response) =>{
    try {
        const {name, image} = req.body

        const child = await childModel.find().sort({alphabet: -1})

        return res.status(200).json({
            message: "Created",
            data: child
        })
    } catch (error) {
      return res.status(404).json({
            messsage: "Error creating child",
        })
    }
}