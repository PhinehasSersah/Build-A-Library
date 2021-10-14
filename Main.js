
// The parent class

class Media {
    constructor(title) {
      this._title = title;
      this._isCheckOut = false;
      this._ratings = [];
    }
    get tittle () {
      return this._title;
    }
    get isCheckOut() {
      return this._isCheckOut;
    }
    get ratings() {
      return this._ratings;
    }
    toggleCheckOutStatus() {
      this.__isCheckOut = !this._isCheckOut;
    }
    getAverageRating() {
      let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
      return ratingsSum / this.ratings.length
    }
    addRating(rating) {
  this.ratings.push(rating);
    }
    set isCheckOut(newCkeckOut) {
   this._isCheckOut = newCheckOut;
    } 
  }

  // Child class extending a parent class

  class Book extends Media {
      constructor(author,title,pages) {
       super(title) 
       this._title = title;
       this._author = author;
       this._pages = pages;
      }
      get author() {
        return this._author;
      }
      get pages() {
        return this._pages;
      }
  }

  // Child class extending a parent class

  class Movie extends Media {
    constructor(director,title, runtime){
      super(title)
      this._title=title;
      this._director = director;
      this._runtime= runtime;
    }
    get title() {
      return this._title;
    }
    get director() {
      return this._director;
    }
    get runtime() {
      return this._director;
    }
    getAverageRating() {
      return
    }
  }

  // Implementing the classes with class instances
  
  const BillBryson = new Book('Bill Bryson','A Short History of Nearly Everything',544)
  BillBryson.toggleCheckOutStatus();
  console.log(BillBryson.isCheckOut);
  BillBryson.addRating(4);
  BillBryson.addRating(5);
  BillBryson.addRating(5);
  console.log(BillBryson.getAverageRating());
  const JanDeBont = new Movie ('Jan de Bont','Speed',116)
  JanDeBont.toggleCheckOutStatus()
  console.log(JanDeBont.isCheckOut)
  JanDeBont.addRating(1)
  JanDeBont.addRating(1)
  JanDeBont.addRating(5)
  console.log(JanDeBont.getAverageRating())