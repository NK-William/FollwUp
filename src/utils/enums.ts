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
  Pending,
  Accepted,
  Completed,
  Rejected,
}

export enum taskPhaseStatus {
  Pending,
  InProgress,
  Completed,
}

export enum roleType {
  Viewer,
  Tracker,
  Editor,
}

export enum TaskTabOptionEnum {
  Edit,
  Track,
}

export enum TaskStatusColor {
  Rejected = '#DE4343',
  Accepted = '#2D3DCD',
  Completed = '#2C8C2C',
  Pending = 'gray',
}

export enum TaskFormFieldEnum {
  name,
  clientFirstName,
  clientLastName,
  ClientEmailAddress,
  ClientPhoneNumber,
  description,
  organization,
  eta,
}

export enum ModalEnum {
  ViewDetails,
  Edit,
  None,
}

export enum PhaseSubmissionActionEnum {
  Add,
  Edit,
}

export enum updateProfileEnum {
  FirstName,
  LastName,
  PhoneNumber,
}
