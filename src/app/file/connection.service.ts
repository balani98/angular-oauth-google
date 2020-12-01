import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
 file=new Subject<string>();
}
