require('dotenv').load()
const axios = require('axios')
const cheerio = require('cheerio')

const leiaResposta = (html) =>{
     $ = cheerio.load(html)
     return $('.story-title').map((index, element) =>({
        title:$(element).find('.story-link').text(),
        url:$(element).find('.story-link').attr('href')
     })).get()
}


const procuraNoticia = async () =>{
    try {
        const response = await axios({
            url:process.env.FRONT_NOTICIAS,
            method:'get'
        })
        const objetoReturn = await leiaResposta(response.data) //response.data = html
        return Promise.resolve(objetoReturn)

    } catch (error) {
        return Promise.reject(error)
    }
}

procuraNoticia(leiaResposta)    
.then(resp => console.log('response', resp))
.catch(err=> console.log('error',err))