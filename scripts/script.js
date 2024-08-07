const popUps = document.querySelectorAll(".popup")
const myPopups = document.querySelectorAll(".popuptext")
for (let i = 0; i < popUps.length; i++) {
    popUps[i].addEventListener('click', function() {
        var popup = myPopups[i];
        for (let j = 0; j < popUps.length; j++) {
            if (j != i) {
                myPopups[j].classList.remove("show")
            }
        }
        popup.classList.toggle("show");
    })
}

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

async function countryRender() {
    const countryFlag = document.querySelectorAll(".mt__flag")
    const countryTeam = document.querySelectorAll(".mt__dynamic-id")
    const countryGold = document.querySelectorAll(".mt__gold-medals")
    const countrySilver = document.querySelectorAll(".mt__silver-medals")
    const countryBronze = document.querySelectorAll(".mt__bronze-medals")
    const countryTotal = document.querySelectorAll(".mt__total-medals")

    const data = await getCountry()
    for (let i = 0; i < 10; i++) {
        countryTeam[i].innerText = data[i].id
        countryFlag[i].src = data[i].flag
        countryGold[i].innerText = data[i].gold
        countrySilver[i].innerText = data[i].silver
        countryBronze[i].innerText = data[i].bronze
        countryTotal[i].innerText = data[i].total
    }
    
}

// Render Popup Data to HTML

const popText = document.querySelector(".popuptext")

const popupArrayToName = (array) => {
    const popupLine = `${array[0]}: `
    return popupLine
}

const popupArrayToString = (array) => {
    const popupLine = `Gold: ${array[1]}, Silver: ${array[2]}, Bronze: ${array[3]}, Total: ${array[4]}`
    return popupLine
}

const popupTextRender = (array, popText) => {
    // popText.innerHTML = ""
    for(let i = 0; i < array.length; i++) {
        popText.innerHTML += `<b>${popupArrayToName(array[i])}</b>` + popupArrayToString(array[i]) + "<br>"
    }
}

const popupTeamName = (country, popText) => {
    if (country == "USA") {
        popText.innerHTML = "<b>Team USA<b/> <br>"
    } else if (country == "CHN") {
        popText.innerHTML = "<b>Team China<b/> <br>"
    } else if (country == "AUS") {
        popText.innerHTML = "<b>Team Australia<b/> <br>"
    } else if (country == "FRA") {
        popText.innerHTML = "<b>Team France<b/> <br>"
    } else if (country == "GBR") {
        popText.innerHTML = "<b>Team Great Britain<b/> <br>"
    } else if (country == "KOR") {
        popText.innerHTML = "<b>Team Korea<b/> <br>"
    } else if (country == "JPN") {
        popText.innerHTML = "<b>Team Japan<b/> <br>"
    } else if (country == "ITA") {
        popText.innerHTML = "<b>Team Italy<b/> <br>"
    } else if (country == "NED") {
        popText.innerHTML = "<b>Team Netherlands<b/> <br>"
    } else if (country == "GER") {
        popText.innerHTML = "<b>Team Germany<b/> <br>"
    }
}

const popupFullRender = () => {
    const countryID = document.querySelectorAll(".mt__dynamic-id")
    const popText = document.querySelectorAll(".popuptext")
    for (let i = 0; i < popText.length; i++) {
        if (countryID[i].innerText === "CHN") {
            popupTeamName("CHN", popText[i])
            popupTextRender(chinaNewArray, popText[i])
        } else if (countryID[i].innerText === "USA") {
            popupTeamName("USA", popText[i])
            popupTextRender(usaNewArray, popText[i])
        } else if (countryID[i].innerText === "AUS") {
            popupTeamName("AUS", popText[i])
            popupTextRender(ausNewArray, popText[i])
        } else if (countryID[i].innerText === "FRA") {
            popupTeamName("FRA", popText[i])
            popupTextRender(fraNewArray, popText[i])
        } else if (countryID[i].innerText === "GBR") {
            popupTeamName("GBR", popText[i])
            popupTextRender(gbrNewArray, popText[i])
        } else if (countryID[i].innerText === "KOR") {
            popupTeamName("KOR", popText[i])
            popupTextRender(korNewArray, popText[i])
        } else if (countryID[i].innerText === "JPN") {
            popupTeamName("JPN", popText[i])
            popupTextRender(japNewArray, popText[i])
        } else if (countryID[i].innerText === "ITA") {
            popupTeamName("ITA", popText[i])
            popupTextRender(itaNewArray, popText[i])
        } else if (countryID[i].innerText === "NED") {
            popupTeamName("NED", popText[i])
            popupTextRender(nedNewArray, popText[i])
        } else if (countryID[i].innerText === "GER") {
            popupTeamName("GER", popText[i])
            popupTextRender(gerNewArray, popText[i])
        }
    }

}

// Call API Functions

const popupFinalRender = async () => {
    await countryRender()
    popupFullRender()
}

popupFinalRender()