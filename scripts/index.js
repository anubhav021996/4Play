let appendVideo = (xyz,cont) => {
    xyz.map((elem)=>{
        let div = document.createElement("div");
        div.addEventListener("click",()=>{
            showVideo(elem);
        })
        let {snippet:{thumbnails:{medium:{url}}}} = elem;
        let img=document.createElement("img");
        img.src=url;
        let {snippet:{title}} = elem;
        let name=document.createElement("p");
        name.textContent=title;
        let {snippet:{channelTitle}} = elem;
        let cname=document.createElement("p");
        cname.textContent=channelTitle;
        div.append(img,name,cname);
        cont.append(div);
    })
}

var showVideo = (elem) => {
    localStorage.setItem("video",JSON.stringify(elem));
    window.location.href="video.html";
}



export default appendVideo;