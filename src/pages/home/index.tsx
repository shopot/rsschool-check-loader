import { lazy, Suspense } from 'react';

import { LayoutPage, Loader } from '@/shared/ui';
import { CheckList } from '@/widgets/check-list';
import { LoadTaskForm } from '@/features/checklist';
import { useTaskStore } from '@/entities/task';

const TaskForm = lazy(async () => ({
  default: (await import('@/widgets/task-form')).TaskForm,
}));

export const HomePage = (): JSX.Element => {
  const [isLoading] = useTaskStore((state) => [state.isLoading]);

  const title = 'RS School cross-check';

  const content = (
    <>
      <LoadTaskForm />
      {isLoading && <Loader />}
      {!isLoading && (
        <Suspense fallback={<Loader />}>
          <TaskForm slotCheckList={<CheckList />} />{' '}
        </Suspense>
      )}
    </>
  );

  return <LayoutPage slotTitle={title} slotContent={content} />;
};
