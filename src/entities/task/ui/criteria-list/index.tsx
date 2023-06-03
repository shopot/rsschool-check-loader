import { Divider } from 'antd';
import { Fragment } from 'react';

import { TypeCriteria } from '../../model';
import { CriteriaPenalty } from '../criteria-penalty';
import { CriteriaSubtask } from '../criteria-subtask';

export const CriteriaList = ({
  criteriaArray,
  handleSubtaskChange,
  handlePenaltyChange,
}: ICriteriaListPros): JSX.Element => {
  let isPenaltyTitleShowed = false;

  const list = criteriaArray.map((criteriaItem) => {
    const { type, id, title } = criteriaItem;

    if (type === 'title') {
      return <Divider key={id}> {title}</Divider>;
    } else if (type === 'subtask') {
      return <CriteriaSubtask key={id} criteria={criteriaItem} onChange={handleSubtaskChange} />;
    } else if (type === 'penalty') {
      let penaltyTitle: JSX.Element | null = null;

      if (isPenaltyTitleShowed) {
        penaltyTitle = <Divider key="penalty">Penalty</Divider>;
        isPenaltyTitleShowed = true;
      }

      return (
        <Fragment key={id}>
          {penaltyTitle !== null && penaltyTitle}
          <CriteriaPenalty criteria={criteriaItem} onChange={handlePenaltyChange} />
        </Fragment>
      );
    }
  });

  return <>{list}</>;
};

interface ICriteriaListPros {
  criteriaArray: TypeCriteria[];
  handleSubtaskChange: (id: number, value: number) => void;
  handlePenaltyChange: (checked: boolean, id: number, max: number) => void;
}
