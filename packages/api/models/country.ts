import { ObjectId } from "mongodb";

export default interface Country {
    id?: ObjectId;
    country: string;
    countryisocode: string;
}
