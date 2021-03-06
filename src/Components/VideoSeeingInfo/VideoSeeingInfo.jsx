import './VideoSeeingInfo.scss';
import { Link } from 'react-router-dom';

import SubscribeButton from '../SubscribeButton/SubscribeButton.jsx';
import FoodDrinkLogo from '../../Assets/Images/food_drink.png';

function VideoSeeingInfo() {
	return (
		<>
			<div className='video-seeing__info'>
				<Link className='video-seeing__info-link' to='/channel/home'>
					<img
						className='video-seeing__info-image'
						src={FoodDrinkLogo}
						alt='Food and Drink logo'
						width='80'
						height='80'
					/>

					<div className='video-seeing__info-text'>
						<h3 className='video-seeing__info-heading'>
							Food & Drink
						</h3>

						<span className='video-seeing__info-date'>
							Published on 14 Jun 2019
						</span>

						<span className='video-seeing__info-count'>
							245K subscribed
						</span>

						<p className='video-seeing__info-description'>
							A successful marketing plan relies heavily on the
							pulling-power of advertising copy. Writing
							result-oriented ad copy is difficult, as it must
							appeal to, entice, and convince consumers to take
							action. There is no magic formula to write perfect
							ad copy; it is based on a number of factors,
							including ad placement, demographic, even the
							consumer’s mood when they see your ad.
						</p>

						<button className='video-seeing__info-more'>
							Show more
						</button>
					</div>
				</Link>

				<SubscribeButton />

				<button className='video-seeing__info-button'>Subscribe</button>
			</div>
		</>
	);
}

export default VideoSeeingInfo;
