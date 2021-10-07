import React from 'react';
import { makeStyles, ThemeProvider,createTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    flexGrow: 1,
  },
  menuButton: {
    marginTop: 15,
    marginRight: theme.spacing(2),
    borderRadius: 10,
    background:{
        primary: {
            main: '#f7b611'
        },
        secondary: {
            main: '#49463b'
        }
    }
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    fontFamily: 'Gemunu Libre',
    fontSize: 34,
    borderBottom: '3px solid #f7b611',
    borderRight: '3px solid #f7b611',
    borderRadius: 12,
    paddingRight: 1
  },
  titleOrange:{
    flexGrow: 150,
    color: '#f7b611',
    fontFamily: 'Gemunu Libre',
    fontSize: 34,
    marginLeft: 7
    
  },
  appBar: {
      background: 'none'
  }
}));

export default function Header() {
  const classes = useStyles();
  const theme = createTheme({
     palette:{
         primary: {
             main: '#fc9f00',
             contrastText: '#fff'
         },
         secondary: {
             main: '#3a3937',
         }
     },
     colorTitle:{
         color: '#fc9f00'
     }
  });

  return (
    <ThemeProvider theme={theme}>
         <div className={classes.root}>
             <AppBar className={classes.appBar} elevation={0} position="static">
                 <Toolbar>
                 <Typography variant="h5" className={classes.title}>
                    Mauricio <span className={classes.colorTitle}></span>
                 </Typography>
                 <Typography variant="h5" className={classes.titleOrange}>Oliveira</Typography>
                 <Button 
                    className={classes.menuButton}
                    variant="contained" 
                    color="primary"
                 >
                    ABOUT ME
                </Button>
                <Button 
                    className={classes.menuButton}
                    variant="contained" 
                    color="secondary"
                >
                    CONTACT
                </Button>
                <Button 
                    className={classes.menuButton}
                    variant="contained" 
                    color="secondary"
                >
                    PURCHASE
                </Button>
                 </Toolbar>
             </AppBar>
    </div>
    </ThemeProvider>  
  );
}
