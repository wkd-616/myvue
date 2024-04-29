export interface PersonInter {
    id: number;
    name: string;
    age: number;
    //type?: string; ?可选
}

export type Persons = PersonInter[]