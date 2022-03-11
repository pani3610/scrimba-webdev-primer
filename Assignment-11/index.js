var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
for(i=0;i<peopleWhoWantToSeeMadMaxFuryRoad.length;i++)
{
      var person = peopleWhoWantToSeeMadMaxFuryRoad[i];
      if (person.age <18){
          if (person.gender == 'male'){
            var pronoun = 'HIM'
        }else{
            var pronoun = 'HER'
        }
        console.log(person.name,'is not old enough to see Mad Max Fury Road, don\'t let',pronoun,'in.')
      }
      else{
        if (person.gender == 'male'){
        var pronoun = 'HE'
    }else{
        var pronoun = 'SHE'
    }
    console.log(person.name,'is old enough.', pronoun+'\'S good to see Mad Max Fury Road.')
    }
}

var person,bloodgroup
console.log(person,bloodgroup)