export interface IAddTaskPhaseDetailsProps {
  name?: string;
  description?: string;
  phaseNumber: number;
  setName?: (value: string) => void;
  setDescription?: (value: string) => void;
  IconSelected?: (iconName: string) => void;
  openNextPhaseForm?: () => void;
  updateShowTaskPhaseContainer: (value: boolean) => void;
  displayPreviousPhase: () => void;
  OnFinish: () => void;
  OnCancel: (routes: {name: string}[]) => void;
}
