const BASE_URL = "http://localhost:3000"
const EMPTY_TEXT = "";
class BookApi{ 
    
    register(){
        
        document.getElementById('btnCadastar').addEventListener('click', async function() {
            console.log('pressed');
            
            const request = JSON.stringify({
                "title": document.getElementById('titulo').value,
                "author": document.getElementById('autor').value,
                "status": getRadioSelected()
            });
                        
            await fetch(`${BASE_URL}/book/register`,{
                method: 'POST',
                body: request,
                headers: {
                    "Content-Type": "application/json"
                },
            })
            .then(response => {
                console.log(response);
                if(response.status === 200){
                    document.getElementById('msgSuccesso').classList.remove("displayNoneMsg");
                    document.getElementById('titulo').value = EMPTY_TEXT;
                    document.getElementById('autor').value = EMPTY_TEXT
                }
            });
            
        }.bind(this));
        
        
    }
    
    
    
    async list(){
        await fetch(`${BASE_URL}/book/list`)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(listBooks) {
            listBooks.forEach(item => {
                document.getElementById("listaCorpo").innerHTML += `<tr>
                <th scope="row">${item._id}</th>
                <td>${item.title}</td>
                <td>${item.author}</td>
                <td>${getStatusType(item.status)}</td>
                </tr>`;
            });
        })
    }
}

function getStatusType(bookStatus){
    let retorno = "";
    if (bookStatus != null && bookStatus === "Finalizado"){
        retorno = "<span class='badge badge-success'>Finalizado</span>";
    }else{
        retorno = "<span class='badge badge-primary'>Lendo</span>";
    }
    return retorno;
}

function getRadioSelected() {
    let retorno = "Finalizado"
    if(document.getElementById('statusLendo').checked){
        retorno= "Lendo"
    }
    return retorno;
}

