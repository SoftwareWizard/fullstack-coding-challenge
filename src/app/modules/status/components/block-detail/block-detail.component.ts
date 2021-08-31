
import { Component, Input } from '@angular/core';

import { Block } from '../../models';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.scss']
})
export class BlockDetailComponent {
  @Input() block: Block = {} as Block;
}
