require('dotenv').config();
const { Router } = require('express');
const axios = require('axios')
const {URL_API} = process.env;

const router = Router();

router.get('/', async (req, resp, next) => {
    try{
        let data = await axios.get(`${URL_API}character`)
        let result = data.data.results.map(character=>{
            const {id, name, status, species,gender, image, episode} = character;
            return {
                id,
                name,
                status,
                species,
                gender,
                image,
                episode
            }
        })
        resp.send(result).status(200)
    }catch(e){
        resp.send('Error').status(404)
    }
})

module.exports = router;