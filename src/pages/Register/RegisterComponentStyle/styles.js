import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  box: {
    backgroundColor: '#F5F8FA',
  },
  image: {
    backgroundImage: 'url(https://i1.wp.com/www.essemundoenosso.com.br/wp-content/uploads/2016/12/10-melhores-praias-brasil-6.jpg?resize=740%2C493&ssl=1)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    backgroundColor: '#F25D27',
    color: '#fff',
    margin: theme.spacing(3, 0, 2),
  },
}));

export default useStyles;