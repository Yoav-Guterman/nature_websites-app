import mongoose from "../db/mongoose"

export interface Region {
    id: string,
    name: string,
}

const RegionSchema = new mongoose.Schema<Region>({
    name: String
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

export const RegionModel = mongoose.model<Region>('Region', RegionSchema, 'regions')