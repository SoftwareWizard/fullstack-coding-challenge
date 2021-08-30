import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { IBlock, INode } from '../models';

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public async getNodes(): Promise<INode[]> {
    return await this.http.get<INode[]>(`${this.apiUrl}/nodes`).toPromise();
  }

  public async getBlocksByNodeId(nodeId: string): Promise<IBlock[]> {
    return await this.http.get<IBlock[]>(`${this.apiUrl}/blocks/${nodeId}`).toPromise();
  }
}
