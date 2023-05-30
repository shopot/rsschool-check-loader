type TypeCriteriaItem = {
  id: number;
  type: string;
  title?: string;
  text?: string;
  max?: number;
  value: number;
};

type TypeCriteria = {
  id: number;
  type: string;
  text: string;
  max: number;
  value: number;
};

type TypeResponseTaskJSON = {
  taskName: string;
  github: string;
  information: string;
  criteria: Partial<TypeCriteriaItem>[];
} | null;
