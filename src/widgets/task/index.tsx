import { Button, Divider, Form, Space, Typography } from 'antd';

import { useTaskStore } from '@/entities/task';
import { TaskTotalPoints } from '@/feature/task-total-points';
import { TaskCheckList } from '@/feature/task-check-list';

export const Task = (): JSX.Element => {
  const { taskName, github, taskInformation } = useTaskStore();
  const [form] = Form.useForm();

  const { Title } = Typography;

  const handleResetTotalPoints = () => {
    useTaskStore.getState().resetTotalPoints();

    form.resetFields();
  };

  return (
    <>
      <Title level={4}>Task name: {taskName}</Title>
      <a href={github} target="_blank" rel="noreferrer">
        {github}
      </a>
      <Divider />
      <TaskTotalPoints />
      <Title level={5}>{taskInformation}</Title>
      <Form form={form}>
        <TaskCheckList />
      </Form>
      <TaskTotalPoints />
      <Divider />
      <Space align="center" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button type={'default'} style={{ width: '200px' }} onClick={handleResetTotalPoints}>
          Reset
        </Button>
      </Space>
    </>
  );
};
