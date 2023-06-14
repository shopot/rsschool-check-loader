import { LayoutPage, Loader } from '@/shared/ui';
import { TaskLoader } from '@/features/task-loader';

import { CheckList } from '@/widgets/check-list';
import { useTaskStore } from '@/entities/task';
import { lazy, Suspense } from 'react';

const TaskCard = lazy(async () => ({
  default: (await import('@/widgets/task-card')).TaskCard,
}));

export const HomePage = (): JSX.Element => {
  const [isLoading] = useTaskStore((state) => [state.isLoading]);

  const title = 'RS School cross-check';

  const content = (
    <>
      <TaskLoader />
      {isLoading && <Loader />}
      {!isLoading && (
        <Suspense fallback={<Loader />}>
          <TaskCard slotCheckList={<CheckList />} />{' '}
        </Suspense>
      )}
    </>
  );

  return <LayoutPage slotTitle={title} slotContent={content} />;
};
