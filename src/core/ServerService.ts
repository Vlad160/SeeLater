import { IBookmark } from './Interfaces/IBookmark';

export class ServerService {

    private api: string = 'http://localhost:3000';

    constructor() {

    }

    postBookmark(bookmark: IBookmark): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('post', `${this.api}/bookmark`);
            xhr.setRequestHeader('Content-type', 'application/json');
            xhr.send(JSON.stringify(bookmark));
            xhr.onload = () => {
                resolve('Done!');
            };
            xhr.onerror = () => {
                reject('Error!');
            }
        })
    }

    getBookmarks(): Promise<IBookmark[]> {
        return new Promise<IBookmark[]>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('get', `${this.api}/bookmark`);
            xhr.send();
            xhr.onload = () => {
                resolve(JSON.parse(xhr.responseText) as IBookmark[]);
            };
            xhr.onerror = () => {
                reject('Error!');
            }
        })
    }


}