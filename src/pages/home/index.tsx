import { criteriaService } from '@/entities/criteria';
import { Button, Checkbox, Col, Form, Layout, Row, Space } from 'antd';
import { CSSProperties, useState } from 'react';
import { Content } from 'antd/es/layout/layout';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

type TypeCriteriaObject = {
  [key: string]: {
    [key: string]: number;
  };
};

type TypeCriteria = {
  title: string;
  value: number;
};

const contentStyle: CSSProperties = {
  background: '#fff',
  maxWidth: '1600px',
  margin: '0 auto',
};

const layoutStyle: CSSProperties = {
  background: '#fff',
};

const parseToObject = (data: TypeCriteriaObject) => {
  const parseCriteria = (data: { [key: string]: number }): TypeCriteria[] => {
    const criteriaList: TypeCriteria[] = [];

    for (const key in data) {
      criteriaList.push({
        title: key,
        value: data[key],
      });
    }

    return criteriaList;
  };

  const checkList = [];

  for (const key in data) {
    checkList.push({
      title: key,
      criteria: parseCriteria(data[key]),
    });
  }

  return checkList;
};

export const HomePage = (): JSX.Element => {
  const [points, setPoints] = useState(0);
  const [form] = Form.useForm();

  const data = criteriaService.findAll();

  const checkListObject = parseToObject(data);

  const handleChange = (event: CheckboxChangeEvent, value: number) => {
    const target = event.target as HTMLInputElement;

    if (target.checked) {
      setPoints((prevState) => {
        return prevState + value;
      });
    } else {
      setPoints((prevState) => {
        return prevState - value;
      });
    }
  };

  const checkList = checkListObject.map((item) => {
    return (
      <section key={item.title}>
        <h2 style={{ fontWeight: '500', margin: '0 0 6px 0' }}>{item.title}</h2>
        {item.criteria.map((check, idx) => {
          const fieldName = `field${idx}`;

          return (
            <Row key={check.title}>
              <Col span={20}>
                <Form.Item name={fieldName} style={{ marginBottom: '6px' }}>
                  <Checkbox defaultChecked={false} onChange={(e) => handleChange(e, check.value)}>
                    {check.title}
                  </Checkbox>
                </Form.Item>
              </Col>
              <Col span={4} style={{ textAlign: 'right' }}>
                <strong>{check.value}</strong>
              </Col>
            </Row>
          );
        })}
      </section>
    );
  });

  return (
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>
        <Row align="bottom" justify="space-between">
          <Col span={12}>
            <h1 style={{ textAlign: 'left' }}>Cross check</h1>
          </Col>
          <Col span={12}>
            <h3 style={{ textAlign: 'right', fontWeight: '500' }}>
              total points: <span style={{ color: 'red' }}>{points >= 0 ? points : 0}</span>
            </h3>
          </Col>
        </Row>
        <Form form={form} autoComplete="off">
          {checkList}
          <Form.Item>
            <Space>
              <Button
                type="default"
                onClick={() => {
                  setPoints(0);
                  form.resetFields();
                }}
              >
                Reset
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  );
};
