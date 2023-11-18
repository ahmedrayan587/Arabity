function link() {
    document.querySelector("#shop-copy #close-all").onclick = document.querySelector("#shop #close-all").onclick;
    let closeArray1 = document.querySelectorAll("#shop-copy #close");
    let closeArray2 = document.querySelectorAll("#shop #close");
    for (x = 0; x < closeArray1.length; x++){
        closeArray1[x].onclick = closeArray2[x].onclick;
    }
}
function linkTotal() {
    document.getElementById("total").innerHTML = "$" + total;
document.getElementById("shop-copy").innerHTML = document.getElementById("shop").innerHTML;
}

linkTotal();
document.querySelectorAll("#close").forEach(element => {
    element.onclick = () => {
        element.parentElement.parentElement.remove();
        total = 0;
        document.querySelectorAll("#shop #price").forEach(element => {
        total += +element.innerHTML.substring(1);
        });
        linkTotal();
        link();
    }
});
document.getElementById("total").innerHTML = "$"+total;
document.getElementById("close-all").onclick = () => {
    document.querySelectorAll("#close").forEach(element => {
        element.parentElement.parentElement.remove();
        total = 0;
        linkTotal();
    })
}
link();
