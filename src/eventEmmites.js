import events from 'events';
import util from "util";

/* eslint-disable no-console */

var Person = function(name){
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var Muhanand = new Person("Muhannad");
var Omar = new Person("Muhammed Omar");
var Swaaf = new Person("Mohammed Swaaf");

var people = [Muhanand, Omar, Swaaf];

people.forEach(function(person){
  person.on('speak', function(mssg){
    console.log(`${person.name} said: ${mssg}`)
  });
});

Muhanand.emit('speak', "Bayern is the champions in 2013 Fuck Barca");
Omar.emit('speak', "Congratulations and Fuck Barca");
Swaaf.emit('speak', "Kosom el Bayern");
