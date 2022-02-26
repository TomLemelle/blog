import CustomRouter from "./components/Routes/CustomRouter";
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import Auth from './contexts/Auth';
import { useState } from "react";
import { hasAuthenticated } from "./utils/AuthApi";


function App() {

  const queryClient = new QueryClient()

  const [isAuthenticated, setIsAuthenticated] = useState<any>(hasAuthenticated());

  return (
    <QueryClientProvider client={queryClient}>
      <CookiesProvider>
        <Auth.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <CustomRouter />
        </Auth.Provider>
      </CookiesProvider>
    </QueryClientProvider>
  );
}

export default App;
