import { ToastrService } from 'ngx-toastr';

import { Component, OnInit } from '@angular/core';

import { INode } from '../../models/node';
import { NodeService } from '../../services/node.service';

@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  public nodes: INode[] = [];

  constructor(private nodeService: NodeService, private toastr: ToastrService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.nodes = await this.nodeService.getNodes();
      this.toastr.success('Nodes loaded', 'Success');
    } catch (error) {
      console.log(error);
      this.toastr.error('Loading of Nodes failed', 'Error');
    }
  }
}
