type TypeCriteriaItem = {
  id?: number;
  type: string;
  title?: string;
  text?: string;
  max?: number;
  value?: number;
};

type TypeResponseTaskJSON = {
  taskName: string;
  github: string;
  information: string;
  criteria: TypeCriteriaItem[];
};
