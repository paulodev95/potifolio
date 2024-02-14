window.revelar = ScrollReveal({reset:true})

//TOPO DO SITE


revelar.reveal('.efeito-txt-topo',
{
duration: 2000,
distance: '90px'
})

revelar.reveal('.efeito-img-topo',
{
duration: 2000,
distance: '90px',
delay: 500
})

// TÍTULOS DAS SEÇÕES

revelar.reveal('.titulo',
{
duration: 2000,
distance: '90px',

})

// ESPECIALIDADES

revelar.reveal('.efeito-especialidades1',
{
duration: 2000,
distance: '90px',
delay:500
})


revelar.reveal('.efeito-especialidades2',
{
duration: 2000,
distance: '90px',
delay:1000
})


revelar.reveal('.efeito-especialidades3',
{
duration: 2000,
distance: '90px',
delay:1500
})

//SOBRE

revelar.reveal('.efeito-img-sobre',
{
duration: 2000,
distance: '90px',
delay:400,
origin:'left'
})

revelar.reveal('.efeito-txt-sobre',
{
duration: 2000,
distance: '90px',
delay:800,
origin: 'rigth'
})

const url = 'https://wa.me/31998033216'
const wpp = document.querySelector('#wpp')

function openInNewTab(url) {
    const win = window.open(url, '_blank')
    win.focus()
}

wpp.addEventListener('click',() =>{
    openInNewTab(url)
})