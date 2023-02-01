export const dateParser=(num)=>{
    let option={
        day:"numeric",
        hour:"2-digit",
    minute:"2-digit",
    // second:"2-digit",
    weekday:"long",
    month:"short",
    year:"numeric",
}

    // let timestamp=Date.parse(num);

    let date=new Date(num).toLocaleDateString('fr-FR',option)
// on se passe la fontion (  avec return) en toSring car sinon considéré en objet et cela passe pas
    return date.toString();



}

export const isEmpty=(value)=>{
    return(

        value === undefined ||
        value === null ||
        (typeof value==="object" && Object.keys(value).length=== 0) ||
        (typeof value=== "string" && value.trim().length===0)
    )
}

export const timestampParser = (num) => {
    let options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    };
  
    let date = new Date(num).toLocaleDateString("fr-FR", options);
  
    return date.toString();
  }

