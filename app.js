let hr = 0
let min = 0
let sec = 0
let msec = 0

let timer = document.querySelector('.timer')
let counter = null

document.querySelector('.start').addEventListener('click', () => {
	if (counter != null) {
		clearInterval(counter)
	}
	counter = setInterval(stopWatch, 10)
})

document.querySelector('.stop').addEventListener('click', () => {
	clearInterval(counter)
})

document.querySelector('.reset').addEventListener('click', () => {
	clearInterval(counter)
	hr = 0
	min = 0
	sec = 0
	msec = 0
	timer.innerHTML = '00 : 00 : 00 : 000'
})

function stopWatch() {
	msec += 10
	if (msec === 1000) {
		msec = 0
		sec++
		if (sec === 60) {
			sec = 0
			min++
			if (min === 60) {
				min = 0
				hr++
			}
		}
	}

	let h = hr < 10 ? '0' + hr : hr
	let m = min < 10 ? '0' + min : min
	let s = sec < 10 ? '0' + sec : sec
	let ms = msec < 10 ? '00' + msec : msec < 100 ? '0' + msec : msec

	timer.innerHTML = `${h} : ${m} : ${s} : ${ms}`
}
