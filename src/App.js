import "./App.css";
import All from "./components/All";
import PersistentDrawerLeft from "./components/Navbar/Navbar";
import { TopTittleProvider } from "./context";
import { OrderContextProvider } from "./orderContext";
import { SearchProvider } from "./searchContext";
import { SignContextProvider } from "./SignContext";

function App() {
  return (
    <TopTittleProvider>
      <OrderContextProvider>
        <SearchProvider>
          <SignContextProvider>
            <All />
          </SignContextProvider>
        </SearchProvider>
      </OrderContextProvider>
    </TopTittleProvider>
  );
}

export default App;
