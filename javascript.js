function changeBackground()
{
    var section = document.querySelector('.background-section-start');
    section.classList.add('background-section-hover');
}

function resetBackground()
{
    var section = document.querySelector('.background-section-start');
    section.classList.remove('background-section-hover');
}