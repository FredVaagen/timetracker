import React from 'react'
import styles from "../styles/Layout.module.css"

const Layout = (props) => {
    return (
        <div className={styles.grid}>
            {props.children}
        </div>
    )
}

export default Layout
