import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    root: {
        width: '28vw',
        height: '10vh',
        color:'#fff',
        fontFamily: 'Oswald',
        margin: '150px 250px 15px',
        borderBottom: '3px solid #f7b611',
        borderRight: '3px solid #f7b611',
        borderRadius: 10,
        
        
    },
    content: {
        width: '40vw',
        height: '25vh',
        color:'#fff',
        fontFamily: 'Oswald',
        marginLeft: 200
    }
}))

export default function ContentText() {

    const classes = useStyles()
    return (
       <Grid>
           <Typography 
                className={classes.root} 
                variant="h3"
            >
            Criar, Inovar, Solucionar
           </Typography>
           <Typography
                className={classes.content} 
                variant="h4"
           >
               Uso das Mais Modernas Tecnologias para Entregar a Melhor Experiência Para o Usuario do seu site
           </Typography>
       </Grid>
       
    )
}


