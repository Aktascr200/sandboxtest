import React, { useState } from 'react';
import UserProfileOverlay from './UserProfileOverlay';

const Sidebar = () => {
  const [showProfileOverlay, setShowProfileOverlay] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: '📊', active: true },
    { name: 'Tests', icon: '🧪', active: false },
    { name: 'Compliance', icon: '✅', active: false },
    { name: 'Risk', icon: '⚠️', active: false, hasSubmenu: true },
    { name: 'Trust', icon: '🛡️', active: false, hasSubmenu: true },
    { name: 'Audit', icon: '📋', active: false, hasSubmenu: true },
    { name: 'People', icon: '👥', active: false, hasSubmenu: true },
    { name: 'Asset Management', icon: '📦', active: false },
    { name: 'Product Updates', icon: '🔄', active: false },
    { name: 'Settings', icon: '⚙️', active: false },
    { name: 'Integrations', icon: '🔗', active: false },
    { name: 'Training', icon: '🎓', active: false },
    { name: 'User Settings', icon: '👤', active: false },
    { name: 'Documentation', icon: '📖', active: false },
    { name: 'Logout', icon: '🚪', active: false }
  ];

  return (
    <div className="sidebar">
      <div className="logo-section">
        <div className="logo">S</div>
        <span className="logo-text">Scrut Automation</span>
      </div>
      
      <div className="nav-section">
        {navItems.map((item, index) => (
          <div 
            key={index}
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            <div className="nav-item-icon">{item.icon}</div>
            <span>{item.name}</span>
            {item.hasSubmenu && (
              <div style={{ marginLeft: 'auto', color: '#9ca3af' }}>›</div>
            )}
          </div>
        ))}
      </div>
      
      <div
        className="user-section"
        onClick={() => setShowProfileOverlay(!showProfileOverlay)}
      >
        <div className="user-avatar">JD</div>
        <div className="user-info">
          <div className="user-name">John Doe</div>
          <div className="user-email">john@company.com</div>
        </div>
        <div style={{ color: '#9ca3af' }}>⌄</div>
      </div>

      <UserProfileOverlay
        isOpen={showProfileOverlay}
        onClose={() => setShowProfileOverlay(false)}
      />
    </div>
  );
};

export default Sidebar;
