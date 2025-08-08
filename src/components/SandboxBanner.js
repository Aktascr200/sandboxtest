import React from 'react';

const SandboxBanner = ({ onClose }) => {
  return (
    <div style={{
      display: 'flex',
      width: '100%',
      padding: '16px 40px',
      alignItems: 'center',
      gap: '16px',
      background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative'
    }}>
      {/* Sandbox Icon */}
      <div style={{
        width: '24px',
        height: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M6.66667 6.33335C4.36548 6.33335 2.5 8.19884 2.5 10.5C2.5 12.8012 4.36548 14.6667 6.66667 14.6667H13.3333C15.6345 14.6667 17.5 12.8012 17.5 10.5C17.5 8.19884 15.6345 6.33335 13.3333 6.33335H6.66667ZM6.66667 4.66669H13.3333C16.555 4.66669 19.1667 7.27836 19.1667 10.5C19.1667 13.7217 16.555 16.3334 13.3333 16.3334H6.66667C3.44501 16.3334 0.833332 13.7217 0.833332 10.5C0.833332 7.27836 3.44501 4.66669 6.66667 4.66669ZM6.66667 13C5.28596 13 4.16667 11.8808 4.16667 10.5C4.16667 9.11927 5.28596 8.00002 6.66667 8.00002C8.04737 8.00002 9.16666 9.11927 9.16666 10.5C9.16666 11.8808 8.04737 13 6.66667 13Z" fill="white"/>
        </svg>
      </div>

      {/* Banner Content */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        flex: 1
      }}>
        <div style={{
          color: 'white',
          fontFamily: 'var(--Typeface-Family-Heading)',
          fontSize: 'var(--Typeface-Size-L)',
          fontWeight: 'var(--Typeface-Weight-Bold)',
          lineHeight: 'normal'
        }}>
          Sandbox Mode Active
        </div>
        <div style={{
          width: '4px',
          height: '4px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.6)'
        }}></div>
        <div style={{
          color: 'rgba(255, 255, 255, 0.9)',
          fontFamily: 'var(--Typeface-Family-Body)',
          fontSize: 'var(--Typeface-Size-M)',
          fontWeight: 'var(--Typeface-Weight-Regular)',
          lineHeight: 'normal'
        }}>
          You are now viewing non-actionable demonstration data
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: 'white',
          cursor: 'pointer',
          padding: '4px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default SandboxBanner;
