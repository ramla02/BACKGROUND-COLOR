let index = 0;

function changeColors(){
    let colors = ["gray", "silver", "black", "green", "blue",
        "purple", "yellow", "orange", "pink", "#00008B",
        "red", "white", "#800000", "brown", "fuchsia", "olive", "lime"];

        document.querySelector("body").style.backgroundColor = colors[index++];
        
        if(index > colors.length - 1)
            index = 0;
}