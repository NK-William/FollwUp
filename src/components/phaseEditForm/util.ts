import {useState} from 'react';
import {IModalPhase} from '../../interfaces';
import {IPhaseEditForm} from './interface';
import {PhaseSubmissionActionEnum} from '../../utils/enums';

let oldPhase: IModalPhase | undefined;

export const usePhaseEditForm = (obj: IPhaseEditForm) => {
  const {
    number,
    name,
    description,
    icon,
    positiveButtonToPerform,
    save,
    cancel,
  } = obj;

  const [phase, setPhase] = useState<IModalPhase>({
    name,
    description,
    icon,
    number: number,
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

  const onSave = () => {
    if (isEditMode) {
      if (!oldPhase) return;
      if (allFormFieldsTheSame()) {
        console.log(
          'TODO::: display alert telling a user that there is nothing to save',
        );
        onCancel();
        return;
      }

      if (isFormValid()) save({...phase});

      console.log('TODO::: display user message about name being required');
    } else {
      if (isFormValid()) save({...phase});
      console.log('TODO::: display user message about name being required');
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

  return {phase, titleText, saveButtonText, setPhase, onSave, onCancel};
};
