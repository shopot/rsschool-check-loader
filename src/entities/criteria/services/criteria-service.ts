import data from '../model';

export const criteriaService = {
  getTaskName: () => {
    return data.task.taskName;
  },
  getInformation: () => {
    return data.task.information;
  },
  getCriteriaArray: () => {
    let counter = 1;

    return data.task.criteria.map((item) => {
      return {
        id: counter++,
        ...item,
        value: 0,
      };
    });
  },
  createCriteriaArray: (array: TypeCriteriaItem[]) => {
    let counter = 1;

    return array.map((item) => {
      return {
        ...item,
        id: counter++,
        value: 0,
      };
    });
  },
};
