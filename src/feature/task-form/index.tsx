import { TaskForm } from './ui';

import { useTaskStore } from '@/entities/task';

export const TaskFormContainer = (): JSX.Element => {
  const { fetchTask } = useTaskStore();

  const handleSubmit = (url: string) => {
    fetchTask(url);
  };
  return <TaskForm onSubmit={handleSubmit} />;
};
