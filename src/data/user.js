
export async function getUser(user,pass) {
    try {
        var decision = false;
        const response = await fetch(`https://pantasya-backend.herokuapp.com/user/${user}`,{method: 'GET',mode: 'cors', cache: 'no-cache',referrerPolicy: 'no-referrer', redirect: 'follow',headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },});
        const result = await response.json();
        console.log("JSON respuesta" + result)
        //for (const usuario of result) {            
          if (user === result.userName && pass === result.passwordUser) {
              console.log("Desicion TRUE")

              decision = true;
          } 
      //}
      console.log(decision)   
      return decision;


      } catch (err) {
        console.log(err);
      }
  }
