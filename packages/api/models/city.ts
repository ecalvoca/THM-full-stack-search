import { ObjectId } from "mongodb";

export default interface City {
    id?: ObjectId;
    name: string;
}
