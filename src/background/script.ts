import { serverService } from '../content/script';
import { sl } from '../content/script';
import { IBookmark } from '../core/Interfaces/IBookmark';


serverService.getBookmarks()
    .then(response => sl.openPreviousBookmarks(response));

let bookmark = {
    url: 'http://www.google.com',
    x: 0,
    y: 0,
};

serverService.postBookmark(bookmark as IBookmark);