export let appName = "Calculator";

export function add(a:number, b:number) {
    return `a+b : ${a+b}`;
}

export class Formattor {
    static toUpper(str:string): string{
        return str.toUpperCase();
    }
}

console.log(Formattor.toUpper('welcome'));

// module.exports = {Formattor};