const themechanger = document.querySelector('#themechanger');



// const defaultTheme ='theme-light';
const defaultTheme =localStorage.getItem('theme') ||
navigator.geolocation.getCurrentPosition((position) => {
    let sunset = new Date().sunset(position.coords.latitude, position.coords.longitude);
    let sunrise = new Date().sunrise(position.coords.latitude, position.coords.longitude);
    if (isDay(sunset, sunrise)) {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }

    function isDay(sunset, sunrise) {
        const nowHours = new Date().getHours();
        return nowHours >= sunrise.getHours() && nowHours < sunset.getHours();
    }
});;


setTheme(defaultTheme);


themechanger.addEventListener('change', (e)=>{
    setTheme(e.target.value);
    // console.log(e.target.value)
})


function setTheme(theme){
    theme = theme || 'theme-light'
    document.documentElement.className= theme;
    localStorage.setItem('theme',theme)
    themechanger.value =theme;

}