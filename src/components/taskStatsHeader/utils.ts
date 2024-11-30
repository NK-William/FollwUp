export const useTaskStatsHeader = (
  date: Date,
  currentPhase: number | undefined,
  PhasesSum: number,
) => {
  const getFormattedDate = () =>
    date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  const getPercentageValue = () => {
    if (currentPhase) return (currentPhase / PhasesSum) * 100;
    return 0;
  };

  return {getFormattedDate, getPercentageValue};
};
