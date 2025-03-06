import {useState} from 'react';
import {IModalPhase} from '../../interfaces';
import {IPhaseEditForm} from './interface';
import {PhaseSubmissionActionEnum} from '../../utils/enums';
import Toast from 'react-native-toast-message';
import {Alert} from 'react-native';

let oldPhase: IModalPhase | undefined;

export const usePhaseEditForm = (obj: IPhaseEditForm) => {
  const {
    id,
    number,
    name,
    description,
    icon,
    status,
    positiveButtonToPerform,
    isLoading,
    save,
    cancel,
  } = obj;

  const [phase, setPhase] = useState<IModalPhase>({
    name,
    description,
    icon,
    number: number,
    status,
  });

  // Fix icon values not changing when selected
  if (!oldPhase) {
    console.log('Adding old form values');
    oldPhase = {...obj};
  }

  let titleText: string;
  let saveButtonText: string;
  let isEditMode = positiveButtonToPerform === PhaseSubmissionActionEnum.Edit;

  if (isEditMode) {
    titleText = 'Edit Phase';
    saveButtonText = 'Update';
  } else {
    titleText = 'Add New Phase';
    saveButtonText = 'Add';
  }

  const onSave = async () => {
    if (isEditMode) {
      if (!oldPhase || !id) return;
      if (allFormFieldsTheSame()) {
        Toast.show({
          type: 'info',
          text1: 'No changes were made to the phase',
        });
        onCancel();
        return;
      }

      if (!isFormValid()) {
        console.log('TODO::: display user message about name being required');
        return;
      }
      save({...phase, id});
      // TODO::: call onComplete here if pop-up is not closing.
    } else {
      if (!isFormValid()) {
        Alert.alert('Validation Error', 'Please fill in name field');
        return;
      }
      save({...phase});
      // TODO::: call onComplete here if pop-up is not closing.
    }
  };

  const onCancel = () => {
    cancel();
    setPhase(p => ({
      ...p,
      name: undefined,
      description: undefined,
      icon: undefined,
    }));
  };

  const allFormFieldsTheSame = () => {
    // console.log(JSON.stringify(oldPhase));
    // console.log(JSON.stringify(phase));
    if (
      oldPhase?.name === phase.name &&
      oldPhase?.description === phase.description &&
      oldPhase?.icon === phase.icon
    ) {
      return true;
    }

    return false;
  };

  const isFormValid = () => {
    if (!phase.name) return false;
    return true;
  };

  return {
    phase,
    titleText,
    saveButtonText,
    isLoading,
    setPhase,
    onSave,
    onCancel,
  };
};
