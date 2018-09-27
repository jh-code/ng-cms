export interface Setting {
  name: string;
  value: any;
  canDelete: boolean;
  canEdit: boolean;
  show: boolean;
  type: string;
  options?: any[] | string;
}
