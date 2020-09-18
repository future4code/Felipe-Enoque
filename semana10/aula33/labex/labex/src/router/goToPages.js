export const goBack = (history) => {
    history.goBack();
  };
  
  export const goToAboutPage = (history, linguagem) => {
    const minhaLinguagem = linguagem ? linguagem : "ingles";
    history.push(`/sobre/${minhaLinguagem}`);
  };
  
  export const goToContactPage = (history, id) => {
    history.push(`/atividade/${id}`);
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };
  