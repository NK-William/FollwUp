import {IIconNameType} from '../../interfaces';

export interface IAddTaskPhaseDetailsProps {
  name?: string;
  description?: string;
  phaseNumber: number;
  icon?: IIconNameType;
  setName?: (value: string) => void;
  setDescription?: (value: string) => void;
  IconSelected?: (icon: IIconNameType) => void;
  openNextPhaseForm?: () => void;
  updateShowTaskPhaseContainer: (value: boolean) => void;
  displayPreviousPhase: () => void;
  onFinish: () => void;
  onCancel: () => void;
}
