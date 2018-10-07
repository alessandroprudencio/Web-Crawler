const request = require('request')
const cheerio = require('cheerio')

request('https://www.globo.com/', function(err, res, body){
    if(err)
    console.log('erro' + err)

    let $ =  cheerio.load(body)

    $('.hui-premium').each(function(){
        var title = $(this).find('.hui-premium__title').text().trim()
        //var imdbRating = $(this).find('.imdbRating strong').text().trim()

        console.log(title)

    })
})