import { Meta } from "@angular/platform-browser";
import { Pagination } from "./pagination";

export interface ResponseData<T> {
    data: T,
    meta: Meta,
    pagination: Pagination
}