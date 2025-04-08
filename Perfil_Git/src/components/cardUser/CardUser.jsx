import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardUser({ isLoading, isError, data }) {
  return (
    <div
      style={{
        borderRadius: "1.25em",
        width: "50.25rem",
        backgroundColor: "#D9D9D9",
      }}
    >
      {isError || isLoading || !data ? (
        isError ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "10rem",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p style={{ color: "red", fontSize: "1.25rem" }}>
              Nenhum perfil foi encontrado com esse nome de usuário.
            </p>
            <p style={{ color: "red", fontSize: "1.25rem" }}>
              Tente novamente.
            </p>
          </div>
        ) : (
          <div style={{ width: "100%", height: "10rem" }}>
            <SkeletonTheme baseColor="#005CFF" highlightColor="#005CFF">
              <div style={{ height: "100%", width: "100%" }}>
                <Skeleton
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "1.25em",
                  }}
                />
              </div>
            </SkeletonTheme>
          </div>
        )
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "16.0625rem",
            paddingLeft: "0.5rem",
          }}
        >
          <div
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            <img
              src={data?.avatar_url}
              alt="Logo Git"
              style={{
                height: "13.75rem",
                borderRadius: "50%",
                borderColor: "#005CFF",
                border: "2px solid #005CFF",
              }}
            />
          </div>
          <div
            style={{
              flex: 3,
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "column",
              width: "100%",
              height: "70%",
              gap: "1.5rem",
              paddingLeft: "1.5rem",
              marginTop: "2.5rem"
            }}
          >
            <div >
              <h3 style={{ color: "#005CFF" }}>{data?.name}</h3>
            </div>
            <div
            style={{
              overflowY: "auto"
            }}
            >
              {!data.bio ? <p>Sem bio</p> : <p>{data.bio}</p>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
  /* feito por Rodrigo justen gitHub: justen64/ comentario botado para evitar plagio por ser um desafio publico */
}
