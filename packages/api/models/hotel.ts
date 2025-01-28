import { ObjectId } from "mongodb";

export default interface Hotel {
    id?: ObjectId;
    chain_name: string;
    hotel_name: string;
    addressline1: string;
    addressline2: string;
    zipcode: string;
    city: string;
    state: string;
    country: string;
    country_code: string;
    star_rating: number;
}
