function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


let checkCountUp = false;
window.addEventListener("scroll", function () {
    var x = pageYOffset;
    if (x >= 1390 && !checkCountUp) {
        countUpLoad();
        checkCountUp = true
    }
})

function countUpLoad() {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    };
    var counter1 = new CountUp("work-hours-con", 0, 945, 0, 2.5, options);
    counter1.start();
    var counter2 = new CountUp("review-con", 0, 1200, 0, 2.5, options);
    counter2.start();
    var counter3 = new CountUp("project-con", 0, 450, 0, 2.5, options);
    counter3.start();
    var counter3 = new CountUp("won-con", 0, 128, 0, 2.5, options);
    counter3.start();

}