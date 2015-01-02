//This script relies on the data found in data.js

//hide or reveal divs' content according to which button is pressed
function toggleVisibility(buttonId){
	if(buttonId == "viewPostsButton"){
		document.getElementById('viewPosts').classList.remove('hide');
		document.getElementById('submitNewPost').classList.add('hide');
	} else if(buttonId == "submitNewPostButton"){
		document.getElementById('submitNewPost').classList.remove('hide');
		document.getElementById('viewPosts').classList.add('hide');
	}
}


//present author details acording to the author selected from the dropdown
function authorDetails(name){
	var author = AUTHORS[name];
	var age = author['age'];
	var badassness = author['badassness'];
	document.getElementById('age').innerHTML = age;
	document.getElementById('badassness').innerHTML = badassness;
}


//create checkboxes dynamically based on TAGS
function populateTagCheckboxes(){
	var tagsHTML = "";
	for (var i=0; i<TAGS.length; i++){
		tagsHTML += "<li><label><input type=\"checkbox\" name=\"tag\" id=\"tag"+i+"\"> "+TAGS[i]+"</label></li>"
	}
	document.getElementById("inputTagsList").innerHTML = tagsHTML
}


//check which tags were selected
function getCheckedTags(){
	var checkedTags = [];
	for (var i=0; i<TAGS.length; i++){
		var element = document.getElementById("tag" + i);
		if (element.checked){
			checkedTags[checkedTags.length] = TAGS[i];
		}
	}
	return checkedTags;
}


//create a string from the checked tags in order to later display it nicely
function formatTags(){
    var tagsHTML ="";
    var checkedTags = getCheckedTags();
    for (var i=0; i<checkedTags.length; i++){
    	tagsHTML += "<li>"+checkedTags[i]+"</li>";
    }
    return tagsHTML;
}


//change smileys according to the value of the slider
function showSmiley(newValue){
	document.getElementById("mood").className="smiley"+newValue;
}


//validate various elements on submition
function validateNewPost(){
	var errorText = "";
	//validate link: user doesn't have to add a link, but if they do - the link has to be valid.
	var linkRegex = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?/;
	var link = document.getElementById("inputLink").value;
	if(link !== "" && !linkRegex.test(link)){
		errorText += "Check your link.<br>";
	}
	//validate author: user must select an author from the dropdown menu.
	var author = document.getElementById("inputAuthor").value;
	if(author == "default"){
		errorText += "Please select an author.<br>";
	}
	//validate title: title can contain only letters and be up to 50 characters max.
	var titleRegex = /^[a-zA-Z]{1,50}$/;
	var title = document.getElementById("inputTitle").value;
	if(!titleRegex.test(title)){
		errorText += "Your title should contain only letters and be up to 50 characters.<br>";
	}
	//validate content: content can be anything, just not empty.
	var contentRegex = /.+/;
	var content = document.getElementById("inputContent").value;
	if(!contentRegex.test(content)){
		errorText += "You have to write some content.<br>";
	}
	//validate tags
	if(formatTags() == ""){
		errorText += "Select at least one tag.<br>";
	}
	return errorText
}


//submit and display new post
function submitNewPost(){
	var errorText = validateNewPost();
	if(errorText !== "") {
		document.getElementById("errorText").innerHTML = errorText;
	}
	else {
		document.getElementById("link").innerHTML = document.getElementById("inputLink").value;
		document.getElementById("author").innerHTML = document.getElementById("inputAuthor").value;
	    document.getElementById("title").innerHTML = document.getElementById("inputTitle").value;
	    document.getElementById("content").innerHTML = document.getElementById("inputContent").value;
	    document.getElementById("tags").innerHTML = formatTags();
	    document.getElementById("selectedMood").className = document.getElementById("mood").className;
	    toggleVisibility("viewPostsButton");
	}
	
}