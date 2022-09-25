import AllPageSection from "./components/AllPageSection";
import { SignContextProvider } from "./SignContext";
import { TitleContextProvider } from "./TitleContext";

function App() {
  return (
    <>
      <SignContextProvider>
        <TitleContextProvider>
          <AllPageSection />
        </TitleContextProvider>
      </SignContextProvider>
    </>
  );
}

export default App;
