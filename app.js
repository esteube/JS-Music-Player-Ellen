var title = ["Favorite Food by Tokyo Police Club", "Thrill of the Hunt by Kind of Like Spitting", "Transgender Dysphoria Blues by Against Me!", "Where I'm From by Digable Planets"];

var output = document.getElementById('header');

var play = document.getElementsByClassName('fa');

  function changeHeader(songName){
    output.innerHTML ="Now playing: " + songName;
  };



play[0].addEventListener('click', function(){
    if(play[0].className === 'fa fa-play'){
    play[1].firstChild.pause();
    play[2].firstChild.pause();
    play[3].firstChild.pause();
    play[1].className = "fa fa-play";
    play[2].className = "fa fa-play";
    play[3].className = "fa fa-play";

    play[0].firstChild.play();
    play[0].className = "fa fa-stop";
    changeHeader(title[0]);
}
else{
  play[0].className = "fa fa-play";
  play[0].firstChild.pause();
}



});

play[1].addEventListener('click', function(){
    if(play[1].className === 'fa fa-play'){
    play[0].firstChild.pause();
    play[2].firstChild.pause();
    play[3].firstChild.pause();
    play[0].className = "fa fa-play";
    play[2].className = "fa fa-play";
    play[3].className = "fa fa-play";

  play[1].firstChild.play();
  play[1].className = "fa fa-stop";
  changeHeader(title[1]);
}
  else{
    play[1].className = "fa fa-play";
    play[1].firstChild.pause();
  }

});

play[2].addEventListener('click', function(){
    if(play[2].className === 'fa fa-play'){
    play[0].firstChild.pause();
    play[1].firstChild.pause();
    play[3].firstChild.pause();
    play[0].className = "fa fa-play";
    play[1].className = "fa fa-play";
    play[3].className = "fa fa-play";

  play[2].firstChild.play();
  play[2].className = "fa fa-stop";
  changeHeader(title[2]);
}
  else{
    play[2].className = "fa fa-play";
    play[2].firstChild.pause();
  }

});


play[3].addEventListener('click', function(){
    if(play[3].className === "fa fa-play"){
    play[0].firstChild.pause();
    play[1].firstChild.pause();
    play[2].firstChild.pause();
    play[0].className = "fa fa-play";
    play[1].className = "fa fa-play";
    play[2].className = "fa fa-play";

  play[3].firstChild.play();
  play[3].className = "fa fa-stop";
  changeHeader(title[3]);
}
  else{
    play[3].className = "fa fa-play";
    play[3].firstChild.pause();
  }
});
