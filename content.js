var str;
var n;
var name;
var content;
var x;
var title = document.title;
var metas = document.getElementsByTagName('meta');
for (var i=0; i<metas.length; i++) { 
		name = metas[i].getAttribute("name");
			if (name == "description"){
			content = metas[i].getAttribute("content");
			redirect();
		}
	}
function redirect(){	
		str = content;
		n = str.includes("videos");
		x = title.includes("videos");
	if (n == true || x == true){
		window.location='https://www.google.com/';
		}
	}	