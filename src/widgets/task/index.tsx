import { Button, Divider, Form, Typography } from 'antd';

import { useTaskStore } from '@/entities/task';
import { TaskTotalPoints } from '@/feature/task-total-points';
import { TaskCheckList } from '@/feature/task-check-list';

export const Task = (): JSX.Element => {
  const { taskName, taskInformation } = useTaskStore();
  const [form] = Form.useForm();

  const { Title } = Typography;

  const handleResetTotalPoints = () => {
    useTaskStore.getState().resetTotalPoints();

    form.resetFields();
  };

  return (
    <>
      <Title level={4}>Task name: {taskName}</Title>
      <Divider />
      <TaskTotalPoints />
      <Title level={5}>{taskInformation}</Title>
      <Form form={form}>
        <TaskCheckList />
      </Form>
      <TaskTotalPoints />
      <Divider />
      <Button type={'default'} onClick={handleResetTotalPoints}>
        Reset
      </Button>
    </>
  );
};
