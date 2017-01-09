import telolet from '../sound/telolet.ogg'

class App extends React.Component {
    constructor () {
        super()
        this.playSound.bind(this)
    }

    playSound (e) {
        e.preventDefault()
        new Audio(telolet).play()
    }

    render () {
        return (
            <button onClick={this.playSound}></button>
        )
    }
}

export default App
