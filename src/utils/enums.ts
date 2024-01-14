import {gray} from '../constants/colors';

export enum authFocusedEntry {
  FirstName,
  LastName,
  PhoneNumber,
  Email,
  Password,
  None,
}

export enum taskStatus {
  Rejected,
  Accepted,
  Completed,
  Pending,
}

export enum taskPhaseStatus {
  Pending,
  InProgress,
  Completed,
}

export enum TaskTabOptionEnum {
  Edit,
  Track,
}

export enum TaskStatusColor {
  Rejected = '#DE4343',
  Accepted = '#2D3DCD',
  Completed = '#2C8C2C',
  Pending = gray,
}

export enum TaskFormFieldEnum {
  name,
  phoneNumber,
  description,
}
