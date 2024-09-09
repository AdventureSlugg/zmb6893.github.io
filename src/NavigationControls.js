var currentPage = 0;

let canNavNext = true;
let canNavPrev = true;

document.addEventListener("DOMContentLoaded", function() {
    navigateTo(currentPage);
});

document.onkeyup = function (event) {

	if (event.key == "ArrowRight" && canNavNext ) {
		prevPage();
	}

	if (event.key == "ArrowLeft" && canNavPrev ) {
		nextPage();
	}

};

const jobs = [
	{
		title: 'Supplemental Instruction Leader',
		companyImage: '',
		startDate: new Date(),
		endDate: new Date()
	},
	{
		title: 'Software Developer Co-op'
	}
]


const pagesByNumber = [

	{
		pageNumber: 0,
		leftPage: `
			<div class="book-note orange medium-width medium-height top">
				Usage Guide
			</div>
			<div class="card-content" style="margin: 2rem 1rem; width: 100%;">
				<h2>
					Basic Navigation
				</h2>
				<p>
					Having trouble with directions? No worries! There are two ways that you can navigate through the pages. You can either use the buttons in the top corner of each page to go forwards or backwards. The other option is to use your left and right arrow keys on your keyboard!

				</p>

				<div class="guide-images">
					<img src='/assets/images/navigationButtons.png' height='40rem'>
					<p> -or- </p>
					<img src='/assets/images/arrowKeys.png' height='55rem'>
				</div>
				

				</p>
				<p>
					If you happen to drop the book, don't panic! With my lightning-speed reflexes, I threw a book mark in just as the book was about to close! So when you open the book again, you will be right where you left off!
				</p>


				<h2>
					Readability
				</h2>
				<p>
					Not a fan of reading off the pages diagonally? You can click on any of the cards to trigger a content pop-up! Flat. Larger. And seriously easier to read!
				</p>

				<h2>
					Quick Start
				</h2>
				<p>
					Are you here to see a specific section? You can quickly jump to any section using the following links!
				</p>
			</div>
		`,
		rightPage: `
			<div class="top-section">
				<div class="card" onclick="openModal('about-section')">
					<div class="green book-note small-width small-height">
						About Me
					</div>
					<div class="about-section" id="about-section">
						<div class="card-content">
							<p>
								Hey there! About me sections are hard... Truly difficult! No matter what I say here, it will never be enough to capture who I really am.
							</p>
							
							<p>
								That said, if there's one thing I'd like to impart to anyone I might meet in the future, it would be this:
							</p>
							
							<p>
								I believe in living life genuinely and authentically, with every grain—every morsel—of our beings.
							</p>
							
							<p>
								This is as close to the real <i>me</i> as you'll get during your stay on my site! But don't worry, you'll now get to know the professional Zoe too!
							</p>
						</div>

						<div class="selfie card"></div>
					</div>
				</div>
			</div>
			<div class="bottom-section">
				<div class="image card"></div>
				<div class="hobbies card" onClick="openModal('hobbies-section')">
					<div class="blue book-note small-width small-height">
						Past Times
					</div>
					<div id="hobbies-section" style="margin: 1rem; overflow-y: scroll; height: 70%;">
						<div class="card-content" >
							<p>
								In my free time, I love to embark on all kinds of adventures. Whether it's traveling to a city I've never visited, exploring hidden gems in my own area, or discovering new hiking trails, I'm always eager to reconnect with nature and uncover something new.
							</p>
							
							<p>
								But I also have a quieter side. Sometimes, I enjoy sitting down with friends to watch an anime we've all been meaning to see. When I need some alone time, you'll likely find me curled up with a good book, lost in another world. My vivid imagination often leads me to draw, capturing the details I observe around me.
							</p>
						</div>
					</div>
				</div>
			</div>
			`
	},
	
	{
		pageNumber: 1,
		leftPage: `
			<div class="blue book-note medium-width medium-height top">
				Journey Log
			</div>

			<div>
				<div>
					<h1>In the works...</h1>
				</div>
				${jobs[0].title}
				${jobs.forEach(job => job.title)}
			</div>
		`,
		rightPage: `
			<div class="card">
				<p>
					Click on one of the dots to view the experience!
				</p>
			</div>
		`
	},

	{
		pageNumber: 2,
		leftPage: `
			<div class="red book-note medium-width medium-height top">
				Quest Log
			</div>
		`,
		rightPage: `
			<div class="card">
				Wow, the project information will be displayed here!
			</div>
		`
	},

	{
		pageNumber: 3,
		leftPage: `
			<div class="green book-note medium-width medium-height top">
				Adventure Kit
			</div>
		`,
		rightPage: `
			
		`
	},

	{
		pageNumber: 4,
		leftPage: `
			<div class="blue book-note long-width medium-height top">
				More Adventures
			</div>
		`,
		rightPage: `
		`
	},

	{
		pageNumber: 5,
		leftPage: `
			<div class="card">
				<h2> The End? </h2>
			</div>
			<div class="card">
				<div class="card-content" style="padding: 1rem">
					<p>Hey...</p>
					<p>It's me again.</p>
					<p>Sooo, uhhh, it looks like you've made it to the end, huh?</p>
					<p>...</p>
					<p>Wait! Don't Cry...</p>
					<p>Please don't cry...</p>
					<p>You know, I am just as sad as you are...</p>
					<p>But don't worry! Here, take this:</p>

					<p>Anything you put in this magical box, will reach me! Whether we are 2 inches or 2 million miles apart, so long as you set your message in this box and click the shiny button, I will receive your message!</p>
					
					<p>Please, just don't put anything weird in there...</p>
				</div>
				
			<div>
		`,
		rightPage: `
			<div class="orange book-note medium-width medium-height top">
				Contact me
			</div>
			
			<div>
				<p>Your Email:</p>
				<input type="email">
				<p>Your Message:</p>
				<textarea></textarea>
				<button>Send</button>
			</div>
		`
	}
	/** etc... */
]

const leftPageId = 'left-page';
const rightPageId = 'right-page';

const navigateTo = (pageNumber) => {
	toggleNavButtons();

	// Clear both of the pages of any existing innerHTML
	clearPage(leftPageId);
	clearPage(rightPageId);

	// Trigger a css page flip animation after the content is set
    const leftPage = document.getElementById(leftPageId);
	leftPage.classList.add('flip');

    // // Using requestAnimationFrame to ensure the class is added after the DOM update
    // requestAnimationFrame(() => {
	// 	setTimeout(() => {
    //         leftPage.classList.add('flip');
    //     }, 0);
    // });

    // Remove the flip class after the animation is done (1s here)
    setTimeout(() => {
        leftPage.classList.remove('flip');
    }, 3000);

	// Set the page content based on the page number
	const pageContent = pagesByNumber.find( pageContent => pageContent.pageNumber == pageNumber);
	document.getElementById(leftPageId).innerHTML = pageContent.leftPage;
	document.getElementById(rightPageId).innerHTML = pageContent.rightPage;

}

const nextPage = () => {
	currentPage--;
	navigateTo(currentPage);
}

const prevPage = () => {
	currentPage++;
	navigateTo(currentPage);
}

const clearPage = (pageId) => {
	document.getElementById(pageId).innerHTML = '';
}

const toggleNavButtons = () => {
	const nextButton = document.getElementById('next-button');
	const backButton = document.getElementById('back-button');

	// If the next page does not exist, disable the next-button
	if (pagesByNumber.length - 1 <= currentPage ) {
		nextButton.disabled = true;
		nextButton.classList.add("disabled");
		canNavNext = false;
	} else {
		nextButton.disabled = false;
		nextButton.classList.remove("disabled");
		canNavNext = true;
	}

	// If the previous page does not exist, disable the back-button
	if (currentPage == 0){
		backButton.disabled = true;
		backButton.classList.add("disabled");
		canNavPrev = false;
	} else {
		backButton.disabled = false;
		backButton.classList.remove("disabled");
		canNavPrev = true;
	}

}

const openModal = (elementId) => {
	const element = document.getElementById(elementId);
	const modal = document.getElementById("modal");
	const modalContainer = document.getElementById("modal-container");

	modalContainer.style.display = 'inline-table';
	modal.style.display = 'flex'; 

	modal.innerHTML = `${element.innerHTML}`;
	modal.classList = element.classList;
}

const closeModal = () => {
	const modal = document.getElementById("modal-container");
	modal.style.display = 'none';
}