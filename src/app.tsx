import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import 'normalize-scss'

import './style.scss'
let bruhwindow: WindowData = {
	x: 500,
	y: 500
}
function App() {
	const [wind, setWind] = useState(bruhwindow)
	function setWindowSize() {
		var x = window.innerWidth
		var y = window.innerHeight
		setWind({ ...bruhwindow, x: x, y: y })
	}
	React.useEffect(() => {
		setWindowSize()
		window.addEventListener('resize', () => setWindowSize())

		return function cleanup() {
			window.removeEventListener('resize', () => setWindowSize())
		}
	}, [])

	return (
		<main>
			<marquee
				behavior="alternate"
				direction="down"
				width={wind.x}
				height={wind.y}
				scrollamount="3">
				<marquee behavior="alternate" scrollamount="3">
					<h1>red is a color</h1>
				</marquee>
			</marquee>
			<footer>
				<a href="https://twitter.com/artlastnight">twitter</a> {'&'}{' '}
				<a href="https://www.instagram.com/art.last.night/">instagram</a>
			</footer>
		</main>
	)
}
ReactDOM.render(<App />, document.getElementById('react-bruh'))
