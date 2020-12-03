let date = moment().format("LLLL").split(" ");

let time = date[date.length - 1] + " " + date[date.length];
date.pop();
date.pop();

document.getElementById("currentDay").innerHTML = date.join(" ");

function NumberFormat() {
  for (var a = 9; a <= 17; a++) {
    if (a > 12) {
      rowNumber = a - 12;
    } else {
      rowNumber = a;
    }
    document.write("<tr>");
    for (var b = 0; b < 3; b++) {
      if (b == 0) {
        document.write("<td>" + rowNumber + "</td>");
        if (a > 11) {
          document.write("<td>" + rowNumber + "pm" + "</td>");
        } else document.write("<td>" + rowNumber + "am" + "</td>");
      }
    }
    document.write("</tr>");
  }
}
let startTime = moment().format("HH");
$(document).ready(function () {
  $("#timeTable tr").each(function () {
    let endTime = $(this).children(":first").attr("id");
    console.log(endTime);

    if (parseInt(startTime) > parseInt(endTime)) {
      console.log(startTime, "the past");
      $(this).css("background", "gray");
    } else if (parseInt(startTime) === parseInt(endTime)) {
      console.log(startTime, "present");
      $(this).css("background", "red");
    } else if (parseInt(startTime) < parseInt(endTime)) {
      console.log(startTime, "the future");
      $(this).css("background", "green");
    }
  });
});
$(".save-button").click(function () {
  console.log($(this).parent().siblings()[1].children[0].value);
  const key = $(this).attr("id");
  const userInput = $(this).parent().siblings()[1].children[0].value;
  localStorage.setItem(key, userInput);
});


for(var i = 9; i < 18; i++)  {
  var currentTask = localStorage.getItem("button"+ i)
  console.log('task ' + i, currentTask)
  if(currentTask != null) {
    $('.textarea').eq(i - 9).val(currentTask)
  }
}


