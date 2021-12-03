import {Header,Footer,AboutMe,Skills,Project, Activity} from './component';
import theme from './component/common/theme';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
      <div>
        <ThemeProvider theme={theme}>
          <Header/>
          <AboutMe/>
          <Skills/>
          <Project />
          <Activity/>
          <Footer/> 
        </ThemeProvider>
      </div>
  );
}

export default App;
