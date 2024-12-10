export type Country ={
currency:string 
flag:string
isoCode?:string 
latitude?:string 
longitude?:string | undefined
name:string
phonecode:string
countryCode?:string | undefined


}

export type CountryList = Country[]