import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Block, Status } from '../models';

export const API_SEGMENT = 'api/v1';

interface Blocks {
  data: Block[];
}

@Injectable({
  providedIn: 'root'
})
export class NodeService {
  constructor(private http: HttpClient) {}

  public getStatus(url: string): Observable<Status> {
    return this.http.get<Status>(`${url}/${API_SEGMENT}/status`);
  }

  public async getBlocks(url: string): Promise<Block[]> {
    return await this.http
      .get<Blocks>(`${url}/${API_SEGMENT}/blocks`)
      .pipe(map(blocks => blocks.data))
      .toPromise();
  }
}
