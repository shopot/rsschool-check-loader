import { Divider } from 'antd';
import { Fragment } from 'react';

import { PenaltySwitch, SubtaskInput, CriteriaType, useTaskStore } from '@/entities/task';

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
      return <Divider key={id}> {title}</Divider>;
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
