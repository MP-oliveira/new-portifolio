import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AboutMe from './AboutMe'
import Contact from './Contact'
import Purchase from './Purchase'

const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: '100vw',
      minHeight: '100vh', 
      backgroundImage: 'url(https://images.creativemarket.com/0.1.0/ps/3326031/2560/1600/m1/fpnw/wm0/40-black-wood-background-textures-4-.jpg?1506571971&s=7bcd8c16078c2ad3276778ae5dabd3f7)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
}));

export default function App() {
    const classses = useStyles();

    return (
      <div className={classses.root}>
       <CssBaseline/>
       <Router>
         <Switch>
          <Route component={'/'}>
            <AboutMe/>
          </Route>
          <Route component={'/contact'}>
            <Contact/>
          </Route>
          <Route component={'/purchase'}>
            <Purchase/>
          </Route>
        </Switch>
      </Router>
      </div>
    )
}


