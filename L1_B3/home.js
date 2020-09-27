let showMenu = false;

function openNav() {
    showMenu = !showMenu;
    const btnMenu = document.getElementById("list-menu-hide");
    let styles = {}
    if (showMenu) {
        styles = {
            'max-height': '600px',
            transition: 'max-height 0.25s ease-in',
        }
        document.getElementById("icon-menu-show").style.display = "none";
        document.getElementById("icon-menu-hide").style.display = "block";
    } else {
        styles = {
            'max-height': '0px',
            transition: 'max-height 0.25s ease-in-out'
        }
        document.getElementById("icon-menu-show").style.display = "block";
        document.getElementById("icon-menu-hide").style.display = "none";
    }

    Object.assign(btnMenu.style, styles);

}



// function countUpLoad() {
//     var options = {
//         useEasing: true,
//         useGrouping: true,
//         separator: ',',
//         decimal: '.',
//         prefix: '',
//         suffix: ''
//     };
//     var counter2 = new CountUp("project-counter", 0, 120, 0, 2.5, options);
//     var counter1 = new CountUp("year-counter", 0, 1000, 0, 2.5, options);
//     counter1.start();
//     counter2.start();
// }

// countUpLoad()