import { ReactEventHandler } from 'react';
import { iconTypes } from './icontypes';

type props = {
  type: string;
  classValues: string;
  onClick?: ReactEventHandler;
};

export const MabetIcon = ({ type, classValues, onClick }: props) => {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type as keyof typeof iconTypes](classValues!)}
    </span>
  );
};
