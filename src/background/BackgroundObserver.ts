import { ServerService } from '../core/ServerService';
import { IBookmark } from '../core/Interfaces/IBookmark';

export class BackgroundObserver {

    private serverService: ServerService;
    private bookmarksMap: Map<number, IBookmark>;
    private eventType = {
        info: this.getBookmarkInfo,
        post: this.postBookmark,
    };
    private tabsObserver;

    constructor(serverService: ServerService) {

        this.serverService = serverService;
        this.bookmarksMap = new Map<number, IBookmark>();
        this.getBookmarks()
            .then(bookmarks => {
                this.openBookmarks(bookmarks)
            });
        this.initSubscriber();
        this.tabsObserver = chrome.tabs.onActivated.addListener((activeInfo => {
            this.deleteBookmark(activeInfo.tabId);
        }))
    }

    initSubscriber(): void {
        chrome.runtime.onMessage.addListener(
            (request, sender, sendResponse) => {
                if (request) {
                    console.log(request);
                    request.data = request.data || sender.tab.id;
                    this.eventType[request.type].apply(this, [request.data, sendResponse]);
                    return true;
                }
            });
    }

    getBookmarkInfo(tabId: number, sendResponse): void {
        let response = {};
        response['data'] = this.bookmarksMap.get(tabId);
        sendResponse(response);
    }

    postBookmark(bookmark: IBookmark, sendResponse): void {
        this.serverService.postBookmark(bookmark)
            .then(response => {
                sendResponse({ type: 'Success' });
            })
            .catch(error => sendResponse({ type: 'Error' }));
    }

    getBookmarks(): Promise<IBookmark[]> {
        return this.serverService.getBookmarks()
    }

    openBookmarks(bookmarks: IBookmark[]): void {
        bookmarks.forEach(bookmark => {
            console.log(`${bookmark.url}`);
            chrome.tabs.create({ url: bookmark.url, active: false }, (tab => {
                this.bookmarksMap.set(tab.id, bookmark);
                console.log(`${tab.id} - ${bookmark.url}`);
            }))
        });
    }

    deleteBookmark(tabId): void {
        const bookmark = this.bookmarksMap.get(tabId);
        if (bookmark) {
            this.serverService.deleteBookmark(bookmark._id)
                .then(() => this.bookmarksMap.delete(Number(bookmark._id)));
        }
    }
}