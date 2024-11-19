class AllSections extends HTMLElement {
	constructor() {
		super()
		this.sectionDiv = document.createElement('div');
		this.sectionDiv.innerHTML = `<img src="/assets/images/me.jpeg" class="img-fluid profile-pic" alt="Zoe's Profile Pic">`
	}

	

	sections = [
		{
			title: 'Meet the Developer',
			description: `Hey there! About me sections are hard... Truly difficult! Some people know me as a peer or a mentor while others might know me as an avid adventurer. No matter what I say here, it will never be enough to capture who I really am. That said, if there's one thing I'd like to impart to anyone I might meet in the future, it would be this: I believe in living life genuinely and authentically, with every grain—every morsel—of our beings. This is as close to the real me as you'll get during your stay on my site! But don't worry, you'll now get to know the professional Zoe too! `,
			sectionDiv: this.sectionDiv,
			backgroundImage: '/assets/images/background/flowers.jpg'
		},
		{
			title: 'Checkout My Projects',
			description: '',
			sectionDiv: '',
			backgroundImage: ''
		},
		{
			title: 'View My Experience',
			description: '',
			sectionDiv: '',
			backgroundImage: ''
		},
		{
			title: 'Explore My Achievements',
			description: '',
			sectionDiv: '',
			backgroundImage: ''
		},
		{
			title: 'Get in Touch',
			description: '',
			sectionDiv: '',
			backgroundImage: ''
		}

	]

	connectedCallback() {
		this.attachShadow({mode: 'open'})

		// Import bootstrap css
		const bsCss = document.createElement('link');
		bsCss.setAttribute('rel', 'stylesheet');
		bsCss.setAttribute('href', '/assets/bootstrap-5.3.3-dist/css/bootstrap.min.css');
		// import custom css
		const themeCss = document.createElement('link');
		themeCss.setAttribute('rel', 'stylesheet');
		themeCss.setAttribute('href', '/assets/css/theme-formatting.css');

		const sectionsElement = this.generateSections();
		this.shadowRoot.innerHTML = `
			<div>
				${sectionsElement}
			</div>
		`

		// Add everything to the document
		this.shadowRoot.appendChild(bsCss);
		this.shadowRoot.appendChild(themeCss);
	}

	generateSections() {
		let htmlElement = ''
		this.sections.forEach(section => {
			htmlElement += `
				<custom-section
					title='${section.title}'
					description='${section.description}'
					sectionDiv='{${section.sectionDiv}}'
					backgroundImage='${section.backgroundImage}'
				>
				</custom-section>
			`
		})
		return htmlElement;
	}
}

window.customElements.define('all-sections', AllSections);