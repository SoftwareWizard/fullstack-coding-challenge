import { environment } from '../../../../environments/environment';
import { Node } from '../models';

export const statusFeatureKey = 'status';

export interface StatusState {
  nodes: Node[];
}

export const initialStatusState: StatusState = {
  nodes: initNodes()
};

function initNodes(): Node[] {
  return environment.serverUrls.map((serverUrl, index) => {
    return {
      id: index + 1,
      name: `Node ${index + 1}`,
      url: serverUrl,
      isOnline: undefined,
      isLoading: false,
      isExpanded: false,
      status: undefined
    } as Node;
  });
}
