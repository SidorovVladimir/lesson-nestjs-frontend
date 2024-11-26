import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getWatchlistElements } from '../../store/thunks/watchlist';
import { getTopPriceData } from '../../store/thunks/assets';
import AssetsTableComponent from '../../components/assets-table';
import { Grid2, Typography } from '@mui/material';
import { useStyles } from './styles';

const WatchlistPage = () => {
  const classes = useStyles();
  const watchlist = useAppSelector((state) => state.watchlist.assets);
  const { assets } = useAppSelector((state) => state.assets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTopPriceData());
    dispatch(getWatchlistElements());
  }, [dispatch]);

  const filteredArray = assets.filter((element: any) => {
    return watchlist.some(
      (otherElement: any) => otherElement.assetId === element.id
    );
  });

  return (
    <Grid2 className={classes.root}>
      <Grid2 className={classes.watchlistHeading}>
        <Typography variant='h2' className={classes.heading}>
          Избранное
        </Typography>
      </Grid2>
      <Grid2 className={classes.assetTableBlock}>
        <AssetsTableComponent assets={filteredArray} />
      </Grid2>
    </Grid2>
  );
};
export default WatchlistPage;
