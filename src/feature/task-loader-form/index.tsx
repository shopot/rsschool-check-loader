import { TaskLoaderFormUI } from './ui';
import { useTaskStore } from '@/entities/task';

export const TaskLoaderForm = (): JSX.Element => {
  const { fetchTask, isLoading } = useTaskStore();

  const handleSubmit = (url: string) => {
    fetchTask(url);
  };

  return <TaskLoaderFormUI isLoading={isLoading} onSubmit={handleSubmit} />;
};
