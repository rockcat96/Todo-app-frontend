import url from "./url";

export async function IndexLoader(){
    const response = await fetch(url)
    const data = await response.json()

    console.log("INDEX LOADER:", data)

    return data
}

export async function ShowLoader({params}){
    const response = await fetch(url + params.id+"/")
    const data = await response.json()
    console.log("Show Loader", data)

    return data
}