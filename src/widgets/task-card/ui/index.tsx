import { Divider, Form, Typography } from 'antd';

import { useTaskStore } from '@/entities/task';
import { ResetForm } from '@/features/reset-form';
import { TotalPoints } from '@/shared/ui';
import { linkifyText } from '@/shared/lib';

export const TaskCard = ({ slotCheckList }: TaskCardProps): JSX.Element => {
  const { taskName, github, taskInformation } = useTaskStore();
  const [form] = Form.useForm();

  const totalPoints = useTaskStore.getState().totalPoints();

  const { Title, Paragraph } = Typography;

  return (
    <>
      <Title level={4}>Task name: {taskName}</Title>
      <a href={github} target="_blank" rel="noreferrer">
        {github}
      </a>
      <Divider />
      <TotalPoints points={totalPoints} />
      <Paragraph>
        <span dangerouslySetInnerHTML={{ __html: linkifyText(taskInformation) }} />
      </Paragraph>
      <Form form={form}>{slotCheckList}</Form>
      <TotalPoints points={totalPoints} />
      <Divider />
      <ResetForm form={form} />
    </>
  );
};

interface TaskCardProps {
  slotCheckList?: JSX.Element;
}
