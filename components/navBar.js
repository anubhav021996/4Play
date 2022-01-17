var navBar = () => {
    return `<nav>
    <a href="index.html"><img src="./images/logo.png" height="100%" width="100%"></a>
    <div class="search">
        <input type="text" class="name" placeholder="Search">
        <button class="searchV"><i class="fas fa-search"></i></button>
    </div>
    <button class="fa"><i class="fas fa-video"></i></button>
    <button class="fa"><i class="far fa-bell"></i></button>
    <button class="fa"><i class="fas fa-th"></i></button>
    <div class="dropdown">
        <button class="login"></button>
        <div class="droplist">
            <div><p class="signout">Signout</p></div>
        </div>
    </div>
</nav>`
}

function appendName(){
    var login =JSON.parse(localStorage.getItem("login")) || null;
    if(login==null){
        document.querySelector(".login").textContent="Login";
        document.querySelector(".login").addEventListener("click",function(){
            window.location.href="login.html";
        })
    }
    else{
        document.querySelector(".login").textContent=login.username;
        document.querySelector(".login").addEventListener("click",function(){
            document.querySelector(".droplist").classList.toggle("show");
        })
        document.querySelector(".signout").addEventListener("click",function(){
            localStorage.clear();
            window.location.href="index.html";
        })
    }
}

export {navBar,appendName};