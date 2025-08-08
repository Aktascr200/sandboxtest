import React from 'react';

const DashboardContent = () => {
  const frameworks = [
    { name: 'ISO 31000', status: '0% Ready', color: '#050026', abbr: 'ISO' },
    { name: 'GDPR', status: '0% Ready', color: '#050026', abbr: 'GDPR' },
    { name: 'HIPAA', status: '0% Ready', color: '#050026', abbr: 'HIPAA' },
    { name: 'ISO 27001', status: '0% Ready', color: '#050026', abbr: 'ISO' },
    { name: 'SOC2', status: '0% Ready', color: '#050026', abbr: 'SOC2' },
    { name: 'PCI DSS', status: '0% Ready', color: '#050026', abbr: 'PCI DSS' }
  ];

  return (
    <div className="content-area">
      {/* Notification Banner */}
      <div className="notification-banner">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '8px' }}>
          <div className="notification-text">
            Need help with any GRC workflow? Ask <strong>Scrut Teammates.</strong>
          </div>
        </div>
        <div style={{ 
          width: '40px', 
          height: '40px', 
          transform: 'rotate(30deg)', 
          position: 'relative',
          left: '-5px',
          top: '-8px'
        }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M30.8258 27.8748C24.4303 20.4842 24.0145 9.95138 29.1533 2.17849C29.3266 1.91751 29.6645 1.82899 29.9423 1.97322C32.1357 3.10744 34.1542 4.66928 35.8682 6.65055C37.2201 8.21323 38.2887 9.92607 39.0753 11.7254C39.1578 11.9137 39.1335 12.1307 39.0198 12.3015C35.2444 17.9456 34.4139 25.0675 36.6962 31.3866C36.7644 31.5774 36.7346 31.7891 36.6116 31.9501L36.6053 31.9572C36.4153 32.2063 36.0685 32.2672 35.802 32.1037C33.9814 30.9881 32.2998 29.5778 30.827 27.8765L30.8258 27.8748Z" fill="#695ACC"/>
          </svg>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="dashboard-grid">
        {/* Current Compliance */}
        <div className="compliance-card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', alignSelf: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1 0 0' }}>
              <div className="card-title">Current Compliance</div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11 15H13V17H11V15ZM13 13.3551V14H11V12.5C11 11.9477 11.4477 11.5 12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.2723 8.5 10.6656 9.01823 10.5288 9.70577L8.56731 9.31346C8.88637 7.70919 10.302 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10C15.5 11.5855 14.4457 12.9248 13 13.3551Z" fill="#818D99"/>
              </svg>
            </div>
            <a href="#" className="view-link">View Compliance Trend</a>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '4.77px' }}>
            <div style={{ width: '316px', height: '316px', position: 'relative' }}>
              <svg width="316" height="316" viewBox="0 0 316 316" fill="none">
                <path d="M316 158C316 245.261 245.261 316 158 316C70.739 316 0 245.261 0 158C0 70.739 70.739 0 158 0C245.261 0 316 70.739 316 158ZM55.3 158C55.3 214.72 101.28 260.7 158 260.7C214.72 260.7 260.7 214.72 260.7 158C260.7 101.28 214.72 55.3 158 55.3C101.28 55.3 55.3 101.28 55.3 158Z" fill="#F5F7FA"/>
              </svg>
              <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: '120px',
                top: '127px',
                width: '76px',
                height: '63px'
              }}>
                <div className="compliance-percentage">0%</div>
                <div className="compliance-label">Compliant</div>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', alignSelf: 'stretch' }}>
            {/* Policy */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px', flex: '1 0 0' }}>
              <div style={{ width: '96px', height: '96px', position: 'relative' }}>
                <svg width="96" height="96" viewBox="0 0 97 96" fill="none">
                  <path d="M96.6666 48C96.6666 74.5097 75.1763 96 48.6666 96C22.157 96 0.666626 74.5097 0.666626 48C0.666626 21.4903 22.157 0 48.6666 0C75.1763 0 96.6666 21.4903 96.6666 48ZM17.4666 48C17.4666 65.2313 31.4353 79.2 48.6666 79.2C65.8979 79.2 79.8666 65.2313 79.8666 48C79.8666 30.7687 65.8979 16.8 48.6666 16.8C31.4353 16.8 17.4666 30.7687 17.4666 48Z" fill="#F5F7FA"/>
                </svg>
                <svg style={{ position: 'absolute', left: '32px', top: '32px' }} width="32" height="32" viewBox="0 0 33 33" fill="none">
                  <path d="M25.9999 29.8334H7.33325C5.12412 29.8334 3.33325 28.0426 3.33325 25.8334V4.50002C3.33325 3.76365 3.93021 3.16669 4.66659 3.16669H23.3333C24.0697 3.16669 24.6666 3.76365 24.6666 4.50002V20.5H29.9999V25.8334C29.9999 28.0426 28.2091 29.8334 25.9999 29.8334ZM24.6666 23.1667V25.8334C24.6666 26.5698 25.2635 27.1667 25.9999 27.1667C26.7363 27.1667 27.3333 26.5698 27.3333 25.8334V23.1667H24.6666ZM21.9999 27.1667V5.83335H5.99992V25.8334C5.99992 26.5698 6.59688 27.1667 7.33325 27.1667H21.9999ZM8.66659 9.83335H19.3333V12.5H8.66659V9.83335ZM8.66659 15.1667H19.3333V17.8334H8.66659V15.1667ZM8.66659 20.5H15.3333V23.1667H8.66659V20.5Z" fill="#818D99"/>
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
                <div style={{
                  color: 'var(--Grayscale-Light-grayscale-900)',
                  textAlign: 'center',
                  fontFamily: 'var(--Typeface-Family-Heading)',
                  fontSize: 'var(--Typeface-Size-2XL)',
                  fontWeight: 'var(--Typeface-Weight-Bold)',
                  lineHeight: 'normal'
                }}>0%</div>
                <div className="compliance-label">Policy</div>
              </div>
            </div>
            
            {/* Evidence Tasks */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px', flex: '1 0 0' }}>
              <div style={{ width: '96px', height: '96px', position: 'relative' }}>
                <svg width="96" height="96" viewBox="0 0 96 96" fill="none">
                  <path d="M96 48C96 74.5097 74.5097 96 48 96C21.4903 96 0 74.5097 0 48C0 21.4903 21.4903 0 48 0C74.5097 0 96 21.4903 96 48ZM16.8 48C16.8 65.2313 30.7687 79.2 48 79.2C65.2313 79.2 79.2 65.2313 79.2 48C79.2 30.7687 65.2313 16.8 48 16.8C30.7687 16.8 16.8 30.7687 16.8 48Z" fill="#F5F7FA"/>
                </svg>
                <svg style={{ position: 'absolute', left: '32px', top: '32px' }} width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M20 5.33329H6.66667V26.6666H25.3333V10.6666H20V5.33329ZM4 3.98903C4 3.25869 4.59665 2.66663 5.33133 2.66663H21.3333L27.9996 9.33329L28 27.99C28 28.7318 27.4068 29.3333 26.6755 29.3333H5.32453C4.59301 29.3333 4 28.7262 4 28.0109V3.98903ZM18.0387 19.2618C15.9935 20.4698 13.3151 20.1952 11.5579 18.4378C9.47507 16.355 9.47507 12.9782 11.5579 10.8954C13.6407 8.8126 17.0175 8.8126 19.1003 10.8954C20.8576 12.6526 21.1323 15.331 19.9243 17.3762L22.8716 20.3234L20.986 22.2092L18.0387 19.2618ZM17.2147 16.5522C18.2561 15.5109 18.2561 13.8224 17.2147 12.781C16.1733 11.7396 14.4849 11.7396 13.4435 12.781C12.4021 13.8224 12.4021 15.5109 13.4435 16.5522C14.4849 17.5937 16.1733 17.5937 17.2147 16.5522Z" fill="#818D99"/>
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
                <div style={{
                  color: 'var(--Grayscale-Light-grayscale-900)',
                  textAlign: 'center',
                  fontFamily: 'var(--Typeface-Family-Heading)',
                  fontSize: 'var(--Typeface-Size-2XL)',
                  fontWeight: 'var(--Typeface-Weight-Bold)',
                  lineHeight: 'normal'
                }}>0%</div>
                <div className="compliance-label">Evidence Tasks</div>
              </div>
            </div>
            
            {/* Tests */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px', flex: '1 0 0' }}>
              <div style={{ width: '96px', height: '96px', position: 'relative' }}>
                <svg width="97" height="96" viewBox="0 0 97 96" fill="none">
                  <path d="M96.3334 48C96.3334 74.5097 74.843 96 48.3334 96C21.8237 96 0.333374 74.5097 0.333374 48C0.333374 21.4903 21.8237 0 48.3334 0C74.843 0 96.3334 21.4903 96.3334 48ZM17.1334 48C17.1334 65.2313 31.1021 79.2 48.3334 79.2C65.5647 79.2 79.5334 65.2313 79.5334 48C79.5334 30.7687 65.5647 16.8 48.3334 16.8C31.1021 16.8 17.1334 30.7687 17.1334 48Z" fill="#F5F7FA"/>
                </svg>
                <svg style={{ position: 'absolute', left: '32px', top: '32px' }} width="32" height="32" viewBox="0 0 33 32" fill="none">
                  <path d="M11.0001 8.00004V12H7.00006V8.00004H11.0001ZM4.3334 5.33337V14.6667H13.6668V5.33337H4.3334ZM17.6668 5.33337H28.3334V8.00004H17.6668V5.33337ZM17.6668 14.6667H28.3334V17.3334H17.6668V14.6667ZM17.6668 24H28.3334V26.6667H17.6668V24ZM14.6096 21.6095L12.7239 19.7239L8.3334 24.1144L5.94286 21.7239L4.05725 23.6095L8.3334 27.8856L14.6096 21.6095Z" fill="#818D99"/>
                </svg>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', alignSelf: 'stretch' }}>
                <div style={{
                  color: 'var(--Grayscale-Light-grayscale-900)',
                  textAlign: 'center',
                  fontFamily: 'var(--Typeface-Family-Heading)',
                  fontSize: 'var(--Typeface-Size-2XL)',
                  fontWeight: 'var(--Typeface-Weight-Bold)',
                  lineHeight: 'normal'
                }}>0%</div>
                <div className="compliance-label">Tests</div>
              </div>
            </div>
          </div>
        </div>

        {/* Jobs that need attention */}
        <div className="jobs-card">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', alignSelf: 'stretch' }}>
            <div className="card-title">Jobs that need your attention</div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', alignSelf: 'stretch' }}>
            <div style={{
              display: 'flex',
              padding: '8px 16px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '16px',
              background: 'var(--Grayscale-Light-grayscale-100)'
            }}>
              <span style={{
                color: 'var(--Grayscale-Light-grayscale-900)',
                fontFamily: 'var(--Typeface-Family-Heading)',
                fontSize: 'var(--Typeface-Size-L)',
                fontWeight: 'var(--Typeface-Weight-Bold)',
                lineHeight: 'normal'
              }}>Policies</span>
              <div style={{
                display: 'flex',
                width: '24px',
                height: '24px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
                borderRadius: '100px',
                background: 'var(--Grayscale-Light-grayscale-900)'
              }}>
                <span style={{
                  color: 'var(--Grayscale-Light-white)',
                  textAlign: 'center',
                  fontFamily: 'var(--Typeface-Family-Heading)',
                  fontSize: 'var(--Typeface-Size-S)',
                  fontWeight: 'var(--Typeface-Weight-Bold)',
                  lineHeight: 'normal'
                }}>0</span>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              padding: '8px 16px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '16px'
            }}>
              <span style={{
                color: 'var(--Grayscale-Light-grayscale-400)',
                fontFamily: 'var(--Typeface-Family-Heading)',
                fontSize: 'var(--Typeface-Size-L)',
                fontWeight: 'var(--Typeface-Weight-Bold)',
                lineHeight: 'normal'
              }}>Evidences</span>
              <div style={{
                display: 'flex',
                width: '24px',
                height: '24px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
                borderRadius: '100px',
                background: 'var(--Grayscale-Light-grayscale-600)'
              }}>
                <span style={{
                  color: 'var(--Grayscale-Light-white)',
                  textAlign: 'center',
                  fontFamily: 'var(--Typeface-Family-Heading)',
                  fontSize: 'var(--Typeface-Size-S)',
                  fontWeight: 'var(--Typeface-Weight-Bold)',
                  lineHeight: 'normal'
                }}>0</span>
              </div>
            </div>
            
            <div style={{
              display: 'flex',
              padding: '8px 16px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '8px',
              borderRadius: '16px'
            }}>
              <span style={{
                color: 'var(--Grayscale-Light-grayscale-400)',
                fontFamily: 'var(--Typeface-Family-Heading)',
                fontSize: 'var(--Typeface-Size-L)',
                fontWeight: 'var(--Typeface-Weight-Bold)',
                lineHeight: 'normal'
              }}>Tests</span>
              <div style={{
                display: 'flex',
                width: '24px',
                height: '24px',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4px',
                borderRadius: '100px',
                background: 'var(--Grayscale-Light-grayscale-600)'
              }}>
                <span style={{
                  color: 'var(--Grayscale-Light-white)',
                  textAlign: 'center',
                  fontFamily: 'var(--Typeface-Family-Heading)',
                  fontSize: 'var(--Typeface-Size-S)',
                  fontWeight: 'var(--Typeface-Weight-Bold)',
                  lineHeight: 'normal'
                }}>0</span>
              </div>
            </div>
          </div>
          
          <div style={{ display: 'flex', padding: '24px 0', flexDirection: 'column', alignItems: 'center', gap: '16px', alignSelf: 'stretch' }}>
            <div className="empty-state">
              <div className="empty-icon">
                <svg width="250" height="200" viewBox="0 0 250 200" fill="none">
                  <g clipPath="url(#clip0_1_6460)">
                    <rect width="250" height="200" fill="white"/>
                    <rect y="0.449219" width="250" height="200" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M207 65.4492C210.866 65.4492 214 68.5832 214 72.4492C214 76.3152 210.866 79.4492 207 79.4492H167C170.866 79.4492 174 82.5832 174 86.4492C174 90.3152 170.866 93.4492 167 93.4492H189C192.866 93.4492 196 96.5832 196 100.449C196 104.315 192.866 107.449 189 107.449H178.826C173.952 107.449 170 110.583 170 114.449C170 117.027 172 119.36 176 121.449C179.866 121.449 183 124.583 183 128.449C183 132.315 179.866 135.449 176 135.449H93C89.134 135.449 86 132.315 86 128.449C86 124.583 89.134 121.449 93 121.449H54C50.134 121.449 47 118.315 47 114.449C47 110.583 50.134 107.449 54 107.449H94C97.866 107.449 101 104.315 101 100.449C101 96.5832 97.866 93.4492 94 93.4492H69C65.134 93.4492 62 90.3152 62 86.4492C62 82.5832 65.134 79.4492 69 79.4492H109C105.134 79.4492 102 76.3152 102 72.4492C102 68.5832 105.134 65.4492 109 65.4492H207ZM207 93.4492C210.866 93.4492 214 96.5832 214 100.449C214 104.315 210.866 107.449 207 107.449C203.134 107.449 200 104.315 200 100.449C200 96.5832 203.134 93.4492 207 93.4492Z" fill="#F5F7FA"/>
                    <path d="M124.797 89.3525C124.928 89.3163 125.067 89.3163 125.198 89.3525L162.196 99.5928C162.52 99.6828 162.745 99.9783 162.745 100.315V142.646C162.745 142.975 162.53 143.266 162.214 143.362L125.216 154.627C125.074 154.67 124.921 154.67 124.779 154.627L87.7806 143.362C87.4651 143.266 87.2494 142.975 87.2493 142.646V100.315C87.2493 99.9783 87.4743 99.6828 87.7991 99.5928L124.797 89.3525Z" fill="white" stroke="#606A73" strokeWidth="2.5" strokeLinejoin="round"/>
                  </g>
                </svg>
              </div>
              <div className="empty-text">All good here.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="frameworks-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', alignSelf: 'stretch' }}>
          <div className="card-title">Frameworks</div>
          <a href="#" className="view-link">View All</a>
        </div>
        
        <div className="frameworks-grid">
          {frameworks.map((framework, index) => (
            <div key={index} className="framework-item">
              <div 
                className="framework-badge" 
                style={{ backgroundColor: framework.color }}
              >
                {framework.abbr}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', flex: '1 0 0' }}>
                <div className="framework-name">{framework.name}</div>
                <svg width="139" height="8" viewBox="0 0 139 9" fill="none">
                  <rect y="0.5" width="139" height="8" rx="4" fill="#DDE4EB"/>
                </svg>
                <div className="framework-status">{framework.status}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Audits */}
      <div className="audits-section">
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', alignSelf: 'stretch' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1 0 0' }}>
            <div className="card-title">Upcoming Audits</div>
          </div>
        </div>
        
        <div style={{ display: 'flex', width: '216px', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
          <div className="empty-state">
            <div className="empty-icon">
              <svg width="250" height="200" viewBox="0 0 250 200" fill="none">
                <g clipPath="url(#clip0_1_6645)">
                  <rect width="250" height="200" fill="white"/>
                  <rect y="0.449219" width="250" height="200" fill="white"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M207 65.4492C210.866 65.4492 214 68.5832 214 72.4492C214 76.3152 210.866 79.4492 207 79.4492H167C170.866 79.4492 174 82.5832 174 86.4492C174 90.3152 170.866 93.4492 167 93.4492H189C192.866 93.4492 196 96.5832 196 100.449C196 104.315 192.866 107.449 189 107.449H178.826C173.952 107.449 170 110.583 170 114.449C170 117.027 172 119.36 176 121.449C179.866 121.449 183 124.583 183 128.449C183 132.315 179.866 135.449 176 135.449H93C89.134 135.449 86 132.315 86 128.449C86 124.583 89.134 121.449 93 121.449H54C50.134 121.449 47 118.315 47 114.449C47 110.583 50.134 107.449 54 107.449H94C97.866 107.449 101 104.315 101 100.449C101 96.5832 97.866 93.4492 94 93.4492H69C65.134 93.4492 62 90.3152 62 86.4492C62 82.5832 65.134 79.4492 69 79.4492H109C105.134 79.4492 102 76.3152 102 72.4492C102 68.5832 105.134 65.4492 109 65.4492H207ZM207 93.4492C210.866 93.4492 214 96.5832 214 100.449C214 104.315 210.866 107.449 207 107.449C203.134 107.449 200 104.315 200 100.449C200 96.5832 203.134 93.4492 207 93.4492Z" fill="#F5F7FA"/>
                  <path d="M124.797 89.3525C124.928 89.3163 125.067 89.3163 125.198 89.3525L162.196 99.5928C162.52 99.6828 162.745 99.9783 162.745 100.315V142.646C162.745 142.975 162.53 143.266 162.214 143.362L125.216 154.627C125.074 154.67 124.921 154.67 124.779 154.627L87.7806 143.362C87.4651 143.266 87.2494 142.975 87.2493 142.646V100.315C87.2493 99.9783 87.4743 99.6828 87.7991 99.5928L124.797 89.3525Z" fill="white" stroke="#606A73" strokeWidth="2.5" strokeLinejoin="round"/>
                </g>
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '16px' }}>
              <div className="empty-text">
                No upcoming audits. please make sure<br />
                there are audit dates assigned to frameworks<br />
                so that the calendar gets populated
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
