import { Layout, Typography } from 'antd';

import styles from './styles.module.scss';

import { useTaskStore } from '@/entities/task';
import { Loader } from '@/shared/ui';
import { TaskLoader } from '@/features/task-loader';
import { TaskCard } from '@/widgets/task-card';
import { CheckList } from '@/widgets/check-list';

export const HomePage = (): JSX.Element => {
  const [isLoading, loadedIn] = useTaskStore((state) => [
    state.isLoading,
    !!state.criteriaResults.length,
  ]);

  return (
    <Layout className={styles.layout}>
      <Layout.Content className={styles.contentStyle}>
        <Typography.Title style={{ textAlign: 'center' }}>RS School cross-check</Typography.Title>
        <TaskLoader />
        {isLoading && <Loader />}
        {!isLoading && loadedIn && (
          <TaskCard>
            <CheckList />
          </TaskCard>
        )}
      </Layout.Content>
    </Layout>
  );
};
