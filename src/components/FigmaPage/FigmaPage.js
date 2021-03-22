import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import avatar from './images/avatar.png'
import dresses from './images/dresses.jpg'
import dress_1 from './images/dress_1.jpg'
import dress_2 from './images/dress_2.jpg'
import dress_3 from './images/dress_3.jpg'
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
function createData(id, name, brand, price) {
    return { id, name, brand, price};
}

const rows = [
    createData(0, 'dress', 'Mango', '2599₽'),
    createData(1, 'dress', 'Mango', '2599₽'),
    createData(2, 'dress', 'Mango', '2599₽'),
    createData(3, 'dress', 'Mango', '2599₽'),
    createData(4, 'dress', 'Mango', '2599₽'),
    createData(5, 'dress', 'Mango',  '2599₽'),
    createData(6, 'dress', 'Mango',  '2599₽'),
    createData(7, 'dress', 'Mango',  '2599₽'),




];


const useStyles = makeStyles((theme) => ({
    rootFigma: {
        fontFamily: 'ArsenalRegular'
    },
    wrapper: {
        maxWidth: '980px',
        height: '100vh',
        marginLeft: '300px',
        ['@media (max-width:400px)']: {
            width: '400px',
            top: 0,
            marginLeft: 0,
            marginTop: '20px',
        }
    },
    headerContainer: {
        display: 'flex',
        height: '77px',
        alignItems: 'center',
        ['@media (max-width:400px)']: {
            display: 'none'
        }
    },

    headerItem: {
        marginRight: '16px',
    },
    headerLink: {
        display: 'flex',
        alignItems: 'center',
      border: '2px solid lightgrey',
        borderRadius: '2px',
      textDecoration: 'none',
      outline: 'none',
      padding: '3px 13px 3px 13px',
        color: '#50555C',
        '&:hover': {
          color: 'black',
          fontWeight: 'bold',
          border: '2px solid black',
          textDecoration: 'none',
        }
    },
    headerList: {
        display: 'flex',
        marginTop: '0',
        marginBottom: '0',
        paddingLeft: '0',
        listStyle: 'none'
    },
    sidebar: {
        top: '20px',
        position: "fixed",
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        left: '47px',
        height: '100%',
         width: '140px',
        ['@media (max-width:400px)']: {
            width: '100%',
            position: "relative",
            margin: 'auto',
            flexFlow: 'row',
            justifyContent: 'center',
            height: '20%',
            left: 0,
            top: '20px',
        }
    },

    userAvatar: {
      display: 'flex',
        flexFlow: 'column',
      justifyContent: 'center',
      alignItems: 'center',
        ['@media (max-width:400px)']: {

        }
    },
    avatarImg: {
      width: '118px',
      ['@media (max-width:400px)']: {
        width: '86px',
      }
    },

    userLinkInst: {
        fontSize: '18px',
        marginTop: '7px',
    },
    arrowsSlider: {
      cursor: 'pointer',
    },
    sidebarList: {
        paddingLeft: '0',
        listStyle: 'none',
        ['@media (max-width:400px)']: {
            marginLeft: '40px',

        }
    },

    userLinksHeading: {
        borderBottom: '2px solid black',
        width: '118px',
        paddingBottom: '7px',
        fontWeight: 'bold',
        fontSize: '14px',
        ['@media (max-width:400px)']: {
            marginLeft: '40px',
        }
    },
    arrow: {
        marginLeft: '6px',
        display: 'none',
        transition: '0.3s',
    },
    sidebarItem: {
        marginTop: '10px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        outline: 'none',
        '&:hover': {
            '& a': {
                color: 'black',
                fontWeight: 'bold',
                textDecoration: 'none'
            },
            '& svg': {
                display: 'block'
            }
        }
    },


    sidebarLink: {
        fontSize: '12px',
        lineHeight: '15px',
        color: '#666666',
        textDecoration: 'none',
        transition: '0.3s',
        '&:hover': {
            color: 'black',
            fontWeight: 'bold',
            textDecoration: 'none'
        },


    },

    mainContent: {
        display: 'flex',
        justifyContent: 'space-between',
        height: '100%',
        marginBottom: '53px',
        ['@media (max-width:400px)']: {
            width: '100%',
            display: 'flex',
            flexFlow: 'column',
        }


    },

    products: {
        border: '1px solid #EBEBEB',
        height: '405px',
        width: '450px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ['@media (max-width:400px)']: {
            width: '100%',
            display: 'flex',
            flexFlow: 'column',
            border: 'none',
            marginBottom: '20px',
        }

    },
    productsHeading: {
      display: 'flex',
        fontSize: '16px',
      justifyContent: 'space-between',
    },

    productsGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gridGap: '16px',
        ['@media (max-width:400px)']: {
            gridTemplateColumns: '1fr 1fr 1fr',
            gridTemplateRows: '1fr 1fr',
        }
    },
    productContainer: {
      display: "flex",
      flexFlow: 'column',
      justifyContent: 'center'
    },
    productItem: {
      width: '100px',
        border: '1px solid #EBEBEB',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',

    },
    productBrand: {
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '13px',
        marginTop: '11px',
        lineHeight: '14px',
        letterSpacing: '0.144706px'
    },
    productImage: {
        marginTop: '14px'
    },

    productPrice: {
        fontSize: '11px',
        fontWeight: 'bold',
        letterSpacing: '0.144706px',
        marginTop: '6px',
    },

    productsButtonContainer: {
        marginTop: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    productsButton: {
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '88px',
        height: '28px',
        border: '1px solid #EBEBEB',
        backgroundColor: '#EBEBEB',
        '&:hover': {
            color: 'black',
            textDecoration: 'none',
        }
    }


}));
function FigmaPage() {
    const classes = useStyles();
    return (
        <div className={classes.rootFigma}>
            <div className={classes.sidebar}>
                <div className={classes.userAvatar}>
                    <a href="https://www.instagram.com/aevsai/">
                        <img className={classes.avatarImg} src={avatar} alt="avatar"/>
                    </a>
                    <div className={classes.userLinkInst}>
                        <p>@aevsai</p>
                    </div>
                </div>

                <div className={classes.userLinks}>
                    <div className={classes.userLinksHeading}>Ссылки автора</div>
                    <ul className={classes.sidebarList}>
                        <li className={classes.sidebarItem}>
                            <a className={classes.sidebarLink} href="#">Мой сайт</a>
                            <svg className={classes.arrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" fill="black"/>
                            </svg>
                        </li>
                        <li className={classes.sidebarItem}>
                            <a className={classes.sidebarLink} href="#">WhatsApp</a>
                            <svg className={classes.arrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" fill="black"/>
                            </svg>
                        </li>
                        <li className={classes.sidebarItem}>
                            <a className={classes.sidebarLink} href="#">Telegram</a>
                            <svg className={classes.arrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" fill="black"/>
                            </svg>

                        </li>
                        <li className={classes.sidebarItem}>
                            <a className={classes.sidebarLink} href="#">Сотрудничество</a>
                            <svg className={classes.arrow} width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z" fill="black"/>
                            </svg>

                        </li>

                    </ul>
                </div>
            </div>
            <div className={classes.wrapper}>
                <header className={classes.headerContainer}>
                        <ul className={classes.headerList}>
                           <li className={classes.headerItem}>
                               <a className={classes.headerLink} href="#">Одежда</a>
                           </li>
                            <li className={classes.headerItem}>
                                <a className={classes.headerLink} href="#">Подборки</a>
                            </li>
                            <li className={classes.headerItem}>
                                <a className={classes.headerLink} href="#">Детям</a>
                            </li>
                            <li className={classes.headerItem}>
                                <a className={classes.headerLink} href="#">Книги</a>
                            </li>
                        </ul>
                </header>
                <main>
                    <div className={classes.mainContent}>
                        <section >
                            <div className={classes.productsHeading}>
                                <p>Подборка платьев</p>
                            </div>
                            <div className={classes.products}>
                                <img src={dresses} alt="dresses"/>
                            </div>
                        </section>
                        <section>
                            <div className={classes.productsHeading}>
                                <p>Где купить похожее?</p>
                                <div className={classes.arrowsSlider}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                                </div>
                            </div>
                            <div className={classes.productsGrid}>
                                {rows.map((row) => (
                                    <div key={row.id}>
                                        <div className={classes.productItem}>
                                            <div className={classes.productBrand}>
                                                {row.brand}
                                            </div>
                                            <div className={classes.productImage}>
                                                <img src={dress_3} alt="image"/>
                                            </div>
                                            <div className={classes.productPrice}>
                                                {row.price}
                                            </div>
                                        </div>
                                        <div className={classes.productsButtonContainer}>
                                            <a href="#" className={classes.productsButton}>
                                                В магазин
                                            </a>
                                        </div>

                                    </div>
                                ))}
                            </div>

                        </section>
                    </div>
                    <hr/>
                    <div className={classes.mainContent}>
                        <section >
                            <div className={classes.productsHeading}>
                                <p>Подборка платьев</p>
                            </div>
                            <div className={classes.products}>
                                <img src={dresses} alt="dresses"/>
                            </div>
                        </section>
                        <section>
                            <div className={classes.productsHeading}>
                                <p>Где купить похожее?</p>
                                <div className={classes.arrowsSlider}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                                </div>
                            </div>
                            <div className={classes.productsGrid}>
                                {rows.map((row) => (
                                    <div key={row.id}>
                                        <div className={classes.productItem}>
                                            <div className={classes.productBrand}>
                                                {row.brand}
                                            </div>
                                            <div className={classes.productImage}>
                                                <img src={dress_3} alt="image"/>
                                            </div>
                                            <div className={classes.productPrice}>
                                                {row.price}
                                            </div>
                                        </div>
                                        <div className={classes.productsButtonContainer}>
                                            <a href="#" className={classes.productsButton}>
                                                В магазин
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </main>

            </div>

        </div>
    );

}

export default FigmaPage;
