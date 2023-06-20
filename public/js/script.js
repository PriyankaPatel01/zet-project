const slides = document.querySelectorAll(".s-act");
console,console.log("hi");
function slideShow()
{
    const current = document.querySelector('.active')
    current.classList.remove('active')
    if(current.nextElementSibling)
    {
        current.nextElementSibling.classList.add('active');
    }
    else
    {
        slides[0].classList.add('active');
    }
    setTimeout('slideShow()', 300);
}

window.onload=slideShow;