//lista de membros do projeto 
const renato_bulcao = {
    nome: "Renato Bulcão Neto",
    imagem: "../img/membros/Renato.png",
    graduacao: "Computer Science, DEINF - UFMA, 1998",
    mestrado: "Computer Science and Computational Mathematics (Area: Hypermedia), ICMC - USP, 2001",
    doutorado: "Computer Science and Computational Mathematics (Area: Ubiquitous Computing), ICMC - USP, 2006",
    formacaoAdicional:"Postdoctorate (Area: Biomedical Informatics), FFCLRP - DCM - USP, 2018",
    ocupacaoAtual:"Associate Professor, INF - UFG, Brazil (since 2010)",
    lattes:"http://lattes.cnpq.br/5627556088346425"
}
const taciana_novo = {
    nome:"Taciana Novo Kudo",
    imagem: "../img/membros/Taciana.png",
    graduacao: "Computer Science, UNIMAR, 2001",
    pmestrado: "Computer Science (Area: Context-aware Computing), DC-UFSCar, 2004",
    doutorado: "Computer Science, (Area: Software Engineering), DC-UFSCar, 2021",
    formacaoAdicional:"",
    ocupacaoAtual:"Adjunct Professor, INF - UFG, Brazil (since 2013)",
    lattes:"http://lattes.cnpq.br/7044035224784132"
}
const valdemar_vicente = {
    nome: "Valdemar Vicente Graciano Neto",
    imagem:"../img/membros/Valdemar.png",
    graduacao:"Computer Science, INF - UFG, 2008",
    mestrado:"Computer Science, INF - UFG, 2012",
    doutorado:"Computer Science and Computational Mathematics, ICMC - USP /<br> Information Sciences and Technology, Université de Bretagne Sud, France, 2018",
    formacaoAdicional:"",
    ocupacaoAtual:"Adjunct Professor, INF - UFG, Brazil (since 2013)",
    lattes:"http://lattes.cnpq.br/9864803557706493"
}
const auri_marcelo = {
    nome:"Auri Marcelo Rizzo Vincenzi",
    imagem:"../img/membros/Auri.png",
    graduacao:"Computer Science, UEL, 1995",
    mestrado:"Computer Science and Computational Mathematics (Area: Software Engineering), ICMC - USP, 1998",
    doutorado:"Computer Science and Computational Mathematics (Area: Software Engineering), ICMC - USP, 2004)",
    formacaoAdicional:"Postdoctorate (Area: Software Engineering), ICMC-USP, 2015",
    ocupacaoAtual:" Adjunct Professor, DC - UFSCar, Brazil (since 2015)",
    lattes:"http://lattes.cnpq.br/0611351138131709"
    
}
const pollyana_queiroz = {
    nome:"Prof. Pollyana de Queiroz Ribeiro",
    imagem:"../img/membros/Pollyana.png",
    graduacao:"Information Systems, UEG, 2005",
    mestrado:"Computer Science (Area: Software Engineering), INF - UFG, 2020",
    doutorado:"",
    formacaoAdicional:"",
    ocupacaoAtual:"Professor, UEG, Brazil (since 2008)",
    lattes:"http://lattes.cnpq.br/0113545177209168"
}
const ernesto_fonseca = {
    nome:"Ernesto Fonseca Veiga",
    imagem:"../img/membros/Ernesto.png",
    graduacao:"Informatics, IFG, 2013",
    mestrado:"Computer Science (Area: Context-aware Computing), INF - UFG, 2016",
    doutorado:"",
    formacaoAdicional:"",
    ocupacaoAtual:"PhD Student (Area: Software Engineering), INF - UFG, since 2021",
    lattes:"http://lattes.cnpq.br/7265653681679702"
}
const mariana_crisostomo = {
    nome:"Mariana Crisóstomo Martins",
    imagem:"../img/membros/Mariana.png",
    graduacao:"Computer Science, INF - UFG, 2019",
    mestrado:"",
    doutorado:"",
    formacaoAdicional:"",
    ocupacaoAtual:"MSc student (Area: Software Engineering), INF - UFG, since 2020",
    lattes:"http://lattes.cnpq.br/9413960021886119"
}
const cinara_gomes = {
    nome:"Cinara Gomes de Melo Carneiro",
    imagem:"../img/iconeMembro.png",
    graduacao:"Computer Technology, FEIT, 2000",
    mestradoo:"",
    doutorado:"",
    formacaoAdicional:"Specialization in Systems Analysis, FEIT, 2003",
    ocupacaoAtual:"MSc student (Area: Software Engineering), INF - UFG, since 2021",
    lattes: "http://lattes.cnpq.br/4310401149968312"
}
const thalia_santos = {
    nome:"Thalia Santos de Santana",
    imagem:"../img/membros/Thalia.png",
    graduacao:" Information Systems, IF Goiano, 2019",
    mestrado:"",
    doutorado:"",
    formacaoAdicional:"",
    ocupacaoAtual:"MSc student (Area: Software Engineering), INF-UFG, since 2021",
    lattes:"http://lattes.cnpq.br/8063677996827079"
}
const andres_zuin = {
    nome:"Andrês Zuin Alegria",
    imagem:"../img/iconeMembro.png",
    graduacao:"Information Systems, INF - UFG",
    mestrado:"",
    doutorado:"",
    formacaoAdicional:"",
    ocupacaoAtual:"Undergraduate Student (Area: Information Systems), INF-UFG, since 2017",
    lattes:""
}
const fabiano_gomes = {
    nome:"Fabiano Gomes Pires",
    imagem:"../img/membros/Fabiano.jpg",
    graduacao:"Software Engineering, INF - UFG",
    mestrado:"",
    doutorado:"",
    formacaoAdicional:"",
    ocupacaoAtual:"Undergraduate Student (Area: Software Engineering), INF-UFG, since 2017",
    lattes:""
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
    thalia_santos,
    andres_zuin,
    fabiano_gomes
}

//função responsavel por receber uma pessoa e mostrar a pagina pessoal dela con as informações 
function procurarPessoa(){
    
    const queryParam = document.location.search;
    const querySearch = new URLSearchParams(queryParam);
    const pessoa = querySearch.get("member");

    let mestrado = "";
    if (pessoas[pessoa].mestrado){
        mestrado = `
            <p>MSc</p>
            <div class = "info02">
                <img src="..//img/seta.png" alt="seta"> 
                <p>${pessoas[pessoa].mestrado}</p>
            </div>  
        `
    }

    let doutorado = "";
    if (pessoas[pessoa].doutorado){
        doutorado = `
            <p>Phd</p>
            <div class = "info03">
                <img src="..//img/seta.png" alt="seta" > 
                <p>${pessoas[pessoa].doutorado}</p>
            </div> 
        `
    }

    let formacaoAdicional = "";
    if (pessoas[pessoa].formacaoAdicional){
        formacaoAdicional = `
            <p>Additional Trainings</p>
            <div class = "info01">
                <img src="..//img/seta.png" alt="seta">  
                <p>${pessoas[pessoa].formacaoAdicional}</p>
         </div>  
        `
    }

    let lattes = "";
    if (pessoas[pessoa].lattes){
        lattes = `
            <p>Lattes</p>
            <div class = "info04">
                <img src="..//img/seta.png" alt="seta" > 
                <a href = "${pessoas[pessoa].lattes}" target="_blank">Lattes Platform - ${pessoas[pessoa].nome}</a>
            </div>      
         `
    }

    const innerHtml = `
        <div class = "tituloPessoa">
            <h2><a id = "ancora" href="membros.html">MEMBERS</a></h2>
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
                
                ${mestrado}
                
                ${doutorado} 

                ${formacaoAdicional} 

                <p>Current Occupation</p>
                <div class = "info01">
                    <img src="..//img/seta.png" alt="seta">  
                    <p>${pessoas[pessoa].ocupacaoAtual}</p>
                </div>

                ${lattes}

            </div>
        </div>

    `
    const conteudoHtml = document.getElementById('conteudo')
    conteudoHtml.innerHTML = innerHtml, "#acnora";
    return true;
}
