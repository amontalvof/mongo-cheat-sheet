/*
 * Examples:
 */

db.persons.aggregate([
    {
        $group: { _id: '$age' },
    },
]);

db.persons.aggregate([
    {
        $group: { _id: '$name' },
    },
]);

db.persons.aggregate([
    {
        $group: { _id: '$company.location.country' },
    },
]);

db.persons.aggregate([
    {
        $group: { _id: { age: '$age', gender: '$gender' } },
    },
]);
