import {ListingInstance}  from "../model/listingModel"
import {GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString,
    GraphQLInt, GraphQLList, GraphQLSchema} from  "graphql"
import {v4 as uuid4} from "uuid"

const Listing = new GraphQLObjectType({
  name:'Listing',
  fields:{
    id:{type:  new GraphQLNonNull(GraphQLID)},
    title:{type:  new GraphQLNonNull(GraphQLString)},
    image: {type:  new GraphQLNonNull(GraphQLString)},
    address:{type:  new GraphQLNonNull(GraphQLString)},
    price:{type: new GraphQLNonNull(GraphQLInt)},
    noOfBeds:{type: new GraphQLNonNull(GraphQLInt)},
    numberOfBaths:{type: new GraphQLNonNull(GraphQLInt)},
    rating:{type: new GraphQLNonNull(GraphQLInt)}
  }
})

const CreateListing = new GraphQLObjectType({
    name:'CreateListing',
    fields:{
      id:{type:  new GraphQLNonNull(GraphQLID)},
      title:{type:  new GraphQLNonNull(GraphQLString)},
      image: {type:  new GraphQLNonNull(GraphQLString)},
      address:{type:  new GraphQLNonNull(GraphQLString)},
      price:{type: new GraphQLNonNull(GraphQLInt)},
      noOfBeds:{type: new GraphQLNonNull(GraphQLInt)},
      numberOfBaths:{type: new GraphQLNonNull(GraphQLInt)},
      rating:{type: new GraphQLNonNull(GraphQLInt)}
    }
  })

const query = new GraphQLObjectType({
    name:'Query',
    fields:{
      listings:{
          type:  new GraphQLNonNull(new GraphQLList(new GraphQLNonNull(Listing))),
          resolve:async()=>{
            return await ListingInstance.findAll({})
          }
      }  
    }
})

const mutation = new GraphQLObjectType({
 name:"Mutation",
 fields:{
  createListings:{
      type: new GraphQLNonNull(CreateListing),
      args:{
        // id:{type:  new GraphQLNonNull(GraphQLID)},
        title:{type:  new GraphQLNonNull(GraphQLString)},
        image: {type:  new GraphQLNonNull(GraphQLString)},
        address:{type:  new GraphQLNonNull(GraphQLString)},
        price:{type: new GraphQLNonNull(GraphQLInt)},
        noOfBeds:{type: new GraphQLNonNull(GraphQLInt)},
        numberOfBaths:{type: new GraphQLNonNull(GraphQLInt)},
        rating:{type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve:async(_:unknown, {title, image,address,price, noOfBeds, numberOfBaths, rating})=>{
          const newid = uuid4()
          const newListing ={
            id:newid,
            title, 
            image,
            address,
            price, 
            noOfBeds, 
            numberOfBaths, 
            rating
          }
          const listing = await ListingInstance.create(newListing)
          if(listing){
              return listing
          }
      }
  }
 }
})

export const schema = new  GraphQLSchema({query,mutation})
