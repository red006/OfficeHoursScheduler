var tid = ""; // id of teacher selected

function createTeacherPage()
{

  tid = getCookie('tidname');

  if (tid != "")
  {
    var teacher = document.getElementById(tid);
    teacher.disabled = true;
genAnnouncement(tid);

  }

}

function genAnnouncement(tid)
{

  if(tid == "diboli")
  {
   document.getElementById("announcementsLbl").innerHTML = "office hours are cancelled for week of 12/15";
  }

  if (tid == "liang")
  {
   document.getElementById("announcementsLbl").innerHTML = "Please make sure you leave a comment when selecting office hours";
  }

  if (tid == "kamberova")
  {
    document.getElementById("announcementsLbl").innerHTML = "I apologize, office hours are cancelled for today";
  }

  if(tid == "fu")
  {
    document.getElementById("announcementsLbl").innerHTML = "today I will be in my office after my 6 pm class, feel free to stop by!";
  }
}

function getCookie(name) {
  var regexp = new RegExp("(?:^" + name + "|;\s*"+ name + ")=(.*?)(?:;|$)", "g");
  var result = regexp.exec(document.cookie);
  return (result === null) ? null : result[1];
}




function testThis()
{
//window.alert("Testingthis");
  document.write("TESTING THIS");
}

function teacherClick(id)
{
tid = id;
  //window.open("C:/Users/red/Documents/GitHub/OfficeHoursScheduler/index.html");
  //var button = document.getElementById(id);
  //button.value= "worked";
  var x = document.getElementById(id);
//  x.disabled= true;
document.cookie = "tidname=" + tid;
var y = document.cookie;
//alert(y);


 window.location = "C:/Users/red/Documents/GitHub/OfficeHoursScheduler/index.html";
  //window.alert(x.value);

}
