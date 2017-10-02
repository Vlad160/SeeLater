import { BackgroundObserver } from './BackgroundObserver';
import { seeLater, serverService } from '../content/script';


let backgroundObserver = new BackgroundObserver(seeLater, serverService);

