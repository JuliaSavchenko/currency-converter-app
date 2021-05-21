import { Switch, Route, Link } from 'react-router-dom';
import links from './links';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  contentWrapper: {
    display:'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  menuWrapper: {
    display:'flex',
    justifyContent: 'space-around',
  },
  menuItem: {
    fontFamily: 'Poppins',
  },
  itemWrapper: {

  }
});

function App() {

  const classes = useStyles();

  return (
    <div className='App'>
      <div className={classes.menuWrapper}>
          {links.map(link => {
            return(
              <div className={classes.itemWrapper} key={link.title}>
                <Link to={link.href}>
                    <h4 className={classes.menuItem}>{link.title}</h4>
                </Link>
              </div>
            )
          })}
      </div>
      <div className={classes.contentWrapper}>
        <Switch>
          {links.map(link => {
            return (
              <Route path={link.href} component={link.component}/>
            )
          })}
        </Switch> 
      </div>
      
  </div>
  );
}

export default App;
