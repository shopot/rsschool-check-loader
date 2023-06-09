import { Penalty, TypeCriteria, useTaskStore } from '@/entities/task';
import { InputNumber, Switch } from './ui';

export const PenaltyInput = ({ criteria }: PenaltyInputProps) => {
  const setCriteriaPoints = useTaskStore((state) => state.setCriteriaPoints);

  const { id, text, max, value } = criteria;

  const fieldName = `penaltyInput${id}`;

  const maxValue = max || 0;

  const isDone = criteria.input ? value !== 0 : value === maxValue;

  const handleInputChange = (value: number) => setCriteriaPoints(id, value);
  const handleSwitchChange = (checked: boolean) => setCriteriaPoints(id, checked ? maxValue : 0);

  const textSlot = maxValue !== 0 ? `${text || ''} (${maxValue} points)` : text || '';

  // Criteria input or switch
  const inputSlotComponent = criteria.input ? (
    <InputNumber fieldName={fieldName} max={maxValue} onChange={handleInputChange} />
  ) : (
    <Switch fieldName={fieldName} value={value} onChange={handleSwitchChange} />
  );

  return <Penalty isDone={isDone} textSlot={textSlot} inputSlot={inputSlotComponent} />;
};

interface PenaltyInputProps {
  criteria: TypeCriteria;
}
