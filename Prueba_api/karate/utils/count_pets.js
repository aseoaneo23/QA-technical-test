
petCounter = petsArray => {

    let petCountList = []

    petsArray.forEach(pet => {
        const existingPet = petCountList.find(item => item.name === pet.name)

        if (existingPet) {
            existingPet.count++
        } else {
            petCountList.push({ name: pet.name, count: 1 })
        }

    });

    console.log('\nPet count :\n')

    petCountList.forEach(pet => {
        console.log(`${pet.name} : ${pet.count}`)
    })
}