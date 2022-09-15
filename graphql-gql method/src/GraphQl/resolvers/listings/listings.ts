import { ListingInstance } from "../../../model/listingModel";
import { createListing, updateListing } from "./type";
import { v4 as uuidv4 } from "uuid";

const listingResolvers = {
  Query: {
    allListing: async () => {
      try {
        const listing = await ListingInstance.findAll({});
        return listing;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    createListing: async (_: unknown, args: createListing) => {
      try {
        const listingId = uuidv4();
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

        const listing = await ListingInstance.create(newListing);
        return listing;
      } catch (err) {
        console.log(err);
      }
    },
    updateListing: async (_: unknown, args: updateListing) => {
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

        const listing = await ListingInstance.findOne({where:{id}})

        if(!listing){
            throw new Error('Listing not found')
        }

        const updatedNew = await listing.update(updateListing)

        return updatedNew;
        
      } catch (err) {
          console.log(`${err}`)
      }
    },
    deleteListing: async (_: unknown, args: {id:string}) => {
        try {
            const id = args.id
         const listing = await ListingInstance.findOne({where:{id}})
         if(!listing){
            throw new Error('Listing not found')
        }

       await listing.destroy();

       const response = {
        message:"Deleted Successfully"
       }
       return response;

        
          
        } catch (err) {
            console.log(`${err}`)
        }
      },
  },
};

export default listingResolvers;
