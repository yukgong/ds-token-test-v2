import {
  LayoutDashboard,
  CreditCard,
  Users,
  Settings,
  LogOut,
  Check,
  X,
  AlertTriangle,
  AlertCircle,
  Download,
  FileText,
  TrendingUp,
  Calendar,
  RefreshCw,
} from 'lucide-react';
import { css } from '@ds-token-test/styled-system-property-first/css';
// run2 — full spec rewrite

const sidebarStyle = css({
  width: '240px',
  minHeight: '100vh',
  backgroundColor: 'surface.neutral.emphasis',
  display: 'flex',
  flexDirection: 'column',
  padding: '24px 0',
  flexShrink: 0,
});

const sidebarLogoStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '0 20px 24px',
  color: 'text.inverse',
  fontWeight: 700,
  fontSize: '18px',
});

const sidebarNavStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  padding: '0 12px',
  flex: 1,
});

const navItemBaseStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 12px',
  borderRadius: '8px',
  fontSize: '14px',
  cursor: 'pointer',
  color: 'text.inverse',
});

const navItemActiveStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 12px',
  borderRadius: '8px',
  fontSize: '14px',
  cursor: 'pointer',
  backgroundColor: 'surface.brand.default',
  color: 'text.inverse',
  fontWeight: 600,
});

const sidebarLogoutStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  padding: '10px 24px',
  marginTop: 'auto',
  fontSize: '14px',
  cursor: 'pointer',
  color: 'text.critical.default',
});

const mainContentStyle = css({
  flex: 1,
  backgroundColor: 'surface.neutral.subtle',
  padding: '32px',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '32px',
});

const sectionTitleStyle = css({
  fontSize: '20px',
  fontWeight: 700,
  color: 'text.neutral.default',
  marginBottom: '16px',
});

// Plan cards section
const planGridStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
});

// Free card
const freeCardStyle = css({
  backgroundColor: 'surface.neutral.default',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  borderRadius: '12px',
  overflow: 'hidden',
});

const cardBodyStyle = css({
  padding: '24px',
});

const planNameStyle = css({
  fontSize: '18px',
  fontWeight: 700,
  color: 'text.neutral.default',
  marginBottom: '8px',
});

const planPriceStyle = css({
  fontSize: '28px',
  fontWeight: 700,
  color: 'text.neutral.default',
  marginBottom: '20px',
});

const featureListStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginBottom: '24px',
});

const featureItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: 'text.neutral.default',
});

const featureItemExcludedStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: 'text.neutral.default',
  opacity: 0.38,
});

const disabledButtonBaseStyle = css({
  width: '100%',
  padding: '10px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 600,
  border: '1px solid',
  borderColor: 'border.neutral.default',
  backgroundColor: 'surface.neutral.default',
  color: 'text.neutral.default',
  cursor: 'not-allowed',
  opacity: 0.38,
  textAlign: 'center',
});

// Pro card
const proCardStyle = css({
  backgroundColor: 'surface.brand.subtle',
  border: '1px solid',
  borderColor: 'border.brand.emphasis',
  borderRadius: '12px',
  overflow: 'hidden',
});

const proBannerStyle = css({
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
  textAlign: 'center',
  padding: '8px',
  fontSize: '13px',
  fontWeight: 600,
});

const proPlanNameRowStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
});

const proPlanNameStyle = css({
  fontSize: '18px',
  fontWeight: 700,
  color: 'text.brand.default',
});

const proBadgeStyle = css({
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
  fontSize: '11px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
});

const proPriceStyle = css({
  fontSize: '28px',
  fontWeight: 700,
  color: 'text.brand.default',
  marginBottom: '20px',
});

const proFeatureItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '14px',
  color: 'text.neutral.default',
});

const proDisabledButtonStyle = css({
  width: '100%',
  padding: '10px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 600,
  border: 'none',
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
  cursor: 'not-allowed',
  opacity: 0.38,
  textAlign: 'center',
  marginBottom: '12px',
});

const proNextPaymentStyle = css({
  fontSize: '13px',
  color: 'text.neutral.muted',
  textAlign: 'center',
});

// Enterprise card
const enterpriseButtonStyle = css({
  width: '100%',
  padding: '10px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 600,
  border: 'none',
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
  cursor: 'pointer',
  textAlign: 'center',
});

// Payment method section
const whiteCardStyle = css({
  backgroundColor: 'surface.neutral.default',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  borderRadius: '12px',
  padding: '24px',
});

const paymentMethodRowStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  marginBottom: '16px',
});

const cardArtStyle = css({
  backgroundColor: 'surface.neutral.muted',
  borderRadius: '8px',
  width: '120px',
  height: '72px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '10px 12px',
  flexShrink: 0,
});

const cardNumberStyle = css({
  fontSize: '13px',
  fontWeight: 700,
  color: 'text.neutral.default',
});

const cardInfoStyle = css({
  flex: 1,
});

const cardNameStyle = css({
  fontSize: '16px',
  fontWeight: 700,
  color: 'text.neutral.default',
  marginBottom: '4px',
});

const cardExpRowStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const cardExpStyle = css({
  fontSize: '14px',
  color: 'text.neutral.muted',
});

const validBadgeStyle = css({
  backgroundColor: 'surface.positive.subtle',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
  fontSize: '12px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
});

const cardActionsStyle = css({
  display: 'flex',
  gap: '8px',
  marginLeft: 'auto',
});

const outlineButtonStyle = css({
  padding: '8px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 500,
  border: '1px solid',
  borderColor: 'border.neutral.default',
  backgroundColor: 'surface.neutral.default',
  color: 'text.neutral.default',
  cursor: 'pointer',
});

const ghostDangerButtonStyle = css({
  padding: '8px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 500,
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'text.critical.default',
  cursor: 'pointer',
});

const warningBannerStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  backgroundColor: 'surface.warning.subtle',
  border: '1px solid',
  borderColor: 'border.warning.default',
  borderRadius: '8px',
  padding: '12px 16px',
  fontSize: '14px',
  color: 'text.neutral.default',
});

const warningLinkStyle = css({
  color: 'text.warning.default',
  fontWeight: 600,
  textDecoration: 'underline',
  cursor: 'pointer',
  marginLeft: '4px',
});

// Table
const tableCardStyle = css({
  backgroundColor: 'surface.neutral.default',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  borderRadius: '12px',
  overflow: 'hidden',
});

const tableHeaderRowStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 24px 16px',
});

const csvButtonStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '8px 14px',
  borderRadius: '8px',
  fontSize: '13px',
  fontWeight: 500,
  border: '1px solid',
  borderColor: 'border.neutral.default',
  backgroundColor: 'surface.neutral.default',
  color: 'text.neutral.default',
  cursor: 'pointer',
});

const tableStyle = css({
  width: '100%',
  borderCollapse: 'collapse',
});

const tableHeadStyle = css({
  backgroundColor: 'surface.neutral.ghost',
});

const thStyle = css({
  padding: '10px 16px',
  textAlign: 'left',
  fontSize: '12px',
  fontWeight: 600,
  color: 'text.neutral.muted',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  opacity: 0.38,
});

const tdStyle = css({
  padding: '14px 16px',
  fontSize: '14px',
  color: 'text.neutral.default',
  borderTop: '1px solid',
  borderColor: 'border.neutral.subtle',
});

const tdEvenStyle = css({
  padding: '14px 16px',
  fontSize: '14px',
  color: 'text.neutral.default',
  borderTop: '1px solid',
  borderColor: 'border.neutral.subtle',
  backgroundColor: 'surface.neutral.ghost',
});

const tdFailStyle = css({
  padding: '14px 16px',
  fontSize: '14px',
  color: 'text.neutral.default',
  borderTop: '1px solid',
  borderColor: 'border.neutral.subtle',
  backgroundColor: 'surface.critical.ghost',
});

// Badges
const successBadgeStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'surface.positive.subtle',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
  fontSize: '12px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
  whiteSpace: 'nowrap',
});

const failBadgeStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'fill.critical',
  color: 'text.inverse',
  fontSize: '12px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
  whiteSpace: 'nowrap',
});

const warningBadgeStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'surface.warning.subtle',
  border: '1px solid',
  borderColor: 'border.warning.default',
  color: 'text.warning.default',
  fontSize: '12px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
  whiteSpace: 'nowrap',
});

const infoBadgeStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'surface.info.subtle',
  border: '1px solid',
  borderColor: 'border.info.default',
  color: 'text.info.default',
  fontSize: '12px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
  whiteSpace: 'nowrap',
});

const ghostIconButtonStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'text.neutral.muted',
  cursor: 'pointer',
});

const criticalOutlineButtonStyle = css({
  padding: '6px 12px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: 600,
  border: '1px solid',
  borderColor: 'border.critical.default',
  backgroundColor: 'surface.transparent',
  color: 'text.critical.default',
  cursor: 'pointer',
});

// Summary cards
const summaryGridStyle = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
});

const summaryCardBaseStyle = css({
  backgroundColor: 'surface.neutral.default',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  borderRadius: '12px',
  padding: '24px',
});

const summaryCardCriticalStyle = css({
  backgroundColor: 'surface.critical.subtle',
  border: '1px solid',
  borderColor: 'border.critical.default',
  borderRadius: '12px',
  padding: '24px',
});

const summaryAmountStyle = css({
  fontSize: '28px',
  fontWeight: 700,
  color: 'text.neutral.default',
  margin: '12px 0 8px',
});

const summaryAmountCriticalStyle = css({
  fontSize: '28px',
  fontWeight: 700,
  color: 'text.critical.default',
  margin: '12px 0 8px',
});

const summaryDetailStyle = css({
  fontSize: '13px',
  color: 'text.neutral.muted',
  marginTop: '8px',
});

const successBadgeSmallStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'surface.positive.subtle',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
  fontSize: '12px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
});

const infoBadgeSmallStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'surface.info.subtle',
  border: '1px solid',
  borderColor: 'border.info.default',
  color: 'text.info.default',
  fontSize: '12px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
});

const criticalSolidButtonStyle = css({
  width: '100%',
  marginTop: '16px',
  padding: '10px 16px',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 600,
  border: 'none',
  backgroundColor: 'fill.critical',
  color: 'text.inverse',
  cursor: 'pointer',
  textAlign: 'center',
});

const criticalBadgeStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'fill.critical',
  color: 'text.inverse',
  fontSize: '12px',
  fontWeight: 600,
  padding: '2px 8px',
  borderRadius: '20px',
});

export default function BillingPage() {
  return (
    <div
      className={css({
        display: 'flex',
        minHeight: '100vh',
      })}
    >
      {/* Sidebar */}
      <aside className={sidebarStyle}>
        <div className={sidebarLogoStyle}>
          <LayoutDashboard size={22} />
          <span>Mildang</span>
        </div>

        <nav className={sidebarNavStyle}>
          <div className={navItemActiveStyle}>
            <CreditCard size={18} />
            <span>결제 내역</span>
          </div>
          <div className={navItemBaseStyle}>
            <LayoutDashboard size={18} />
            <span>대시보드</span>
          </div>
          <div className={navItemBaseStyle}>
            <Users size={18} />
            <span>사용자 관리</span>
          </div>
          <div className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'not-allowed',
            color: 'text.inverse',
            opacity: 0.38,
          })}>
            <Settings size={18} />
            <span>설정</span>
          </div>
        </nav>

        <div className={sidebarLogoutStyle}>
          <LogOut size={18} />
          <span>로그아웃</span>
        </div>
      </aside>

      {/* Main content */}
      <main className={mainContentStyle}>

        {/* Section 1: Plan selection */}
        <section>
          <h2 className={sectionTitleStyle}>플랜 선택</h2>
          <div className={planGridStyle}>

            {/* Free card */}
            <div className={freeCardStyle}>
              <div className={cardBodyStyle}>
                <p className={planNameStyle}>Free</p>
                <p className={planPriceStyle}>₩0/월</p>
                <ul className={featureListStyle}>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>기본 대시보드</span>
                  </li>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>사용자 3명</span>
                  </li>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>10GB 스토리지</span>
                  </li>
                  <li className={featureItemExcludedStyle}>
                    <X size={16} />
                    <span>고급 분석</span>
                  </li>
                  <li className={featureItemExcludedStyle}>
                    <X size={16} />
                    <span>우선 지원</span>
                  </li>
                </ul>
                <div className={disabledButtonBaseStyle}>현재 플랜</div>
              </div>
            </div>

            {/* Pro card */}
            <div className={proCardStyle}>
              <div className={proBannerStyle}>추천</div>
              <div className={cardBodyStyle}>
                <div className={proPlanNameRowStyle}>
                  <p className={proPlanNameStyle}>Pro</p>
                  <span className={proBadgeStyle}>현재 플랜</span>
                </div>
                <p className={proPriceStyle}>₩49,000/월</p>
                <ul className={featureListStyle}>
                  <li className={proFeatureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.brand.default' })} />
                    <span>고급 대시보드</span>
                  </li>
                  <li className={proFeatureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.brand.default' })} />
                    <span>사용자 20명</span>
                  </li>
                  <li className={proFeatureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.brand.default' })} />
                    <span>100GB 스토리지</span>
                  </li>
                  <li className={proFeatureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.brand.default' })} />
                    <span>고급 분석</span>
                  </li>
                  <li className={proFeatureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.brand.default' })} />
                    <span>우선 지원</span>
                  </li>
                  <li className={featureItemExcludedStyle}>
                    <X size={16} />
                    <span>전용 서버</span>
                  </li>
                </ul>
                <div className={proDisabledButtonStyle}>현재 사용 중</div>
                <p className={proNextPaymentStyle}>다음 결제일: 2025년 9월 1일</p>
              </div>
            </div>

            {/* Enterprise card */}
            <div className={freeCardStyle}>
              <div className={cardBodyStyle}>
                <p className={planNameStyle}>Enterprise</p>
                <p className={planPriceStyle}>맞춤 견적</p>
                <ul className={featureListStyle}>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>무제한 대시보드</span>
                  </li>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>사용자 무제한</span>
                  </li>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>무제한 스토리지</span>
                  </li>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>고급 분석</span>
                  </li>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>전용 서버</span>
                  </li>
                  <li className={featureItemStyle}>
                    <Check size={16} className={css({ color: 'icon.positive.default' })} />
                    <span>24/7 전담 지원</span>
                  </li>
                </ul>
                <div className={enterpriseButtonStyle}>영업팀 문의</div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Payment method */}
        <section>
          <h2 className={sectionTitleStyle}>결제 수단</h2>
          <div className={whiteCardStyle}>
            <h3
              className={css({
                fontSize: '16px',
                fontWeight: 700,
                color: 'text.neutral.default',
                marginBottom: '20px',
              })}
            >
              등록된 결제 수단
            </h3>

            <div className={paymentMethodRowStyle}>
              {/* Card art */}
              <div className={cardArtStyle}>
                <CreditCard
                  size={20}
                  className={css({ color: 'icon.neutral.default', opacity: 0.38 })}
                />
                <p className={cardNumberStyle}>•••• •••• •••• 4242</p>
              </div>

              {/* Card info */}
              <div className={cardInfoStyle}>
                <p className={cardNameStyle}>Visa</p>
                <div className={cardExpRowStyle}>
                  <span className={cardExpStyle}>만료일 12/26</span>
                  <span className={validBadgeStyle}>유효</span>
                </div>
              </div>

              {/* Actions */}
              <div className={cardActionsStyle}>
                <button className={outlineButtonStyle}>변경</button>
                <button className={ghostDangerButtonStyle}>삭제</button>
              </div>
            </div>

            {/* Warning banner */}
            <div className={warningBannerStyle}>
              <AlertTriangle
                size={18}
                className={css({ color: 'icon.warning.default', flexShrink: 0 })}
              />
              <span>
                결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
                <span className={warningLinkStyle}>카드 변경</span>
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Payment history table */}
        <section>
          <div className={tableCardStyle}>
            <div className={tableHeaderRowStyle}>
              <h2
                className={css({
                  fontSize: '20px',
                  fontWeight: 700,
                  color: 'text.neutral.default',
                })}
              >
                결제 내역
              </h2>
              <button className={csvButtonStyle}>
                <Download size={14} />
                CSV 내보내기
              </button>
            </div>

            <table className={tableStyle}>
              <thead className={tableHeadStyle}>
                <tr>
                  <th className={thStyle}>날짜</th>
                  <th className={thStyle}>내역</th>
                  <th className={thStyle}>금액</th>
                  <th className={thStyle}>상태</th>
                  <th className={thStyle}>액션</th>
                </tr>
              </thead>
              <tbody>
                {/* Row 1 - odd */}
                <tr>
                  <td className={tdStyle}>2025-08-01</td>
                  <td className={tdStyle}>Pro 플랜 (8월)</td>
                  <td className={tdStyle}>₩49,000</td>
                  <td className={tdStyle}>
                    <span className={successBadgeStyle}>결제 완료</span>
                  </td>
                  <td className={tdStyle}>
                    <button className={ghostIconButtonStyle}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
                {/* Row 2 - even */}
                <tr>
                  <td className={tdEvenStyle}>2025-07-01</td>
                  <td className={tdEvenStyle}>Pro 플랜 (7월)</td>
                  <td className={tdEvenStyle}>₩49,000</td>
                  <td className={tdEvenStyle}>
                    <span className={successBadgeStyle}>결제 완료</span>
                  </td>
                  <td className={tdEvenStyle}>
                    <button className={ghostIconButtonStyle}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
                {/* Row 3 - odd */}
                <tr>
                  <td className={tdStyle}>2025-06-15</td>
                  <td className={tdStyle}>추가 사용자 시트</td>
                  <td className={tdStyle}>₩9,000</td>
                  <td className={tdStyle}>
                    <span className={successBadgeStyle}>결제 완료</span>
                  </td>
                  <td className={tdStyle}>
                    <button className={ghostIconButtonStyle}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
                {/* Row 4 - even - FAILED */}
                <tr>
                  <td className={tdFailStyle}>2025-06-01</td>
                  <td className={tdFailStyle}>Pro 플랜 (6월)</td>
                  <td className={tdFailStyle}>₩49,000</td>
                  <td className={tdFailStyle}>
                    <span className={failBadgeStyle}>결제 실패</span>
                  </td>
                  <td className={tdFailStyle}>
                    <button className={criticalOutlineButtonStyle}>재시도</button>
                  </td>
                </tr>
                {/* Row 5 - odd */}
                <tr>
                  <td className={tdStyle}>2025-05-28</td>
                  <td className={tdStyle}>Pro 플랜 (6월) 재시도</td>
                  <td className={tdStyle}>₩49,000</td>
                  <td className={tdStyle}>
                    <span className={successBadgeStyle}>결제 완료</span>
                  </td>
                  <td className={tdStyle}>
                    <button className={ghostIconButtonStyle}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
                {/* Row 6 - even */}
                <tr>
                  <td className={tdEvenStyle}>2025-05-01</td>
                  <td className={tdEvenStyle}>Pro 플랜 (5월)</td>
                  <td className={tdEvenStyle}>₩49,000</td>
                  <td className={tdEvenStyle}>
                    <span className={successBadgeStyle}>결제 완료</span>
                  </td>
                  <td className={tdEvenStyle}>
                    <button className={ghostIconButtonStyle}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
                {/* Row 7 - odd */}
                <tr>
                  <td className={tdStyle}>2025-04-01</td>
                  <td className={tdStyle}>Pro 플랜 (4월)</td>
                  <td className={tdStyle}>₩49,000</td>
                  <td className={tdStyle}>
                    <span className={warningBadgeStyle}>처리 중</span>
                  </td>
                  <td className={tdStyle}>—</td>
                </tr>
                {/* Row 8 - even */}
                <tr>
                  <td className={tdEvenStyle}>2025-03-10</td>
                  <td className={tdEvenStyle}>환불 처리</td>
                  <td className={tdEvenStyle}>-₩49,000</td>
                  <td className={tdEvenStyle}>
                    <span className={infoBadgeStyle}>환불 완료</span>
                  </td>
                  <td className={tdEvenStyle}>
                    <button className={ghostIconButtonStyle}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
                {/* Row 9 - odd */}
                <tr>
                  <td className={tdStyle}>2025-03-01</td>
                  <td className={tdStyle}>Pro 플랜 (3월)</td>
                  <td className={tdStyle}>₩49,000</td>
                  <td className={tdStyle}>
                    <span className={successBadgeStyle}>결제 완료</span>
                  </td>
                  <td className={tdStyle}>
                    <button className={ghostIconButtonStyle}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Billing summary */}
        <section>
          <h2 className={sectionTitleStyle}>청구 요약</h2>
          <div className={summaryGridStyle}>

            {/* 이번 달 청구 */}
            <div className={summaryCardBaseStyle}>
              <TrendingUp
                size={24}
                className={css({ color: 'icon.positive.default' })}
              />
              <p className={summaryAmountStyle}>₩58,000</p>
              <span className={successBadgeSmallStyle}>정상 결제</span>
              <p className={summaryDetailStyle}>Pro ₩49,000 + 추가 ₩9,000</p>
            </div>

            {/* 미결제 금액 */}
            <div className={summaryCardCriticalStyle}>
              <AlertCircle
                size={24}
                className={css({ color: 'icon.critical.default' })}
              />
              <p className={summaryAmountCriticalStyle}>₩49,000</p>
              <span className={criticalBadgeStyle}>미결제</span>
              <button className={criticalSolidButtonStyle}>지금 결제</button>
            </div>

            {/* 다음 결제일 */}
            <div className={summaryCardBaseStyle}>
              <Calendar
                size={24}
                className={css({ color: 'icon.info.default' })}
              />
              <p className={summaryAmountStyle}>2025년 9월 1일</p>
              <span className={infoBadgeSmallStyle}>예정</span>
              <p className={summaryDetailStyle}>Pro 플랜 월정액 ₩49,000</p>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}
