import {IModalPhase} from '../../interfaces';
import {PhaseSubmissionActionEnum} from '../../utils/enums';

export interface IPhaseEditForm extends IModalPhase {
  positiveButtonToPerform: PhaseSubmissionActionEnum;
  cancel: () => void;
}
