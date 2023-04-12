export interface Standing {
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
    tables: Table[]
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
  
  export interface Table {
    _doc: string
    _id: string
    parenttableid: any
    leaguetypeid: any
    parenttableids: any[]
    seasonid: string
    maxrounds: number
    currentround: number
    presentationid: number
    name: string
    abbr: string
    groupname: string
    tournament: Tournament
    realcategory: Realcategory
    rules: Rules
    totalrows: number
    tablerows: Tablerow[]
    tournamentid: number
    seasontype: string
    seasontypename: string
    seasontypeunique: string
    start: Start2
    end: End2
    roundbyround: boolean
    order: number
    set: Set[]
    header: Header[]
    matchtype: Matchtype[]
    tabletype: Tabletype[]
  }
  
  export interface Tournament {
    _doc: string
    _id: number
    _sid: number
    _rcid: number
    _isk: number
    _tid: number
    _utid: number
    _gender: string
    name: string
    abbr: string
    ground: any
    friendly: boolean
    seasonid: number
    currentseason: number
    year: string
    seasontype: string
    seasontypename: string
    seasontypeunique: string
    groupname: string
    livetable: number
    cuprosterid: any
    roundbyround: boolean
    tournamentlevelorder?: number
    tournamentlevelname?: string
    outdated: boolean
  }
  
  export interface Realcategory {
    _doc: string
    _id: number
    _sid: number
    _rcid: number
    name: string
    cc: Cc
  }
  
  export interface Cc {
    _doc: string
    _id: number
    a2: string
    name: string
    a3: string
    ioc: string
    continentid: number
    continent: string
    population: number
  }
  
  export interface Rules {
    _doc: string
    _id: number
    name: string
  }
  
  export interface Tablerow {
    _doc: string
    _id: number
    promotion?: Promotion
    changeTotal: number
    changeHome: number
    changeAway: number
    drawTotal: number
    drawHome: number
    drawAway: number
    goalDiffTotal: number
    goalDiffHome: number
    goalDiffAway: number
    goalsAgainstTotal: number
    goalsAgainstHome: number
    goalsAgainstAway: number
    goalsForTotal: number
    goalsForHome: number
    goalsForAway: number
    lossTotal: number
    lossHome: number
    lossAway: number
    total: number
    home: number
    away: number
    pointsTotal: number
    pointsHome: number
    pointsAway: number
    pos: number
    posHome: number
    posAway: number
    sortPositionTotal: number
    sortPositionHome: number
    sortPositionAway: number
    team: Team
    winTotal: number
    winHome: number
    winAway: number
  }
  
  export interface Promotion {
    _doc: string
    _id: number
    name: string
    shortname: string
    cssclass: string
    position: number
  }
  
  export interface Team {
    _doc: string
    _id: number
    _sid: number
    uid: number
    virtual: boolean
    name: string
    mediumname: string
    abbr: string
    nickname: any
    iscountry: boolean
    haslogo: boolean
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
  
  export interface Set {
    id: number
    name: string
    headers: number[]
  }
  
  export interface Header {
    id: number
    name: string
    column: string
    tooltip: string
    datapriority: string
  }
  
  export interface Matchtype {
    _doc: string
    _id: number
    settypeid: number
    column: string
  }
  
  export interface Tabletype {
    _doc: string
    _id: number
    column: string
  }
  