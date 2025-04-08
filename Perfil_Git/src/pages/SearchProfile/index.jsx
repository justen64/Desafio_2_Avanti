import React, { useState } from "react";
import image from "../../assets/logo_git.png";
import Buscar from "../../components/Buscar/Buscar";
import CardUser from "../../components/cardUser/CardUser";

export default function () {
  const [profile, setProfile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className="container"
    style={
      {
        display: "flex",
        backgroundImage: `url('../../assets/image.png')`,
        height: "100vh",
        width: "100vw",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        justifyContent: "center",
        alignItems: "center"
    }}
    >

    <div
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#000000",
        height: "80%",
        width: "80%",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "5rem",
          gap: "1rem",
          alignItems: "center",
          width: "24rem",
        }}
      >
        <img src={image} alt="Logo Git" style={{ height: "60px" }} />
        <p style={{ color: "white", fontSize: "3.25rem" }}>Perfil <strong>Github</strong></p>
      </div>
      <Buscar
        setProfile={setProfile}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
      />
      {profile || isLoading || isError ? (
        <CardUser isLoading={isLoading} isError={isError} data={profile} />
      ) : (
        <></>
      )}
    </div>
      </div>
    /* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */
  );
}
