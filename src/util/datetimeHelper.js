export function formatTime(){
	let date = new Date();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	
	if(minutes < 10) {
		minutes = "0" + minutes
	}

	let ampm = 'am'
	
	if(hour > 12) {
		hour -= 10
		ampm = 'pm'
	}

	let formatedTime = `${hour}:${minutes} ${ampm}`
	return formatedTime;
};

export function formatDate() {
	let date = new Date().toISOString();
	let formatedDate = date.slice(0, 10)
	return formatedDate;
}