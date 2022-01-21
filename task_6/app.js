// Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal
const animal = new Object()
animal.move = function () {
    console.log('Moving now...')
}

const cat = Object.create(animal)
cat.move()