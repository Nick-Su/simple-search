import { IUserAddress } from "./IUserAddress";
import { ICompany } from "./ICompany";

export interface IUser {
    id: Number;
    name: String;
    username: String;
    email: String;
    address: IUserAddress;
    phone: String;
    website: String;
    company: ICompany;
}
