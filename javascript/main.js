let scroller = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    scroller.style.width = (scrollTop / height) * 100 + "%";
})
let total = 0;
document.querySelectorAll("#price").forEach(element => {
    total += +element.innerHTML.substring(1);
});
document.querySelectorAll("#close").forEach(element => {
    element.onclick = () => {
        if(confirm("Are You sure you want to delete this item?") == true){
            element.parentElement.parentElement.remove();
            total = 0;
            document.querySelectorAll("#price").forEach(element => {
            total += +element.innerHTML.substring(1);
            });
            document.getElementById("total").innerHTML = "$"+total;
        }
    }
});
document.getElementById("total").innerHTML = "$"+total;
document.getElementById("close-all").onclick = () => {
    document.querySelectorAll("#close").forEach(element => {
        element.parentElement.parentElement.remove();
        total = 0;
        document.getElementById("total").innerHTML = "$"+total;
    })
}
/*start dropdown header */
document.querySelectorAll("#card-btn").forEach(element => {
    element.onclick = () => {
        if(element.nextElementSibling.classList.contains("show")){
            element.nextElementSibling.classList.remove("show")
        }
        else{
            document.querySelectorAll("#card-btn").forEach(ele => {
                ele.nextElementSibling.classList.remove("show");
            });
            element.nextElementSibling.classList.add("show");
        }
    }
});
/*end dropdown header */
function CenterCardClick() {
    document.querySelectorAll("#center").forEach(element => {
    element.onclick = () => {
        element.childNodes[1].click();
    }
});
}
function rate() {
    let arr = document.querySelectorAll("#stars svg");
    document.querySelectorAll("#stars svg").forEach((element,i) => {
        element.onclick = () => {
            for (x = 4; x >= i; x--){
                arr[x].style.color = "gold";
            }
            for (x = 0; x < i; x++){
                arr[x].style.color = "#212529";
            }
    }
    });
}