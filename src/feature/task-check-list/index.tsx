import { TaskCheckListUI } from './ui';
import { useTaskStore } from '@/entities/task';

export const TaskCheckList = (): JSX.Element => {
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

  return (
    <TaskCheckListUI
      onSubtaskChange={handleSubtaskChange}
      onPenaltyChange={handlePenaltyChange}
      criteria={criteriaResults}
    />
  );
};
