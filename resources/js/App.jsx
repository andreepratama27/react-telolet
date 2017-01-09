import telolet from '../sound/telolet.ogg'
import './../scss/style.scss'

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
            <div className='btnPlaces'>
                <div className='itsButton'>
                    <h2>Pencet Tombol</h2>
                    <button className='btn btn-default' onClick={this.playSound}></button>
                </div>
            </div>
        )
    }
}

export default App
