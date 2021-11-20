import { ListRequeriment, RequerimentSystemStyled } from "./Requeriment.style";

export const RequerimentList = ({requeriments})=>{
    const auxState = {
        os: 'Não informado',
        processor:'Não informado',
        memory: 'Não informado',
        graphics: 'Não informado',
        storage: 'Não informado'
    } 
   if (!requeriments) {
    requeriments = {...auxState }
       console.log('jo existe');
       
   }
    return(
        <RequerimentSystemStyled>
        <h3>Requisitos do sistema</h3>
        <ListRequeriment>
          <li>
            <b> Sistema Operacional: </b>
            {requeriments.os !== undefined
              ? requeriments.os
              : "windows2"}
          </li>
          <li>
            <b>Processador: </b>
            {requeriments.processor}
            <br />
          </li>
          <li>
            <b>Memória: </b>{" "}
            {requeriments.memory}
          </li>
          <li>
            <b>Gráficos: </b>{" "}
            {requeriments.graphics}
          </li>
          <li>
            <b>Espaço em disco: </b>{" "}
            {requeriments.storage}
          </li>
        </ListRequeriment>
      </RequerimentSystemStyled>
    )
}