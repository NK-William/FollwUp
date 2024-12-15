import {useState} from 'react';
import {IModalPhase} from '../../interfaces';
import {IPhaseEditForm} from './interface';

export const usePhaseEditForm = (obj: IPhaseEditForm) => {
  const [phase, setPhase] = useState<IModalPhase>({...obj});

  const onCancel = () => {
    obj.cancel();
    setPhase(p => ({...p, name: '', description: undefined, icon: undefined}));
  };

  return {phase, setPhase, onCancel};
};
