export interface ITaskStatsHeader {
  notLinked?: boolean; // Not used
  title: string;
  currentPhase?: number;
  PhasesSum: number;
  CompletionDate: Date;
}
