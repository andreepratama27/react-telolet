import App from './App.jsx'

class Main extends React.Component {
    render () {
        return (<App />)
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('container')
)
