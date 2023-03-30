import { IUser } from "./IUser";

export interface ITodo {
    id: string;
    text: string;
    done: boolean,
    user: IUser,
}