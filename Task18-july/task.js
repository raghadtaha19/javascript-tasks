async function get(){
    const response =await fetch("https://api.github.com/users/raghadtaha19");
    const data= await response.json();
    console.log(data);

    //create
    let container=document.createElement("div");
    let card=document.createElement("div");
    card.setAttribute("class", "card1");
    let name=document.createElement("p");
    let id=document.createElement("p");
    let ur=document.createElement("a");
    let repo=document.createElement("p");
    let create=document.createElement("p");
    let update=document.createElement("p");
    let avatar=document.createElement("img");

    //Appendchild
    document.body.appendChild(container);
    container.appendChild(card);
    card.appendChild(name);
    card.appendChild(id);
    card.appendChild(ur);
    card.appendChild(repo);
    card.appendChild(create);
    card.appendChild(update);
    card.appendChild(avatar);
    

   // content
    name.textContent=data.login;
    id.textContent=data.id;
    ur.setAttribute('href',data.html_url);
    repo.textContent=data.public_repos;
    create.textContent=data.created_at;
    update.textContent=data.updated_at;
    avatar.setAttribute('src',data.avatar_url);
    
   




 }
 get();