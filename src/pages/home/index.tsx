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

  return (
    <LayoutPage
      slotTitle="RS School cross-check"
      slotContent={
        <>
          <TaskLoader />
          {isLoading && <Loader />}
          {!isLoading && loadedIn && <TaskCard slotCheckList={<CheckList />} />}
        </>
      }
    />
  );
};
