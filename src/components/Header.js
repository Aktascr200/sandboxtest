import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px', alignSelf: 'stretch' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', alignSelf: 'stretch' }}>
          <div className="header-title">Dashboard</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '16px' }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start'
            }}>
              <div style={{
                display: 'flex',
                height: '44px',
                padding: '0 16px',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '8px',
                border: '1px solid var(--Grayscale-Light-grayscale-200)',
                background: 'var(--Grayscale-Light-white)'
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 15.8333H19.1667V17.5H0.833344V15.8333H2.50001V3.33333C2.50001 2.8731 2.87311 2.5 3.33334 2.5H11.6667C12.1269 2.5 12.5 2.8731 12.5 3.33333V15.8333H15.8333V9.16667H14.1667V7.5H16.6667C17.1269 7.5 17.5 7.8731 17.5 8.33333V15.8333ZM4.16668 4.16667V15.8333H10.8333V4.16667H4.16668ZM5.83334 9.16667H9.16668V10.8333H5.83334V9.16667ZM5.83334 5.83333H9.16668V7.5H5.83334V5.83333Z" fill="#13161A"/>
                </svg>
                <span style={{
                  color: 'var(--Grayscale-Light-grayscale-900)',
                  fontFamily: 'var(--Typeface-Family-Heading)',
                  fontSize: 'var(--Typeface-Size-L)',
                  fontWeight: 'var(--Typeface-Weight-Bold)',
                  lineHeight: 'normal'
                }}>All entities</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99974 10.9762L14.1246 6.8514L15.3031 8.02991L9.99974 13.3332L4.69644 8.02991L5.87496 6.8514L9.99974 10.9762Z" fill="#13161A"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
