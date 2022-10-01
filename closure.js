var sum = function (a,b,c,d,e) {
    return {
        getSumTwo:function(){
            return a+b;
        },
        getSumThree:function(){
            return a+b+c;
        }
        getSumFour:function(){
            return a+b+c+d;
        }
        getSumFive:function(){
            return a+b+c+d+e;
        }
    }
}

let value  = sum(4,3,5);
console.log(value.getSumTwo());
console.log(value.getSumThree());
console.log(value.getSumFour());
console.log(value.getSumFive());
