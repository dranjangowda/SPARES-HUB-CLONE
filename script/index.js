
function slideShow() {
  
    const imageArr = [
        "https://spareshub.com/pub/media/wysiwyg/xslider-2.jpg.pagespeed.ic.wD4yRqPU7d.webp",
        "https://spareshub.com/pub/media/wysiwyg/xslider-7.jpg.pagespeed.ic.BAKcTOJCz8.webp",
        "https://spareshub.com/pub/media/wysiwyg/xslider-4.jpg.pagespeed.ic.js2KXJ-PlY.webp",
        "https://spareshub.com/pub/media/wysiwyg/xslider-1_1_.jpg.pagespeed.ic.CbiR6hPmV9.webp",
        "https://spareshub.com/pub/media/wysiwyg/xslider-7.jpg.pagespeed.ic.BAKcTOJCz8.webp"
    ]
    let imageslider = document.getElementById("imageSlider")
    let img = document.createElement("img")
    
    let i=0;
    img.src=imageArr[0]
    imageslider.append(img)

    setInterval(function(){
        if(i == imageArr.length){
            i=0
        }
        img.src = imageArr[i]
        i++
    },2000)
}
slideShow()
