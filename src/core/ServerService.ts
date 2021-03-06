import { IBookmark } from './Interfaces/IBookmark';

export class ServerService {

    private _api: string = 'http://localhost:3000';

    constructor() {

    }

    postBookmark(bookmark: IBookmark): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('post', `${this._api}/bookmark`);
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

    getBookmarks(bookmarkUrl?: string): Promise<IBookmark[]> {
        return new Promise<IBookmark[]>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            let url = `${this._api}/bookmark`;
            if (bookmarkUrl) {
                url += `/?url=${bookmarkUrl}`;

            }
            xhr.open('get', `${url}`);
            xhr.send();
            xhr.onload = () => {
                resolve(JSON.parse(xhr.responseText) as IBookmark[]);
            };
            xhr.onerror = () => {
                reject('Error!');
            }
        })
    }

    deleteBookmark(_id: string): Promise<any> {

        const reqOptions: any = {
            method: 'delete',
            mode: 'cors',
            cache: 'default',

        };
        console.log(reqOptions);
        return fetch(`${this._api}/bookmark?_id=${_id}`, reqOptions)
    }
}