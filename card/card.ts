// export interface i_plans{
//     id: string,
//     name: string,
//     internet: string,
//     speed: string,
//     calls: string,
//     cost: string
// }

export interface i_plans{
    id : number,
    billing_cycle:string,
    plan_name:string,
    plan_speed:string,
    plan_price:number

}

export interface b_plans{
    id : number,
    billing_cycle:string,
    plan_name:string,
    plan_speed:string,
    plan_price:number

}