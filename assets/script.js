let front = '';
let back = '';
let area= '';
let especializa = ''
let estudos = ''




const escolha = function(){
      let radios = document.getElementsByName("resp1");
      for(let i = 0; i<radios.length; i++){
          if(radios[i].checked){
              console.log("Escoheu " + radios[i].value);
          if(radios[i].value === "front"){
              area = 'front'
                esconde();
                areaForm()
                continuaEstudos()
               
          }else if(radios[i].value === "back"){
              area = 'back'
                esconde();
                areaForm()
                continuaEstudos() 
          }
      }
    }
}


    function areaForm(){
        
        if(area === 'front'){
            let radios = document.getElementsByName("resp2");
            for(let i = 0; i<radios.length; i++){
                if(radios[i].checked){
                    especializa = radios[i].value
                }
            }
        } else if(area === 'back'){
            let radios = document.getElementsByName("resp2");
            for(let i = 0; i<radios.length; i++){
                if(radios[i].checked){
                    especializa = radios[i].value
                }
            }
        }
        }

        function continuaEstudos(){
            if(especializa ==='C#' || especializa === 'java' || especializa ==='React' || especializa === 'Vue'){
                let radios = document.getElementsByName("resp3");
                for(let i = 0; i<radios.length; i++){
                    if(radios[i].checked){
                        estudos = radios[i].value
                        final()
                    }
            }
        }
    }
    
    function esconde(){
        if(area ==='front'){
        let btn = document.getElementById('btnSeguir');
        let container = document.querySelector('.container')
        if(container.style.display === 'none'){
            container.style.display = 'block';
        } container.style.display = 'block';
    } else if(area === 'back'){
        let btn2 = document.getElementById('btnSeguir2');
        let container2 = document.querySelector('.container2')
        if(container2.style.display === 'none'){
            container2.style.display = 'block';
        } container2.style.display = 'block';
    }
}

    

    const click1 = function(){
        if(especializa ==='C#' || especializa === 'java' || especializa ==='React' || especializa === 'Vue' ){
        let btn = document.getElementById('btnSeguir1');
         container1 = document.querySelector('.container1')
        if(container1.style.display === 'none'){
            container1.style.display = 'block';
        } container1.style.display = 'block';
    }
    }

        function final(){
        if(estudos === 'area' || estudos ==='Fullstack' ){
            alert('Foi bom está com você, a área de '+ area + ' realmente é muito interessante e enriquecedora! Se especializar em '+ especializa+ ' vai ser muito bom para seu desenvolvimento pessoal!')
            
        }
    }
