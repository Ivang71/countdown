import './App.css';
import 'antd/dist/antd.dark.css';
import React, {useState, useEffect} from "react";
import {Button} from "antd";

//https://jsonplaceholder.typicode.com/ fake rest api
function App() {
    const [count, setCount] = useState(0);

    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true)
        setInterval(null, 100)
        return () => setIsLoading(false)
    })

    return (
        <div className="App">
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)} type="primary">Click me</Button>
        </div>
    );
}

export default App;
