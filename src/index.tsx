import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {App} from "app/App";
import 'shared/config/i18n/i18n';

const root = document.getElementById('root');

createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
);