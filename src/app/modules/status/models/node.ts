export interface Node {
  id: number;
  url: string;
  name: string;
  status?: string;
  isLoading: boolean;
  isOnline?: boolean;
  isExpanded: boolean;
}
