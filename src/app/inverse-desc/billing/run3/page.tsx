import { css } from '@ds-token-test/styled-system-intent-first-slotfirst/css';
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
} from 'lucide-react';

export default function BillingPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
      })}
    >
      {/* Sidebar — dark local theme */}
      <aside
        className={`dark ${css({
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'canvas.neutral.02',
          borderRight: '1px solid',
          borderColor: 'border.neutral.base',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '24px 20px 20px',
          })}
        >
          <LayoutDashboard
            size={22}
            className={css({ color: 'icon.neutral.base' })}
          />
          <span
            className={css({
              color: 'text.neutral.base',
              fontWeight: '700',
              fontSize: '17px',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav className={css({ flex: 1, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: '2px' })}>
          {/* Active: 결제 내역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'overlay.lighten.hover',
              cursor: 'pointer',
            })}
          >
            <CreditCard size={18} className={css({ color: 'icon.neutral.base' })} />
            <span className={css({ color: 'text.neutral.base', fontWeight: '600', fontSize: '14px' })}>
              결제 내역
            </span>
          </div>

          {/* Inactive items */}
          {[
            { icon: <LayoutDashboard size={18} />, label: '대시보드' },
            { icon: <Users size={18} />, label: '사용자 관리' },
            { icon: <Settings size={18} />, label: '설정' },
          ].map(({ icon, label }) => (
            <div
              key={label}
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 12px',
                borderRadius: '8px',
                cursor: 'pointer',
                opacity: 0.38,
              })}
            >
              <span className={css({ color: 'icon.neutral.base' })}>{icon}</span>
              <span className={css({ color: 'text.neutral.base', fontSize: '14px' })}>{label}</span>
            </div>
          ))}
        </nav>

        {/* Logout */}
        <div
          className={css({
            padding: '16px 20px',
            borderTop: '1px solid',
            borderColor: 'border.neutral.base',
          })}
        >
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            })}
          >
            <LogOut size={18} className={css({ color: 'icon.critical.base' })} />
            <span className={css({ color: 'text.critical.base', fontSize: '14px', fontWeight: '500' })}>
              로그아웃
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          backgroundColor: 'canvas.neutral.01',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        })}
      >
        {/* Section 1: Plan Selection */}
        <section>
          <h2 className={css({ color: 'text.neutral.base', fontSize: '20px', fontWeight: '700', marginBottom: '20px' })}>
            플랜 선택
          </h2>
          <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' })}>
            {/* Free Card */}
            <div
              className={css({
                backgroundColor: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              })}
            >
              <div>
                <p className={css({ color: 'text.neutral.base', fontWeight: '700', fontSize: '18px' })}>Free</p>
                <p className={css({ color: 'text.neutral.base', fontSize: '28px', fontWeight: '800', marginTop: '8px' })}>
                  ₩0/월
                </p>
              </div>
              <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 })}>
                {['프로젝트 3개', '팀원 2명', '기본 분석'].map((f) => (
                  <li key={f} className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'icon.positive.base', flexShrink: 0 })} />
                    <span className={css({ color: 'text.neutral.base', fontSize: '14px' })}>{f}</span>
                  </li>
                ))}
                {['고급 분석', '우선 지원'].map((f) => (
                  <li key={f} className={css({ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.38 })}>
                    <X size={16} className={css({ color: 'icon.neutral.base', flexShrink: 0 })} />
                    <span className={css({ color: 'text.neutral.base', fontSize: '14px' })}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={css({
                  marginTop: 'auto',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  color: 'text.neutral.base',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'not-allowed',
                  opacity: 0.38,
                })}
                disabled
              >
                현재 플랜
              </button>
            </div>

            {/* Pro Card */}
            <div
              className={css({
                backgroundColor: 'surface.primary.base',
                border: '1px solid',
                borderColor: 'border.primary.base',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              {/* Banner */}
              <div
                className={css({
                  backgroundColor: 'fill.primary.base',
                  padding: '8px 16px',
                  textAlign: 'center',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontWeight: '700', fontSize: '13px' })}>
                  추천
                </span>
              </div>
              <div className={css({ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 })}>
                <div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' })}>
                    <p className={css({ color: 'text.primary.base', fontWeight: '700', fontSize: '18px' })}>Pro</p>
                    <span
                      className={css({
                        backgroundColor: 'fill.primary.base',
                        color: 'inverse.text.base',
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '2px 8px',
                        borderRadius: '99px',
                      })}
                    >
                      현재 플랜
                    </span>
                  </div>
                  <p className={css({ color: 'text.primary.base', fontSize: '28px', fontWeight: '800' })}>
                    ₩49,000/월
                  </p>
                </div>
                <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 })}>
                  {['무제한 프로젝트', '팀원 20명', '고급 분석', 'API 액세스', '우선 지원'].map((f) => (
                    <li key={f} className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <Check size={16} className={css({ color: 'icon.primary.base', flexShrink: 0 })} />
                      <span className={css({ color: 'text.neutral.base', fontSize: '14px' })}>{f}</span>
                    </li>
                  ))}
                  {['전용 서버'].map((f) => (
                    <li key={f} className={css({ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.38 })}>
                      <X size={16} className={css({ color: 'icon.neutral.base', flexShrink: 0 })} />
                      <span className={css({ color: 'text.neutral.base', fontSize: '14px' })}>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className={css({ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px' })}>
                  <button
                    className={css({
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: 'fill.primary.base',
                      color: 'inverse.text.base',
                      fontWeight: '600',
                      fontSize: '14px',
                      cursor: 'not-allowed',
                      opacity: 0.38,
                    })}
                    disabled
                  >
                    현재 사용 중
                  </button>
                  <p className={css({ color: 'text.neutral.low', fontSize: '12px', textAlign: 'center', opacity: 0.38 })}>
                    다음 결제일: 2025년 9월 1일
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise Card */}
            <div
              className={css({
                backgroundColor: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              })}
            >
              <div>
                <p className={css({ color: 'text.neutral.base', fontWeight: '700', fontSize: '18px' })}>Enterprise</p>
                <p className={css({ color: 'text.neutral.base', fontSize: '28px', fontWeight: '800', marginTop: '8px' })}>
                  맞춤 견적
                </p>
              </div>
              <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', padding: 0, margin: 0 })}>
                {['전용 서버', '무제한 팀원', 'SSO/SAML', 'SLA 보장', '전담 매니저', '커스텀 통합'].map((f) => (
                  <li key={f} className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'icon.positive.base', flexShrink: 0 })} />
                    <span className={css({ color: 'text.neutral.base', fontSize: '14px' })}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={css({
                  marginTop: 'auto',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'fill.primary.base',
                  color: 'inverse.text.base',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                })}
              >
                영업팀 문의
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Payment Method */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ color: 'text.neutral.base', fontSize: '18px', fontWeight: '700', marginBottom: '20px' })}>
            등록된 결제 수단
          </h2>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '20px' })}>
            {/* Card art */}
            <div
              className={css({
                width: '180px',
                height: '110px',
                backgroundColor: 'surface.neutral.base',
                borderRadius: '10px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexShrink: 0,
                border: '1px solid',
                borderColor: 'border.neutral.base',
              })}
            >
              <CreditCard size={20} className={css({ color: 'icon.neutral.base', opacity: 0.38 })} />
              <span className={css({ color: 'text.neutral.base', fontWeight: '700', fontSize: '14px', letterSpacing: '0.1em' })}>
                •••• •••• •••• 4242
              </span>
            </div>

            {/* Card info */}
            <div className={css({ flex: 1 })}>
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' })}>
                <span className={css({ color: 'text.neutral.base', fontWeight: '700', fontSize: '16px' })}>Visa</span>
                <span
                  className={css({
                    backgroundColor: 'surface.positive.base',
                    border: '1px solid',
                    borderColor: 'border.positive.base',
                    color: 'text.positive.base',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '99px',
                  })}
                >
                  유효
                </span>
              </div>
              <span className={css({ color: 'text.neutral.low', fontSize: '14px' })}>만료일 12/26</span>
            </div>

            {/* Buttons */}
            <div className={css({ display: 'flex', gap: '8px' })}>
              <button
                className={css({
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.transparent',
                  color: 'text.neutral.base',
                  fontWeight: '500',
                  fontSize: '13px',
                  cursor: 'pointer',
                })}
              >
                변경
              </button>
              <button
                className={css({
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'surface.neutral.transparent',
                  color: 'text.critical.base',
                  fontWeight: '500',
                  fontSize: '13px',
                  cursor: 'pointer',
                })}
              >
                삭제
              </button>
            </div>
          </div>

          {/* Warning banner */}
          <div
            className={css({
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 16px',
              backgroundColor: 'surface.warning.base',
              border: '1px solid',
              borderColor: 'border.warning.base',
              borderRadius: '8px',
            })}
          >
            <AlertTriangle size={18} className={css({ color: 'icon.warning.base', flexShrink: 0 })} />
            <p className={css({ color: 'text.neutral.base', fontSize: '14px', flex: 1 })}>
              결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.{' '}
              <span className={css({ color: 'text.warning.base', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' })}>
                카드 변경
              </span>
            </p>
          </div>
        </section>

        {/* Section 3: Billing History Table */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            overflow: 'hidden',
          })}
        >
          <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 24px 16px' })}>
            <h2 className={css({ color: 'text.neutral.base', fontSize: '18px', fontWeight: '700' })}>결제 내역</h2>
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                backgroundColor: 'surface.neutral.transparent',
                color: 'text.neutral.base',
                fontWeight: '500',
                fontSize: '13px',
                cursor: 'pointer',
              })}
            >
              <Download size={14} />
              CSV 내보내기
            </button>
          </div>

          <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
            <thead>
              <tr className={css({ backgroundColor: 'canvas.neutral.01' })}>
                {['날짜', '내역', '금액', '상태', '액션'].map((h) => (
                  <th
                    key={h}
                    className={css({
                      padding: '10px 16px',
                      textAlign: 'left',
                      color: 'text.neutral.base',
                      fontSize: '11px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      opacity: 0.38,
                      borderBottom: '1px solid',
                      borderColor: 'border.neutral.base',
                    })}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className={css({ borderBottom: '1px solid', borderColor: 'border.neutral.low' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-08-01</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (8월)</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', color: 'icon.neutral.base', cursor: 'pointer' })}>
                    <FileText size={16} />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className={css({ backgroundColor: 'canvas.neutral.01', borderBottom: '1px solid', borderColor: 'border.neutral.low' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-07-01</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (7월)</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', color: 'icon.neutral.base', cursor: 'pointer' })}>
                    <FileText size={16} />
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className={css({ borderBottom: '1px solid', borderColor: 'border.neutral.low' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-06-15</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>추가 사용자 시트</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>₩9,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', color: 'icon.neutral.base', cursor: 'pointer' })}>
                    <FileText size={16} />
                  </button>
                </td>
              </tr>

              {/* Row 4 — 결제 실패 */}
              <tr className={css({ backgroundColor: 'surface.critical.base', borderBottom: '1px solid', borderColor: 'border.neutral.low' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-06-01</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (6월)</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'fill.critical.base', color: 'inverse.text.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>결제 실패</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ padding: '6px 12px', borderRadius: '6px', border: '1px solid', borderColor: 'border.critical.base', backgroundColor: 'surface.neutral.transparent', color: 'text.critical.base', fontSize: '12px', fontWeight: '600', cursor: 'pointer' })}>
                    재시도
                  </button>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className={css({ backgroundColor: 'canvas.neutral.01', borderBottom: '1px solid', borderColor: 'border.neutral.low' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-05-28</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (6월) 재시도</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', color: 'icon.neutral.base', cursor: 'pointer' })}>
                    <FileText size={16} />
                  </button>
                </td>
              </tr>

              {/* Row 6 */}
              <tr className={css({ borderBottom: '1px solid', borderColor: 'border.neutral.low' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-05-01</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (5월)</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', color: 'icon.neutral.base', cursor: 'pointer' })}>
                    <FileText size={16} />
                  </button>
                </td>
              </tr>

              {/* Row 7 — 처리 중 */}
              <tr className={css({ backgroundColor: 'canvas.neutral.01', borderBottom: '1px solid', borderColor: 'border.neutral.low' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-04-01</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (4월)</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'surface.warning.base', border: '1px solid', borderColor: 'border.warning.base', color: 'text.warning.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>처리 중</span>
                </td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>—</td>
              </tr>

              {/* Row 8 — 환불 완료 */}
              <tr className={css({ borderBottom: '1px solid', borderColor: 'border.neutral.low' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-03-10</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>환불 처리</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>-₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'surface.info.base', border: '1px solid', borderColor: 'border.info.base', color: 'text.info.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>환불 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', color: 'icon.neutral.base', cursor: 'pointer' })}>
                    <FileText size={16} />
                  </button>
                </td>
              </tr>

              {/* Row 9 */}
              <tr className={css({ backgroundColor: 'canvas.neutral.01' })}>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.low', fontSize: '13px' })}>2025-03-01</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (3월)</td>
                <td className={css({ padding: '14px 16px', color: 'text.neutral.base', fontSize: '14px', fontWeight: '600' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', color: 'icon.neutral.base', cursor: 'pointer' })}>
                    <FileText size={16} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section 4: Billing Summary Cards */}
        <section>
          <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' })}>
            {/* 이번 달 청구 */}
            <div
              className={css({
                backgroundColor: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <TrendingUp size={24} className={css({ color: 'icon.positive.base' })} />
              <p className={css({ color: 'text.neutral.base', fontSize: '28px', fontWeight: '800' })}>₩58,000</p>
              <span
                className={css({
                  backgroundColor: 'surface.positive.base',
                  border: '1px solid',
                  borderColor: 'border.positive.base',
                  color: 'text.positive.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '99px',
                  alignSelf: 'flex-start',
                })}
              >
                정상 결제
              </span>
              <p className={css({ color: 'text.neutral.low', fontSize: '13px' })}>Pro ₩49,000 + 추가 ₩9,000</p>
              <p className={css({ color: 'text.neutral.low', fontSize: '12px' })}>이번 달 청구</p>
            </div>

            {/* 미결제 금액 */}
            <div
              className={css({
                backgroundColor: 'surface.critical.base',
                border: '1px solid',
                borderColor: 'border.critical.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <AlertCircle size={24} className={css({ color: 'icon.critical.base' })} />
              <p className={css({ color: 'text.critical.base', fontSize: '28px', fontWeight: '800' })}>₩49,000</p>
              <span
                className={css({
                  backgroundColor: 'fill.critical.base',
                  color: 'inverse.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '99px',
                  alignSelf: 'flex-start',
                })}
              >
                미결제
              </span>
              <button
                className={css({
                  marginTop: 'auto',
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'fill.critical.base',
                  color: 'inverse.text.base',
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                })}
              >
                지금 결제
              </button>
            </div>

            {/* 다음 결제일 */}
            <div
              className={css({
                backgroundColor: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <Calendar size={24} className={css({ color: 'icon.info.base' })} />
              <p className={css({ color: 'text.neutral.base', fontSize: '24px', fontWeight: '800' })}>2025년 9월 1일</p>
              <span
                className={css({
                  backgroundColor: 'surface.info.base',
                  border: '1px solid',
                  borderColor: 'border.info.base',
                  color: 'text.info.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '99px',
                  alignSelf: 'flex-start',
                })}
              >
                예정
              </span>
              <p className={css({ color: 'text.neutral.low', fontSize: '13px' })}>Pro 플랜 월정액 ₩49,000</p>
              <p className={css({ color: 'text.neutral.low', fontSize: '12px' })}>다음 결제일</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
