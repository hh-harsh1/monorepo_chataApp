export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 3,
      }}
    >
      <div
        style={{
          height: "350px",
          width: "280px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          padding: 4,
          gap: 5,
        }}
      >
        <input
          type="text"
          style={{
            height: "20px",
          }}
        />
        <button
          style={{
            height: "25px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
