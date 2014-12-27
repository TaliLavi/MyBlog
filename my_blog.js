

//check which tags were selected
function getCheckedTags(){
	var checkedTags = [];
	for (var i=0; i<5; i++){
		var element = document.getElementById("tag" + i);
		if (element.checked){
			checkedTags[checkedTags.length] = element.value;
		}
	}
	return checkedTags;
}


//create a string from the checked tags in order to later display it nicely
function formatTags(){
    var tagsText ="";
    var checkedTags = getCheckedTags();
    for (var i=0; i<checkedTags.length; i++){
    	tagsText += "<li>"+checkedTags[i]+"</li>";
    }
    return tagsText
}

//submit and display new post
function submitNewPost() {
    document.getElementById("title").innerHTML = document.getElementById("inputTitle").value;
    document.getElementById("content").innerHTML = document.getElementById("inputContent").value;
    document.getElementById("tags").innerHTML = formatTags();
}



