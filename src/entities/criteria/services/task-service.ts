import data from '../model';

export const taskService = {
  getTaskName: () => {
    return data.task.taskName;
  },
  getInformation: () => {
    return data.task.information;
  },
  getCriteriaArray: () => {
    let counter = 1;

    const list = data.task.criteria.map((item) => {
      return {
        id: counter++,
        ...item,
        value: 0,
      };
    });

    return list;
  },
  createCriteriaArray: (array: TypeCriteriaItem[]) => {
    let counter = 1;

    const list = array.map((item) => {
      return {
        id: counter++,
        ...item,
        value: 0,
      };
    });

    return list;
  },
};
