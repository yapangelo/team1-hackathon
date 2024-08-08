const popUp = document.getElementById("popup")
popUp.addEventListener('click', function() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
})

// Get Data from Olympic API

const olympicApi = new OlympicApi();

function medalParser(data) {
    const countriesMedals = []
    for (let i = 0; i < data.length; i++) {
        const countryMedals = {
            id: data[i].id,
            flag: data[i].flag_url,
            gold: data[i].gold_medals,
            silver: data[i].silver_medals,
            bronze: data[i].bronze_medals,
            total: data[i].total_medals,
            rank: data[i].rank
        }
        countriesMedals.push(countryMedals)
    }
    
    return countriesMedals
}

async function getCountry() {
    const response = await olympicApi.getCountries()
    const countryData = medalParser(response)
    return countryData
}

async function getCountryAll() {
    const response = await olympicApi.getCountriesAll()
    const countryData = medalParser(response)
    return countryData
}

// Populate Data from Olympic API

async function countryRenderOne() {
    const countryFlag = document.querySelector(".mt__flag")
    const countryTeam = document.querySelector(".mt__dynamic-team")
    const countryGold = document.querySelector(".mt__gold-medals")
    const countrySilver = document.querySelector(".mt__silver-medals")
    const countryBronze = document.querySelector(".mt__bronze-medals")
    const countryTotal = document.querySelector(".mt__total-medals")

    const data = await getCountry()

    countryTeam.innerText = data[0].id
    countryFlag.src = data[0].flag
    countryGold.innerText = data[0].gold
    countrySilver.innerText = data[0].silver
    countryBronze.innerText = data[0].bronze
    countryTotal.innerText = data[0].total
}

async function countryRender() {
    const countryFlag = document.querySelectorAll(".mt__flag")
    const countryTeam = document.querySelectorAll(".mt__dynamic-team")
    const countryGold = document.querySelectorAll(".mt__gold-medals")
    const countrySilver = document.querySelectorAll(".mt__silver-medals")
    const countryBronze = document.querySelectorAll(".mt__bronze-medals")
    const countryTotal = document.querySelectorAll(".mt__total-medals")

    const data = await getCountry()
    for (let i = 0; i < 3; i++) {
        countryTeam[i].innerText = data[i].id
        countryFlag[i].src = data[i].flag
        countryGold[i].innerText = data[i].gold
        countrySilver[i].innerText = data[i].silver
        countryBronze[i].innerText = data[i].bronze
        countryTotal[i].innerText = data[i].total
    }
    
}

// Call API Functions

countryRender()