import { Form } from 'antd';

import { Subtask, TypeCriteria, useTaskStore } from '@/entities/task';
import { InputNumber, ButtonBefore } from './ui';

export const SubtaskInput = ({ criteria }: IProps) => {
  const form = Form.useFormInstance();

  const setCriteriaPoints = useTaskStore((state) => state.setCriteriaPoints);

  const { id, text, max, value } = criteria;

  const fieldName = `subtaskInput${id}`;

  const maxValue = max || 0;

  const isDone = maxValue === value;

  const updateSubtask = (id: number, value: number): void => {
    setCriteriaPoints(id, value);

    form.setFieldValue(fieldName, value);
  };

  const buttonBefore = isDone ? (
    <ButtonBefore variant="delete" onClick={() => updateSubtask(id, 0)} />
  ) : (
    <ButtonBefore variant="like" onClick={() => updateSubtask(id, maxValue)} />
  );

  const inputSlotComponent = (
    <>
      {`Max points ${maxValue}`}
      <InputNumber
        fieldName={fieldName}
        buttonBefore={buttonBefore}
        max={maxValue}
        onChange={(value) => setCriteriaPoints(id, value || 0)}
      />
    </>
  );

  return <Subtask isDone={isDone} textSlot={text || ''} inputSlot={inputSlotComponent} />;
};

interface IProps {
  criteria: TypeCriteria;
}
