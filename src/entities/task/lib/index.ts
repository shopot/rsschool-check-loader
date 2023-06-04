import { CriteriaType, TypeCriteria } from '../model';

export const createAbortSignal = (timeout: number): AbortSignal => {
  const controller = new AbortController();
  const signal = controller.signal;

  // Cancel the fetch request in ms
  setTimeout(() => controller.abort(), timeout);

  return signal;
};

export const createCriteria = (arr: TypeCriteria[]): TypeCriteria[] => {
  let counter = 1;

  return arr.map((item) => {
    let input = false;

    if (item.type === CriteriaType.Penalty && item.text?.includes('per each')) {
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
