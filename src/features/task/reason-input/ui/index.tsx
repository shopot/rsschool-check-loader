import { ChangeEvent } from 'react';
import { Input } from 'antd';

import styles from './styles.module.scss';

import { useTaskStore } from '@/entities/task';
import { REASON_MIN_LENGTH } from '@/shared/config';

export const ReasonInput = ({ criteriaId, reason }: ReasonInputProps): JSX.Element => {
  const setReason = useTaskStore((state) => state.setReason);

  const { TextArea } = Input;

  const statusType = reason.length < REASON_MIN_LENGTH ? 'error' : '';

  const handleChaneReason = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    const { target } = e;

    setReason(criteriaId, target.value);
  };

  return (
    <TextArea
      placeholder="Please explain the reason for the assessment"
      className={styles.textArea}
      status={statusType}
      value={reason}
      onChange={handleChaneReason}
    />
  );
};

type ReasonInputProps = {
  criteriaId: number;
  reason: string;
};
