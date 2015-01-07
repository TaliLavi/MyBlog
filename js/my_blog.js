//This script relies on the data found in data.js

//hide or reveal divs' content according to which button is pressed
function toggleVisibility(buttonId){
	if(buttonId == "viewPostsButton"){
		document.getElementById('viewPosts').classList.remove('hide');
		document.getElementById('submitNewPost').classList.add('hide');
	} else if(buttonId == "newPostButton"){
		document.getElementById('submitNewPost').classList.remove('hide');
		document.getElementById('viewPosts').classList.add('hide');
	}
}


//present author details acording to the author selected from the dropdown
function authorDetails(name){
	var author = AUTHORS[name];
	var age = author['age'];
	var swordsmanship = author['swordsmanship'];
	var charisma = author['charisma'];
	document.getElementById('age').innerHTML = "age: " + age;
	document.getElementById('swordsmanship').innerHTML = "swordsmanship: " + swordsmanship;
	document.getElementById('charisma').innerHTML = "charisma: " + charisma;
}

//wrap elements of an array in list items and return concatenated HTML
function makeHtmlListItems(array) {
	var liHTML ="";
	for (var i=0; i<array.length; i++){
		liHTML += "<li>"+array[i]+"</li>"
	}
	return liHTML
}


//create checkboxes dynamically based on TAGS
function populateTagCheckboxes(){
	var checkboxTags = [];
	for (var i=0; i<TAGS.length; i++){
		checkboxTags[i] = "<label><input type=\"checkbox\" name=\"tag\" id=\"tag"+i+"\"> "+TAGS[i]+"</label>"
	}
	document.getElementById("inputTagsList").innerHTML = makeHtmlListItems(checkboxTags);
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
    var checkedTags = getCheckedTags();
    return makeHtmlListItems(checkedTags);
}


//change smileys according to the value of the slider
function showSmiley(newValue){
	document.getElementById("mood").className="smiley"+newValue;
}


//validate various elements on submition
function validateNewPost(){
	var errorText = "";
	//validate link: user doesn't have to add a link, but if they do - the link has to be valid.
	var linkRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
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
	var titleRegex = /^[a-zA-Z ]{1,50}$/;
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


//display the new post's values
function fillNewPost() {
	document.getElementById("link").innerHTML = "<u>External link</u>: " + document.getElementById("inputLink").value;
	document.getElementById("author").innerHTML = "<u>Author</u>: " + document.getElementById("inputAuthor").value;
    document.getElementById("title").innerHTML = "<u>Title</u>: " + document.getElementById("inputTitle").value;
    document.getElementById("content").innerHTML = "<u>Content</u>: " + document.getElementById("inputContent").value;
    document.getElementById("tags").innerHTML = "<u>Tags</u>: " + formatTags();
    document.getElementById("selectedMood").className = document.getElementById("mood").className;
}

//clear the form
function clearForm() {
    document.getElementById("inputLink").value = "";
    document.getElementById("inputAuthor").selectedIndex = 0;
	document.getElementById('age').innerHTML = "";
	document.getElementById('swordsmanship').innerHTML = "";
	document.getElementById('charisma').innerHTML = "";
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputContent").value = "";
    document.getElementById("mood").className = "smiley3";
    document.getElementById("moodSlider").value = 3;
    populateTagCheckboxes()
}

//submit and display new post (and clear the form), unless there are errors
function submitNewPost(){
	var errorText = validateNewPost();
	if(errorText !== "") {
		document.getElementById("errorText").innerHTML = errorText;
	}
	else {
		fillNewPost()
	    toggleVisibility("viewPostsButton");
 		clearForm()
	}
}