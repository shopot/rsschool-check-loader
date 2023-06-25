import { Divider, Form, Space, Typography } from 'antd';

import styles from './styles.module.scss';

import { useTaskStore } from '@/entities/task';
import { TaskInformation, TotalPoints } from '@/shared/ui';
import { linkifyText } from '@/shared/lib';
import { CreateReportButton, ResetFormButton } from '@/features/task';

export const TaskForm = ({ slotCheckList }: TaskCardProps): JSX.Element => {
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
      <Title className={styles.taskName} level={4}>
        Task name: {taskName}
      </Title>
      <a href={github} target="_blank" rel="noreferrer">
        {github}
      </a>
      <Divider />
      {isChecklistEmpty ? (
        <Title level={5}>There is no data for this task!</Title>
      ) : (
        <>
          <TotalPoints points={totalPoints} />
          {taskInformation.trim().length > 0 && (
            <TaskInformation>
              <span dangerouslySetInnerHTML={{ __html: linkifyText(taskInformation) }} />
            </TaskInformation>
          )}
          <Form form={form}>{slotCheckList}</Form>
          <TotalPoints points={totalPoints} />
          <Divider />
          <Space align="center" className={styles.buttons}>
            <CreateReportButton />
            <ResetFormButton form={form} />
          </Space>
        </>
      )}
    </>
  );
};

interface TaskCardProps {
  slotCheckList?: JSX.Element;
}
