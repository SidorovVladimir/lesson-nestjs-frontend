import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getNews } from '../../store/thunks/news';
import { Box, Grid2, Link, Typography } from '@mui/material';
import { useStyles } from './styles';

const NewsPage: FC = (): JSX.Element => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { news } = useAppSelector((state) => state.news);

  const renderNewsBlock = news.map((element: any) => (
    <Grid2 container className={classes.newsBlock}>
      <Grid2 size={{ xs: 12, md: 3 }}>
        <img src={element.imageurl} alt={element.category} />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 9 }}>
        <Box className={classes.newsTitle}>
          <Typography variant='h3'>{element.title}</Typography>
        </Box>
        <Box>
          <Typography variant='h3'>{element.body}</Typography>
        </Box>
      </Grid2>
      <Grid2 size={{ xs: 12, md: 12 }} className={classes.readMore}>
        <Typography variant='h4'>
          <Link href={element.url}>Read more</Link>
        </Typography>
      </Grid2>
    </Grid2>
  ));

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <Grid2 className={classes.root}>
      <Grid2 className={classes.blockTitle}>
        <Typography variant='h2'>Новости</Typography>
      </Grid2>
      <Grid2>{renderNewsBlock}</Grid2>
    </Grid2>
  );
};

export default NewsPage;
