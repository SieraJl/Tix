export interface Club {
    queryUrl: string
    doc: Doc[]
}

  export interface Doc {
    event: string
    _dob: number
    _maxage: number
    data: Data
  }
  
  export interface Data {
    teams: Teams
    teamcount: number
    roundcount: number
    jersey: Jersey
    season: Season
    tables: Tables
    positiondata: Positiondata
    previousseason: Previousseason
    currentseason: Currentseason
    matchesmissing: any[]
  }
  
  export interface Teams {
    "59628": N59628
  }
  
  export interface N59628 {
    _doc: string
    _id: number
    _sid: number
    _rcid: number
    name: string
    mediumname: string
    suffix: any
    abbr: string
    nickname: any
    teamtypeid: number
    iscountry: boolean
    sex: string
    haslogo: boolean
    founded: string
    website: any
  }
  
  export interface Jersey {
    "59628": N596282
  }
  
  export interface N596282 {
    base: string
    sleeve: string
    number: string
    real: boolean
    type: string
  }
  
  export interface Season {
    _id: string
    _doc: string
    _utid: number
    _sid: number
    name: string
    abbr: string
    start: Start
    end: End
    neutralground: boolean
    friendly: boolean
    currentseasonid: number
    year: string
  }
  
  export interface Start {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface End {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface Tables {
    "69419": N69419
  }
  
  export interface N69419 {
    _doc: string
    _id: string
    tournamentid: number
    name: string
    abbr: string
    groupname: string
    maxrounds: string
    seasonid: string
    seasontype: string
    seasontypename: string
    seasontypeunique: string
    start: Start2
    end: End2
    roundbyround: boolean
    order: any
  }
  
  export interface Start2 {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface End2 {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface Positiondata {
    "1": N1
    "2": N2
    "3": N3
  }
  
  export interface N1 {
    _doc: string
    _id: number
    name: string
    shortname: string
    cssclass: string
    position: number
  }
  
  export interface N2 {
    _doc: string
    _id: number
    name: string
    shortname: string
    cssclass: string
    position: number
  }
  
  export interface N3 {
    _doc: string
    _id: number
    name: string
    shortname: string
    cssclass: string
    position: number
  }
  
  export interface Previousseason {
    "59628": N596283
  }
  
  export interface N596283 {
    _doc: string
    round: number
    position: number
    seasonid: number
    matchid: number
    moved: any
  }
  
  export interface Currentseason {
    "59628": N596284[]
  }
  
  export interface N596284 {
    _doc: string
    round: number
    position: number
    seasonid: number
    matchid: number
  }
  