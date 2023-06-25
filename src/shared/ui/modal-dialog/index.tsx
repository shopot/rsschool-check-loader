import { Button, Grid, Modal } from 'antd';
import { ReactNode } from 'react';

const { useBreakpoint } = Grid;

export const ModalDialog = ({
  children,
  open,
  handleCopy,
  handleClose,
}: ModalDialogProps): JSX.Element => {
  const { sm } = useBreakpoint();

  return (
    <Modal
      centered
      open={open}
      onCancel={handleClose}
      width={sm ? '80%' : '100%'}
      footer={[
        <Button key="copy" type="primary" onClick={handleCopy}>
          Copy
        </Button>,
        <Button key="close" onClick={handleClose}>
          Close
        </Button>,
      ]}
    >
      {children}
    </Modal>
  );
};

type ModalDialogProps = {
  children: ReactNode;
  open: boolean;
  handleCopy: () => void;
  handleClose: () => void;
};
