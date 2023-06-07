import { Divider, Typography } from 'antd';
import { Fragment } from 'react';

import styles from './styles.module.scss';

import { PenaltySwitch, SubtaskInput, CriteriaType, useTaskStore } from '@/entities/task';
import { linkifyText } from '@/shared/lib';

export const CheckList = (): JSX.Element => {
  const { criteriaResults, setCriteriaPoints } = useTaskStore();

  const handleSubtaskChange = (id: number, value: number): void => {
    setCriteriaPoints(id, value);
  };

  const handlePenaltyChange = (checked: boolean, id: number, max: number): void => {
    if (checked) {
      setCriteriaPoints(id, max);
    } else {
      setCriteriaPoints(id, 0);
    }
  };

  let isPenaltyTitleShowed = false;

  const list = criteriaResults.map((criteriaItem) => {
    const { type, id, title } = criteriaItem;

    if (type === CriteriaType.Title) {
      if (title !== undefined) {
        return (
          <Typography.Title key={id} level={5} className={styles.criteriaTitle}>
            <span dangerouslySetInnerHTML={{ __html: linkifyText(title) }} />
          </Typography.Title>
        );
      }

      return null;
    } else if (type === CriteriaType.Subtask) {
      return <SubtaskInput key={id} criteria={criteriaItem} onChange={handleSubtaskChange} />;
    } else if (type === CriteriaType.Penalty) {
      let penaltyTitle: JSX.Element | null = null;

      if (!isPenaltyTitleShowed) {
        penaltyTitle = <Divider>Penalty</Divider>;
        isPenaltyTitleShowed = true;
      }

      return (
        <Fragment key={id}>
          {penaltyTitle !== null && penaltyTitle}
          <PenaltySwitch criteria={criteriaItem} onChange={handlePenaltyChange} />
        </Fragment>
      );
    }
  });

  return <>{list}</>;
};
