// export type dog = {
//    name: string
//    weight: number
//    bark(): void
//    eat(quantity: number): void
// }

export class Dog {
   private name:string = ''
   private weight:number = 10

   public getName = ():string => this.name
   public getWeight = ():number => this.weight
   public setName = (newName:string):void => {this.name = newName}

   bark():void{
      console.log('Au Au')
   } 
   eat(quantity: number){
      this.weight += quantity
   }
   run(distance:number){
      this.weight -= distance / 1000
   }
   constructor(instanceName:string, instanceWeight:number){
      this.name = instanceName
      this.weight = instanceWeight
      console.log("Construindo um cão")
   }
}

export const pluto: Dog = new Dog("Pluto", 10);
pluto.eat(2)

function increment(n:number){
   return n + 1
}
console.log(increment(5))