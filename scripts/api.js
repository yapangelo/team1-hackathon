class OlympicApi {
    constructor() {
        this.baseUrl = "https://apis.codante.io/olympic-games/"
    }

    async getCountries() {
        const response = await axios.get(this.baseUrl + "countries")
        return response.data.data
    }

    async getCountriesAll() {
        const fullData = []
        for (let i = 1; i < 6; i++) {
            const response = await axios.get(this.baseUrl + "countries?page=" + i)
            for (let j = 0; j < response.data.data.length; j++) {
                fullData.push(response.data.data[j])
            }
        }
        return fullData
    }
}