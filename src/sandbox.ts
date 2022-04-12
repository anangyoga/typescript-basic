const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const greet = (user: { name: string; uid: number | string }) => {
  console.log(`${user.name} says hello`);
};

// We can simplify those function by declaring the type aliases

type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };

const logDetailsAgain = (uid: StringOrNum, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
