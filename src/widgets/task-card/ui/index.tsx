import { Divider, Form, Typography } from 'antd';

import { useTaskStore } from '@/entities/task';
import { ResetForm } from '@/features/reset-form';
import { TaskInformation, TotalPoints } from '@/shared/ui';
import { linkifyText } from '@/shared/lib';

export const TaskCard = ({ slotCheckList }: TaskCardProps): JSX.Element => {
  const [form] = Form.useForm();
  const { taskName, github, taskInformation } = useTaskStore();

  const isChecklistEmpty = useTaskStore((state) => state.criteriaResults.length === 0);

  const totalPoints = useTaskStore.getState().totalPoints();

  const { Title, Paragraph } = Typography;

  if (taskName === '' && isChecklistEmpty) {
    return <Paragraph className="text-center">Checklist is not loaded!</Paragraph>;
  }

  return (
    <>
      <Title level={4}>Task name: {taskName}</Title>
      <a href={github} target="_blank" rel="noreferrer">
        {github}
      </a>
      <Divider />
      {isChecklistEmpty ? (
        <Title level={5}>There is no data for this task!</Title>
      ) : (
        <>
          <TotalPoints points={totalPoints} />
          <TaskInformation>
            <span dangerouslySetInnerHTML={{ __html: linkifyText(taskInformation) }} />
          </TaskInformation>
          <Form form={form}>{slotCheckList}</Form>
          <TotalPoints points={totalPoints} />
          <Divider />
          <ResetForm form={form} />
        </>
      )}
    </>
  );
};

interface TaskCardProps {
  slotCheckList?: JSX.Element;
}
