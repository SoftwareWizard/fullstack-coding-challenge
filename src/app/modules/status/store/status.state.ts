export const statusFeatureKey = 'status';

export interface StatusState {
  counter: number;
  isLoading: boolean;
}

export const initialStatusState: StatusState = {
  counter: 0,
  isLoading: false
};
