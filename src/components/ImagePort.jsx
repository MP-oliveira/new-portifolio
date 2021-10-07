import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '33rem',
        marginLeft: '50rem',
        marginTop: '-20rem',
        shadow: '#bbb4b466'
    }
}))

export default function ImagePort() {
    const classes = useStyles();

    return (
       <img 
          src='images/bracos-cruzados.png' 
          alt='Imagem Mauricio'
          className={classes.root}
        />
    )
}


