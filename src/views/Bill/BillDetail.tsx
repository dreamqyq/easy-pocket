import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { TopBar } from 'components/TopBar';

type Params = {
  recordId: string
}

const BillDetail: React.FC = () => {
  const { recordId: recordIdString } = useParams<Params>();

  return (
    <Layout>
      <TopBar title="编辑账单" />
      {recordIdString}
    </Layout>
  );
};

export default BillDetail;
