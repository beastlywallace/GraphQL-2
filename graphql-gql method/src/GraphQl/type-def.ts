import {gql} from "apollo-server"

const typeDefs = gql`
  
  type listing {
    id:ID
    title:String
    image:String
    address:String
    price:Int
    noOfBeds:Int
    numberOfBaths:Int
    rating:Int
  }

  input listingInput {
    title:String!
    image:String!
    address:String!
    price:Int!
    noOfBeds:Int!
    numberOfBaths:Int!
    rating:Int!
  }

  input listingInputUpdate {
    id:ID
    title:String
    image:String
    address:String
    price:Int
    noOfBeds:Int
    numberOfBaths:Int
    rating:Int
  }

  type deleteResponse {
  message:String!
  }


  type Query {
   allListing:[listing]!
  }

  type Mutation {
   createListing(input:listingInput):listing!
   updateListing(input:listingInputUpdate ):listing
   deleteListing(id:ID! ):deleteResponse!
  }


`
export default typeDefs