import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";
import licores from "../Api/licoresApi"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}))

export default function Products() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {
                    licores.map(licor => (
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Product key={licor.id} licor={licor}/>
                        </Grid>
                    ))
                }
            </Grid>

        </div>
    )
}