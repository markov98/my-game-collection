import { Comment } from "./coment"

export interface Game {
    name: string,
    year: number,
    developer: string,
    uploaderId: string | undefined,
    imgUrl: string,
    comments: Comment[]
}