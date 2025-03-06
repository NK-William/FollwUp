import {IModalPhase} from '../../interfaces';
import {PhaseSubmissionActionEnum} from '../../utils/enums';

export interface IPhaseEditForm extends IModalPhase {
  positiveButtonToPerform: PhaseSubmissionActionEnum;
  isLoading?: boolean;
  cancel: () => void;
  save: (phase: IModalPhase) => void;
}
