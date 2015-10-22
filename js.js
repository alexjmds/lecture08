var tagFinder = function (){
var result = document.body.children;
var result2 = Array.prototype.slice.call(result);
return start(result2,0)}; 

var start = function (result2,i){
	if (result2[i].childElementCount || i < result2.length-1)  {
		var re = Array.prototype.slice.call (result2[i].children);
        result2 = result2.concat(re);
        return start(result2,i+1);
		} else {
			return result2;
		}
};


console.log(tagFinder());