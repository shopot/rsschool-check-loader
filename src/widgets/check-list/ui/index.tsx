import { Divider, Typography } from 'antd';
import { Fragment } from 'react';

import styles from './styles.module.scss';

import { CriteriaType, useTaskStore } from '@/entities/task';
import { linkifyText } from '@/shared/lib';
import { SubtaskInput, PenaltyInput, ReasonInput } from '@/features/task';

export const CheckList = (): JSX.Element => {
  const { criteriaResults } = useTaskStore();

  const { Title } = Typography;

  let isPenaltyTitleShowed = false;

  const list = criteriaResults.map((criteriaItem) => {
    const { type, id, title, isReasonEnabled, reason } = criteriaItem;

    if (type === CriteriaType.Title) {
      if (title !== undefined) {
        return (
          <Title key={id} level={5} className={styles.criteriaTitle}>
            <span dangerouslySetInnerHTML={{ __html: linkifyText(title) }} />
          </Title>
        );
      }

      return null;
    } else if (type === CriteriaType.Subtask) {
      return (
        <Fragment key={id}>
          <SubtaskInput criteria={criteriaItem} />
          {isReasonEnabled && <ReasonInput criteriaId={id} reason={reason} />}
        </Fragment>
      );
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
          {isReasonEnabled && <ReasonInput criteriaId={id} reason={reason} />}
        </Fragment>
      );
    }
  });

  return <>{list}</>;
};
