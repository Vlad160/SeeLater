import { IPosition } from '../core/Interfaces/IPosition';
import * as toastr from 'toastr'
import { IBookmark } from '../core/Interfaces/IBookmark';

export class SeeLater {

    seeLaterElement: HTMLElement;

    constructor() {

        this.seeLaterElement = this.constructElement();
        this.seeLaterElement.addEventListener('click', this.handleClick.bind(this));
        this.getAndScrollIfExist();
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

    getAndScrollIfExist(): void {
        chrome.runtime.sendMessage({ type: 'info' },
            response => {
                if (response.data) {
                    this.scrollToPosition(response.data as IBookmark);
                }
            }
        )

    }

    postBookmark(bookmark: IBookmark): void {
        console.log(bookmark);
        let request = {};
        request['type'] = 'post';
        request['data'] = bookmark;
        chrome.runtime.sendMessage(request, response => {
            if (response.type == 'Success') {
                toastr.success('Success!');
            }
            else {
                toastr.error('Error');
            }
        })
    }
}
