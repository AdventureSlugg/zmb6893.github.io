class Card extends HTMLElement {

	static get observedAttributes () {
		return ['title', 'desription', 'image', 'link', 'alt', 'linkTitle']
	}

	constructor () {
		super();

		if (!this.shadowRoot) {
			this.attachShadow({mode: 'open'})
		}
	}

	connectedCallback() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
		} else {
			this.shadowRoot.innerHTML = ''
		}

		// Import bootstrap css
		const bsCss = document.createElement('link');
		bsCss.setAttribute('rel', 'stylesheet');
		bsCss.setAttribute('href', '/assets/bootstrap-5.3.3-dist/css/bootstrap.min.css');
		// import custom css
		const themeCss = document.createElement('link');
		themeCss.setAttribute('rel', 'stylesheet');
		themeCss.setAttribute('href', '/assets/css/theme-formatting.css');

		// Get the attributes
		const title = this.getAttribute('title');
		const description = this.getAttribute('description')
		const link = this.getAttribute('link') ? this.getAttribute('link') : '#';
		const linkTitle = this.getAttribute('linkTitle');
		const alt = this.getAttribute('alt');
		const image = this.getAttribute('image') ? this.getAttribute('image') : '';

		this.shadowRoot.innerHTML = `
			<div class="card">
				<img src="${image}" class="card-img-top" alt="${alt}">
				<div class="card-body">
					<h5 class="card-title">${ title }</h5>
					<p class="card-text">${description}</p>
					<a href="${link}" target="_blank" class="btn btn-primary">${linkTitle}</a>
				</div>
			</div>
		`

		this.shadowRoot.appendChild(bsCss)
		this.shadowRoot.appendChild(themeCss)
	}
}

window.customElements.define('custom-card', Card)