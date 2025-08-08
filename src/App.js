import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardContent from './components/DashboardContent';
import SandboxBanner from './components/SandboxBanner';
import './Dashboard.css';

function App() {
  const [isSandboxMode, setIsSandboxMode] = useState(false);

  const handleSandboxToggle = () => {
    setIsSandboxMode(!isSandboxMode);
  };

  const handleCloseSandbox = () => {
    setIsSandboxMode(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar
        onSandboxToggle={handleSandboxToggle}
        isSandboxMode={isSandboxMode}
      />
      <div className="main-content">
        {isSandboxMode && (
          <SandboxBanner onClose={handleCloseSandbox} />
        )}
        <Header />
        <DashboardContent />
      </div>
    </div>
  );
}

export default App;
