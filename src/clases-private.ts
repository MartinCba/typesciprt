export {};

enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama,
}

class Picture {
  //Propiedades
  private id: number;
  private title: string;
  private orientation: PhotoOrientation;

  public constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  //Comportamiento de nuestra clase que estara definido por funciones

  public toString() {
    return `[id ${this.id},
            title: ${this.title},
            orientation: ${this.orientation}]`;
  }
}

class Album {
  private id: number;
  private title: string;
  private pictures: Picture[];

  //Usamos el constructor el cual nos permitira crear objetos de esta clase
  public constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }
  public addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

//Creamos un nuevo a partir de la instancia de la clase

const album: Album = new Album(1, "personal pictures");
const picture: Picture = new Picture(1, "Platzi session", PhotoOrientation.Panorama);
album.addPicture(picture);

console.log(album);

//accediendo a los miembros privados
//picture.id = 100; //error - private
//picture.title = "Another title"; //error - private
//album.title = "Personal Activities";// error - private
console.log("Albun: ", album);