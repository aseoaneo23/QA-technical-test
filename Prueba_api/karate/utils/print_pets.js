print_pets = response => {

    let petsArray = []

    console.log('\nSold pet list :\n')
    
    response.forEach(pet => {
        petsArray.push({ id: pet.id, name: pet.name })
        console.log(`Pet --> id: ${pet.id} , name: ${pet.name}`)
    });

    return petsArray
}