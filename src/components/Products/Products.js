import React, {useEffect, useState} from 'react'
import axios from "axios";
import {makeStyles} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import Title from "../Dashboard/Title";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}))
function preventDefault(event) {
    event.preventDefault();
}




function Products() {
    const classes = useStyles()
    const [products, setProducts] = useState(null)
    const url = `https://looks.umastyle.club/custapi/allrest/fashion/listfashionprod?fashionId=659`
    useEffect(() => {
        if(localStorage.getItem('products-list') === null) {
            axios.get(url)
                .then(response => {
                    console.log(response.data.list)
                    setProducts(response.data.list)
                    localStorage.setItem('products-list', JSON.stringify(response.data.list))
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            setProducts(JSON.parse(localStorage.getItem('products-list')))
        }

    }, [url])


    if(products) {
        return (
            <React.Fragment>
                <Title>Products</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Название товара</TableCell>
                            <TableCell>Бренд</TableCell>
                            <TableCell>Позиция</TableCell>
                            <TableCell align="right">Цена</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell>{product.uproduct.name.slice(0, -1)}</TableCell>
                                <TableCell>{product.uproduct.classes.brand}</TableCell>
                                <TableCell>{product.uproduct.uposition}</TableCell>
                                <TableCell align="right">
                                    {product.uproduct.price + ' ' + product.uproduct.currency }
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <div className={classes.seeMore}>
                    <Link color="primary" href="#" onClick={preventDefault}>
                        See more orders
                    </Link>
                </div>
            </React.Fragment>
        )
    }

    return (
        <div>

        </div>
    )

}

export default Products
