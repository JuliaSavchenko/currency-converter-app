import { Switch, Route, Link } from 'react-router-dom';
import links from './links';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
  contentWrapper: {
    display:'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  App: {
    width:'1000px',
    margin:'0 auto'
  }
});

function App() {

  const classes = useStyles();

  return (
    <div className={classes.App}>
      <AppBar position='static'>
        <Tabs >
          {links.map(link => {
            return(
                <Link to={link.href}>
                    <Tab label={link.title}>{link.title}</Tab>
                </Link>
            )
          })}
          </Tabs>
      </AppBar>
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
