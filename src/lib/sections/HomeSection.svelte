<script>
	import mouseIcon from '../../assets/svg/mouse.svg';
	import github from '../../assets/svg/github.svg';
	import linkedin from '../../assets/svg/linkedin.svg';
</script>

<main class="section" id="home">
	<span id="dot" />

	<div id="title-block">
		<p id="title-hi" data-animate>
			<span style="color: var(--accent-primary);">HI</span> THERE! I'M
		</p>
		<p id="title-name" data-animate>Meyiwa Temile</p>
		<p id="title-aka" data-animate>I go to Carleton University</p>

		<ul id="title-list" data-animate>
			<li>Software Engineer</li>
			<li>Problem Solver</li>
			<li>Robotics Enthusiast</li>
		</ul>

		<div style="display: flex; flex-wrap: wrap;">
			<a class="button" data-animate href="#projects">PROJECTS</a>
			<a class="button" data-animate href="#skills">SKILLS</a>
		</div>

		<div id="title-socials" data-animate>
			<a href="https://github.com/meyiwa123" target="_blank" rel="noopener noreferrer">
				<img src={github} alt="github" />
			</a>
			<a
				href="https://www.linkedin.com/in/meyiwa-temile/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<img src={linkedin} alt="linkedin" />
			</a>
		</div>
	</div>

	<img src={mouseIcon} alt="mouse" id="scroll-img" />
	<p id="scroll-text">SCROLL FOR MORE</p>
</main>

<style>
	main {
		width: 80vw;
		height: 100vh;
		display: flex;
		align-items: center;
		border-left: 3px solid;
		border-image: linear-gradient(to top, var(--accent-primary) 60%, transparent 40%) 1;
	}

	#dot {
		position: relative;
		left: -12px;
		top: -10%;
		width: 20px;
		height: 20px;
		transform: rotate(45deg);
		background-color: var(--accent-primary);
	}

	#title-block {
		margin-left: 75px;
	}

	#title-hi {
		font-size: var(--fsize-text-body);
		font-weight: 800;
		letter-spacing: 1px;
	}

	#title-name {
		font-size: var(--fsize-title);
		margin-top: -20px;
		margin-left: -3px;
	}

	#title-aka {
		color: var(--text-secondary);
		font-size: var(--fsize-text-small);
		margin-bottom: 15px;
		margin-left: 5px;
	}

	#title-list {
		list-style: none;
		margin-bottom: 20px;
	}

	#title-list li {
		color: var(--accent-primary);
		font-size: var(--fsize-text-subheading);
		margin-top: 5px;
	}

	#title-list li::before {
		content: '-';
		font-weight: 400;
		margin-right: 5px;
	}

	#scroll-img {
		width: 40px;
		height: 40px;
		position: absolute;
		left: calc(50% - 20px);
		bottom: 50px;
		animation: scroll-img-anim 2s ease-in-out infinite;
	}

	@keyframes scroll-img-anim {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-30px);
		}
		100% {
			transform: translateY(0);
		}
	}

	#scroll-text {
		width: 200px;
		text-align: center;
		position: absolute;
		right: 50%;
		left: 50%;
		transform: translateX(-50%);
		bottom: 50px;
		animation: scroll-text-anim 2s ease-in-out infinite;
	}

	@keyframes scroll-text-anim {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 0;
		}
		50% {
			opacity: 100%;
		}
		80% {
			opacity: 0%;
		}
		100% {
			opacity: 0;
		}
	}

	#title-socials {
		display: flex;
		margin-top: 20px;
	}

	#title-socials img {
		margin-right: 10px;
		transform: scale(0.8);
		opacity: 60%;
		transition: 250ms;
	}

	#title-socials img:hover {
		opacity: 100%;
	}

	.button {
		margin-right: 20px;
	}

	@media only screen and (max-width: 800px) {
		main {
			width: 100vw;
			border: none;
			justify-content: center;
		}

		#title-block {
			margin-left: 0;
			width: 85%;
		}

		.button {
			width: 100%;
			text-align: center;
			margin-bottom: 15px;
			margin-right: 0;
		}

		#dot,
		#scroll-img,
		#scroll-text {
			display: none;
		}
	}
</style>
