import { Divider, Typography } from 'antd';
import { Fragment } from 'react';

import styles from './styles.module.scss';

import { CriteriaType, useTaskStore } from '@/entities/task';
import { linkifyText } from '@/shared/lib';
import { SubtaskInput } from '@/features/subtask-input';
import { PenaltyInput } from '@/features/penalty-input';

export const CheckList = (): JSX.Element => {
  const { criteriaResults } = useTaskStore();

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
      return <SubtaskInput key={id} criteria={criteriaItem} />;
    } else if (type === CriteriaType.Penalty) {
      let penaltyTitle: JSX.Element | null = null;

      if (!isPenaltyTitleShowed) {
        penaltyTitle = <Divider>Penalty</Divider>;
        isPenaltyTitleShowed = true;
      }

      return (
        <Fragment key={id}>
          {penaltyTitle !== null && penaltyTitle}
          <PenaltyInput criteria={criteriaItem} />
        </Fragment>
      );
    }
  });

  return <>{list}</>;
};
