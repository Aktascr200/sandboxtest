import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="header-title">Dashboard</h1>
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search"
            className="search-input"
          />
          <span style={{ 
            position: 'absolute', 
            right: '12px', 
            top: '50%', 
            transform: 'translateY(-50%)', 
            color: '#9ca3af',
            fontSize: '12px'
          }}>⌘ K</span>
        </div>
      </div>
      
      <div className="header-right">
        <div style={{ 
          width: '24px', 
          height: '24px', 
          color: '#6b7280',
          cursor: 'pointer'
        }}>❌</div>
        <div style={{ 
          width: '24px', 
          height: '24px', 
          color: '#6b7280',
          cursor: 'pointer'
        }}>🔧</div>
        <select className="entities-dropdown">
          <option>All entities</option>
          <option>Entity 1</option>
          <option>Entity 2</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
