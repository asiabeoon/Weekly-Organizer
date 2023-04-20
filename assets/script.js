//Puts Current date under the Curent day paragraph header
var todayDate = moment().format("MMM Do YY");
$("#currentDay").text(todayDate);
console.log (todayDate)

//Add Event Listener "click" to Save User Input to local Storage

$(".saveBtn").on("click", function () {
//  localStorage.setItem$(this).prop("id"),
//  console.log(localStorage.getItem $(this).prop("id")));


//this is for Save buttons sibling is description, parent id =hour 9(ex)
var text =$(this).siblings(".description").val()
var time =$(this).parent().attr("id")
console.log(time, text)

localStorage.setItem(time, text)
})

$("#hour9 .description").val(localStorage.getItem("hour9"))
$("#hour10 .description").val(localStorage.getItem("hour10"))
$("#hour11 .description").val(localStorage.getItem("hour11"))
$("#hour12 .description").val(localStorage.getItem("hour12"))
$("#hour13 .description").val(localStorage.getItem("hour13"))
$("#hour14 .description").val(localStorage.getItem("hour14"))
$("#hour15 .description").val(localStorage.getItem("hour15"))
$("#hour16 .description").val(localStorage.getItem("hour16"))
$("#hour17 .description").val(localStorage.getItem("hour17"))

$(".description").each(function(){
    console.log(this)
//parseInt turns moment into a number from string
    var currentHour = parseInt(moment().hour())

//added a variable and use the sttribute id="17"(ex) then parsed the string to a numberfor the row hour
    var rowHour = parseInt($(this).attr("id"))

    
    if(currentHour < rowHour){
      $(this).addClass("past")
      
          }
          else if(currentHour===rowHour) {
              $(this).removeClass("past")
              $(this).addClass("present")
          }
          else {
              $(this).removeClass("past")
              $(this).removeClass("present")
              $(this).addClass("future")
      
          
          }
      }) 




