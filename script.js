
let image = document.querySelectorAll(".imagi")

let inter = new IntersectionObserver((entrie)=>{
    entrie.forEach((entry)=>{
        if(entry.isIntersecting){

//also for the NODELIST node element you can just use value array
//Both are array-like collections (lists) of nodes (elements) extracted from a document. 

            entry.target.style.opacity = 1
            entry.target.classList.value.includes("panini") ? entry.target.style.transform = "scale(1)" : entry.target.style.transform = "translateX(0rem)"
            entry.target.style.backgroundColor = entry.target.getAttribute("data-color");;
        }else{
            entry.target.style.opacity = 0
            entry.target.classList.value.includes("panini") ? entry.target.style.transform = "scale(0)" : entry.target.style.transform = "translateX(-15rem)"

        }
    })
},
{
    threshold: 0.3
})

image.forEach((uno)=>{
    inter.observe(uno)
})

