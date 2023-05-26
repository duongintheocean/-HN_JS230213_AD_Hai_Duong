import Input from "./components/Input";
import NoteContainer from "./components/NoteContainer";
function App() {
  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "60px",
          backgroundColor: "yellow",
          color: "white",
          display: "flex",
          alignContent: "center",
          flexWrap: "wrap",
          fontSize: "25px",
        }}
      >
        Note App
      </div>
      <Input></Input>
      <NoteContainer></NoteContainer>
    </div>
  );
}

export default App;
