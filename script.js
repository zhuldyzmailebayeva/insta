let post = document.getElementById("post1"); 
let postsBox = document.getElementById("allposts") 
 
let imgurls = [ 
    "https://sh1rroo.github.io/biosite/myselfphoto.png", 
    "https://sh1rroo.github.io/biosite/yalegenda.jfif", 
    "https://ir.ozone.ru/s3/multimedia-o/c1000/6562172424.jpg", 
    "https://llfalmaty.kz/upload/team_logo/68232_133886_23.jpg" 
] 
for(let i = 0; i < 100; i++){ 
    newpost = post.cloneNode(true); 
    imgpost = newpost.getElementsByClassName("postImg")[0] 
    imgpost.setAttribute("src", imgurls[i%4]) 
 
    postsBox.appendChild(newpost); 
}