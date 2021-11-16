 const commentarys = JSON.parse(localStorage.getItem('Comentarys')) || []
 
// seta os comentario no local storage
export const setCommentaryLocalStorage = (idGame,commentary)=>{
    commentarys.push({idGame,...commentary})
    localStorage.setItem('Comentarys',JSON.stringify(commentarys))
}

// extrai os comentario do local storage
export const getCommentarys = (id) =>{
    const listCommentarys = commentarys.filter(comentary => id === comentary.idGame)
    return listCommentarys
}
export const setListLocalStorage = (list)=>{
    localStorage.setItem('Comentarys',JSON.stringify(list))

}
// atualiação
export const setCommentary = (valuesForm,idGame,setList) => {
    setCommentaryLocalStorage(idGame, {
      ...valuesForm,setList,
      idCommentary:  IdRandom(),
    });
    const listComentary = getCommentarys(idGame);
    setList(listComentary);
    
  };
  
export const IdRandom = ()=>{
    let id =  Math.floor(Math.random() * (1000-1)+1)
    return  id 
}