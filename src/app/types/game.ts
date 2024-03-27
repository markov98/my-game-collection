import { User } from "./user";

export interface Game {
    name: string,
    year: number,
    developer: string,
    uploader: User,
    userUrl: string
}