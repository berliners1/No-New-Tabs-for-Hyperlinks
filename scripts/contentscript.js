var linksAdjusted = 0;  //Keep track of how many get changed

primary();

setInterval(function(){
	primary();
},1000);


function primary(){
	var links = document.getElementsByTagName('a'); //Get the 'a' tag
	var linksAmt = links.length; //Get how many are in the page

	for (i = 0; i < linksAmt; i++){
		
		(function(){

			var targetAmt = links[i]; //Put a tags in an array

			//var blankCounter = links[i].getAttribute('target');

			if(targetAmt.getAttribute('target') === '_blank'){ //If a tag has target _blank,
				targetAmt.setAttribute('target','_self'); //Change it to make it have target _self instead
				linksAdjusted++; //And add 1 to links adjusted.
			}
		})(i);

	}

	chrome.runtime.sendMessage({data:linksAdjusted}); //Send amount of links adjusted to background.js

}