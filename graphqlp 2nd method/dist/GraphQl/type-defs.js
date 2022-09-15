"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const listingModel_1 = require("../model/listingModel");
const graphql_1 = require("graphql");
const uuid_1 = require("uuid");
const Listing = new graphql_1.GraphQLObjectType({
    name: 'Listing',
    fields: {
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        image: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        address: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        price: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        noOfBeds: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        numberOfBaths: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        rating: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) }
    }
});
const CreateListing = new graphql_1.GraphQLObjectType({
    name: 'CreateListing',
    fields: {
        id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLID) },
        title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        image: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        address: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
        price: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        noOfBeds: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        numberOfBaths: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
        rating: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) }
    }
});
const query = new graphql_1.GraphQLObjectType({
    name: 'Query',
    fields: {
        listings: {
            type: new graphql_1.GraphQLNonNull(new graphql_1.GraphQLList(new graphql_1.GraphQLNonNull(Listing))),
            resolve: () => __awaiter(void 0, void 0, void 0, function* () {
                return yield listingModel_1.ListingInstance.findAll({});
            })
        }
    }
});
const mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createListings: {
            type: new graphql_1.GraphQLNonNull(CreateListing),
            args: {
                // id:{type:  new GraphQLNonNull(GraphQLID)},
                title: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                image: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                address: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) },
                price: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
                noOfBeds: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
                numberOfBaths: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) },
                rating: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLInt) }
            },
            resolve: (_, { title, image, address, price, noOfBeds, numberOfBaths, rating }) => __awaiter(void 0, void 0, void 0, function* () {
                const newid = (0, uuid_1.v4)();
                const newListing = {
                    id: newid,
                    title,
                    image,
                    address,
                    price,
                    noOfBeds,
                    numberOfBaths,
                    rating
                };
                const listing = yield listingModel_1.ListingInstance.create(newListing);
                if (listing) {
                    return listing;
                }
            })
        }
    }
});
exports.schema = new graphql_1.GraphQLSchema({ query, mutation });
