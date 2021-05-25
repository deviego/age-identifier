function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('#txtano')
    let res = document.querySelector('#res')
     if(fano.value.length == 0 || Number(fano.value) > ano){
         alert("[ERRO]Verifique os dados e tente novamente")
     }else{
         let fsex = document.getElementsByName('redsex')
         let idade = ano - Number(fano.value)
         let genero = ''
         let img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if(fsex[0].checked){
             genero = 'Homem'
             if(idade >= 0 && idade < 10 ){
                 //criança (kid)
                 img.src = "imagens/kid-boy.png"
             }else if(idade < 21 ){
                 //jovem (young)
                 img.src = "imagens/young-boy.png"
             }else if(idade < 50){
                //adulto (adult) 
                img.src = "imagens/man.png"
             }else{
                 //idoso (old man)
                 img.src = "imagens/old-man.png"
             }
         }else if(fsex[1].checked){

             genero = 'Mulher'
             if(idade >= 0 && idade < 10 ){
                //criança (kid)
                img.src = "imagens/kid-girl.png"

            }else if(idade < 21 ){
                //jovem (young)
                img.src = "imagens/young-girl.png"

            }else if(idade < 50){
               //adulto (adult)
               img.src = "imagens/woman.png"
               
            }else{
                //idoso (elderly)
                img.src = "imagens/old-girl.png"
            }
         }
         res.style.textAlign = 'center' //para centralizar o conteúdo da div
         res.innerHTML = `Detectamos ${genero} com idade ${idade} anos`
         res.appendChild(img) //para adicionar conteudo img

     }

} 