const cateogries = [
    {name: "LPL", image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/League_of_legends_pro_league_logo.svg/1200px-League_of_legends_pro_league_logo.svg.png"},
    {name: "LCK", image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/League_of_Legends_Champions_Korea_logo.svg/1200px-League_of_Legends_Champions_Korea_logo.svg.png"},
    {name: "LEC", image: "https://cdn0.gamesports.net/edb_team_logos/28000/28500.png?1607889844"},
    {name: "LCS", image: "https://ggscore.com/media/tournament/e6771.png"},
    {name: "PCS", image: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Pacific_Championship_Series_logo.png/500px-Pacific_Championship_Series_logo.png"},
    {name: "VCS", image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Vietnam_Championship_Series_logo.png"},
    {name: "LJL", image: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/League_of_Legends_Japan_League_logo.png/150px-League_of_Legends_Japan_League_logo.png"},
    {name: "LCO", image: "https://lco.gg/wp-content/uploads/Logomark-Short-Logotype-Horizontal-Single-Colour-Seashore.png"},
    {name: "TCL", image: "https://en.game-tournaments.com/media/tournament/e1985.png"},
    {name: "LLA", image: "https://ggscore.com/media/tournament/e6899.png"},
    {name: "CBLOL", image: "https://storage.googleapis.com/lolscore-bf2e2.appspot.com/optimize/images/leagues/302/256_index.png"}
];

function start() {
    const container = document.getElementById("category-grid-container");
    
    const children = cateogries.map((item) => {
        const wrapper = document.createElement("a");
        wrapper.href = `/teams/teams.html?${item.name.toLowerCase()}`;
        const girdItem = document.createElement("div");
        girdItem.className = "grid-item";
        const img = document.createElement("img");
        img.src = item.image;
        girdItem.appendChild(img);
        const para = document.createElement("p");
        para.textContent = item.name;
        girdItem.appendChild(para);
        wrapper.appendChild(girdItem);
        return wrapper;
    })
    
    children.forEach((item) => container.appendChild(item));
}

start();


