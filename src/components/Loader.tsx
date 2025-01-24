import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

type LoaderProps = {
  children?: React.ReactNode;
  loading?: boolean;
  size?: number;
}

const Loader = ({ children, loading, size = 100 }: LoaderProps) => (
  <Spin data-testid="loader" indicator={<LoadingOutlined style={{ fontSize: size }} spin />} spinning={loading}>
    {children}
  </Spin>
);

export default Loader;