let environmentTitle = "The Net of Being";

let environmentElements = ["background", "image", "warm floor", "half-open door"];

let mainEntity = {
    name: "schism guys",
    type: "gif",
    mood: "suspicious",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$("#needy-button").append(
    "<img width= 400px src='../images/schism.gif' style='display:none;' alt='Schism'>"
);

$("#needy-button").click(function() {
    $("#needy-button img").toggle();
});

$("#needy-button2").append(
    "<img width= 400px src='../images/vicarious.gif' style='display:none;' alt='vicarious'>"
);

$("#needy-button2").click(function() {
    $("#needy-button2 img").toggle();
});

$("#needy-button3").append(
    "<img width= 400px src='../images/aenima.gif' style='display:none;' alt='aenima'>"
);

$("#needy-button3").click(function() {
    $("#needy-button3 img").toggle();
});

$("#needy-button4").append(
    "<img width= 400px src='../images/parabola.gif' style='display:none;' alt='parabola'>"
);

$("#needy-button4").click(function() {
    $("#needy-button4 img").toggle();
});