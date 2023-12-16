import LocalFont from 'next/font/local'
import { Nunito } from 'next/font/google'
import React from 'react'

export const dale = LocalFont({
    src: "../public/fonts/Dale-Adventure.ttf",
    weight: '400',
    style: 'normal',
    variable: '--font-dale',

})
export const CampFire = LocalFont({
    src: "../public/fonts/Campfire.ttf",
    weight: '400',
    style: 'normal',
    variable: '--font-CampFire',

})
export const AirSpace = LocalFont({
    src: "../public/fonts/AirSpace.ttf",
    weight: '400',
    style: 'normal',
    variable: '--font-AirSpace',

})


export const nunito = Nunito({
    variable: '--font-nunito',
    weight: '400',
    subsets: ['latin'],

})
