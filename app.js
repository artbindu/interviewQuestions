function Person(name, country) {
    this.name = name;
    this.country = country;
    this.getCountry = function() {
        return this.country;
    }
  }
  
  let p1 = new Person("Sam", "USA");
  p1.age = 32;
  p1.showData = function() {
      console.log("Person Info: ", this.name, this.country, this.age);
  }
  p1.getName = function() { 
      return this.name;
  };
  
  console.log(
      p1.hasOwnProperty("name"),       // true
      p1.hasOwnProperty("country"),    // true
      p1.hasOwnProperty("getCountry"), // true
      p1.hasOwnProperty("age"),        // true
      p1.hasOwnProperty("getName"),    // true
  )