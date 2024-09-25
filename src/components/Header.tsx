import '../common/style/header.scss';
export const Header = () => {
	return (
		<div className='header'>
			<div className='text'>
				<h1>Where in the world?</h1>
				<button className='dark-mode'>
                <span className='material-icons moon-icon'>brightness_3</span>
					<p>Dark mode</p>
				</button>
			</div>
		</div>
	);
};
