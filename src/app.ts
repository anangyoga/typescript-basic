// Enums
// a way to specify descriptive constant and associate each one with numeric value behind the scene (on the console)
// Enums is zero-based just like index

enum resourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: resourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 23,
  //this one, we don't need to remember the index/number of certain constant
  resourceType: resourceType.AUTHOR,
  data: { name: "Jonas Jonasson" },
};

const docTwo: Resource<object> = {
  uid: 19,
  // and this one, we still use number/index to associate constant
  resourceType: 4,
  data: { name: "Gillian" },
};

console.log(docOne, docTwo);
