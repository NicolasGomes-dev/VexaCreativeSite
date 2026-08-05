"use client"

export default function Teste() {
  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() => alert("FUNCIONOU")}
        style={{
          width: 200,
          height: 80,
          background: "red",
          color: "white",
          fontSize: 22,
          cursor: "pointer",
        }}
      >
        CLIQUE AQUI
      </button>
    </div>
  )
}