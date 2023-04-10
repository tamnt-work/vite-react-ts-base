import { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DefaultLayout: FC = () => {
  return (
    <div>
      <h1>DefaultLayout</h1>
      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
