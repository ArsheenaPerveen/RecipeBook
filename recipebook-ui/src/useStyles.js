import { fade, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    marginRight: 20,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  form: {
    margin: '20px',
    padding: '40px',
    border: '1px solid grey',
    background: 'white',
    borderRadius: '4px',
    [theme.breakpoints.up('sm')]: {
      margin: '20px 80px',
      padding: '60px',
    },
  },
  imageField: {
    marginBottom: '4px',
    transform: 'none',
    position: 'static',
  },
  formControl: {
    minWidth: 200,
  },
  helperText: {
    color: 'red',
  },
  formHeader: {
    margin: theme.spacing(2),
    color: 'rgb(205,92,92)',
    fontWeight: 'bold',
  },
  expandPanel: {
    paddingTop: 0,
    display: 'block',
  },
  filterForm: {
    margin: theme.spacing(1),
  },
  applyFilterBtn: {
    marginRight: '10px',
  },
  filedBtn: {
    marginTop: '8px',
  },
  backdrop: {
    zIndex: Math.floor(theme.zIndex.drawer + 1),
    color: theme.palette.common.white,
  },
  otherDetails: {
    marginBottom: '4px',
    fontSize: '12px',
  },
}));

export default useStyles;
