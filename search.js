const inputSearch = document.querySelector("#search")
const navMenu = document.querySelector("[data-type='nav-menu']")

const details = Array.from(navMenu.querySelectorAll("details"))
const lis = Array.from(navMenu.querySelectorAll("details li"))
const lisToggle = Array.from(navMenu.querySelectorAll("li.toggle"))

inputSearch.addEventListener("input", function() {
    const str = this.value;
    if(str){
        filterData(str)
    } else {
        showAllItens()
    }
})

function showAllItens(){
    lis.forEach( li => li.classList.remove("hide" ))
    details.forEach(detail => detail.removeAttribute("open"))
}

function filterData(str){
    showAllItens()
    lisToggle.forEach( liToggle => {
        const details = liToggle.querySelector("details")

        if(!details) return

        const summary = details.querySelector("summary")

        if(summary && summary.textContent.toLowerCase().includes(str.toLowerCase())) {
            details.setAttribute("open", "")  
        }

        const lis = details.querySelectorAll("li")

        let found = false 

        for (let i = 0; i < lis.length; i++) {
            let li = lis[i]
            if(li.textContent.toLowerCase().includes(str.toLowerCase())){
                found = true
                li.classList.remove("hide")
            } else {
                li.classList.add("hide")
            }
        }

        if(found) {
            details.setAttribute("open", "")
        } else {
            details.removeAttribute("open", "")
        }
    })
}