import './App.css';
import Menu from './components/menu/Menu';
import Sidebar from './components/sidebar/Sidebar';
import Projects from './components/content/projects/Projects';
import Dashboard from './components/content/dashboard/Dashboard';
import People from './components/content/people/People';
import Issues from './components/content/issues/Issues';
import { Routes, Route } from 'react-router-dom';
import Account from './components/account/Account';
import Settings from './components/settings/Settings';

function App() {
  return (
    <div className="App">
      <Menu />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<Issues />} />
        <Route path="/people" element={<People />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
