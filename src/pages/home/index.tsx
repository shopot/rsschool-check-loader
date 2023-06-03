import { Layout, Typography } from 'antd';

import styles from './styles.module.scss';

import { useTaskStore } from '@/entities/task';
import { Loader } from '@/shared/ui';
import { TaskLoaderForm } from '@/feature/task-loader-form';
import { Task } from '@/widgets/task';

export const HomePage = (): JSX.Element => {
  const [isLoading, loadedIn] = useTaskStore((state) => [
    state.isLoading,
    !!state.criteriaResults.length,
  ]);

  console.log(isLoading);

  return (
    <Layout className={styles.layout}>
      <Layout.Content className={styles.contentStyle}>
        <Typography.Title style={{ textAlign: 'center' }}>RS School cross check</Typography.Title>
        <TaskLoaderForm />
        {isLoading && <Loader />}
        {!isLoading && loadedIn && <Task />}
      </Layout.Content>
    </Layout>
  );
};
