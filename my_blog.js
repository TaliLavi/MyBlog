
function submitNewPost() {
    var Title = document.getElementById("inputTitle").value;
    var Content = document.getElementById("inputContent").value;
    document.getElementById("latestPost").innerHTML = Title + "<br>" + Content;
}