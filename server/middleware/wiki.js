const cheerio = require('cheerio');
const axios = require('axios');

// visit all firs subsequent url of pages 
// count number of visited pages and stores them into an array
// then return an object contaning whether dead-end is reached or not alongside cont and page array
const checkWikiLoop = async function (url) {
    let page = url;
    const visitedPages = [page];
    let requestCount = 0;
    let deadEnd = false;
    let loop = false;
    while (page !== 'https://en.wikipedia.org/wiki/Philosophy') {
        try {
            const response = await axios.get(page);
            const $ = cheerio.load(response.data);
            const firstLink = $('#mw-content-text p a').attr('href');

            //check if there is any loop by comparing first link with every link visited
            for(let i=0;i<visitedPages.length;i++){
                if(firstLink === visitedPages[i]){
                    loop = true;
                    return { deadEnd, loop, requestCount, visitedPages };
                }
            }

            if (!firstLink.startsWith('/wiki/')) {
                deadEnd = true;
                return { deadEnd, loop, requestCount, visitedPages };
            }
            
            page = `https://en.wikipedia.org${firstLink}`;
            visitedPages.push(page);
            requestCount++;
        } catch (error) {
            console.error(error);
            throw new Error('Error fetching or parsing page');
        }
    }

    return { deadEnd, loop, requestCount, visitedPages };
}

module.exports = checkWikiLoop;