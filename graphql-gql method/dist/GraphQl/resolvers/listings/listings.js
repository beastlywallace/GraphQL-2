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
const listingModel_1 = require("../../../model/listingModel");
const uuid_1 = require("uuid");
const listingResolvers = {
    Query: {
        allListing: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const listing = yield listingModel_1.ListingInstance.findAll({});
                return listing;
            }
            catch (err) {
                console.log(err);
            }
        }),
    },
    Mutation: {
        createListing: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const listingId = (0, uuid_1.v4)();
                const newListing = {
                    id: listingId,
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    noOfBeds: args.input.noOfBeds,
                    numberOfBaths: args.input.numberOfBaths,
                    rating: args.input.rating,
                };
                const listing = yield listingModel_1.ListingInstance.create(newListing);
                return listing;
            }
            catch (err) {
                console.log(err);
            }
        }),
        updateListing: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { id } = args.input;
                const updateListing = {
                    title: args.input.title,
                    image: args.input.image,
                    address: args.input.address,
                    price: args.input.price,
                    noOfBeds: args.input.noOfBeds,
                    numberOfBaths: args.input.numberOfBaths,
                    rating: args.input.rating,
                };
                const listing = yield listingModel_1.ListingInstance.findOne({ where: { id } });
                if (!listing) {
                    throw new Error('Listing not found');
                }
                const updatedNew = yield listing.update(updateListing);
                return updatedNew;
            }
            catch (err) {
                console.log(`${err}`);
            }
        }),
        deleteListing: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const id = args.id;
                const listing = yield listingModel_1.ListingInstance.findOne({ where: { id } });
                if (!listing) {
                    throw new Error('Listing not found');
                }
                yield listing.destroy();
                const response = {
                    message: "Deleted Successfully"
                };
                return response;
            }
            catch (err) {
                console.log(`${err}`);
            }
        }),
    },
};
exports.default = listingResolvers;
