export interface IAddTaskPhaseDetailsProps {
  name?: string;
  description?: string;
  iconName: string;
  phaseNumber: number;
  setName?: (value: string) => void;
  setDescription?: (value: string) => void;
  setShowPickerPopup: (value: boolean) => void;
  openNextPhaseForm?: () => void;
  updateShowTaskPhaseContainer: (value: boolean) => void;
  displayPreviousPhase: () => void;
  OnFinish: () => void;
  OnCancel: (routes: {name: string}[]) => void;
}
