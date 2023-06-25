import { Form } from 'antd';

import { Subtask, TypeCriteria, useTaskStore } from '@/entities/task';
import { InputNumber, ButtonBefore } from './ui';
import { linkifyText } from '@/shared/lib';

export const SubtaskInput = ({ criteria }: SubtaskInputProps) => {
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

  const textSlotString = linkifyText(text || '');

  const inputSlotComponent = (
    <>
      {`Max points ${maxValue}`}
      <InputNumber
        fieldName={fieldName}
        buttonBefore={
          <ButtonBefore
            variant={isDone ? 'delete' : 'like'}
            onClick={() => updateSubtask(id, isDone ? 0 : maxValue)}
          />
        }
        max={maxValue}
        onChange={(value) => setCriteriaPoints(id, value || 0)}
      />
    </>
  );

  return <Subtask isDone={isDone} textSlot={textSlotString} inputSlot={inputSlotComponent} />;
};

type SubtaskInputProps = {
  criteria: TypeCriteria;
};
