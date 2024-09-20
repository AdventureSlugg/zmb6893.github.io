const themeModes = {
	0: {
		theme: 'light',
		label: 'Light Mode',
		style: 'bg-light',
		symbol: ''
	},
	1: {
		theme: 'dark',
		label: 'Dark Mode',
		style: 'bg-dark',
		symbol: ''
	}
}

const themeChange = (event) => {
	// When the theme changes
	// 1. Change the value of the switch
	document.getElementById('themeSwitch')['value'] = event.target.checked;

	// 2. Change the label text of the toggle button
	const themeKey = Number(event.target.checked);
	const themeMode = themeModes[themeKey];
	document.getElementById('themeLabel').textContent = themeMode.label;

	// 3. Change the bootstrap theme to the selected theme
	const oppositeKey = Number(!themeKey)
	let elements = document.getElementsByClassName(themeModes[oppositeKey].style);
	elements = Array.from(elements)
	console.log(elements)

	elements.forEach(element => {
		element.setAttribute('data-bs-theme', themeMode.theme);
		element.classList = themeMode.style;
	})

	// 4. Change the symbol
	document.getElementById('themeSymbol').innerHTML = themeMode.symbol;
}