const container = document.querySelector("#container");
let idNum = 0;

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        let div = document.createElement("div");

        div.setAttribute("id", "block-" + idNum);
        div.classList.add("div-block");
    
        div.addEventListener("mouseenter", event => {
            event.target.classList.add("fill");
        });

        container.appendChild(div);

        idNum++;
    }
}

const reset = document.querySelector("#reset-btn");
reset.addEventListener("click", () => {

    let size = parseInt(prompt("Enter Canvas Size: "));

    if(size != null) {
        let clampedSize = Math.min(size, 70);

        container.setAttribute("style",
         "grid-template-columns:repeat(" + clampedSize + ", 1fr); " +
         "grid-template-rows:repeat(" + clampedSize + ", 1fr) "
        );

        container.innerHTML = "";

        for(let i = 0; i < clampedSize; i++) {
            for(let j = 0; j < clampedSize; j++) {
                let div = document.createElement("div");
        
                div.setAttribute("id", "block-" + idNum);
                div.classList.add("div-block");
            
                div.addEventListener("mouseenter", event => {
                    event.target.classList.add("fill");
                });
        
                container.appendChild(div);
        
                idNum++;
            }
        }
    }
});