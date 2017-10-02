import { SeeLater } from './SeeLater';
import { ServerService } from '../core/ServerService';
import '../../node_modules/toastr/build/toastr.css';

export let serverService = new ServerService();
export let seeLater: SeeLater = new SeeLater(serverService);