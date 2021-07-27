//lista de membros do projeto 
const renato_bulcao = {
    nome: "Mr. Renato Bulcao",
    imagem: "../img/Group 4 (1).png",
    graduacao: "Computer Science (UFMA)",
    posGraduacao: "Computer Science and Computational Mathematics (USP)",
    doutorado: "Computer Science and Computational Mathematics (USP)"
}
const taciana_novo = {
    nome:"Ms. Taciana Novo Kudo",
    imagem: "../img/Group 4 (1).png",
    graduacao: "Computer Science (UNIMAR)",
    posGraduacao: "Computer Science (UFSCAR)",
    doutorado: "Computer Science (UFSCAR)"
}
const valdemar_vicente = {
    nome: "Mr. Valdemar Vicente Graciano Neto",
    imagem:"../img/Group 4 (1).png",
    graduacao:"Computer Science (UFG)",
    posGraduacao:"Computer Science (UFG)",
    doutorado:"Computer Science and Computational Mathematics (USP)"
}
const auri_marcelo = {
    nome:"Mr. Auri Marcelo Rizzo Vincenzi",
    imagem:"../img/Group 4 (1).png",
    graduacao:"Computer Science (UEL)",
    posGraduacao:"Computer Science and Computational Mathematics (USP)",
    doutorado:"Computer Science and Computational Mathematics (USP)"
}
const pollyana_queiroz = {
    nome:"Prof. Pollyana de Queiroz Ribeiro",
    imagem:"../img/Group 4 (1).png",
    graduacao:"Information Systems (UEG), Pedagogy (UNOPAR)",
    posGraduacao:"Computer Science (UFG)",
    doutorado:""
}
const ernesto_fonseca = {
    nome:"Ernesto Fonseca Veiga",
    imagem:"../img/Group 4 (1).png",
    graduacao:"",
    posGraduacao:"",
    doutorado:""
}
const mariana_crisostomo = {
    nome:"Mariana Crisóstomo Martins",
    imagem:"../img/Group 4 (1).png",
    graduacao:"",
    posGraduacao:"",
    doutorado:""
}
const cinara_gomes = {
    nome:"Cinara Gomes de Melo Carneiro",
    imagem:"../img/Group 4 (1).png",
    graduacao:"",
    posGraduacao:"",
    doutorado:""
}
const matheus_ribeiro = {
    nome:"Matheus Ribeiro Pimenta Nunes",
    imagem:"../img/Group 4 (1).png",
    graduacao:"",
    posGraduacao:"",
    dutorado:""
}
const thalia_santos = {
    nome:"Thalia Santos de Santana",
    imagem:"../img/Group 4 (1).png",
    graduacao:"",
    posGraduacao:"",
    doutorado:""
}
const andres_zuin = {
    nome:"Andrês Zuin Alegria",
    imagem:"../img/Group 4 (1).png",
    graduacao:"",
    posGraduacao:"",
    doutorado:""
}
const pablo_henrique = {
    nome:"Pablo Henrique Aguiar Cavalcante",
    imagem:"../img/Group 4 (1).png",
    graduacao:"Software Engineering (UFG)",
    posGraduacao:"",
    doutorado:""
}
const fabiano_gomes = {
    nome:"Fabiano Gomes Pires",
    imagem:"../img/Group 4 (1).png",
    graduacao:"Software Engineering (UFG)",
    posGraduacao:"",
    doutorado:""
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
    

    <div class = "tituloPessoa">
        <h2 class="clickable" onclick="mostrarPessoas()">MEMBERS</h2>
        <img src="../img/ic_round-navigate-next.png" alt="sinal de maior-que">
        <h3>${pessoas[pessoa].nome}</h3>
    </div>

    <div class = "conteudoPessoa">
        <div class= "coluna1">
        <img src="${pessoas[pessoa].imagem}" alt="img de perfil da pessoa">
        </div>

        <div class = "coluna2">
            <h4>CAREER SUMMARY</h4>
            
            <p>Graduation</p>
            <div class = "info01">
                <img src="..//img/seta.png" alt="seta">  
                <p>${pessoas[pessoa].graduacao}</p>
            </div>
            
            <p>MSc</p>
            <div class = "info02">
                <img src="..//img/seta.png" alt="seta"> 
                <p>${pessoas[pessoa].posGraduacao}</p>
            </div>
            
            
            <p>Phd</p>
            <div class = "info03">
                <img src="..//img/seta.png" alt="seta" > 
                <p>${pessoas[pessoa].doutorado}</p>
            </div>
        </div>
    </div>


    `
    const conteudoHtml = document.getElementById('conteudo')
    conteudoHtml.innerHTML = innerHtml;
    return true;
}