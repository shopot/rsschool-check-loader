import { LayoutPage, Loader } from '@/shared/ui';
import { TaskLoader } from '@/features/task-loader';
import { TaskCard } from '@/widgets/task-card';
import { CheckList } from '@/widgets/check-list';
import { useTaskStore } from '@/entities/task';

export const HomePage = (): JSX.Element => {
  const [isLoading, loadedIn] = useTaskStore((state) => [
    state.isLoading,
    !!state.criteriaResults.length,
  ]);

  const title = 'RS School cross-check';

  const content = (
    <>
      <TaskLoader />
      {isLoading && <Loader />}
      {!isLoading && loadedIn && <TaskCard slotCheckList={<CheckList />} />}
    </>
  );

  return <LayoutPage slotTitle={title} slotContent={content} />;
};
