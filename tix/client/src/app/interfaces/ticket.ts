export interface Ticket {
    ticket: TicketArray[]
    itemCount: number
  }
  
  export interface TicketArray {
    id_ticket: string
    home_id: string
    away_id: string
    home_name: string
    away_name: string
    date: string
    time: string
    home_logo:string
    away_logo:string
  }