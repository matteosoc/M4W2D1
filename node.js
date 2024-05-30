document.addEventListener("DOMContentLoaded", async() =>
    console.log("<-- pagina caricata -->")
)

var div = document.getElementById('a')

fetch("https://api.pexels.com/v1/search?query=Ocean", {
    headers: { Authorization: "HwPEXnMQiCjfgf1KRARK9OVrDnYPahvTRW9cNjCtauxtyXih5X4SkpJS" }
})
    .then(response => {
        return response.json()
    })
    .then(pippo => {
        pippo["photos"].forEach(element => {
            console.log(element.src.large)

            var div = document.getElementById('a')

            let image = document.createElement('img')
            image.src = element.src.large

            div.appendChild(image) 
        });
    })
