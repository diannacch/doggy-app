import { Images } from "./images";
import { User } from "./user";

export interface Gif {
    id: string,
    url: string,
    embed_url: string,
    username: string,
    title: string,
    images: Images
    user: User
}