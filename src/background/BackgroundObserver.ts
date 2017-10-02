import { SeeLater } from '../content/SeeLater';
import { ServerService } from '../core/ServerService';
import { serverService } from '../content/script';
import { IBookmark } from '../core/Interfaces/IBookmark';

export class BackgroundObserver {

    private seeLater: SeeLater;
    private serverService: ServerService;

    constructor(seeLater: SeeLater, serverService: ServerService) {

        this.seeLater = seeLater;
        this.serverService = serverService;
        this.init();

    }

    init(): void {
        this.openPreviousBookmarks();
        chrome.runtime.onMessage.addListener(
            (request, sender, sendResponse) => {
                if (request) {
                    serverService.postBookmark(request as IBookmark)
                        .then(response => {
                            sendResponse({ response });
                        })
                        .catch(error => sendResponse(error));
                }
                return true;
            });
    }

    openPreviousBookmarks(): void {
        serverService.getBookmarks()
            .then(bookmarks => {
                this.openBookmarks(bookmarks as IBookmark[]);
            })
    }

    openBookmarks(bookmarks: IBookmark[]): void {
        bookmarks.forEach(bookmark => {
            chrome.tabs.create({ url: bookmark.url, active: false }, (tab => {
                console.log(tab);
            }))
        })
    }
}