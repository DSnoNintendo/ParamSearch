// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

//add bootstrap
//clean functions


function deleteCell(x, action){ //partial code from https://www.abeautifulsite.net/adding-and-removing-elements-on-the-fly-using-javascript
	var element = document.getElementById(action + "Div" + x);
	element.parentNode.removeChild(element);
}



function linkInclude(){
	var allDivs = document.getElementsByClassName("includeDiv")
	
	for (i = 0; i < allDivs.length; i++) { 
		query += '"' + allDivs[i].innerHTML + '"' + " ";
	}
	alert(query)
}

function linkExclude(){
	var allDivs = document.getElementsByClassName("excludeDiv")
	
	for (i = 0; i < allDivs.length; i++) { 
		query += '-' + allDivs[i].innerHTML + " ";
	}
	alert(query)
}

function includeGet(entry){ 
	if (entry.value.length == 0) { //only add new entry if entry has value
		null
	} else {
		includeCounter ++;
		
		var newDiv = document.createElement("div"); //create and name new div element
		newDiv.setAttribute("class", "includeDiv");
		newDiv.setAttribute("id", "includeDiv" + includeCounter);
		
		//apend new div to include table
		var node = document.createTextNode(entry.value); //https://www.w3schools.com/js/js_htmldom_nodes.asp
		newDiv.appendChild(node)
		
		var element = document.getElementById("div1");
		
		element.appendChild(newDiv);		
		
		//trigger deleteCell function listener from: https://stackoverflow.com/a/23024673
		document.getElementById('includeDiv' + includeCounter).addEventListener('click', deleteCell.bind(null, includeCounter, "include"));
	}
}  

function get(entry){
	if (entry.value.length == 0) { //only add new entry if entry has value
		null
	} else {
		excludeCounter ++;
		
		var newDiv = document.createElement("div"); //create and name new div element
		newDiv.setAttribute("class", "excludeDiv");
		newDiv.setAttribute("id", "excludeDiv" + excludeCounter);
		
		//apend new div to excludeTable
		var node = document.createTextNode(entry.value); //https://www.w3schools.com/js/js_htmldom_nodes.asp
		newDiv.appendChild(node)
		
		var element = document.getElementById("div2");
		
		element.appendChild(newDiv);

		//trigger deleteCell function listener from: https://stackoverflow.com/a/23024673
		document.getElementById('excludeDiv' + excludeCounter).addEventListener('click', deleteCell.bind(null, excludeCounter, "exclude"));
	}
}

function siteGet(entry, param){

	if (entry.value.length == 0) { //only add new entry if entry has value
		null
	} 
	if (param == "include") {
		var newDiv = document.createElement("div");
		var newLi = document.createElement("LI");
		var p = document.createElement("p");
		
		
		
		var node = '"' + entry.value + '"';

		//node = '"' + node + '"';
		p.innerHTML = node;
		
		newLi.appendChild(p);
		newLi.setAttribute("class", "paramButton");
		
		newDiv.appendChild(newLi);
		
		termContainer.appendChild(newDiv);
		
	}
	else {
		excludeCounter ++;
		
		var newDiv = document.createElement("div"); //create and name new div element
		newDiv.setAttribute("class", "excludeDiv");
		newDiv.setAttribute("id", "excludeDiv" + excludeCounter);
		
		//apend new div to excludeTable
		var node = document.createTextNode(entry.value); //https://www.w3schools.com/js/js_htmldom_nodes.asp
		newDiv.appendChild(node)
		
		var element = document.getElementById("div2");
		
		element.appendChild(newDiv);

		//trigger deleteCell function listener from: https://stackoverflow.com/a/23024673
		document.getElementById('excludeDiv' + excludeCounter).addEventListener('click', deleteCell.bind(null, excludeCounter, "exclude"));
	}
}

function hover(element) { // partial code from https://stackoverflow.com/a/18032363
	if (element.src == 'chrome-extension://gfjibopjmgngjipemifpokghocfllgfl/images/plus.png') {
		element.setAttribute('src', 'images/plus_yellow.png');
	} else {
		null
	}
	
}

function unhover(element) { // partial code from https://stackoverflow.com/a/18032363
	if (element.src == 'chrome-extension://gfjibopjmgngjipemifpokghocfllgfl/images/plus_yellow.png') {
		element.setAttribute('src', 'images/plus.png');
	} else {
		null
	}
}

function checkLength(element, buttn) { 
//change button image and initiate listeners on entry input
	if (element.value.length == 0) {
		buttn.setAttribute('src', 'images/plus_grey.png');
	} else {
		buttn.setAttribute('src', 'images/plus.png');
		buttn.addEventListener("mouseenter", hover.bind(null, buttn));
		buttn.addEventListener("mouseleave", unhover.bind(null, buttn));
	}
}

function uncheckRad(rad) {
	if(rad.checked) rad.checked = false;
}


var includeCounter = 0;
var excludeCounter = 0;
var query = "";

var includeExcludeButton = document.getElementById('includeExcludeButton');
var websiteButton = document.getElementById('websiteButton');
var domainButton = document.getElementById('domainButton');
var includeExcludeEntry = document.getElementById('includeExcludeEntry');
var websiteEntry = document.getElementById('websiteEntry');
var domainEntry = document.getElementById('domainEntry');
var includeRad = document.getElementById('phraseIncludeRad');
var excludeRad = document.getElementById('phraseExcludeRad');
var siteIncludeRad = document.getElementById('siteIncludeRad');
var domainIncludeRad = document.getElementById('domainIncludeRad');
var termContainer = document.getElementById('termContainer');

//Add Listeners to trigger button if there are characters in entry
includeExcludeEntry.addEventListener('input', checkLength.bind(null, includeExcludeEntry, includeExcludeButton));
websiteEntry.addEventListener('input', checkLength.bind(null, websiteEntry, websiteButton));
domainEntry.addEventListener('input', checkLength.bind(null, domainEntry, domainButton));
includeExcludeButton.addEventListener('click', siteGet.bind(null, includeExcludeEntry, "include"));
includeRad.addEventListener('click', uncheckRad.bind(null, excludeRad));
excludeRad.addEventListener('click', uncheckRad.bind(null, includeRad));
siteIncludeRad.addEventListener('click', uncheckRad.bind(null, domainIncludeRad));
domainIncludeRad.addEventListener('click', uncheckRad.bind(null, siteIncludeRad));

