$(document).ready(function () {
    new fullpage('#fullpage', {
        responsiveWidth: 1024,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        parallax: true,
        autoScrolling: false,
        scrollOverflow: true,
        sectionsColor: ['#ccc', '#f0f', '#ff0', '#fff', '#ddd'],
        onLeave: function(origin, destination, direction) {
            console.log("Leaving section" + origin.index);
        },
    });
});