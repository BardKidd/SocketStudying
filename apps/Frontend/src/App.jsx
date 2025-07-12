import { useState } from 'react';
import { AbilityContext } from './contexts';
import defineAbilityFor from './utility/defineAbilityFor';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import UserPermissions from './mock/permission';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [userPermissions] = useState(UserPermissions);
  return (
    <BrowserRouter>
      <AbilityContext.Provider value={defineAbilityFor(userPermissions)}>
        <AppRoutes />
        <Toaster />
      </AbilityContext.Provider>
    </BrowserRouter>
  );
}

export default App;
