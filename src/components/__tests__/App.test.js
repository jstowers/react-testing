// App.test.js
// June 25, 2018

import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

describe('App', () => {

	it('shows a comment box', () => {
		const wrapped = shallow(<App />);
		
		// find() returns an array of every instance of CommentBox
		expect(wrapped.find(CommentBox).length).toEqual(1);
	});
});

	/* 
	// old method without Enzyme.shallow()
	it('shows a comment box', () => {
	
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);

		// look inside div and see if content from CommentBox exists
		// not as good, because only want to know about the existence of CommentBox,
		// not its internal workings
		expect(div.innerHTML).toContain('Comment Box');
		ReactDOM.unmountComponentAtNode(div);
	});
	*/