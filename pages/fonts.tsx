import {Aleo,Nunito} from 'next/font/google'

export const aleo = Aleo({
    weight: ['100','200','300','400','500','600','700','800','900'],
    style: ['normal','italic'],
    subsets: ['latin'],
    variable: '--font-aleo'
})
export const nunito = Nunito({
    weight: ['200','300','400','500','600','700','800','900','1000'],
    style: ['normal','italic'],
    subsets: ['latin'],
    variable: '--font-nunito'
})