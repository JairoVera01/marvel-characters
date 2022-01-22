
/*20 heroes de marvel*/
const marvel ={
    render:()=>{
        /* 1 + privada + publica (generado en un hash y pasado a minisculas - MD5 Hash Generator)*/  
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=9aa88f1d225dbb7224f2ec9de8bcfca4&hash=854c61c1457c6e6869764c104c20f845';
        const container = document.querySelector('#marvel-hilos');
        let contenidoHTML ='';
        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=>{
            /*Imprimir el objeto para ver que funcione*/
            console.log(json, 'RES.JSON')
            for(const personaje of json.data.results){
                let urlPersonaje = personaje.urls[0].url;
                let id__personaje = personaje.id;
                console.log(marvel.id__personaje)
                const nombre__personaje = personaje.name;
                contenidoHTML+=`
                <div class="col-md-4">
                    <a href="${urlPersonaje}" target="_blank" >
                        <img src="${personaje.thumbnail.path}.${personaje.thumbnail.extension}" alt="${personaje.name}" class="img-thumbnail rounded mx-auto d-block">
                    </a>
                    <h3 class="title">Personaje: ${nombre__personaje}</h3>
                    <!--Capturamos el id-->
                    <h3>Id del personaje: 
                    <!--${id__personaje}-->
                    <a href="../pages/comics.html" target="_blank" id="ver_comics">${id__personaje}</a>
                    </h3>
                    <h4>Comics totales donde aparece el personaje ${personaje.comics.available}</h4>
                    <a href="${personaje.resourceURI+'?ts=1&apikey=9aa88f1d225dbb7224f2ec9de8bcfca4&hash=854c61c1457c6e6869764c104c20f845'}" target="_blank" id="ver_comics">${personaje.resourceURI+'?ts=1&apikey=9aa88f1d225dbb7224f2ec9de8bcfca4&hash=854c61c1457c6e6869764c104c20f845'}</a>
                </div>
                <hr>
                `;
                
            }
            container.innerHTML= contenidoHTML;
            
        })
    }
};
/*Se llama a la funcion*/
marvel.render();





/* ==== COMICS ===== */
const comics ={
    /*Errores al capturar el id del personaje previo "click" */
    render:()=>{
        /* 1 + privada + publica (generado en un hash y pasado a minisculas - MD5 Hash Generator)*/  
        const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters/'+1011334+'/comics?ts=1&apikey=9aa88f1d225dbb7224f2ec9de8bcfca4&hash=854c61c1457c6e6869764c104c20f845';
        
        const container = document.querySelector('#marvel-comics-hilos');
        let contenidoHTML ='';
        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=>{
    
            console.log(json, 'RES.JSON')
            for(const comics of json.data.results){
                let urlComics = comics.urls[0].url;
                contenidoHTML+=`
                
                <div class="col-md-4">
                    <!--Capturamos el id del comic-->
                    <h3>Id del comic: ${comics.id}</h3>
                    <img src="${comics.thumbnail.path}.${comics.thumbnail.extension}" alt="${comics.name}" class="img-thumbnail rounded mx-auto d-block">
                    <h3>Titulo del Comic: ${comics.title}</h3>
                    <hr>
                </div>
                `;
            }
            container.innerHTML= contenidoHTML;
        })
    }
};
comics.render();
