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


//create checkboxes dynamically based on TAGS
function populateTagCheckboxes(){
	var tagsHTML = "";
	for (var i=0; i<TAGS.length; i++){
		tagsHTML += "<li><input type=\"checkbox\" name=\"tag\" value=\""+TAGS[i]+"\" id=\"tag"+i+"\"> "+TAGS[i]+"</li>"
	}
	document.getElementById("inputTags").innerHTML = tagsHTML
}


//check which tags were selected
function getCheckedTags(){
	var checkedTags = [];
	for (var i=0; i<TAGS.length; i++){
		var element = document.getElementById("tag" + i);
		if (element.checked){
			checkedTags[checkedTags.length] = element.value;
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
    return tagsHTML
}


//change smileys according to the value of the slider
function showSmiley(newValue){
	document.getElementById("mood").className="smiley"+newValue;
}


//submit and display new post
function submitNewPost() {
	document.getElementById("author").innerHTML = document.getElementById("inputAuthor").value;
    document.getElementById("title").innerHTML = document.getElementById("inputTitle").value;
    document.getElementById("content").innerHTML = document.getElementById("inputContent").value;
    document.getElementById("tags").innerHTML = formatTags();
    document.getElementById("selectedMood").className = document.getElementById("mood").className;
     document.getElementById("importance").innerHTML= document.getElementById("dropDown").value
    toggleVisibility("viewPostsButton");
}