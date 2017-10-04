import { BackgroundObserver } from './BackgroundObserver';
import { ServerService } from '../core/ServerService';

let serverService = new ServerService();
let backgroundObserver = new BackgroundObserver(serverService);
