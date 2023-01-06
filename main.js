let unreaded_div = document.querySelectorAll(".noti-cont div.unread");
let markall = document.querySelector(".all-read");
let notifications_num = document.querySelector(".notifications-num");
console.log(unreaded_div);
unreaded_div.forEach((div) => {
    div.addEventListener("click", () => {
        if (notifications_num.innerHTML >= 1) {
            notifications_num.innerHTML = notifications_num.innerHTML - 1;
        }
        div.classList.toggle("unread");
        let dot = div.getElementsByClassName("d")[0];
        dot.classList.remove("dot");
    });

});
markall.addEventListener("click", (e) => {
    e.preventDefault();
    unreaded_div.forEach((d) => {
        d.classList.remove("unread");
        let dot = d.getElementsByClassName("d")[0];
        dot.classList.remove("dot");

    })
    notifications_num.innerHTML = 0;
})
