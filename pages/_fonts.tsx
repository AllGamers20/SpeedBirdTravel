import LocalFont from 'next/font/local'
import { Nunito } from 'next/font/google'
import React from 'react'

export const dale = LocalFont({
    src: "../public/fonts/Dale-Adventure.woff2",
    weight: '400',
    style: 'normal',
    variable: '--font-dale',

})
export const CampFire = LocalFont({
    src: "../public/fonts/Campfire.woff2",
    weight: '400',
    style: 'normal',
    variable: '--font-CampFire',

})
export const AirSpace = LocalFont({
    src: "../public/fonts/AirSpace.woff2",
    weight: '400',
    style: 'normal',
    variable: '--font-AirSpace',

})


export const nunito = Nunito({
    variable: '--font-nunito',
    weight: '400',
    subsets: ['latin'],

})
