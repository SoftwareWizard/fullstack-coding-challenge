import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node-status',
  templateUrl: './node-status.component.html',
  styleUrls: ['./node-status.component.scss']
})
export class NodeStatusComponent {
  /**
   Displays if the node is online or offline, or unknown in case of error.
  */
  @Input() isOnline?: boolean = undefined;

  /**
   Displays if data is being loaded.
  */
  @Input() isLoading: boolean = false;

  public readonly statusText = new Map([
    [true, 'online'],
    [false, 'offline'],
    [undefined, 'unknown']
  ]);
}
