let  title = document.getElementById("title");
let about = document.getElementById("about");
let btn =  document.getElementById("btn");
let detail = document.getElementById("detail");

btn.addEventListener('click',function() {
    var divv =  document.createElement('div');
    var head = document.createElement('h2');
    head.innerText = title.value;

    
    var para = document.createElement('p');
    para.innerText = about.value;

    divv.append(head,para);
    detail.appendChild(divv);
  
    const key = title.value;
    const value = about.value;
    localStorage.setItem(key,value);

    const ans = localStorage.getItem(key);


    var lockk = document.createElement("h1");
    lockk.innerHTML = ans;

    head.setAttribute("id","heading");
    let heading  = document.getElementById("heading");
    heading.addEventListener('click', function() {
        alert(ans);
    })
    
    
})

