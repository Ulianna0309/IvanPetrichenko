fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then((res) => res.json())
    .then(data => setHeroes(data))


function setHeroes({squadName,homeTown, formed, 
  secretBase, members}){
   document.body.insertAdjacentHTML('afterbegin', `
   <h1>${squadName}</h1>
   <h2> Hometown: ${homeTown} Formed: ${formed} </h2> 
   <p>${secretBase}</p> 
   <div class="heroes">${setMembers(members)}</div>`
  );
}

function setMembers(members){
  return members.map((hero) => `
    <div>
      <h3>${hero.name}</h3>
      <p>Secret indentity: ${hero.secretIdentity}</p>
      <p>Age: ${hero.age}</p>
      <p>Superpowers: </p>
      <ul>
          ${hero.powers.map((power) => `<li>${power}</li>`).join(' ')}
      </ul>
   </div>
   `
  ).join(' ');
}

function Palindrom(str){
  return str === str.split('').reverse().join('');
}

console.log(Palindrom('шалаш'));