export const statusFeatureKey = 'status';

export interface StatusState {
  nodes: Node[];
}

export const initialStatusState: StatusState = {
  nodes: []
};
