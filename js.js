/**
 * Created by chris on 16/9/6.
 */

var arr = [{a: ['a1', 'a2', {}]}, {b: ['b1', 'b2']}]

var obj = {}
obj.name = 'jack'
obj.age = 12
obj.workage = 10

function test(o) {
    var j = {};
    j.name = o.name;
    j.age = o.age;
    return {
        name: j.name,
        age: j.age
    };
}

var obj2 = {
    friends: [
        {name: 'jack'},
        {name: 'jiss', lession:['math', 'english', 'pe']},
    ],
    workage: 20,
    calc: function () {
        return 20;
    }
}