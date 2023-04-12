export interface LigueNextMatches {
        queryUrl: string
        doc: Doc[]
}

export interface Doc {
    event: string
    _dob: number
    _maxage: number
    _pages?: number
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
    matches: Match[]
    cups?: Cups
    tables: Tables
    tournaments?: Tournaments
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
  
  export interface Match {
    _doc: string
    _id: number
    _sid: number
    _rcid: number
    _tid: number
    _utid: number
    time: Time
    round: number
    roundname: Roundname
    week: number
    result: Result
    periods?: Periods
    _seasonid: number
    teams: Teams
    neutralground: boolean
    comment?: string
    status?: string
    nextmatchid?: number
    tobeannounced: boolean
    postponed: boolean
    canceled: boolean
    inlivescore: boolean
    stadiumid: number
    bestof: any
    walkover: boolean
    retired: boolean
    disqualified: boolean
    numberofperiods: number
    cuproundmatchnumber?: string
    cuproundnumberofmatches?: string
    decidedbyfa?: string
    dbfa?: boolean
  }
  
  export interface Time {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface Roundname {
    _doc: string
    _id: number
    name: any
    displaynumber: any
    shortname?: string
    cuproundnumber: any
    statisticssortorder?: number
  }
  
  export interface Result {
    home?: number
    away?: number
    period: string
    winner?: string
  }
  
  export interface Periods {
    p1?: P1
    ft: Ft
    ap?: Ap
  }
  
  export interface P1 {
    home: number
    away: number
  }
  
  export interface Ft {
    home: number
    away: number
  }
  
  export interface Ap {
    home: number
    away: number
  }
  
  export interface Teams {
    home: Home
    away: Away
  }
  
  export interface Home {
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
  
  export interface Away {
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
  
  export interface Cups {
    "139331": N139331
  }
  
  export interface N139331 {
    _doc: string
    _id: string
    tournamentid: string
    name: string
    abbr: string
    seasonid: string
    seasontype: string
    seasontypename: string
    seasontypeunique: string
    start: string
    end: string
    matches: number[]
  }
  
  export interface Tables {
    "69421": N69421
    "69423": N69423
    "69419": N69419
    "69425": N69425
  }
  
  export interface N69421 {
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
    totalrows: number
    tournamentid: number
    seasontype: string
    seasontypename: string
    seasontypeunique: string
    start: Start2
    end: End2
    roundbyround: boolean
    order: number
    matches: number[]
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
  
  export interface N69423 {
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
    totalrows: number
    tournamentid: number
    seasontype: string
    seasontypename: string
    seasontypeunique: string
    start: Start3
    end: End3
    roundbyround: boolean
    order: number
    matches: number[]
  }
  
  export interface Start3 {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface End3 {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface N69419 {
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
    totalrows: number
    tournamentid: number
    seasontype: string
    seasontypename: string
    seasontypeunique: string
    start: Start4
    end: End4
    roundbyround: boolean
    order: number
    matches: number[]
  }
  
  export interface Start4 {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface End4 {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface N69425 {
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
    totalrows: number
    tournamentid: number
    seasontype: string
    seasontypename: string
    seasontypeunique: string
    start: Start5
    end: End5
    roundbyround: boolean
    order: number
    matches: number[]
  }
  
  export interface Start5 {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface End5 {
    _doc: string
    time: string
    date: string
    tz: string
    tzoffset: number
    uts: number
  }
  
  export interface Tournaments {
    "23303": N23303
    "23304": N23304
    "122085": N122085
    "27293": N27293
    "58311": N58311
  }
  
  export interface N23303 {
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
    tournamentlevelorder: number
    tournamentlevelname: string
    outdated: boolean
    currentround: number
    matches: number[]
  }
  
  export interface N23304 {
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
    tournamentlevelorder: any
    tournamentlevelname: any
    outdated: boolean
    currentround: number
    matches: number[]
  }
  
  export interface N122085 {
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
    livetable: boolean
    cuprosterid: any
    roundbyround: boolean
    tournamentlevelorder: any
    tournamentlevelname: any
    outdated: boolean
    matches: number[]
  }
  
  export interface N27293 {
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
    tournamentlevelorder: any
    tournamentlevelname: any
    outdated: boolean
    currentround: number
    matches: number[]
  }
  
  export interface N58311 {
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
    tournamentlevelorder: any
    tournamentlevelname: any
    outdated: boolean
    currentround: number
    matches: number[]
  }
  