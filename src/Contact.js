import React from 'react'
import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header'
import ContentText from './components/ContentText'
import ImagePort from './components/ImagePort'


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '100vw',
    minHeight: '100vh', 
    backgroundImage: 'url(https://images.creativemarket.com/0.1.0/ps/3326031/2560/1600/m1/fpnw/wm0/40-black-wood-background-textures-4-.jpg?1506571971&s=7bcd8c16078c2ad3276778ae5dabd3f7)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }
}));


export default function Contact() {
  const classses = useStyles();
    return (
      <div className={classses.root}>
        <CssBaseline/>
        <Header/>
        <ContentText/>
        <ImagePort/>
      </div>
    )
}


