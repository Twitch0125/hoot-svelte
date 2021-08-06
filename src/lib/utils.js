export const findTimeDifference = (date) => {
	const now = new Date();
	const differenceSeconds = Math.floor((now - new Date(date)) / 1000);
	let interval = differenceSeconds / 31536000;

	if (interval > 1) {
		return Math.floor(interval) + ' years';
	}
	interval = differenceSeconds / 2592000;
	if (interval > 1) {
		return Math.floor(interval) + ' months';
	}
	interval = differenceSeconds / 86400;
	if (interval > 1) {
		return Math.floor(interval) + ' days';
	}
	interval = differenceSeconds / 3600;
	if (interval > 1) {
		return Math.floor(interval) + ' hours';
	}
	interval = differenceSeconds / 60;
	if (interval > 1) {
		return Math.floor(interval) + ' minutes';
	}
	return Math.floor(differenceSeconds) + ' seconds';
};
