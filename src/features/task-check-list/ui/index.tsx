import { Divider } from 'antd';
import { Fragment } from 'react';

import { CriteriaPenalty, CriteriaSubtask, CriteriaType, TypeCriteria } from '@/entities/task';

export const TaskCheckListUI = ({
  criteria,
  onSubtaskChange,
  onPenaltyChange,
}: IProps): JSX.Element => {
  let isPenaltyTitleShowed = false;

  const list = criteria.map((criteriaItem) => {
    const { type, id, title } = criteriaItem;

    if (type === CriteriaType.Title) {
      return <Divider key={id}> {title}</Divider>;
    } else if (type === CriteriaType.Subtask) {
      return <CriteriaSubtask key={id} criteria={criteriaItem} onChange={onSubtaskChange} />;
    } else if (type === CriteriaType.Penalty) {
      let penaltyTitle: JSX.Element | null = null;

      if (!isPenaltyTitleShowed) {
        penaltyTitle = <Divider>Penalty</Divider>;
        isPenaltyTitleShowed = true;
      }

      return (
        <Fragment key={id}>
          {penaltyTitle !== null && penaltyTitle}
          <CriteriaPenalty criteria={criteriaItem} onChange={onPenaltyChange} />
        </Fragment>
      );
    }
  });

  return <>{list}</>;
};

interface IProps {
  criteria: TypeCriteria[];
  onSubtaskChange: (id: number, value: number) => void;
  onPenaltyChange: (checked: boolean, id: number, max: number) => void;
}
