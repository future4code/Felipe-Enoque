export const goBack = (history) => {
    history.goBack();
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };

  export const goToLogin = (history) => {
    history.push("/login");
  };
  
  export const goToViagens = (history) => {
    history.push("/trips/create");
  };
  
  export const goToCandi = (history) => {
    history.push("/trips/details");
  };

  

  export const goToListaVi = (history) => {
    history.push("/application-form");
  };
  