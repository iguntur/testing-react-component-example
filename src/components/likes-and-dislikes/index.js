import React from 'react';
import './style.css';

class LikesAndDislikes extends React.Component {
	constructor() {
		super();
		this.state = {
			likes: 0,
			dislikes: 0
		};
	}

	like() {
		this.setState(state => ({ likes: state.likes + 1 }));
	}

	dislike() {
		this.setState(state => ({ dislikes: state.dislikes + 1 }));
	}

	render() {
		return (
			<div className='centerify'>
				<div className='container'>
					<div className='action'>
						<button className='btn-action' type='button' data-test='dislike-action' onClick={e => this.dislike()}>
							<span>👎&nbsp;</span>
							<span data-test='dislike-value'>{this.state.dislikes}</span>
						</button>

						<button className='btn-action' type='button' data-test='like-action' onClick={e => this.like()}>
							<span>👍&nbsp;</span>
							<span data-test='like-value'>{this.state.likes}</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default LikesAndDislikes;
