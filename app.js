const plantDetails = {
    name: 'cannabis',
    growth: 25,
    water: 10,
    rate: 30,
    nutrients: 34
}
// coca, cannabis, poppy
// plant name linked to the image src
const pushDetails = (plant) => {
    const {growth, rate, nutrients, water, name, imageUrl} = plant
    document.querySelector('.growth').innerHTML = growth + '%';
    document.querySelector('.growth-range').style.width = `${growth}%`
    document.querySelector('.water').innerHTML = water + '%';
    document.querySelector('.water-range').style.width = `${water}%`
    document.querySelector('.rate').innerHTML = rate + '%';
    document.querySelector('.rate-range').style.width = `${rate}%`
    document.querySelector('.nutrients').innerHTML = nutrients + '%';
    document.querySelector('.nutrients-range').style.width = `${nutrients}%`;
    document.querySelector('.plantname').innerHTML = name + ' plant';
    document.querySelectorAll('.plant-picture').forEach((elem) => {
        elem.src = `images/${name}.svg`;
    })
}
pushDetails(plantDetails)
const feedPlant = () => {
    console.log('feed plant')
}
const waterPlant = () => {
    console.log('water plant')
}
const harvestPlant = () => {
    console.log('harvest')
}
const destroyPlant = () => {
    plantDetails.growth = 0
    plantDetails.water = 0
    pushDetails(plantDetails)
    console.log('destroy')
}
const toggleDisplay = () => {
    document.querySelector('.detail-cont').classList.remove('hide-display');
    document.querySelector('.plant-info').classList.add('hide');
}
document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.detail-cont').classList.add('hide-display');
    document.querySelector('.plant-info').classList.remove('hide');
})
document.addEventListener('keydown', evt => {
    if (evt.key === 'e') {
        toggleDisplay();
    }
});
