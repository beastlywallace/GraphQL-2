import listingResolvers from "./resolvers/listings/listings";

export default {
    Query:{
       ...listingResolvers.Query
    },
    Mutation:{
        ...listingResolvers.Mutation
    }
}