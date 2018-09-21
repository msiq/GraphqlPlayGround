module.exports = `
  type Query {
    City(id: Int!) : City
    Country(code: String!): Country
  }

  type Mutation {
    createCity (city: CityInput): City
    deleteCity(id: ID!): City
    updateCity(id: ID!): Boolean
  }

  input CityInput {
    id : Int
    name: String!
    countryCode: String!
    district: String
    info: CityInfoInput
  }

  input CityInfoInput {
    population : Int
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
    capital : Int
    code2 : String
    info : CountryInfo
    city(capital: Boolean) : [City]
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