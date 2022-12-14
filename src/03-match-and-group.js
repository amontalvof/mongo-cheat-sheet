/*
 * Examples:
 */

db.persons.aggregate([
    { $match: { favoriteFruit: 'banana' } },
    { $group: { id: { age: '$age', eyeColor: '$eyeColor' } } },
]);

db.persons.aggregate([
    // stage 1
    { $match: { gender: 'female' } },
    // stage 2
    { $group: { _id: { eyeColor: '$eyeColor', age: '$age' } } },
]);

db.persons.aggregate([
    { $group: { id: { age: '$age', eyeColor: '$eyeColor' } } },
    { $match: { 'id.age': { $gt: 30 } } },
]);
