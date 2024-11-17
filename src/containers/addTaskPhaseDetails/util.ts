import {useNavigation} from '@react-navigation/native';

export const useAddTaskPhaseDetails = (
  phaseNumber: number,
  updateShowTaskPhaseContainer: (value: boolean) => void,
  displayPreviousPhase: () => void,
) => {
  const navigation = useNavigation();

  const returnToPrevious = () => {
    phaseNumber === 1
      ? updateShowTaskPhaseContainer(false)
      : displayPreviousPhase();
  };

  return {returnToPrevious};
};
