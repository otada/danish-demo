// Get the element
let side_nav = document.querySelector(".offerings-show-side_navigation");
let top_nav = document.querySelector(".c-content_nav");

// Get it's position in the viewport
let bounding_side = side_nav.getBoundingClientRect();
let bounding_top = top_nav.getBoundingClientRect();
console.log(bounding_top);
let curStickyPos = bounding_side.top + window.pageYOffset;
window.addEventListener("scroll", (event) => {
	// console.log("side", bounding_side);
	side_nav.style.display = "none";

	if (window.screen.width >= 1440) {
		if (window.pageYOffset > curStickyPos) {
			side_nav.style.display = "block";
			side_nav.style.position = "fixed";
			side_nav.style.width = "152px";
			side_nav.style.left = "60px";
			side_nav.style.top = "0px";
		} else {
			side_nav.style.display = "none";
		}
	}
});

function checkNav() {
	console.log("at top bf", bounding_top.top);
	if (bounding_top.y === 0) {
		console.log("at top", bounding_top.top);
		side_nav.style.display = "block";
		side_nav.style.position = "fixed";
		side_nav.style.width = "152px";
		side_nav.style.left = "60px";
	} else if (bounding_top.y < 0) {
		side_nav.style.display = "none";
	}
}
