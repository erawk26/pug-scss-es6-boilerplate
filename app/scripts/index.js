import './../styles/main.scss';

if (process.env.NODE_ENV !== 'production') {
	require('./../index.pug');
}

require('./scroll.js');
require('./mobileMenu.js');
