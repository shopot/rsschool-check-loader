import ReactMarkdown from 'react-markdown';
import copy from 'copy-to-clipboard';

import { useReportStore } from '@/entities/report';
import { ModalDialog } from '@/shared/ui';
import { useNotification } from '@/shared/lib';

export const ReportDialog = (): JSX.Element => {
  const { success, contextHolder } = useNotification();

  const [isOpen, toggleIsOpen, content] = useReportStore((state) => [
    state.isOpen,
    state.toggleIsOpen,
    state.content,
  ]);

  const copyToClipboard = () => {
    copy(content);

    success('Text successfully copied to clipboard');
  };

  return (
    <>
      {contextHolder}
      <ModalDialog open={isOpen} handleCopy={copyToClipboard} handleClose={toggleIsOpen}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </ModalDialog>
    </>
  );
};
