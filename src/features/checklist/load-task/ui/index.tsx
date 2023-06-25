import { useEffect, useState } from 'react';
import { Button, Form, Select, Space } from 'antd';

import styles from './styles.module.scss';

import { useChecklistStore } from '@/entities/checklist';
import { useTaskStore } from '@/entities/task';
import { CHECKLIST_ACTIVE_TASKS_LOCAL_URL, CHECKLIST_ACTIVE_TASKS_URL } from '@/shared/config';

export const LoadTaskForm = (): JSX.Element => {
  const [isLoading, checklist, fetchChecklist] = useChecklistStore((state) => [
    state.isLoading,
    state.results,
    state.fetchChecklist,
  ]);

  const fetchTask = useTaskStore((state) => state.fetchTask);

  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(() => {
    void fetchChecklist([CHECKLIST_ACTIVE_TASKS_LOCAL_URL, CHECKLIST_ACTIVE_TASKS_URL]);
  }, [fetchChecklist]);

  const handleChange = (value: string) => setDownloadUrl(value);

  const handleLoadChecklist = () => fetchTask(downloadUrl);

  return (
    <Space.Compact className={styles.spaceCompact}>
      <Form.Item className={styles.formItem}>
        <Select
          loading={isLoading}
          showSearch
          placeholder="Select a task"
          optionFilterProp="children"
          onChange={handleChange}
          filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
          }
          options={checklist}
        />
      </Form.Item>
      <Button type={'primary'} disabled={!downloadUrl} onClick={handleLoadChecklist}>
        Load
      </Button>
    </Space.Compact>
  );
};
