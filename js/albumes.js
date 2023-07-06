const albums = productos.filter((producto) => producto.tipo === "album");


function mostrarAlbumes(){
    var containerAlbumes = document.getElementById("container-albums");

    albums.forEach((album) => {
        let containerAlbum = document.createElement("div");
        containerAlbum.className = "card-album";
        let headerAlbum = document.createElement("div");
        headerAlbum.className = "header-album";
        let contentAlbum = document.createElement("div");
        contentAlbum.className = "content-album";
        
        let nombre = document.createElement("h4");
        nombre.textContent = album.nombre;
        let anio = document.createElement("p");
        anio.textContent = album.anio;
        let img = document.createElement("img");
        img.src = album.img;

        headerAlbum.append(img);
        contentAlbum.append(nombre);
        contentAlbum.append(anio);

        containerAlbum.append(headerAlbum);
        containerAlbum.append(contentAlbum);

        containerAlbumes.append(containerAlbum);
    });
}

mostrarAlbumes();