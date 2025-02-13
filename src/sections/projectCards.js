class ProjectCards extends HTMLElement {
	constructor () {
		super()
	}

	projects = [
		{
			title: 'CodeRacer',
			description: 'Improving typing and coding literacy all in one place!',
			link: 'https://github.com/AdventureSlugg/CodeRacer',
			linkTitle: 'Source Code',
			image: '/assets/images/project/CodeRacerDemo.gif',
			alt: 'CodeRacer Thumbnail'
		},
		{
			title: '3DSea',
			description: 'A vast library of 3D web components, created using THREE.js',
			link: 'https://github.com/AdventureSlugg/ThreeDSea',
			linkTitle: 'Source Code',
			image: '/assets/images/project/ThreeDSea.png',
			alt: '3DSea Thumbnail'
		},
		{
			title: 'ApolloLink',
			description: 'A web application that prempetively detects signs of disease from the user\'s smart watch',
			link: 'https://github.com/awb8593/HackHarvard',
			linkTitle: 'Source Code',
			image: '/assets/images/project/ApolloLink.jpg',
			alt: 'Apollo Link Thumbnail'
		},
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


		const projectCards = this.createProjectCards();
		this.shadowRoot.innerHTML = `
		
			<div class='row gx-5 gy-5'>
				${projectCards}
			</div>
		`


		// Add everything to the document
		this.shadowRoot.appendChild(bsCss);
		this.shadowRoot.appendChild(themeCss);
	}

	createProjectCards() {
		let projectCards = ''
		this.projects.forEach ((project, index) => {
			projectCards += ((index + 1) % 4) === 0 ? `</div><div class='row gx-5 gy-5' style='padding-top: 2rem'>` : ''
			projectCards += `
				<div class='col-md-4 col-sm-12'>
					<custom-card 
						title="${project.title}" 
						description="${project.description}" 
						image="${project.image}"
						linkTitle="${project.linkTitle}"
						link="${project.link}"
					></custom-card>
				</div>
			`
		})
		return projectCards;
	}
}

window.customElements.define('project-card-section', ProjectCards)