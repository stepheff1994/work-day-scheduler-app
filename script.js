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
let startTime = moment().format('h')
$(document).ready(function () {
  $("#timeTable tr").each(function () {

    let timeString = $(this).children(":first").text()
    var endTime = moment(timeString, 'h');

    /*
    if(parseInt(startTime) < parseInt(endTime)) {
        console.log(startTime, 'is before')
        $(this).css('background', 'gray')
    }
    */
    /*
    if(time is before) {
        
    }

    else if(time == now) {

    }

    else if (time is later) {

    }
    else {
        //possible outliers or errors handled here
    }
    */

  });
});
