module.exports = City = `
  type City {
    id : Int
    name: Srting
    countryCode: Srting
    district: Srting
    info: CityInfo
  }

  type CityInfo {
    Population : Int
  }
`;