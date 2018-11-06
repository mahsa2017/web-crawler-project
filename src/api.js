export const brokenLinkCounter = (link, cb) => {
	const statusArr = [];
	const http = require('http');
	const fs = require('fs');
	let count = 0;

	let body = '';
	const options = {
		hostname: link,
		path: '/',
		method: 'GET'
	};
	const req = http.request(options, function(res) {
		res.on('data', function(data) {
			body += data;
		});
		res.on('end', function() {
			const regex = /href="[^"#]*"/g;
			const arrOfLinks = body.match(regex).reduce((linkArr, item) => {
				const trimmedLink = item.substring(6, item.length - 1);
				if (trimmedLink.substring(trimmedLink.length - 3) !== 'jpg' && trimmedLink.charAt(0) === '/') linkArr.push(trimmedLink);
				return linkArr;
			}, []);

			arrOfLinks.forEach((link, index) => {
				let resBody = '';
				options.path = link;
				const linkReq = http.request(options, function(response) {
					response.on('data', function(data) {
						resBody += data;
					});
					response.on('end', function() {
						if (response.statusCode !== 200) statusArr.push(link);
						if (++count === arrOfLinks.length) {
							cb(null, statusArr);
						}
					});
				});
				linkReq.end();
			});
		});
	});
	req.end();
};
