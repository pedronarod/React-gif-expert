 
 export const getGifs =async(category) =>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=WSeYagimr8vbVIM6olzJ3IKEn0x5tQZ9&q=${category}&limit=20`
    const resp = await fetch(url);
    const {data} = await resp.json();
 
    const gifs = data.map( img =>({
        id:img.id,
        title: img.title,
        url:img.images.fixed_height.url

    }))
 
    return gifs;
}
