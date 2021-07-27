
function mostrarPessoas(){
    const innerHtml = `
        <h2>MEMBERS</h2>
        <table>
            <thead>
                <td>
                    <div class="clickable" onclick="procurarPessoa('renato_bulcao')" >
                        <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                        <p>Prof. Renato Bulcão Neto</p> 
                    </div>
                </td>
                <td>
                    <div class="clickable" onclick="procurarPessoa('taciana_novo')" >
                        <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                        <p>Prof. Taciana Novo Kudo</p> 
                    </div>
                </td>
                <td>
                    <div class="clickable" onclick="procurarPessoa('valdemar_vicente')" >
                        <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                        <p>Prof. Valdemar Vicente Graciano Neto</p> 
                    </div>
                </td>
                <td>
                    <div class="clickable" onclick="procurarPessoa('auri_marcelo')" >
                        <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                        <p>Prof. Auri Marcelo Rizzo Vincenzi</p> 
                    </div>
                </td>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('pollyana_queiroz')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Prof. Pollyana de Queiroz Ribeiro</p> 
                        </div>
                    </td>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('ernesto_fonseca')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Ernesto Fonseca Veiga</p> 
                        </div>
                    </td>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('mariana_crisostomo')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Mariana Crisóstomo Martins</p> 
                        </div>
                    </td>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('cinara_gomes')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Cinara Gomes de Melo Carneiro</p> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('matheus_ribeiro')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Matheus Ribeiro Pimenta Nunes</p> 
                        </div>
                    </td>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('thalia_santos')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Thalia Santos de Santana</p> 
                        </div>
                    </td>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('renato_bulcao')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Andrês Zuin Alegria</p> 
                        </div>
                    </td>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('renato_bulcao')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Pablo Henrique Aguiar Cavalcante</p> 
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="clickable" onclick="procurarPessoa('fabiano_gomes')" >
                            <img src="../img/Group 4 (1).png" alt="icone de pessoa">
                            <p>Fabiano Gomes Pires</p> 
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        
        
    `
    const conteudoHtml = document.getElementById('conteudo')
    conteudoHtml.innerHTML = innerHtml;
    return true;
}


const slides = document.querySelectorAll('[data-js="carousel__item"]')
const nextButton = document.querySelector('[data-js="carousel__button--next"]')
const prevButton = document.querySelector('[data-js="carousel__button--prev"]')

const ultimoSlide = slides.length -1
let contadorSlides = 0

nextButton.addEventListener('click', () => {
    if(contadorSlides === ultimoSlide) {
        contadorSlides = 0
    } else {
        contadorSlides++
    }
    

    slides.forEach(slide => {
        slide.classList.remove('carousel__item--visible')
    })

    slides[contadorSlides].classList.add('carousel__item--visible')
})

prevButton.addEventListener ('click', () => {
    if(contadorSlides === 0) {
        contadorSlides = ultimoSlide
    } else {
        contadorSlides--
    }
   
    slides.forEach(slides => {
        slides.classList.remove('carousel__item--visible')
   }) 
   
   slides[contadorSlides].classList.add('carousel__item--visible')

})




  
