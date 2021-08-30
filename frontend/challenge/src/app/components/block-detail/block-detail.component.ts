import { IBlock } from 'src/app/models';

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-block-detail',
  templateUrl: './block-detail.component.html',
  styleUrls: ['./block-detail.component.scss']
})
export class BlockDetailComponent {
  @Input() block: IBlock = {} as IBlock;
}
