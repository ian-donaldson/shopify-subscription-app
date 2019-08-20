import React from 'react';
import { Provider } from 'mobx-react';

import Layout from '../components/Layout';
import Tabs from '../components/common/Tabs';
import Account from '../components/Account';
import Orders from '../components/Orders';
import FamilyTime from '../components/FamilyTime';
import FreeMeals from '../components/FreeMeals';

const tabs = [
  { title: 'Orders', route: 'dashboard/orders', content: <Orders /> },
  { title: 'Account', route: 'dashboard/account', content: <Account /> },
  { title: 'Free Meals', route: 'dashboard/free-meals', content: <FreeMeals /> },
  { title: 'Family Time', route: 'dashboard/family-time', content: <FamilyTime /> },
];

const getStateOptions = () => [
  {value: 'NJ', name: 'New Jersey'},
  {value: 'NY', name: 'New York'},
];

export default () => (
  <Layout title='Ant Design Page!'>
    <Provider getOptions={getStateOptions}>
      <Tabs tabs={tabs} />
    </Provider>
  </Layout>
);
