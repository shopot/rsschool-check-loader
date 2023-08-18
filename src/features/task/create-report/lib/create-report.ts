import { CriteriaType, TypeCriteria } from '@/entities/task';

export const createReport = (criteriaResults: TypeCriteria[], totalPoints: number): string => {
  const subtaskResults: string[] = [];

  criteriaResults
    .filter(
      ({ type, isReasonEnabled }) => type === CriteriaType.Subtask && isReasonEnabled === true
    )
    .forEach((subtask) => {
      const { text, max, value, reason } = subtask;

      if (text) {
        const strData = `### ${text}\n\n#### Assessment: ${value}/${max || 'NA'}\n\n${reason}`;

        subtaskResults.push(strData);
      }
    });

  const penaltyResults: string[] = [];

  criteriaResults
    .filter(({ type, value }) => type === CriteriaType.Penalty && value !== 0)
    .forEach((subtask) => {
      const { text, value, reason } = subtask;

      if (text) {
        const strData = `### ${text.replace(
          /<(\/*)b>*>/g,
          ''
        )}\n\n#### Assessment: ${value}\n\n${reason}`;

        penaltyResults.push(strData);
      }
    });

  let results = [`## Total points: ${totalPoints}`];

  results = results.concat(subtaskResults);

  if (penaltyResults.length > 0) {
    results.push('## Penalty');

    results = results.concat(penaltyResults);
  }

  return results.join('\n\n');
};
