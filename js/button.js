	var show1=1;
	var hide1=0;
	function setcolor1(){
	if(show1==0 && hide1==1){
		show1=1;
		hide1=0;
		document.getElementById('show1').style.color='#A8A8A8';
		document.getElementById('hide1').style.color='black';
	}
}
	function setcolor2(){
	if(show1==1 && hide1==0){
		show1=0;
		hide1=1;
		document.getElementById('hide1').style.color='#A8A8A8';
		document.getElementById('show1').style.color='black';
	}
}

$(document).ready(function(){
	$("#picture_work_show1").hide(); 
	$("#hide1").click(function(){
    	$("#picture_work_show1").hide();
		$("#picture_work_hide1").show(); 
  	});
  	$("#show1").click(function(){
    	$("#picture_work_show1").show();
		$("#picture_work_hide1").hide(); 
  	});
});

	var show2=1;
	var hide2=0;
	function setcolor3(){
	if(show2==0 && hide2==1){
		show2=1;
		hide2=0;
		document.getElementById('show2').style.color='#A8A8A8';
		document.getElementById('hide2').style.color='black';
	}
}
	function setcolor4(){
	if(show2==1 && hide2==0){
		show2=0;
		hide2=1;
		document.getElementById('hide2').style.color='#A8A8A8';
		document.getElementById('show2').style.color='black';
	}
}

$(document).ready(function(){
	$("#picture_work_show2").hide(); 
	$("#hide2").click(function(){
    	$("#picture_work_show2").hide();
		$("#picture_work_hide2").show(); 
  	});
  	$("#show2").click(function(){
    	$("#picture_work_show2").show();
		$("#picture_work_hide2").hide(); 
  	});
});

	var show3=1;
	var hide3=0;
	function setcolor5(){
	if(show3==0 && hide3==1){
		show3=1;
		hide3=0;
		document.getElementById('show3').style.color='#A8A8A8';
		document.getElementById('hide3').style.color='black';
	}
}
	function setcolor6(){
	if(show3==1 && hide3==0){
		show3=0;
		hide3=1;
		document.getElementById('hide3').style.color='#A8A8A8';
		document.getElementById('show3').style.color='black';
	}
}

$(document).ready(function(){
	$("#picture_work_show3").hide(); 
	$("#hide3").click(function(){
    	$("#picture_work_show3").hide();
		$("#picture_work_hide3").show(); 
  	});
  	$("#show3").click(function(){
    	$("#picture_work_show3").show();
		$("#picture_work_hide3").hide(); 
  	});
});

	var show4=1;
	var hide4=0;
	function setcolor7(){
	if(show4==0 && hide4==1){
		show4=1;
		hide4=0;
		document.getElementById('show4').style.color='#A8A8A8';
		document.getElementById('hide4').style.color='black';
	}
}
	function setcolor8(){
	if(show4==1 && hide4==0){
		show4=0;
		hide4=1;
		document.getElementById('hide4').style.color='#A8A8A8';
		document.getElementById('show4').style.color='black';
	}
}

$(document).ready(function(){
	$("#picture_work_show4").hide(); 
	$("#hide4").click(function(){
    	$("#picture_work_show4").hide();
		$("#picture_work_hide4").show(); 
  	});
  	$("#show4").click(function(){
    	$("#picture_work_show4").show();
		$("#picture_work_hide4").hide(); 
  	});
});