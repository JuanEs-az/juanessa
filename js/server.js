
class Server{
    #passwords = undefined;
    constructor(url){
        this.url = {
            papelito: url + "/papelito/",
            app: url + "/app/",
        }
        this.#getPasswords()
    }
    passReady(){
      return !!this.#passwords
    }
    async getPapelitos(tipo, estado){
        const response = await fetch(this.url.papelito + (tipo ? `tipo=${tipo}` : "") + (estado ? `estado=${tipo}` : ""));
        return await response.json();
    }
    async postPapelito({contenido, estado, tipo, link_icono, calificacion}){
        const papelito = {}
        contenido ? papelito.contenido = contenido : undefined;
        estado ? papelito.estado = estado : undefined;
        tipo ? papelito.tipo = tipo : undefined;
        link_icono ? papelito.link_icono = link_icono : undefined;
        calificacion ? papelito.calificacion = calificacion : undefined;
        const response = await fetch(this.url.papelito, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(papelito) // body data type must match "Content-Type" header
          });
          return await response.json();
    }
    async putPapelito({contenido, estado, tipo, link_icono, calificacion}, id){
        const papelito = {}
        contenido ? papelito.contenido = contenido : undefined;
        estado ? papelito.estado = estado : undefined;
        tipo ? papelito.tipo = tipo : undefined;
        link_icono ? papelito.link_icono = link_icono : undefined;
        calificacion ? papelito.calificacion = calificacion : undefined;
        const response = await fetch(this.url.papelito + id, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(papelito) // body data type must match "Content-Type" header
          });
          return await response.json();
        }
    async deletePapelito(id){
        const response = await fetch(this.url.papelito + id, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
            }
          });
          return await response.json();
        }
    async #getPasswords(){
        const response = await fetch(this.url.app + "pw");
        this.#passwords = (await response.json()).passwords;

    }
    comparePasswords(password){
        return this.#passwords.indexOf(password)
    }
    }