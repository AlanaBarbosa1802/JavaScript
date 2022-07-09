const Base_URL = 'https://thatcopy.pw/catapi/rest'
const getCats = async () => {
    const data = await fetch (Base_URL);
    const json = await data.json ();
    return json.webpurl;

} catch (e){
    console.log(e.message);
};

const loadImg = async () => {
const img = document.getElementsByTagName('img')[0];    cating.src = await getCats();

};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click , loadImg');