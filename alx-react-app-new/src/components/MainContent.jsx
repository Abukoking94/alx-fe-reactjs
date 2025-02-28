import Counter from "./Counter";

const MainContent = () => {
  return (
    <main>
      <p
        style={{
          height: "300px",
          backgroundColor: "gray",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        I love to visit New York, Paris, and Tokyo.
      </p>

      <Counter />
    </main>
  );
};

export default MainContent;
