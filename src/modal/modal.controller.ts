export class ModalController {

    private _modal: HTMLElement;

    constructor(message: string, time: number = 3000) {

        this._modal = document.createElement('div');
        this._modal.innerHTML = message;
        setTimeout(() => this.hide(), time)
    }

    get modal() {
        return this._modal;
    }

    show(): void {
        this._modal.style.display = 'block';
    }

    hide(): void {
        this._modal.remove();
    }
}