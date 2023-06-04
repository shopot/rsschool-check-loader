import { Form } from 'antd';

import { TaskLoaderForm } from './ui';
import { useTaskStore } from '@/entities/task';
import { TASK_JSON_URL } from '@/shared/config';
import { IFormValues } from './types.ts';

export const TaskLoader = (): JSX.Element => {
  const { fetchTask, isLoading } = useTaskStore();
  const [form] = Form.useForm<IFormValues>();

  const handleSubmit = (url: string) => {
    fetchTask(url);
  };

  const handleCopy = () => {
    form.setFieldValue('url', TASK_JSON_URL);
    void form.validateFields();
  };

  return (
    <TaskLoaderForm
      form={form}
      value={TASK_JSON_URL}
      isLoading={isLoading}
      onSubmit={handleSubmit}
      onCopy={handleCopy}
    />
  );
};
