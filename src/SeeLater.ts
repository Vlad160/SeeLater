import { ModalController } from './modal/modal.controller';
import { ServerService } from './ServerService';
import { IPosition } from './Interfaces/IPosition';

export class SeeLater {

    seeLaterElement: HTMLElement;
    serverService: ServerService;

    constructor(serverService: ServerService) {

        this.seeLaterElement = this.constructElement();
        this.serverService = serverService;
        this.seeLaterElement.addEventListener('click', () => this.handleClick());
    }

    constructElement() {

        let seeLater: HTMLElement = document.createElement('div');
        seeLater.style.position = 'fixed';
        seeLater.style.top = '5%';
        seeLater.style.right = '5%';
        seeLater.innerHTML = 'Hello!';
        document.body.appendChild(seeLater);
        return seeLater;
    }

    handleClick(): void {

        this.seeLaterElement.appendChild(new ModalController('Added!', 5000).modal);
        // this.serverService.postBookmark() TODO:'PostBookmark staff'
    }

    getCurrentPosition(): IPosition {
        const position: any = {};
        position.x = window.scrollX;
        position.y = window.scrollY;
        return position as IPosition;

    }

}

