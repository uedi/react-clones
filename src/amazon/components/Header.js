import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    header: {
        height: 60,
        display: 'flex',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        alignItems: 'center',
        backgroundColor: '#131921'
    },
    logo: {
        width: 100,
        objectFit: 'contain',
        margin: 20,
        marginBottom: 8,
    },
    search: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        borderRadius: 24
    },
    searchInput: {
        height: 12,
        padding: 10,
        border: 'none',
        width: '100%'
    },
    searchIcon: {
        padding: 5,
        height: 22,
        backgroundColor: '#cd9042'
    },
    nav: {
        display: 'flex',
        justifyContent: 'space-evenly',
        marginLeft: 20,
        marginRight: 20
    },
    cart: {
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        marginRight: 10
    },
    cartCount: {
        marginLeft: 3,
        marginRight: 10
    },
    link: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        color: 'white'
    },
    linkTopText: {
        fontSize: 12
    },
    linkBottomText: {
        fontSize: 14,
        fontWeight: 800
    }
})

const Header = () => {

    const classes = useStyles()

    return (
        <div className={classes.header}>
            <img
                className={classes.logo}
                src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                alt='amazon logo'
            />
            <div className={classes.search}>
                <input className={classes.searchInput} type='text' />
                <SearchIcon className={classes.searchIcon} />
            </div>
            <div className={classes.nav}>
                <div className={classes.link}>
                    <span className={classes.linkTopText}>Hello, Sign in</span>
                    <span className={classes.linkBottomText}>Account & Lists</span>
                </div>
                <div className={classes.link}>
                    <span className={classes.linkTopText}>Returns</span>
                    <span className={classes.linkBottomText}>& Orders</span>
                </div>
            </div>
            <div className={classes.cart}>
                <ShoppingCartIcon />
                <span className={classes.cartCount}>
                    0
                </span>
            </div>
        </div>
    )
}

export default Header