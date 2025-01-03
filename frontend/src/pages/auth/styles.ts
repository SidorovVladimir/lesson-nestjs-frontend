import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    padding: '20px',
  },
  form: {
    flex: 1,
  },
  incitingText: {
    color: '#1900d5',
    marginLeft: '10px',
    cursor: 'pointer',
  },
});
