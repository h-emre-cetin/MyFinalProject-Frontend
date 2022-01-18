import { ResponseModel } from "./responseModel";

export interface Category extends ResponseModel {
    categoryId:number;
    categoryName:string;
}