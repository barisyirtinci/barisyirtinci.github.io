class Music {
    constructor(title, singer, img, file){
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName(){
        return this.title + " - " + this.singer;
    }
} 

const musicList = [
    new Music("Motivasyon" , "Ben Fero", "1.jpg", "1.mp3"),
    new Music("200 Milyar" , "Lvbel C5", "2.jpg", "2.mp3"),
    new Music("Favela" , "Uzi", "3.jpg", "3.mp3")
];
