const barras = document.querySelectorAll(".progresso");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const barra = entry.target;

            barra.style.width = barra.dataset.width;

        }

    });

});

barras.forEach(barra=>{

    observer.observe(barra);

});