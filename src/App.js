import './App.css';
import 'antd/dist/antd.dark.css';
import React, {useState} from "react";
import {Button} from "antd";


/*class App extends React.Component {
    state = {
        loadings: [],
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    render() {
        const { loadings } = this.state;
        return (
            <>
                <Button
                    type="primary"
                    loading={loadings[1]}
                    onClick={() => this.enterLoading(1)}
                >
                    Click me!
                </Button>
            </>
        );
    }
}*/


//https://jsonplaceholder.typicode.com/ fake rest api
function App() {
    const [count, setCount] = useState(0);

    const [isLoading, setIsLoading] = useState(false);

    const enterLoading = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 2000)
    }

    return (
        <div className="App">
            <p>You clicked {count} times</p>
            <Button
                onClick={() => { enterLoading(); setCount(count + 1)}}
                type="primary"
                loading={isLoading}
            >Click me</Button>
        </div>
    );
}

export default App;
