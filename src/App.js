import { Switch, Route, Link } from 'react-router-dom';
import links from './links';


function App() {

  return (

    <div className='App'>
      <div className='menu-wrapper'>
          {links.map(link => {
            return(
              <div className='menu-item'> 
                <Link to={link.href}>
                    <h4>{link.title}</h4>
                </Link>
              </div>
            )
          })}
      </div>
      <div className='content-wrapper'>
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
