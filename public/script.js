const getKillBill = async () => {
    const killBill = document.querySelector("#killBill");
    killBill.innerHTML = "";
    const id = 24;
    const res = await fetch(`/movie/${id}`);
    const data = await res.json();
    const imgURL = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    killBill.innerHTML += `
    <div class="favouritesDiv">
        <img src="${imgURL}" alt=${data.title} class="favouritesImages">
        <h3 class="favouritesTitles"><a class="favouritesTitles" href="https://www.themoviedb.org/movie/${data.id}" target="_blank">${data.title}</a</h3>
    </div>
    `;
};

const getBridgeToTerabithia = async () => {
    const bridgeToTerabithia = document.querySelector("#bridgeToTerabithia");
    bridgeToTerabithia.innerHTML = "";
    const id = 1265;
    const res = await fetch(`/movie/${id}`);
    const data = await res.json();
    const imgURL = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    bridgeToTerabithia.innerHTML += `
    <div class="favouritesDiv">
        <img src="${imgURL}" alt=${data.title} class="favouritesImages">
        <h3 class="favouritesTitles"><a class="favouritesTitles" href="https://www.themoviedb.org/movie/${data.id}" target="_blank">${data.title}</a</h3>
    </div>
    `;
};

const getRogueNation = async () => {
    const rogueNation = document.querySelector("#rogueNation");
    rogueNation.innerHTML = "";
    const id = 177677;
    const res = await fetch(`/movie/${id}`);
    const data = await res.json();
    const imgURL = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    rogueNation.innerHTML += `
    <div class="favouritesDiv">
        <img src="${imgURL}" alt=${data.title} class="favouritesImages">
        <h3 class="favouritesTitles"><a class="favouritesTitles" href="https://www.themoviedb.org/movie/${data.id}" target="_blank">${data.title}</a</h3>
    </div>
    `;
};

const getSe7en = async () => {
    const se7en = document.querySelector("#se7en");
    se7en.innerHTML = "";
    const id = 807;
    const res = await fetch(`/movie/${id}`);
    const data = await res.json();
    const imgURL = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    se7en.innerHTML += `
    <div class="favouritesDiv">
        <img src="${imgURL}" alt=${data.title} class="favouritesImages">
        <h3 class="favouritesTitles"><a class="favouritesTitles" href="https://www.themoviedb.org/movie/${data.id}" target="_blank">${data.title}</a</h3>
    </div>
    `;
};

const getPulpFiction = async () => {
    const pulpFiction = document.querySelector("#pulpFiction");
    pulpFiction.innerHTML = "";
    const id = 680;
    const res = await fetch(`/movie/${id}`);
    const data = await res.json();
    const imgURL = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    pulpFiction.innerHTML += `
    <div class="favouritesDiv">
        <img src="${imgURL}" alt=${data.title} class="favouritesImages">
        <h3 class="favouritesTitles"><a class="favouritesTitles" href="https://www.themoviedb.org/movie/${data.id}" target="_blank">${data.title}</a</h3>
    </div>
    `;
};

const getDarkKnightRises = async () => {
    const darkKnightRises = document.querySelector("#darkKnightRises");
    darkKnightRises.innerHTML = "";
    const id = 49026;
    const res = await fetch(`/movie/${id}`);
    const data = await res.json();
    const imgURL = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    darkKnightRises.innerHTML += `
    <div class="favouritesDiv">
        <img src="${imgURL}" alt=${data.title} class="favouritesImages">
        <h3 class="favouritesTitles"><a class="favouritesTitles" href="https://www.themoviedb.org/movie/${data.id}" target="_blank">${data.title}</a</h3>
    </div>
    `;
};

const getInception = async () => {
    const inception = document.querySelector("#inception");
    inception.innerHTML = "";
    const id = 27205;
    const res = await fetch(`/movie/${id}`);
    const data = await res.json();
    const imgURL = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    inception.innerHTML += `
    <div class="favouritesDiv">
        <img src="${imgURL}" alt=${data.title} class="favouritesImages">
        <h3 class="favouritesTitles"><a class="favouritesTitles" href="https://www.themoviedb.org/movie/${data.id}" target="_blank">${data.title}</a</h3>
    </div>
    `;
};

const getOceansEleven = async () => {
    const oceansEleven = document.querySelector("#oceansEleven");
    oceansEleven.innerHTML = "";
    const id = 161;
    const res = await fetch(`/movie/${id}`);
    const data = await res.json();
    const imgURL = `https://image.tmdb.org/t/p/original${data.poster_path}`;

    oceansEleven.innerHTML += `
    <div class="favouritesDiv">
        <img src="${imgURL}" alt=${data.title} class="favouritesImages">
        <h3 class="favouritesTitles"><a class="favouritesTitles" href="https://www.themoviedb.org/movie/${data.id}" target="_blank">${data.title}</a</h3>
    </div>
    `;
};

getKillBill();
getBridgeToTerabithia();
getRogueNation();
getSe7en();
getPulpFiction();
getDarkKnightRises();
getInception();
getOceansEleven();

const form = document.querySelector("#form");
const reload = document.querySelector("#reload");
reload.addEventListener("click", () => {
    location.reload(true);
    reload.classList.add("hidden");
});

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const favourites = document.querySelector("#favourites");
    const query = document.querySelector("#searchBox").value.trim();
    const type = document.querySelector("#searchType").value;
    if (!query) return alert("Please enter a movie name");

    const res = await fetch(`/search/${type}?query=${encodeURIComponent(query)}`);
    const data = await res.json();

    favourites.classList.add("hidden");

    reload.classList.add("notHidden");

    const results = document.querySelector("#resultsDiv");
    results.innerHTML = "";

    if (!data.results || data.results.length === 0) {
        results.innerHTML = "<p>No results found</p>";
        return;
    }

    const filteredResults = data.results.filter(item => !item.adult);

    if (filteredResults.length === 0) {
        results.innerHTML = "<p>No non-adult results found</p>";
        return;
    }

    if (type === "tv") {
        filteredResults.forEach(element => {
        const imgURL = `https://image.tmdb.org/t/p/w400${element.poster_path}`;

        results.innerHTML += `
        <div class="searchResultsListItem">
            <img src="${imgURL}" alt=${element.original_name} class="searchResultsImage">
            <div class="resultsText">
                <h3 class="searchResultsTitle"><a class="searchResultsTitle" href="https://www.themoviedb.org/tv/${element.id}" target="_blank">${element.original_name}</a></h3>
                <p class="searchResultsDate">${element.first_air_date || "No date"}</p>
                <p class="searchResultsOverview">${element.overview || "No description available"}</p>
            </div>
        </div>
        `
        });
    }
    else if (type === "movie") {
        filteredResults.forEach(element => {
        const imgURL = `https://image.tmdb.org/t/p/w400${element.poster_path}`;

        results.innerHTML += `
        <div class="searchResultsListItem">
            <img src="${imgURL}" alt=${element.title} class="searchResultsImage">
            <div class="resultsText">
                <h3 class="searchResultsTitle"><a class="searchResultsTitle" href="https://www.themoviedb.org/movie/${element.id}" target="_blank">${element.title}</a></h3>
                <p class="searchResultsDate">${element.release_date || "No date"}</p>
                <p class="searchResultsOverview">${element.overview || "No description available"}</p>
            </div>
        </div>
        `
        });
    }
});