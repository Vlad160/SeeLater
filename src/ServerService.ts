import { IBookmark } from './Interfaces/IBookmark';

export class ServerService {

    private api: string = 'localhost:3000';

    constructor() {

    }

    postBookmark(bookmark: IBookmark): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('post', `${this.api}/bookmark`);
            xhr.setRequestHeader('Content-type', 'application-json');
            xhr.send(JSON.stringify(bookmark));
            xhr.onload = () => {
                resolve('Done!');
            };
            xhr.onerror = () => {
                reject('Error!');
            }
        })
    }

}