import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core';
import ExploreIcon from '@material-ui/icons/Explore';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

// Overwrite specific properties from theme
// const theme = createMuiTheme({
//     // You get the objects from the documentation
//     palette: {
//         primary: {
//             main: '#630068'
//         },
//         secondary: purple
//     },
//     typography: {
//         fontFamily: 'Lato',
//     }
// })

// Create costum hook
const useStyles = makeStyles({
    // Each key will be css class
    btn: {
        fontSize: 60,
        backgroundColor: "green",
        '&:hover': {
            backgroundColor: "yellow"
        }
    },
    title: {
        textDecoration: 'underline',
        marginBottom: 100
    }
})

//  return an object
// Modify specific objects from the theme object by returning a function from makestyles 
// This allows to pass in the theme as an argument
// const useStyles = makeStyles((theme) => {
//     return {
//         // Each key will be css class
//         btn: {
//             fontSize: 60,
//             backgroundColor: "green",
//             '&:hover': {
//                 backgroundColor: "yellow"
//             }
//         },
//         title: {
//             textDecoration: 'underline',
//             marginBottom: 100
//         }
//     }
// })

function ButtonIcon() {

    // Fire the hooke, create the classes (naming convention)
    const classes = useStyles();

    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
                <Button color="primary" variant="contained">
                    <ExploreIcon color="warning" fontSize="small"/>  Explore
                </Button>
                <Button className={classes.btn} color="primary" variant="contained" startIcon={<ExploreIcon />}>Explore</Button>
                <Typography className={classes.title} variant="h1" align="center"	gutterBottom>Heading 1</Typography>
                <Button  color="primary" variant="contained" startIcon={<ExploreIcon />}>Explore</Button>
                <Typography className={classes.title} variant="h1" color="secondary"	gutterBottom>Heading 1</Typography>
            {/* </ThemeProvider> */}
        </>
    )
}

export default ButtonIcon
