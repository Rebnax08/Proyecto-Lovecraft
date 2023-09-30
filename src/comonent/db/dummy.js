const listadedioseslovecraftianos = [{
id:1,
nombre: 'dios 1',
description: 'inserte una decipcion',
power: 'inserte numero',
image: 'https://i.imgur.com/RBafkDV.jpg'
},
{id: 2,
nombre: 'Inserte nombre',
description: 'Inserte descripcion',
power: 'Inserte numero',
image: 'https://i.imgur.com/aqPJYEr.jpg'
},
{
id: 3,
nombre: 'Inserte Nombre',
description: 'Inserte Descripcion',
power: 'Inserte numero',
image: 'https://i.imgur.com/GiY0Cib.jpg' 
},
{
id: 4,
nombre: 'Inserte Nombres',
description: 'Inserte Descripcion',
power: 'Inserte Numero',
image: 'https://i.imgur.com/OXpY228.jpg'
},
{
id: 5,
nombre: 'inserte nombre',
description: 'Inserte descripcion',
power: 'inserte numero',
image: 'https://i.imgur.com/qaQ8iDV.jpg'
},
{
id: 6,
nombre: 'Inserte numero',
description: 'Inserte descripcion',
power: 'inserte numero',
image: 'https://i.imgur.com/vXAZ1Zh.jpg'
}]

async function getDioses() {
return await listadedioseslovecraftianos;
}

async function getDiosesById(id) {
    return await listadedioseslovecraftianos.find ((Dioses) => Dioses.id === id);
}

module.exports = {
    getDioses,
    getDiosesById,
}