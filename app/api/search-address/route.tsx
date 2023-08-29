import React from 'react'
import { NextResponse } from 'next/server'
const BASE_URL="https://api.mapbox.com/search/searchbox/v1/suggest"


export async function GET (request:any){
    const {searchParams} = new URL(request.url)
    
    const searchText = searchParams.get('q')

    const res = await fetch(BASE_URL+'?q='+searchText+'?language=en&limit=6&session_token=0bbf6e42-7a98-4351-88a3-d71dd700fbe4&country=US'+"&access_token="+process.env.MAPBOX_ACCESS_TOKEN,{
        headers:{
            "Content-Type": "application/json"
        }
    })

    const searchResult = await res.json()

    return  NextResponse.json(searchResult)

}

