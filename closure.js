var sum = function (a,b,c) {
    return {
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
    }
}

let value  = sum(4,3,5);
console.log(value.getSumTwo());
console.log(value.getSumThree());