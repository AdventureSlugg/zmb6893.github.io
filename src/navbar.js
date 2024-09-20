class NavBar extends HTMLElement {
	constructor(){
		super()
	}

	navLinks = [
		{
			name: 'About',
			link: '#about'
		},
		{
			name: 'Projects',
			link: '#projects'
		},
		{
			name: 'Experience',
			link: '#experience'
		},
		{
			name: 'Awards',
			link: '#awards'
		},
		{
			name: 'Contact',
			link: '#contact'
		},
	]
	
	connectedCallback () {
		const shadow = this.attachShadow({mode: "open"})

		const linkElem = document.createElement('link');
		linkElem.setAttribute('rel', 'stylesheet');
		linkElem.setAttribute('href', '/assets/bootstrap-5.3.3-dist/css/bootstrap.min.css');

		const navbar = document.createElement("nav");
		navbar.classList = 'navbar bg-dark px-4'
		navbar.setAttribute('data-bs-theme', 'dark');
		const navLinkElements = this.createNavLinks();
		navbar.innerHTML = `
		  	<div class="container-fluid">
				<a class="navbar-brand">
					<img>
					ZOE
				</a>
				<ul class="navbar-nav" style="flex-direction: row">
					${
						navLinkElements
					}
				</ul>
			</div>
		`
		shadow.appendChild(linkElem);
		shadow.appendChild(navbar);
	}

	createNavLinks() {
		let navLinkElements = ''
		this.navLinks.forEach(link => {
			navLinkElements += `
				<li class="nav-item" style="padding-left:1rem">
					<a class="nav-link" href="${link.link}"> ${link.name} </a>
				</li>
			`
		})
		
		return navLinkElements
	}
	
}

window.customElements.define('nav-bar', NavBar)