import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import {AuthProvider} from "./OAuth/auth/AuthContext.tsx"
import { theme } from "./OAuth/theme.ts"

const VITE_GOOGLE_CLIENT_ID="49130405723-qf8rhnetlou9nm6od8737hm2rh177trm.apps.googleusercontent.com"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={VITE_GOOGLE_CLIENT_ID}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <AuthProvider>
        <App /> 
      </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
   </GoogleOAuthProvider>
  </StrictMode>,
)
