import { Search } from "lucide-react";
import React, { useState } from "react";
import { Api } from "../../service/api";
import styles from "./styles.module.css";

export default function Buscar({ setProfile, setIsError, setIsLoading }) {
  const [busca, setBusca] = useState();

  async function requestProfile(params) {
    await Api.get(`${busca}`)
      .then((res) => {
        setProfile(res.data);
        setBusca("");
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
      });
  }
/* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */
  return (
    <div className={styles.formulario}>
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Digite um usuario do github"
        className={styles.inputform}
      />
      <button
        type="submit"
        className={styles.buttonPesquisa}
        onClick={() => {
          requestProfile();
          setIsError(false);
          setIsLoading(true);
        }}
      >
        <Search size={20} color="white" />
      </button>
    </div>
  );
}
