import { Button } from 'antd';

import { useTaskStore } from '@/entities/task';
import { useNotification } from '@/shared/lib';
import { createReport } from './lib';
import { useReportStore } from '@/entities/report';

export const CreateReportButton = (): JSX.Element => {
  const [setContent, toggleIsOpen] = useReportStore((state) => [
    state.setContent,
    state.toggleIsOpen,
  ]);

  const { error, contextHolder } = useNotification();

  const [validateReport, getCriteriaResults, getTotalPoints] = useTaskStore((state) => [
    state.validateReport,
    state.getCriteriaResults,
    state.getTotalPoints,
  ]);

  const handleCreateReport = (): void => {
    if (!validateReport()) {
      return error('Please complete all mandatory fields');
    }

    const report = createReport(getCriteriaResults(), getTotalPoints());

    setContent(report);

    toggleIsOpen();
  };

  return (
    <>
      {contextHolder}
      <Button type={'primary'} className="btn" onClick={handleCreateReport}>
        Create Report
      </Button>
    </>
  );
};
