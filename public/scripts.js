const socket = io("http://localhost:3000");
let nsSocket = "";

socket.on("loadNs", (nsData)=>{
    let list = document.getElementById("namespaces");
    // console.log(nsData);
    list.innerHTML = "";
    nsData.forEach(ele=>{
            list.innerHTML += `<li class=${ele.endpoint}>${ele.title}</li>`;
    })
    Array.from(list.children).map(ele=>{
        ele.addEventListener("click",(evt)=>{
            joinNs(ele.getAttribute("class"));
        })
    });
    joinNs("/cats");
})