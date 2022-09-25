import AllPageSection from "./components/AllPageSection";
import { SettingsContextProvider } from "./Settings";
import { SignContextProvider } from "./SignContext";
import { TitleContextProvider } from "./TitleContext";

function App() {
  return (
    <>
      <SettingsContextProvider>
        <SignContextProvider>
          <TitleContextProvider>
            <AllPageSection />
          </TitleContextProvider>
        </SignContextProvider>
      </SettingsContextProvider>
    </>
  );
}

export default App;
