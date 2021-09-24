//Selected element
var elList = document.querySelector('.pokemon-list');

for (var pokemon of pokemons) {

   // Create elements
   var newLi = document.createElement('li');
   var newHeading = document.createElement('h3');
   var newImg = document.createElement('img');
   var newType = document.createElement('p');
   var newDivInfo = document.createElement('div');
   var newHeight = document.createElement('span');
   var newWeight = document.createElement('span');
   var newCandy = document.createElement('span');
   var newCandyCount = document.createElement('span');
   var newEgg = document.createElement('span');
   var newSpawnChance = document.createElement('span');
   var newAvgSpawn = document.createElement('span');
   var newSpawnTime = document.createElement('span');
   var newMulti = document.createElement('span');
   var newWeakness = document.createElement('p');

   // Content
   newHeading.textContent = pokemon.name;
   newType.textContent = 'Type: '
   for(var typeP of pokemon.type){
      newType.textContent = newType.textContent + typeP + '; ';
   }

   newHeight.textContent = 'Heading: ' + pokemon.height + ';';
   newWeight.textContent = 'Weight: ' + pokemon.weight + ';';
   newCandy.textContent = 'Candy: ' + pokemon.candy + ';';
   newCandyCount.textContent = 'CandyCount: ' + pokemon.candy_count + ';';
   newEgg.textContent = 'Egg: ' + pokemon.egg + ';';
   newSpawnChance.textContent = 'SpawnChance: ' + pokemon.spawn_chance + ';';
   newAvgSpawn.textContent = 'AvgSpawn: ' + pokemon.avg_spawns + ';';
   newSpawnTime.textContent = 'SpawnTime: ' + pokemon.spawn_time + ';';
   newMulti.textContent = 'Multipliers: ' + pokemon.multipliers + ';';

   newWeakness.textContent = "Weakness: ";
   for (var weaknessP of pokemon.weaknesses){
      newWeakness.textContent = newWeakness.textContent +  weaknessP + '; ';
   }

   
   // Set Attribute
   newLi.setAttribute('class','pokemon-list__item form-control');
   newHeading.setAttribute('class','pokemon-list__heading');
   newImg.setAttribute('class','pokemon-list__img mb-4');
   newImg.setAttribute('src', pokemon.img);
   newImg.setAttribute('width', 120);
   newImg.setAttribute('height', 120);
   newType.setAttribute('class', 'pokemon-list__paragraph mb-3 text-info');
   newDivInfo.setAttribute('class','pokemon-list__info mb-2');
   newHeading.setAttribute('class','pokemon-list__span');
   newWeight.setAttribute('class','pokemon-list__span');
   newCandy.setAttribute('class','pokemon-list__span');
   newCandyCount.setAttribute('class','pokemon-list__span');
   newEgg.setAttribute('class','pokemon-list__span');
   newSpawnChance.setAttribute('class','pokemon-list__span');
   newAvgSpawn.setAttribute('class','pokemon-list__span');
   newSpawnTime.setAttribute('class','pokemon-list__span');
   newMulti.setAttribute('class','pokemon-list__span');
   newWeakness.setAttribute('class','pokemon-list__paragraph mb-2 text-info');

   // Appened
   
   newDivInfo.appendChild(newHeight);
   newDivInfo.appendChild(newWeight);
   newDivInfo.appendChild(newCandy);
   newDivInfo.appendChild(newCandyCount);
   newDivInfo.appendChild(newEgg);
   newDivInfo.appendChild(newSpawnChance);
   newDivInfo.appendChild(newAvgSpawn);
   newDivInfo.appendChild(newSpawnTime);
   newDivInfo.appendChild(newMulti);
   newLi.appendChild(newHeading);
   newLi.appendChild(newImg);
   newLi.appendChild(newType);   
   newLi.appendChild(newDivInfo);
   newLi.appendChild(newWeakness)
   elList.appendChild(newLi);
}