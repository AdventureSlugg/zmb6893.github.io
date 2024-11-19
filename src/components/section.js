class CustomSection extends HTMLElement {
	static get observedAttributes() {
		return ['title', 'description', 'sectionDiv', 'backgroundImage']
	}

	constructor() {
		super()
	}

	connectedCallback () {
		this.attachShadow({mode: 'open'});

		// Import bootstrap css
		const bsCss = document.createElement('link');
		bsCss.setAttribute('rel', 'stylesheet');
		bsCss.setAttribute('href', '/assets/bootstrap-5.3.3-dist/css/bootstrap.min.css');
		// import custom css
		const themeCss = document.createElement('link');
		themeCss.setAttribute('rel', 'stylesheet');
		themeCss.setAttribute('href', '/assets/css/theme-formatting.css');

		const title = this.getAttribute('title');
		const description = this.getAttribute('description');
		const backgroundImage = this.getAttribute('backgroundImage');
		const sectionDiv = this.getAttribute('sectionDiv')

		this.shadowRoot.innerHTML = `
			<div class="section vertical-center" style="background-image: url('${backgroundImage}')">
				<div class="container">
					<div class="gy-5">
						<h1 class="section-title">
							${ title }
						</h1>
						<p>
							${ description }
						</p>
						
						${ sectionDiv }
					</div>
				</div>
			</div>
		`

		this.shadowRoot.appendChild(bsCss);
		this.shadowRoot.appendChild(themeCss);
	}
}

window.customElements.define('custom-section', CustomSection)