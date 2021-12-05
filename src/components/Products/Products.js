import React from 'react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name: 'Shoes', description: 'Running Shoes', price: '$5', image: 'https://cdn.sweatband.com/mizuno_wave_inspire_14_ladies_running_shoes_aw18_mizuno_wave_inspire_14_ladies_running_shoes_aw18-_angled_2000x2000.jpg'},
    {id: 2, name: 'macbook', description: 'Apple macbook', price: '$10', image: 'https://images.techhive.com/images/article/2014/12/macbook_air-100538062-large.jpg'}
];

const Products = () => {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}
export default Products;
