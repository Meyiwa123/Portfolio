<script>
	import logo from '../../assets/png/logo.png';
</script>

<main>
	<span id="dot" />

	<div id="content">
        <img src={logo} alt="logo" />
		<div id="text">
			<p>
				Thank you for visiting my portfolio! I'm Meyiwa, a passionate software engineer with a
				keen interest in robotics. This portfolio showcases my journey, projects, and
				accomplishments in the world of technology.
			</p>
			<p>
				Special thanks to Lilth and Qewer for the design.
			</p>
            <p>
                © Meyiwa Temile | 2023 | All rights reserved | Designed and developed with passion using cutting-edge technologies.
            </p>
		</div>
    </div>
</main>

<style>
	main {
		width: 80vw;
		height: 600px;
		display: flex;
		align-items: center;
		border-left: 3px solid;
		border-image: linear-gradient(to bottom, var(--accent-primary) 60%, transparent 40%) 1;
	}

	#dot {
		position: relative;
		left: -12px;
		top: 65px;
		width: 20px;
		height: 20px;
		transform: rotate(45deg);
		background-color: var(--accent-primary);
	}

	#content {
		display: flex;
		align-items: center;
		margin-left: 25px;
		margin-top: 125px;
	}

	img {
		width: 100;
		height: 72px;
		margin-right: 10px;
	}

	p {
		color: var(--text-secondary);
		margin-top: 3px;
	}

	@media only screen and (max-width: 800px) {
		main {
			width: 100vw;
			border: none;
		}

		#dot {
			display: none;
		}
	}
</style>
