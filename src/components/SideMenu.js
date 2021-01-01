import React from 'react'
import {Drawer} from "antd";

export default function SideMenu(props) {
    return (
        <Drawer
            title="Clicker"
            placement="right"
            closable={true}
            onClose={props.hideMenu}
            visible={props.visible}
        >
            <section>
                <p>The content will be added soon. Come back later!</p>
            </section>
            <footer className="sideMenuFooter">View <a href="https://github.com/Ivang316/playground"
                                                       target="_blank">source code</a></footer>
        </Drawer>
    )
}