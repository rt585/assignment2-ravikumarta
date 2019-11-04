
 function myRecord(){
	 var time = new Date().getHours();
	 var min = new Date().getMinutes();
	 var studentname= document.getElementById("firstname").value+ "  ";
	 var studentmajor= document.getElementById("major").value+"  ";
	 var studentyear= document.getElementById("startyear").value+"  ";
	 if
	    (studentyear <= 2000)
		  {
		    alert ("Enter an year above 2000");
			}
			

	else{	    
	 document.getElementById("records").innerHTML += "<br />" +time+":" +min+"   " +studentname;
	 document.getElementById("records").innerHTML += studentmajor;
	 document.getElementById("records").innerHTML += studentyear;
	 document.MyFormDetails.firstname.value=" ";
	 document.MyFormDetails.major.value=" ";
	 document.MyFormDetails.startyear.value=" "; 
	 }
	 }