# Introduction
A small and lightweight library for converting JS dates to strings.

# Installation
`npm i js-date-to-string`

# Usage
```
// current date is 2022-07-27 1:30:00
const someDate = new Date('2022-07-27T02:00:00');
const dateToString = jsDateToString(someDate);

console.log(dateToString); // expected result => 30m
```
