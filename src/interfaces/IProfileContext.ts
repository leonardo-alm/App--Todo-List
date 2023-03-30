import { Dispatch, SetStateAction } from "react";
import { IUser } from "./IUser";

export interface IProfileContext {
    currentUser: IUser
    setCurrentUser: Dispatch<SetStateAction<IUser>>;
}