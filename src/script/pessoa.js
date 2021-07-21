//lista de membros do projeto 
const renato_bulcao = {
    nome: "Prof. Renato Bulcao",
    imagem: "../img/Group 4 (1).png",
    graducao: "Computer Science (UFMA)",
    posGraduacao: "Computer Science and Computational Mathematics (USP)",
    doutorado: "Computer Science and Computational Mathematics (USP)"
}
const taciana_novo = {
    nome:"Prof. Taciana Novo Kudo",
    imagem: "../img/Group 4 (1).png",
    graducao: "Computer Science (UNIMAR)",
    posGraduacao: "Computer Science (UFSCAR)",
    doutorado: "Computer Science (UFSCAR)"
}
const valdemar_vicente = {
    nome: "Prof. Valdemar Vicente Graciano Neto",
    imagem:"../img/Group 4 (1).png",
    graduação:"Computer Science (UFG)",
    posGraduacao:"Computer Science (UFG)",
    doltorado:"Computer Science and Computational Mathematics (USP)"
}
const auri_marcelo = {
    nome:"Prof. Auri Marcelo Rizzo Vincenzi",
    imagem:"../img/Group 4 (1).png",
    graduação:"Computer Science (UEL)",
    posGraduacao:"Computer Science and Computational Mathematics (USP)",
    doltorado:"Computer Science and Computational Mathematics (USP)"
}
const pollyana_queiroz = {
    nome:"Prof. Pollyana de Queiroz Ribeiro",
    imagem:"../img/Group 4 (1).png",
    graduação:"Information Systems (UEG), Pedagogy (UNOPAR)",
    posGraduacao:"Computer Science (UFG)",
    doltorado:""
}
const ernesto_fonseca = {
    nome:"Ernesto Fonseca Veiga",
    imagem:"../img/Group 4 (1).png",
    graduação:"",
    posGraduacao:"",
    doltorado:""
}
const mariana_crisostomo = {
    nome:"Mariana Crisóstomo Martins",
    imagem:"../img/Group 4 (1).png",
    graduação:"",
    posGraduacao:"",
    doltorado:""
}
const cinara_gomes = {
    nome:"Cinara Gomes de Melo Carneiro",
    imagem:"../img/Group 4 (1).png",
    graduação:"",
    posGraduacao:"",
    doltorado:""
}
const matheus_ribeiro = {
    nome:"Matheus Ribeiro Pimenta Nunes",
    imagem:"../img/Group 4 (1).png",
    graduação:"",
    posGraduacao:"",
    doltorado:""
}
const thalia_santos = {
    nome:"Thalia Santos de Santana",
    imagem:"../img/Group 4 (1).png",
    graduação:"",
    posGraduacao:"",
    doltorado:""
}
const andres_zuin = {
    nome:"Andrês Zuin Alegria",
    imagem:"../img/Group 4 (1).png",
    graduação:"",
    posGraduacao:"",
    doltorado:""
}
const pablo_henrique = {
    nome:"Pablo Henrique Aguiar Cavalcante",
    imagem:"../img/Group 4 (1).png",
    graduação:"Software Engineering (UFG)",
    posGraduacao:"",
    doltorado:""
}
const fabiano_gomes = {
    nome:"Fabiano Gomes Pires",
    imagem:"../img/Group 4 (1).png",
    graduação:"Software Engineering (UFG)",
    posGraduacao:"",
    doltorado:""
}

//conjunto de pessoas que fazem parte do projeto
const pessoas = {
    renato_bulcao,
    taciana_novo,
    valdemar_vicente,
    auri_marcelo,
    pollyana_queiroz,
    ernesto_fonseca,
    mariana_crisostomo,
    cinara_gomes,
    matheus_ribeiro,
    thalia_santos,
    andres_zuin,
    pablo_henrique,
    fabiano_gomes

}

//função responsavel por receber uma pessoa e mostrar a pagina pessoal dela con as informações 
function procurarPessoa(pessoa){
    const innerHtml = `

    <div>
        <h2 class="clickable" onclick="mostrarPessoas()">Membros</h2><h2>></h2>
        <h3>${pessoas[pessoa].nome}</h3>
    </div>

    <div>
        <img src="${pessoas[pessoa].imagem}" alt="img de perfil da pessoa">

        <div>
            <h4>CAREER SUMMARY</h4>
            <p>Graduation</p>
            <img src="..//img/seta.png" alt="seta"> <p>${pessoas[pessoa].graducao}</p>
            <p>MSc</p>
            <img src="..//img/seta.png" alt="seta"> <p>${pessoas[pessoa].posGraduacao}</p>
            <p>Phd</p>
            <img src="..//img/seta.png" alt="seta"> <p>${pessoas[pessoa].doutorado}</p>
        </div>
    </div>


    `
    const conteudoHtml = document.getElementById('conteudo')
    conteudoHtml.innerHTML = innerHtml;
    return true;
}