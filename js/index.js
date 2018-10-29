$.getJSON("https://www.reddit.com/r/webdev.json",function(redditjson){
 for (var i= 1 ; i<redditjson.data.children.length; i++){
   var imgData = redditjson.data.children[i].data.thumbnail;
   //$("#gallery").text(imgData);
   if(imgData=== "self" || imgData === "default"){
     continue;
   }else{
     $("#gallery").append("<div><img src='" + imgData + "'/></div>");
   }
 }

});
