export interface IProfileState {
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly phoneNumber: string;
  readonly showPopup: boolean;
  //previous state
  readonly prevFirstName: string;
  readonly prevLastName: string;
  readonly prevPhoneNumber: string;
}
