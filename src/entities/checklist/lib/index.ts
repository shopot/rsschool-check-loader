import { TypeChecklist, TypeResponseChecklistObject } from '../model';

export const createChecklist = (data: TypeResponseChecklistObject[]): TypeChecklist[] => {
  return data.map((item) => {
    return {
      id: item.sha,
      label: item.name.replace(/\.json$/, ''),
      value: item.download_url,
    };
  });
};
