function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


function countUpLoad() {
    var options = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    };
    var counter2 = new CountUp("project-counter", 0, 120, 0, 2.5, options);
    var counter1 = new CountUp("year-counter", 0, 1000, 0, 2.5, options);
    counter1.start();
    counter2.start();
}

countUpLoad()