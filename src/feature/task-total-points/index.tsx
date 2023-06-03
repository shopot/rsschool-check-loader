import { TaskTotalPointsUI } from '@/feature/task-total-points/ui';
import { useTaskStore } from '@/entities/task';

export const TaskTotalPoints = (): JSX.Element => {
  const totalPoints = useTaskStore.getState().totalPoints();

  return <TaskTotalPointsUI points={totalPoints} />;
};
