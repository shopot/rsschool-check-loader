import { Button, Modal } from 'antd';
import { ReactNode } from 'react';

export const ModalDialog = ({
  children,
  open,
  handleCopy,
  handleClose,
}: ModalDialogProps): JSX.Element => {
  return (
    <Modal
      centered
      open={open}
      onCancel={handleClose}
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
