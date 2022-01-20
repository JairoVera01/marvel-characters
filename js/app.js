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
                contenidoHTML+=`
                <div class="col-md-4">
                    <a href="${urlPersonaje}" target="_blank" >
                        <img src="${personaje.thumbnail.path}.${personaje.thumbnail.extension}" alt="${personaje.name}" class="img-thumbnail rounded mx-auto d-block">
                    </a>
                    <h3 class="title">Personaje: ${personaje.name}</h3>
                </div>
                `;
            }
            container.innerHTML= contenidoHTML;
        })
    }
};

/*Se llama a la funcion*/
marvel.render();