const histotyBurger = document.querySelector('#histoty-burger');
const historyBurgerButtonLeft = document.querySelector('#history-burger-button-left');
const historyBurgerButtonRight = document.querySelector('#history-burger-button-right');
let indexHistory = 0;
const historyCollection = ["Поскольку варианты этого блюда подаются уже более 100 лет , его происхождение остается неоднозначным. В популярно книге Ханны Гласс  “Искусство кулинарии просто и легко” в 1758 году был приведен рецепт “гамбурско колбысы”, в котором предлагалось подавать её “жареной с поджереным хлебом под ней." + 
    "<br>" + 
    "Похожая закуска была также популярна а Гамбурге под названием Rundctuck warm в 1869 году и ранее, но возможно она содержала бифштекс а не котлету.", 'Упоминание о «гамбургерском стейке» встречается ещё в 1884 году в газете Boston Journal. 5 июля 1896 года газета Chicago Daily Tribune сделала весьма специфическое заявление о «гамбургерском сэндвиче» в статье «сэндвичмобиле»: «Выдающимся фаворитом, всего за пять центов, является сэндвич с гамбургерным стейком, мясо для которого готовится в виде небольших котлет и готовится, пока вы ждете“на бензиновой плите»'
];
historyBurgerButtonRight.onclick = () => {
    if ((indexHistory + 1) < historyCollection.length ) {
        indexHistory++;
    } else {
        indexHistory = 0;
    }
    histotyBurger.innerHTML = historyCollection[indexHistory];
    console.log(indexHistory);
} 
historyBurgerButtonLeft.onclick = () => {
if (indexHistory === 0) {
    indexHistory = (historyCollection.length - 1);
} else {
    indexHistory--;
}
histotyBurger.innerHTML = historyCollection[indexHistory];
console.log(indexHistory);
}