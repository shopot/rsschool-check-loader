import { CriteriaType, TypeCriteria } from '../model';

export const createCriteria = (arr: TypeCriteria[]): TypeCriteria[] => {
  let counter = 1;

  return arr.map((item) => {
    let input = false;

    if (item.type === CriteriaType.Penalty && (item.text?.includes('per each') || item.max === 0)) {
      input = true;
    }

    return {
      ...item,
      id: counter++,
      value: 0,
      input: input,
    };
  });
};
