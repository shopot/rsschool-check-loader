import { Button, Divider, Form, Layout, Spin } from 'antd';
import { useEffect, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import styles from './styles.module.scss';

import { useFetch } from '@/shared/lib';
import { CriteriaList, criteriaService } from '@/entities/criteria';
import { TASK_JSON_URL } from '@/shared/config';

const initialState = criteriaService.getCriteriaArray();

export const HomePage = (): JSX.Element => {
  const [criteriaState, setCriteriaState] = useState<TypeCriteriaItem[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);
  const { isLoading, data, error } = useFetch<TypeResponseTaskJSON>(TASK_JSON_URL, null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (!isLoading) {
      if (data?.criteria && !error) {
        const criteriaArray = criteriaService.createCriteriaArray(
          data.criteria as TypeCriteriaItem[]
        );

        setCriteriaState(criteriaArray);
      } else {
        if (error) {
          console.log(error);
        }
        setCriteriaState(initialState);
      }
    }
  }, [data, isLoading, error]);

  useEffect(() => {
    let total = 0;

    criteriaState.forEach(({ value }) => {
      total += Number(value);
    });

    setTotalPoints(total > 0 ? total : 0);
  }, [criteriaState]);

  const taskName = criteriaService.getTaskName();

  const taskInformation = criteriaService.getInformation();

  const handleSubtaskChange = (id: number, value: number) => {
    const idx = criteriaState.findIndex((item) => item.id === id);

    if (idx) {
      const stateNext = [...criteriaState];
      stateNext[idx] = { ...stateNext[idx], value: value };
      setCriteriaState(stateNext);
    }
  };

  const handlePenaltyChange = (checked: boolean, id: number, value: number) => {
    if (value !== null) {
      const idx = criteriaState.findIndex((item) => item.id === id);

      if (idx) {
        const stateNext = [...criteriaState];
        stateNext[idx] = { ...stateNext[idx], value: checked ? value : 0 };
        setCriteriaState(stateNext);
      }
    }
  };

  const handleReset = () => {
    setCriteriaState((prevStat) => {
      return prevStat.map((item) => ({ ...item, value: 0 }));
    });
  };

  const checkList = (
    <CriteriaList
      criteriaArray={criteriaState}
      handleSubtaskChange={handleSubtaskChange}
      handlePenaltyChange={handlePenaltyChange}
    />
  );

  return (
    <Layout className={styles.layout}>
      <Content className={styles.contentStyle}>
        <h1>{taskName}</h1>
        <p>
          Link to active-task json file <br />
          <a
            href="https://github.com/rolling-scopes-school/checklist/blob/master/active-tasks/react_graphiql.json"
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/rolling-scopes-school/checklist/blob/master/active-tasks/react_graphiql.json
          </a>
        </p>
        {isLoading && (
          <Spin style={{ marginTop: '20vh' }} tip="Loading" size="large">
            <div className="content" />
          </Spin>
        )}
        {!isLoading && (
          <>
            <h2 style={{ textAlign: 'right' }}>Total Points: {totalPoints}</h2>
            <h3 style={{ textAlign: 'center' }}>{taskInformation}</h3>

            <Form form={form}>
              {checkList}
              <Divider></Divider>
              <Form.Item style={{ textAlign: 'center' }}>
                <Button htmlType={'reset'} onClick={handleReset}>
                  Reset
                </Button>
              </Form.Item>
              <Divider></Divider>
              <h2 style={{ textAlign: 'right' }}>Total Points: {totalPoints}</h2>
            </Form>
          </>
        )}
      </Content>
    </Layout>
  );
};
