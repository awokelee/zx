class Dep {
  constructor(){
    this.subscribers = []
  }
  depend(){
    this.subscribers.push(target)
  }
}
Dep.target = 2

let dep = new Dep()
dep.depend()
dep.depend()