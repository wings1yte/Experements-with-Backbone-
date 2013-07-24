/*console.log(Math.PI);
console.log(Math.E);

(function(){
	console.log(Math.random());
}())

function f() {
	x=Math.random();
	y=Math.random();
		function kv($x){
			return($x*$x);
		};
		function kub($x){
			return($x*$x*$x);
		}
	container=document.getElementById("center");
	$n=kub(x)+2.5*x*y+1.78*kv(x)-2.5*y+1
	console.log($n);
	if ($n > 0) {container.style.backgroundColor="green" }
		else  {container.style.backgroundColor="#cfc"
				container.style.border="2px";
	};
	setTimeout(f, 1000);
}

window.onload = function () {
var menushka = window.document.getElementById("header");
menushka.style.backgroundColor="green";
};*/

/*var m = [3,3,3,3,3,3,3];
var s=0; 
for (var i=0; i<m.length; i++) {
	if ( m[i]=m[i++] ) { s++ }
 };
 console.log(s);*/

 var a=[2, 3, 9, 8, 1, 0, -5];
 var m=[];
 for (var i=0; i<a.length-6; i++) {
 	if ((a[i]*a[i++]*a[i+=2])>(a[i+=3]*a[i+=4]*a[i+=5])) {
 		
 		m[0]=a[i];
 		m[1]=a[i++];
 		m[2]=a[i+=2];
 	}
 	else {
 		m[0]=a[i+=4];
 		m[1]=a[i-=5];
 		m[2]=a[i+=6];
 	}
 }
for (var j=0; j<3; j++) {
	console.log(m[j]);
}