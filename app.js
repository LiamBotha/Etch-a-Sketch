const container = document.querySelector("#container");
let idNum = 0;

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        let div = document.createElement("div");

        div.setAttribute("id", "block-" + idNum);
        div.setAttribute("data-fill", 0);
        div.classList.add("fill-0");
    
        div.addEventListener("mouseenter", event => {

            let fillVal = div.getAttribute("data-fill");
            event.target.classList.remove("fill-" + fillVal)

            div.setAttribute("data-fill", Math.min(parseInt(fillVal) + 1, 5));
            event.target.classList.add("fill-" + div.getAttribute("data-fill"));
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
        clampedSize = Math.max(1, size);

        container.setAttribute("style",
         "grid-template-columns:repeat(" + clampedSize + ", 1fr); " +
         "grid-template-rows:repeat(" + clampedSize + ", 1fr) "
        );

        container.innerHTML = "";

        for(let i = 0; i < clampedSize; i++) {
            for(let j = 0; j < clampedSize; j++) {
                let div = document.createElement("div");
        
                div.setAttribute("id", "block-" + idNum);
                div.setAttribute("data-fill", 0);
                div.classList.add("fill-0");
            
                div.addEventListener("mouseenter", event => {

                    let fillVal = div.getAttribute("data-fill");
                    event.target.classList.remove("fill-" + fillVal)

                    div.setAttribute("data-fill", Math.min(parseInt(fillVal) + 1, 5));
                    event.target.classList.add("fill-" + div.getAttribute("data-fill"));
                });
        
                container.appendChild(div);
        
                idNum++;
            }
        }
    }
});