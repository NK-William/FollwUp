export interface IAddTaskPhaseDetailsProps {
  name?: string;
  description?: string;
  phaseNumber?: number;
  setName?: (value: string) => void;
  setDescription?: (value: string) => void;
  addPhase?: () => void;
  updateShowTaskPhaseContainer: (value: boolean) => void;
  displayPreviousPhase: () => void;
}
