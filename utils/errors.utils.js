
// module.exports.signUpErrors=(err)=>{
//     let errors={ pseudo:'',email:'',password:''}

//     if(err.message.includes('pseudo'))
//      errors.pseudo='Pseudo incorecte ou déja pris';

//     if(err.message.includes('email'))
//      errors.email='email incorecte ';
     
//     if(err.message.includes('password'))
//      errors.password='Mot de passe  incorecte 6 caractères minimum';
     

//      if(err.code==1100 && Object.keys(err.KeyValue)[0].includes('pseudo'))
//       errors.email='ce pseudo est déjà enregistré';

//      if(err.code==1100 && Object.keys(err.KeyValue)[0].includes('email'))
//       errors.email='cet email est déjà enregistré';
 
//      if(err.code==1100 && Object.keys(err.KeyValue)[0].includes('password'))
//       errors.email='ce password est déjà enregistré';

//     return errors
// }

// module.exports.signInErrors=(err)=>{
//     let errors = { email:'',password:''}

//     if( err.message.includes("email")) errors.email="email inconnu";
//     if( err.message.includes("password")) errors.password="mot de passe inconnu";



//     return errors
// }

// module.exports.uploadErrors=(err)=>{
//     let errors={ format:'', maxSize:'' };

//     if (err.message.includes("invalid file")) errors.format="Format incompatible";
//     if (err.message.includes("max size")) errors.maxSize="Le fichier dépasse 500ko";

//     return errors
// }

module.exports.signUpErrors = (err) => {
    let errors = { pseudo: "", email: "", password: "" };
  
    if (err.message.includes("pseudo"))
      errors.pseudo = "Pseudo incorrect ou déjà pris";
  
    if (err.message.includes("email")) errors.email = "Email incorrect";
  
    if (err.message.includes("password"))
      errors.password = "Le mot de passe doit faire 6 caractères minimum";
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
      errors.pseudo = "Ce pseudo est déjà pris";
  
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
      errors.email = "Cet email est déjà enregistré";
  
    return errors;
  };
  
  module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}
  
    if (err.message.includes("email")) 
      errors.email = "Email inconnu";
    
    if (err.message.includes('password'))
      errors.password = "Le mot de passe ne correspond pas"
  
    return errors;
  }
  
  module.exports.uploadErrors = (err) => {
    let errors = { format: '', maxSize: ""};
  
    if (err.message ==='invalid file')
      errors.format = "Format incompatabile";
  
    if (err.message ==='max size')
      errors.maxSize = "Le fichier dépasse 500ko";
  
    return errors
  }