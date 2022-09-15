export interface Listing {
    title:string
    image:string
    address:string
    price:number
    noOfBeds:number
    numberOfBaths:number
    rating:number
}

export interface ListingUpdate {
    id:string
    title:string
    image:string
    address:string
    price:number
    noOfBeds:number
    numberOfBaths:number
    rating:number
}

export interface createListing{
   input:Listing
}

export interface updateListing{
    input:ListingUpdate
}