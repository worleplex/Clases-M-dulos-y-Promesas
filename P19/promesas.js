function obtenerDatosDelServidor() {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            let exito = true;

            if(exito) {
                let usuario = {
                    nomnbre: "token",
                    edad: 67
                }
                resolve(usuario)
            } else {
                reject("Ocurrio un error al obtener los datos")
            }

        }, 2000)
    })
}

obtenerDatosDelServidor()
    .then(resp=>{
        return resp.nomnbre.toUpperCase();
    })
    .then(nombreEnMayus=>{
        console.log("Nombre en mayusculas: ", nombreEnMayus)
    })
    .catch(err=>{
        console.log("Entro en el .catch ", err)
    })
    .finally(()=>{
        console.log("fin de la tarea")
    })

// Ejercicio 4: Async / Await

async function obtenerPosts() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/post/1");
        console.log(response);
    } catch(error) {
        console.log("Error al obtener el post:", error.message);
    } finally {
        console.log("fin de obtenerPosts");
    }
    
}

obtenerPosts();