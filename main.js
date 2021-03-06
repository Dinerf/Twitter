var newTweet = document.getElementById("newTweet");
var newTweetBox = document.getElementById("newTweetBox");

window.onload = newTweet.value = "";
newTweet.onfocus = expand;
newTweet.onblur = contract;
newTweet.addEventListener("input", validateTweet);
newTweet.addEventListener ("input", charCount);
newTweet.addEventListener("input", resize);
document.getElementById("submit").addEventListener("click", publishTweet);

newTweetBox.addEventListener("input", validateTweet);
newTweetBox.addEventListener ("input", charCount);
newTweetBox.addEventListener("input", resize);
document.getElementById("submitBox").addEventListener("click", publishTweet);

document.getElementById("tweet").addEventListener("click", openTweetBox);
document.getElementById("close").addEventListener("click", closeTweetBox);

function expand () {
  document.getElementById("counter").style.display = "initial";
  document.getElementById("submitBar").style.display = "flex";
  document.getElementById("newTweet").style.border = "2px solid #93D7FA";
  document.getElementById("newTweet").style.height = "80px";
}

function contract () {
  var myNewTweet = newTweet.value;
  if(myNewTweet.trim().length <= 0 && newTweet.onblur) {
    document.getElementById("counter").style.display = "none";
    document.getElementById("submitBar").style.display = "none";
    document.getElementById("newTweet").style.border = "1px solid #93D7FA";
    document.getElementById("newTweet").style.height = "35px";
    document.getElementById("newTweetBox").style.height = "35px";

  }
}

function validateTweet() {
  var myNewTweet = newTweet.value + newTweetBox.value;
  var counter = myNewTweet.length;
  document.getElementById("counter").innerHTML = 140 - counter;
  document.getElementById("counterBox").innerHTML = 140 - counter;
  counter = document.getElementById("counter").innerHTML;
  counter = document.getElementById("counterBox").innerHTML;
  if(myNewTweet.trim().length > 0) {
    if(parseInt(counter) < 140 && parseInt(counter) >= 0) {
      document.getElementById("submit").removeAttribute("disabled");
      document.getElementById("submitBox").removeAttribute("disabled");
    } else {
      document.getElementById("submit").setAttribute("disabled", "");
      document.getElementById("submitBox").setAttribute("disabled", "");
    }
  } else {
    document.getElementById("submit").setAttribute("disabled", "");
    document.getElementById("submitBox").setAttribute("disabled", "");
  }
  return counter;
}

function charCount() {
  counter = parseInt(validateTweet());
  if(counter > 20) {
    document.getElementById("counter").style.color = "#66757f";
    document.getElementById("counterBox").style.color = "#66757f";
  }
  if(counter <= 20 && counter > 10) {
    document.getElementById("counter").style.color = "orange";
    document.getElementById("counterBox").style.color = "orange";
  }
  if(counter <= 10) {
    document.getElementById("counter").style.color = "red";
    document.getElementById("counterBox").style.color = "red";
  }
}

function resize() {
  newTweet.style.height = "80px";
  newTweet.style.height = newTweet.scrollHeight + "px";
  newTweetBox.style.height = "80px";
  newTweetBox.style.height = newTweetBox.scrollHeight + "px";
}

function setTime() {
  var data = new Date();
  var hour = JSON.stringify(data.getHours());
  if(hour.length === 1) {
    hour = "0" + hour;
  }
  var min = JSON.stringify(data.getMinutes());
  if(min.length === 1) {
    min = "0" + min;
  }
  return time = hour + ":" + min;
}

function openTweetBox() {
  document.getElementById("newTweet").value = "";
  document.getElementById("counter").innerHTML = "140";
  document.getElementById("counterBox").innerHTML = "140";
  document.getElementById("backColor").style.display = "flex";
  contract();
}

function closeTweetBox() {
  document.getElementById("newTweetBox").value = "";
  document.getElementById("counter").innerHTML = "140";
  document.getElementById("counterBox").innerHTML = "140";
  document.getElementById("backColor").style.display = "none";
  contract();
}

function publishTweet() {
  var feedTweet = document.createElement("div");
  feedTweet.className = "feedTweet"
  
  var img = document.createElement("img");
  img.src = "data:image/jpeg;base64,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";
  img.className = "userPhoto";
  feedTweet.appendChild(img);
  
  var tweetConteiner = document.createElement("div");
  tweetConteiner.className = "tweetConteiner";
  feedTweet.appendChild(tweetConteiner);
  
  var name = document.createElement("span");
  name.className = "name";
  name.textContent = "Laboratoria ";
  tweetConteiner.appendChild(name);
  
  var userName = document.createElement("span");
  userName.className = "userName";
  userName.textContent = "@laboratoria";
  tweetConteiner.appendChild(userName);

  var now = document.createElement("span");
  now.className = "now";
  now.textContent = " - " + setTime();
  tweetConteiner.appendChild(now);
  
  var publishedTweet = document.createElement("p");
  publishedTweet.className = "publishedTweet";
  var myNewTweet = document.getElementById("newTweet").value + document.getElementById("newTweetBox").value;
  publishedTweet.textContent = myNewTweet;
  tweetConteiner.appendChild(publishedTweet);

  var interactOptions = document.createElement("div");
  interactOptions.className = "interactOptions";
  tweetConteiner.appendChild(interactOptions);

  var faComment = document.createElement("i");
  faComment.className = "far fa-comment"
  interactOptions.appendChild(faComment);

  var faRetweet = document.createElement("i");
  faRetweet.className = "fas fa-retweet";
  interactOptions.appendChild(faRetweet);

  var faHeart = document.createElement("i");
  faHeart.className = "far fa-heart";
  interactOptions.appendChild(faHeart);

  var barChart = document.createElement("span");
  barChart.className = "icon-bar-chart-2";
  interactOptions.appendChild(barChart);

  document.getElementById("feed").appendChild(feedTweet);   
  document.getElementById("newTweet").value = "";
  document.getElementById("newTweetBox").value = "";
  document.getElementById("submit").setAttribute("disabled", "");
  document.getElementById("submitBox").setAttribute("disabled", "");
  document.getElementById("counter").innerHTML = "140";
  document.getElementById("counterBox").innerHTML = "140";
  document.getElementById("backColor").style.display = "none";
  contract();
}