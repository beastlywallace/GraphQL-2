"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `
  
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


`;
exports.default = typeDefs;
