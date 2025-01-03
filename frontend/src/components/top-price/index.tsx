import React, { FC } from 'react';
import AssetsTableComponent from '../assets-table';
import { ITablePriceData } from '../../common/types/assets';

const TopPriceComponent: FC<ITablePriceData> = (
  props: ITablePriceData
): JSX.Element => {
  const { assets } = props;

  return <AssetsTableComponent assets={assets} />;
};

export default TopPriceComponent;
