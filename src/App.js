import './App.css';
import 'antd/dist/antd.dark.css';
import React, {useState} from "react";
import {Button, Drawer, Statistic} from "antd";
import {SettingOutlined} from '@ant-design/icons';

//TODO: make loader
//TODO: make drawer with language switch
//https://jsonplaceholder.typicode.com/ fake rest api
export default function App(props) {

    const [count, setCount] = useState(0);


    const [loading, setLoading] = useState({
        isLoading: false,
        duration: Math.random() * 1000 + 1000,
    });
    const enterLoading = () => {
        setLoading({...loading, isLoading: true})
        setTimeout(
            () => setLoading({
                duration: (Math.random() + 0.2) * 1300 * count + 1500,
                isLoading: false
            }),
            loading.duration
        )
    }

    const {Countdown} = Statistic;
    const deadline = Date.now() + loading.duration; // Moment is also OK

    const [visible, setVisible] = useState(false);
    const showDrawer = () => setVisible(true)
    const hideDrawer = () => setVisible(false)


    return (
        <div className={count < 2 ? "App" : "App alteredBackground"}>
            <Button onClick={showDrawer} className="sideMenu" type="text" icon={<SettingOutlined/>} id="drawerButton"
                    size="large"/>
            <Drawer
                title="Clicker"
                placement="left"
                closable={true}
                onClose={hideDrawer}
                visible={visible}
            >
                <section>
                    <p>The content will be added soon. Come back later!</p>
                </section>
                <footer className="sideMenuFooter">View <a href="https://github.com/Ivang316/playground"
                                                           target="_blank">source code</a></footer>
            </Drawer>

            <p>You clicked {count} times</p>

            <Button
                onClick={() => {
                    enterLoading();
                    setCount(count + 1)
                }}
                type="primary"
                loading={loading.isLoading}
            >Click me</Button>

            {loading.isLoading ? <Countdown value={deadline} format="s:SSS"/> : null}


        </div>
    );
}
