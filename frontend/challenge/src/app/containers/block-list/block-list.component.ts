import { ToastrService } from 'ngx-toastr';
import { Block } from 'src/app/models';

import { Component, Input, OnInit } from '@angular/core';

import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-block-list',
  templateUrl: './block-list.component.html',
  styleUrls: ['./block-list.component.scss']
})
export class BlockListComponent implements OnInit {
  @Input() nodeId: string = '';
  public blocks: Block[] = [];

  constructor(private nodeService: NodeService, private toastr: ToastrService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.blocks = await this.nodeService.getBlocksByNodeId(this.nodeId);
      this.toastr.success(`Blocks loaded for node ${this.nodeId}`, "Success");
    } catch (error) {
      this.toastr.error(`Failed to load Blocks for node ${this.nodeId}`, "Error");
    }
  }
}
