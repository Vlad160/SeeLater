import { IPosition } from './IPosition';

export interface IBookmark {
    _id?: string;
    url: string;
    position?: IPosition;
}