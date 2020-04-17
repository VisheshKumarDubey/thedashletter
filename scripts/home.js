const taggy = document.getElementById('tagg')
const app = document.getElementById('root')
const tagu = document.createElement('div')
const loading = document.getElementById('loadIndicator')
tagu.setAttribute('class', 'tags')
taggy.appendChild(tagu)


let data = ""
let tagData;
let sp = 0;
let ep = 50;
let current_url = "https://dashletter-backend.herokuapp.com/blog/?category=all";
let section = document.createElement('section');
section.setAttribute('class', 'section');
let container = document.createElement('div')
container.setAttribute('class', 'container is-desktop')

async function xyz() {

    const tagni = await axios.get('https://dashletter-backend.herokuapp.com/blog/?category=allcategory')
        .then((response) => {
            return response.data;
        }
            , (error) => {
                console.log(error);

            });
    return tagni;
}

//Tag based Loading


(async () => {
    let taglist = await xyz()
    let movie;
    for (movie in taglist) {
        const tagme = document.createElement('span')
        tagme.setAttribute('class', "tag is-rounded")
        tagme.setAttribute('id', "0t" + movie)
        tagme.textContent = taglist[movie].name
        tagu.appendChild(tagme)

    }
    document.querySelectorAll('.tag').forEach(item => {
        item.addEventListener('click', event => {
            //handle click
            var c = "";
            c = item.id;
            c = c.split("t")[1];
            sp = 0; ep = 50;
            current_url = taglist[c].url;
            loadmore(current_url, 0, sp, ep)
        })
    })
}


)()

//LoadMore Button function

var loadMore = document.querySelector('#loadMore');
loadMore.addEventListener('click', function () {
    loadmore(current_url, 1, sp, ep);
});

//Utility Function

const quoteRemover = (text) => {
    text = text.replace('\"', '')
    text = text.replace('\"', '')
    return text;
}

function dw_getWindowDims() {
    var doc = document, w = window;
    var docEl = (doc.compatMode && doc.compatMode === 'CSS1Compat')?
            doc.documentElement: doc.body;
    
    var width = docEl.clientWidth;
    var height = docEl.clientHeight;
    
    // mobile zoomed in?
    if ( w.innerWidth && width > w.innerWidth ) {
        width = w.innerWidth;
        height = w.innerHeight;
    }
    
    return {width: width, height: height};
}
const loaderAlign = () =>
loading.style.margin = ` ${dw_getWindowDims().height/2-50}px ${0}px ${0}px ${dw_getWindowDims().width/2-50}px`;

//Content Loading

function loadmore(url, g, s, e) {
    if (g == 0) {
        section.removeChild(container)
        container = document.createElement('div')
        container.setAttribute('class', 'container is-desktop')
        section.appendChild(container);
    }
    loading.style.display ='block';
    loaderAlign();
    app.appendChild(section);
    section.appendChild(container)
    axios.get(url + '&sp=' + s + '&ep=' + e)
        .then((response) => {
            if(response!=null)
            {
                loading.style.display ='none';
            }
            data = response.data;
            let movie;
            for (movie in data) {
                const a = document.createElement('a')
                a.setAttribute('href', quoteRemover(JSON.stringify(data[movie].url)))
                a.setAttribute('target', "_blank")

                const card = document.createElement('div')
                card.setAttribute('class', 'card')

                const card_image = document.createElement('div')
                card_image.setAttribute('class', 'card-image')

                const figure = document.createElement('figure')
                figure.setAttribute('class', 'image is-4by3')

                const img = document.createElement('img')

                let image = quoteRemover(JSON.stringify(data[movie].urlToImage))
                img.setAttribute('src', image)
                img.setAttribute('onerror', 'this.src=\"../assets/thumbnail.jpg\"')

                const card_content = document.createElement('div')
                card_content.setAttribute('class', 'card-content')

                const media = document.createElement('div')
                media.setAttribute('class', 'media')

                const media_content = document.createElement('div')
                media_content.setAttribute('class', 'media-content')

                const p_title = document.createElement('p')
                p_title.setAttribute('class', 'titly title is-5')
                data[movie].title = quoteRemover(JSON.stringify(data[movie].title))
                p_title.textContent = data[movie].title

                const p_subtitle = document.createElement('p')
                p_subtitle.setAttribute('class', 'titly subtitle is-7')
                p_subtitle.textContent = `source: ${quoteRemover(JSON.stringify(data[movie].source.name))}`

                const div_content = document.createElement('div')
                div_content.setAttribute('class', 'content')
                if (data[movie].content == null)

                    continue;

                data[movie].content = quoteRemover(JSON.stringify(data[movie].content)).substring(0, 75)
                div_content.textContent = `${data[movie].content} ...`




                container.appendChild(a)
                a.appendChild(card)
                card.appendChild(card_image)
                card_image.appendChild(figure)
                figure.appendChild(img)
                card.appendChild(card_content)
                card_content.appendChild(media)
                media.appendChild(media_content)
                media_content.appendChild(p_title)
                media_content.appendChild(p_subtitle)
                card_content.appendChild(div_content)

            }
            sp = sp + 50;
            ep = ep + 50;
        }, (error) => {
            console.log(error);

        });

}


//Initial content loading
loadmore(current_url, 1, sp, ep);
