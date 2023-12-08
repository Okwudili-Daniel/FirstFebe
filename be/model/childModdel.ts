import { Schema, model, Document } from "mongoose";

interface iChild {
    alphabet: string ;
    alphaImage: string;
    number: string;
    numImage: string;
    shape: string;
    shapeImage: string;
}

interface childData extends iChild, Document{}

const childModel = new Schema<childData>({
    alphabet :{
        type: String
    },
    alphaImage :{
        type: String
    },
    number :{
        type: String
    },
    numImage :{
        type: String
    },
    shape :{
        type: String
    },
    shapeImage :{
        type: String
    },
},
{timestamps:true}
)

export default model<childData>("child", childModel)