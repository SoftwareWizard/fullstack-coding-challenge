import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-node-status',
  templateUrl: './node-status.component.html',
  styleUrls: ['./node-status.component.scss']
})
export class NodeStatusComponent {
  @Input() isOnline: boolean = false;
  @Input() isLoading: boolean = false;

  public statusText = new Map([
    [true, 'online'],
    [false, 'offline'],
  ]);
}
