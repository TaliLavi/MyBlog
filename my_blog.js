//list of tags to be used to categorise posts
TAGS = ["Cats","Bats","Wizards","Witches","Evil Pumpkins"];



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

//submit and display new post
function submitNewPost() {
    document.getElementById("title").innerHTML = document.getElementById("inputTitle").value;
    document.getElementById("content").innerHTML = document.getElementById("inputContent").value;
    document.getElementById("tags").innerHTML = formatTags();
}


