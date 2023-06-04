import { Divider, Form, Typography } from 'antd';

import { useTaskStore } from '@/entities/task';
import { ResetForm } from '@/features/reset-form';
import { TotalPoints } from '@/shared/ui';

export const TaskCard = ({ slotCheckList }: IProps): JSX.Element => {
  const { taskName, github, taskInformation } = useTaskStore();
  const [form] = Form.useForm();

  const totalPoints = useTaskStore.getState().totalPoints();

  const { Title } = Typography;

  return (
    <>
      <Title level={4}>Task name: {taskName}</Title>
      <a href={github} target="_blank" rel="noreferrer">
        {github}
      </a>
      <Divider />
      <TotalPoints points={totalPoints} />
      <Title level={5}>{taskInformation}</Title>
      <Form form={form}>{slotCheckList}</Form>
      <TotalPoints points={totalPoints} />
      <Divider />
      <ResetForm form={form} />
    </>
  );
};

interface IProps {
  slotCheckList?: JSX.Element;
}
