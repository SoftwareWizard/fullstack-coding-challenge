import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Blocks, Status } from '../models';

const API_SEGMENT = 'api/v1';
@Injectable({
  providedIn: 'root'
})
export class NodeService {
  constructor(private http: HttpClient) {}

  public getNodes(url: string): Observable<Status> {
    return this.http.get<Status>(`${url}/${API_SEGMENT}`);
  }

  public async getBlocks(url: string): Promise<Blocks> {
    return await this.http.get<Blocks>(`${url}/${API_SEGMENT}`).toPromise();
  }
}
