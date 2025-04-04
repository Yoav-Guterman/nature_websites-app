import mongoose from "../db/mongoose"
import { Region } from "./region"

export interface Website {
    id: string,
    name: string,
    description: string,
    regionId: string
    region: Region,
    adultPrice: number,
    childPrice: number
}

const WebsiteSchema = new mongoose.Schema<Website>({
    name: String,
    description: String,
    regionId: String,
    region: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Region'
    },
    adultPrice: Number,
    childPrice: Number
},
    {
        toObject: {
            transform: function (doc, ret) {
                ret.id = ret._id
                delete ret._id
                delete ret.__v
            }
        }
    })

export const WebsiteModel = mongoose.model<Website>('Website', WebsiteSchema, 'websites')