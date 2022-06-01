export const getGifs = async(category) => {
    const url = `http://api.giphy.com/v1/stickers/search?q=${encodeURI(category)}&limit=16&api_key=M4hdJd9sNEUz7yPXh428ygoWNEemRvpB`

    const resp = await fetch(url);
    const {data} = await resp.json();
    console.log(data)
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}