/*Example:

function User(name, email) {
  this.name = name;
  this.email = email;
}

User.prototype.sayHello = function () {
  console.log(`Hello everybody, my name is ${this.name}`);
};

const sarah = new User("sarah", "sarah@example.com");
*/

function BoardMember(name, homeState, training){
    this.name = name;
    this.homeState = homeState;
    this.training = training;
}

BoardMember.prototype.veto = function(){
    return 'No, I must disagree';
}
 
BoardMember.prototype.approve = function(){
    return 'You can do that!';
}

BoardMember.prototype.doCharity = function(){
    return 'I like to help people.';
}

BoardMember.prototype.releasePressStatement = function(){
    return 'You will see great things from Scuber.';
}

//const mrPolished = new BoardMember("Mr. Polished", NewYork, law)

BoardMember.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`;
}
