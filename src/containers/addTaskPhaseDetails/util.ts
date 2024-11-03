export const useAddTaskPhaseDetails = (
  phaseNumber: number,
  updateShowTaskPhaseContainer: (value: boolean) => void,
  displayPreviousPhase: () => void,
) => {
  const returnToPrevious = () => {
    phaseNumber === 1
      ? updateShowTaskPhaseContainer(false)
      : displayPreviousPhase();
  };

  return {returnToPrevious};
};
