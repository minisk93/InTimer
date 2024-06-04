export enum UiMessageType {
  Error = 'error',
  Success = 'success'
}

export interface UiMessage {
  message: string;
  type: UiMessageType;
  title?: string;
}
