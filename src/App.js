import './App.css';
import 'antd/dist/antd.dark.css';
import React, {useState} from "react";
import {Button, DatePicker} from "antd";

//https://jsonplaceholder.typicode.com/ fake rest api
function App() {
    const [date, setDate] = useState(null);
    const [count, setCount] = useState(0);

    /*useEffect(() => {
        message.info(`Rerender! You clicked ${count} times`)
    })
*/
    return (
        <div className="App">
            <DatePicker onChange={date => setDate(date)}/>
            <div style={{marginTop: 16}}>
                Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
            </div>
            <p>You clicked {count} times</p>
            <Button onClick={() => setCount(count + 1)} type="primary">Click me</Button>
        </div>
    );
    /*return (
        <div>
        <Clock/>
        <MainButton/>
        </div>
    );*/
}

export default App;
