module.exports = `
  type Query {
    City(id: Int!) : City
    Country(code: String!): Country
  }

  type City {
    id : Int
    name: String
    countryCode: String
    district: String
    info: CityInfo
  }

  type CityInfo {   
    population : Int
  }

  type Country {
    code : String
    name : String
    catipal : Int
    code2 : String
    info : CountryInfo
    city : [City]
  }

  type CountryInfo {
    GNP: Int,
    _id: String,
    Name: String,
    IndepYear: Int,
    geography: Geography,
    government: Government,
    demographics: Demographics
  }

  type Geography { 
    Region: String,
    Continent: String,
    SurfaceArea: Float
  }

  type Government {
        HeadOfState: String,
        GovernmentForm: String
    }

  type Demographics { 
        Population: Int, 
        LifeExpectancy: Float
    }
 `;