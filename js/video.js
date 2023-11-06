const video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	console.log("Update volume information")
	const volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = `${volume}%`;
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video by 10%");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up Video");
	video.playbackRate *= 10 / 9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Advance Video by 10 Seconds");
	video.currentTime += 10;
	console.log(video.currentTime);
	if (video.currentTime === video.duration) video.currentTime = 0;
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute/Unmute Video");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute"
	} else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Adjust Video Volume");
	const volume = document.getElementById("slider").value;

	video.volume = volume / 100;
	document.getElementById("volume").innerHTML = `${volume}%`;
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Apply Vintage Style");

	video.className = "oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove Vintage Style");

	video.className = "video";
});
