import { ServerService } from '../core/ServerService';
import { IPosition } from '../core/Interfaces/IPosition';
import * as toastr from 'toastr'
import { IBookmark } from '../core/Interfaces/IBookmark';
import { serverService } from './script';

export class SeeLater {

    seeLaterElement: HTMLElement;
    serverService: ServerService;

    constructor(serverService: ServerService) {

        this.seeLaterElement = this.constructElement();
        this.serverService = serverService;
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

        let href = window.location.href;
        let bookmark = Object.assign({ url: href }, this.getCurrentPosition());
        console.log(bookmark);
        chrome.runtime.sendMessage(bookmark, response => {
            console.log(response);
            // .then(() => toastr.success('Cool!'))
            // .catch(() => toastr.error('Error'));
        })

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
        serverService.getBookmarks(window.location.href)
            .then(response => {
                if (Object.keys(response)) {
                    this.scrollToPosition(response[0] as IBookmark)
                }
            })
    }
}
