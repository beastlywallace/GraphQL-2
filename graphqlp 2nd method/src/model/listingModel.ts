import { DataTypes, Model } from "sequelize";
import db from '../config/database.config'

interface ListingAttributes {
    id:string;
    title:string
    image:string
    address:string
    price:number
    noOfBeds:number
    numberOfBaths:number
    rating:number
}

export class ListingInstance extends Model<ListingAttributes>{}

ListingInstance.init({
    id:{
        type:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    price:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    noOfBeds:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    numberOfBaths:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
    rating:{
        type:DataTypes.NUMBER,
        allowNull:false
    },
},{
    sequelize:db,
    tableName:"listing"
})