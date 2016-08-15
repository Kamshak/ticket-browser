export interface TicketDataObject {
    authorId  : number,
    authorName: string,
    userId    : number,
    userName  : string,
    scriptName: string,
    scriptId:   number,
    comments  : TicketComment[]
}

export interface TicketComment {
    userId    : number,
    userName  : string,
    text      : string
}