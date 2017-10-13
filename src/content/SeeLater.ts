import { IPosition } from '../core/Interfaces/IPosition';
import * as toastr from 'toastr'
import { IBookmark } from '../core/Interfaces/IBookmark';

export class SeeLater {

    seeLaterElement: HTMLElement;
    publisher: any;
    bookmark: IBookmark;

    constructor() {
        this.seeLaterElement = this.constructElement();
        this.seeLaterElement.addEventListener('click', this.handleClick.bind(this));
        this.publisher = chrome.runtime.sendMessage;
        this.getIfExist()
            .then(response => {
                if (response) this.scrollToPosition(response);
            })
            .catch(error => console.log(error))
    }

    constructElement() {

        let seeLater: HTMLElement = document.createElement('div');
        seeLater.style.position = 'fixed';
        seeLater.style.zIndex = '2000';
        seeLater.style.top = '5%';
        seeLater.style.right = '5%';
        seeLater.innerHTML = 'Hello!';
        document.body.insertBefore(seeLater, document.body.children[0]);
        return seeLater;
    }

    handleClick(): void {
        let bookmark = {};
        bookmark['url'] = window.location.href;
        bookmark['position'] = this.getCurrentPosition();
        this.postBookmark(bookmark as IBookmark);
    }

    getCurrentPosition(): IPosition {
        const position: any = {};
        position.x = window.scrollX;
        position.y = window.scrollY;
        return position as IPosition;

    }

    scrollToPosition(bookmark: IBookmark): void {
        window.scrollTo(bookmark.position.x, bookmark.position.y)
    }

    getIfExist(): Promise<any> {
        return new Promise((resolve, reject) => this.publisher({ type: 'info' },
            response => {
                if (response.data) {
                    this.bookmark = response.data;
                }
                resolve(response.data);
            }
        ))
    }

    postBookmark(bookmark: IBookmark): void {
        let request = {};
        request['type'] = 'post';
        request['data'] = bookmark;
        this.publisher(request, response =>
            this.showReqResult(response)
        )
    }

    showReqResult(response): void {
        if (response.type == 'Success') {
            this.showSuccess()
        }
        else {
            this.showError();
        }
    }

    showSuccess(): void {
        toastr.success('Success!');
    }

    showError(): void {
        toastr.error('Error');
    }
}
