$(document).ready(init);


function init() {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-47584411-2', 'waly.me');
    ga('send', 'pageview');
    $('#activateBs').on("click", demoBs);
}

function demoBs() {
    $('.bsDemo').bullseye({
        top: 30,
        left: 5,
        bottom: 0,
        right: 10,
        heading: "What's Up?",
        content: "This tooltip has an invalid hex value as color parameter. The extension detects this and reverts to default value.",
        orientation: "left",
        color: "#fzff",
        onHoverMarkAsRead: true
    }).bullseye({
        bottom: 30,
        right: 4,
        heading: "Some title goes here",
        content: "Awesome, right?",
        color: "#fff",
        orientation: "right"
    }).bullseye({
        left: 600,
        bottom: 50,
        heading: "Hello World!",
        orientation: "bottom",
        color: "#fff"
    });
    $('#activateBs').off();
}