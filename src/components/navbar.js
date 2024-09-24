class NavBar extends HTMLElement {
	constructor(){
		super()

		if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        }
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
		// {
		// 	name: 'Experience',
		// 	link: '#experience'
		// },
		// {
		// 	name: 'Awards',
		// 	link: '#awards'
		// },
		{
			name: 'Contact',
			link: '#contact'
		},
	]

	// By default, the theme will be dark
	theme = 'dark';
	
	connectedCallback () {
		if (!this.shadowRoot) {
            this.attachShadow({ mode: 'open' });
        } else {
			this.shadowRoot.innerHTML = '';
		}

		// Import bootstrap css
		const bsCss = document.createElement('link');
		bsCss.setAttribute('rel', 'stylesheet');
		bsCss.setAttribute('href', '/assets/bootstrap-5.3.3-dist/css/bootstrap.min.css');
		// import custom css
		const themeCss = document.createElement('link');
		themeCss.setAttribute('rel', 'stylesheet');
		themeCss.setAttribute('href', '/assets/css/theme-formatting.css');


		const navbar = document.createElement("nav");
		navbar.id = 'navbar'
		navbar.classList = `navbar bg-${this.theme} px-4`
		navbar.setAttribute('data-bs-theme', this.theme);
		const navLinkElements = this.createNavLinks();
		navbar.innerHTML = `
			<div class="container-fluid">
				<a class="navbar-brand" href="">
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
		
		this.shadowRoot.appendChild(bsCss);
		this.shadowRoot.appendChild(themeCss);
		this.shadowRoot.appendChild(navbar);
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
	
	changeTheme(theme) {
		this.theme = theme;
		this.connectedCallback();
	}
}

window.customElements.define('nav-bar', NavBar)