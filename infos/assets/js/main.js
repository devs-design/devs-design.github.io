$(document).ready(function(){
	var $EmailIdRegEx = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{2,10})(\]?)$/;
    var $ConNoRegEx = /^([0-9]{10})$/;
		
	$("#sent").click(function(){

		if($("#name").val() && $("#phone").val().match($ConNoRegEx) && $("#email").val().match($EmailIdRegEx) && $("#message").val()){
			contactUs($("#name").val(),$("#phone").val(),$("#email").val(),$("#message").val());
		}
		else{
			alert("Please Fill The All the Input Properly...");
		}

	});
 });

 function contactUs(name,email,phone,text){
	$.ajax({
		url: "/contactUs_API",
		type: "POST",
		dataType: "JSON",
		data: {Name:name,EmailId:email,Phone:phone,Message:text},
		cached: false,
		success: function(data){
			$("#name").val("");
			$("#phone").val("");
			$("#email").val("");
			$("#message").val("");
			alert("Successfully Message Sent...");
		},
		failure: function(){
			alert("Sorry For Inconvience...");
		}
	 });
 }