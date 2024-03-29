import { InjectionToken } from "@angular/core";
import { User } from "../shared/models/user";

export const getWindowObject = () => window;
export const WINDOWS_ROOT_OBJECT = new InjectionToken<Window>('WINDOWS_ROOT_OBJECT', {
    providedIn: 'root',
    factory: getWindowObject
});
export const InterceptorSkipHeader = 'SkipKey'
export const GiphyKey = 'api_key';
export const DefaultUser = <User>{
    avatar_url: 'https://media2.giphy.com/avatars/PoochofNYC/PHXxlsaZstc3.jpg',
    banner_image: '',
    banner_url: '',
    instagram_url: 'https://www.instagram.com/poochofnyc',
    is_verified: true,
    display_name: 'Agador',
    username: 'PoochofNYC'

}