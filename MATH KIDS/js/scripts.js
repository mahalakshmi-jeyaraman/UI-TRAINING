var section_Two;
function redirectFromNextButton() {
    section_Two = document.getElementById("sectionTwo");
    let element = document.getElementById("sectionOne");
    element.setAttribute("style", "display: none");
    section_Two.setAttribute("style", "display: flex");
    document.getElementById("statement").innerHTML = shapes[Selected_Shape].inputStatement;
}
var Selected_Shape;
var shape_Info;
function showNextButton(shapeName) {
    Selected_Shape = shapeName;
    shape_Info = document.getElementById("shapes");
    document.getElementById("next").setAttribute("style", "display: block");
    for (let i = 0; i < shape_Info.childNodes.length; i++) {

        if (shape_Info.childNodes[i].childNodes[0]) {
            shape_Info.childNodes[i].childNodes[0].style.display = "none";
        }
    }
    document.getElementById(Selected_Shape + "-Button").childNodes[0].style.display = "block";
}

const shapes = {
    circle: {
        name: "CIRCLE",
        valueLabel: "RADIUS",
        perimeterFormula: "2πr",
        areaFormula: "πr²",
        variable: "r",
        inputStatement: "ENTER RADIUS",
        calculateArea: (radius) => Math.PI * radius * radius,
        calculatePerimeter: (radius) => 2 * Math.PI * radius
    },
    square: {
        name: "SQUARE",
        valueLabel: "SIDE",
        perimeterFormula: "4*s",
        areaFormula: "s*s",
        variable: "s",
        inputStatement: "ENTER SIDE",
        calculateArea: (side) => side * side,
        calculatePerimeter: (side) => 4 * side
    },
    triangle: {
        name: "TRIANGLE",
        valueLabel: "SIDE",
        perimeterFormula: "3*s",
        areaFormula: "0.433*s*s",
        variable: "s",
        inputStatement: "ENTER SIDE (BASE & HEIGHT)",
        calculateArea: (side) => (side * side) / 2,
        calculatePerimeter: (side) => 3 * side
    }
};

function calculate() {

    console.log(Selected_Shape);

    value = Number(document.getElementById("value").value);
    if (value == 0) {
        document.getElementById("value").style.border = "2px solid red";
        return;
    }
    area = shapes[Selected_Shape].calculateArea(value).toFixed(2);
    perimeter = shapes[Selected_Shape].calculatePerimeter(value).toFixed(2);
    section_Two.setAttribute("style", "display: none");
    document.getElementById("sectionThree").setAttribute("style", "display: flex");
    document.getElementById('shape').id = shapes[Selected_Shape].name;
    document.getElementById("shapeName").innerHTML = shapes[Selected_Shape].name;
    document.getElementById("content").innerHTML = shapes[Selected_Shape].valueLabel;
    document.getElementById("areaFormula").innerHTML = shapes[Selected_Shape].areaFormula;
    document.getElementById("perimeterFormula").innerHTML = shapes[Selected_Shape].perimeterFormula;
    document.getElementById("area").innerHTML = area + " Sq cm";
    document.getElementById("perimeter").innerHTML = perimeter + " cm";
    document.getElementById("variable").innerHTML = shapes[Selected_Shape].variable;
    document.getElementById("val").innerHTML = value + " cm";
}