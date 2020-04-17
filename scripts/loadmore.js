//app.appendChild(logo)
function loadmore() {
    app.appendChild(section);
    section.appendChild(container);
    axios.get('https://dashletter-backend.herokuapp.com/blog/?category=fashion&sp=' + sp + '&ep=' + ep)
        .then((response) => {
            data = response.data;
            for (movie in data) {
                console.log(quoteRemover(JSON.stringify(data[movie].urlToImage)));
                const a = document.createElement('a');
                a.setAttribute('href', quoteRemover(JSON.stringify(data[movie].url)));
                a.setAttribute('target', "_blank");
                const card = document.createElement('div');
                card.setAttribute('class', 'card');
                const card_image = document.createElement('div');
                card_image.setAttribute('class', 'card-image');
                const figure = document.createElement('figure');
                figure.setAttribute('class', 'image is-4by3');
                const img = document.createElement('img');
                let image = quoteRemover(JSON.stringify(data[movie].urlToImage));
                img.setAttribute('src', image);
                console.log(JSON.stringify(data[movie].urlToImage));
                const card_content = document.createElement('div');
                card_content.setAttribute('class', 'card-content');
                const media = document.createElement('div');
                media.setAttribute('class', 'media');
                const media_content = document.createElement('div');
                media_content.setAttribute('class', 'media-content');
                const p_title = document.createElement('p');
                p_title.setAttribute('class', 'titly title is-5');
                data[movie].title = quoteRemover(JSON.stringify(data[movie].title));
                p_title.textContent = data[movie].title;
                const p_subtitle = document.createElement('p');
                p_subtitle.setAttribute('class', 'titly subtitle is-7');
                p_subtitle.textContent = `source: ${quoteRemover(JSON.stringify(data[movie].source.name))}`;
                const div_content = document.createElement('div');
                div_content.setAttribute('class', 'content');
                data[movie].content = quoteRemover(JSON.stringify(data[movie].content).substring(0, 300));
                div_content.textContent = `${data[movie].content}<a>read more...</a>`;
                container.appendChild(a);
                a.appendChild(card);
                card.appendChild(card_image);
                card_image.appendChild(figure);
                figure.appendChild(img);
                card.appendChild(card_content);
                card_content.appendChild(media);
                media.appendChild(media_content);
                media_content.appendChild(p_title);
                media_content.appendChild(p_subtitle);
                card_content.appendChild(div_content);
            }
        }, (error) => {
            console.log(error);
        });
    sp = sp + 50;
    ep = ep + 50;
}
