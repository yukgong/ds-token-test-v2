import { css } from '@ds-token-test/styled-system-intent-first/css';
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

export default function BillingPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        bg: 'neutral.canvas.01',
      })}
    >
      {/* Sidebar */}
      <aside
        className={`dark ${css({
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          bg: 'neutral.canvas.03',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            px: '20px',
            py: '24px',
          })}
        >
          <LayoutDashboard
            size={24}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.base',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav className={css({ flex: 1, px: '12px', display: 'flex', flexDirection: 'column', gap: '4px' })}>
          {/* Active: 결제 내역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              bg: 'neutral.fill.base',
              cursor: 'pointer',
            })}
          >
            <CreditCard
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>
              결제 내역
            </span>
          </div>

          {/* 대시보드 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
              대시보드
            </span>
          </div>

          {/* 사용자 관리 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Users
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
              사용자 관리
            </span>
          </div>

          {/* 설정 — disabled */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            <Settings
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
              설정
            </span>
          </div>
        </nav>

        {/* Logout */}
        <div
          className={css({
            px: '12px',
            pb: '24px',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <LogOut
              size={18}
              className={css({ color: 'critical.icon.base' })}
            />
            <span className={css({ fontSize: '14px', color: 'critical.text.base' })}>
              로그아웃
            </span>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          bg: 'neutral.canvas.01',
          p: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        })}
      >
        {/* Section 1: Plan Selection */}
        <section>
          <h2
            className={css({
              fontSize: '20px',
              fontWeight: '700',
              color: 'neutral.text.base',
              mb: '20px',
            })}
          >
            플랜 선택
          </h2>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            })}
          >
            {/* Free Card */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              })}
            >
              <div>
                <div
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'neutral.text.base',
                    mb: '8px',
                  })}
                >
                  Free
                </div>
                <div
                  className={css({
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'neutral.text.base',
                  })}
                >
                  ₩0/월
                </div>
              </div>
              <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', p: 0, m: 0 })}>
                {['기본 대시보드', '최대 3명 사용자', '5GB 스토리지'].map((feature) => (
                  <li key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                    <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>{feature}</span>
                  </li>
                ))}
                {['우선 지원', 'API 접근'].map((feature) => (
                  <li
                    key={feature}
                    className={css({ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.38 })}
                  >
                    <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                    <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={css({
                  w: '100%',
                  py: '10px',
                  borderRadius: '8px',
                  bg: 'neutral.fill.base',
                  border: 'none',
                  color: 'neutral.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
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
                bg: 'primary.surface.base',
                border: '1px solid',
                borderColor: 'primary.border.high',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              {/* Top banner */}
              <div
                className={css({
                  bg: 'primary.fill.base',
                  px: '24px',
                  py: '8px',
                  textAlign: 'center',
                })}
              >
                <span
                  className={css({
                    fontSize: '13px',
                    fontWeight: '700',
                    color: 'inverse.text.base',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  })}
                >
                  추천
                </span>
              </div>
              <div className={css({ p: '24px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 })}>
                <div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '8px', mb: '8px' })}>
                    <span
                      className={css({
                        fontSize: '18px',
                        fontWeight: '700',
                        color: 'primary.text.base',
                      })}
                    >
                      Pro
                    </span>
                    <span
                      className={css({
                        fontSize: '12px',
                        fontWeight: '600',
                        px: '8px',
                        py: '2px',
                        borderRadius: '9999px',
                        bg: 'primary.fill.base',
                        color: 'inverse.text.base',
                      })}
                    >
                      현재 플랜
                    </span>
                  </div>
                  <div
                    className={css({
                      fontSize: '28px',
                      fontWeight: '700',
                      color: 'primary.text.base',
                    })}
                  >
                    ₩49,000/월
                  </div>
                </div>
                <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', p: 0, m: 0 })}>
                  {[
                    '고급 대시보드',
                    '무제한 사용자',
                    '100GB 스토리지',
                    '우선 지원',
                    'API 접근',
                  ].map((feature) => (
                    <li key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <Check size={16} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
                      <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>{feature}</span>
                    </li>
                  ))}
                  {['전용 인프라'].map((feature) => (
                    <li
                      key={feature}
                      className={css({ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.38 })}
                    >
                      <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                      <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={css({
                    w: '100%',
                    py: '10px',
                    borderRadius: '8px',
                    bg: 'primary.fill.base',
                    border: 'none',
                    color: 'inverse.text.base',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'not-allowed',
                    opacity: 0.38,
                  })}
                  disabled
                >
                  현재 사용 중
                </button>
                <p
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.base',
                    textAlign: 'center',
                    opacity: 0.38,
                    m: 0,
                  })}
                >
                  다음 결제일: 2025년 9월 1일
                </p>
              </div>
            </div>

            {/* Enterprise Card */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              })}
            >
              <div>
                <div
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'neutral.text.base',
                    mb: '8px',
                  })}
                >
                  Enterprise
                </div>
                <div
                  className={css({
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'neutral.text.base',
                  })}
                >
                  맞춤 견적
                </div>
              </div>
              <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px', listStyle: 'none', p: 0, m: 0 })}>
                {[
                  '고급 대시보드',
                  '무제한 사용자',
                  '무제한 스토리지',
                  '24/7 전용 지원',
                  'API 접근',
                  '전용 인프라',
                ].map((feature) => (
                  <li key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                    <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={css({
                  w: '100%',
                  py: '10px',
                  borderRadius: '8px',
                  bg: 'primary.fill.base',
                  border: 'none',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                })}
              >
                영업팀 문의
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: Payment Methods */}
        <section>
          <div
            className={css({
              bg: 'neutral.surface.base',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              borderRadius: '12px',
              p: '24px',
            })}
          >
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '700',
                color: 'neutral.text.base',
                mb: '20px',
              })}
            >
              등록된 결제 수단
            </h2>

            {/* Card display */}
            <div className={css({ display: 'flex', alignItems: 'center', gap: '16px', mb: '16px' })}>
              {/* Card art */}
              <div
                className={css({
                  bg: 'neutral.fill.base',
                  borderRadius: '8px',
                  p: '16px',
                  width: '160px',
                  flexShrink: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '96px',
                })}
              >
                <CreditCard
                  size={20}
                  className={css({ color: 'neutral.icon.base', opacity: 0.38 })}
                />
                <span
                  className={css({
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'neutral.text.base',
                    mt: '16px',
                  })}
                >
                  •••• •••• •••• 4242
                </span>
              </div>

              {/* Card info */}
              <div className={css({ flex: 1 })}>
                <div
                  className={css({
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'neutral.text.base',
                    mb: '4px',
                  })}
                >
                  Visa
                </div>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <span className={css({ fontSize: '14px', color: 'neutral.text.low' })}>
                    만료일 12/26
                  </span>
                  <span
                    className={css({
                      fontSize: '12px',
                      fontWeight: '600',
                      px: '8px',
                      py: '2px',
                      borderRadius: '9999px',
                      bg: 'positive.surface.base',
                      border: '1px solid',
                      borderColor: 'positive.border.base',
                      color: 'positive.text.base',
                    })}
                  >
                    유효
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className={css({ display: 'flex', gap: '8px' })}>
                <button
                  className={css({
                    px: '16px',
                    py: '8px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    bg: 'neutral.surface.transparent',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  })}
                >
                  변경
                </button>
                <button
                  className={css({
                    px: '16px',
                    py: '8px',
                    borderRadius: '8px',
                    border: 'none',
                    bg: 'neutral.surface.transparent',
                    color: 'critical.text.base',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                  })}
                >
                  삭제
                </button>
              </div>
            </div>

            {/* Expiry warning banner */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                p: '12px 16px',
                borderRadius: '8px',
                bg: 'warning.surface.base',
                border: '1px solid',
                borderColor: 'warning.border.base',
              })}
            >
              <AlertTriangle
                size={18}
                className={css({ color: 'warning.icon.base', flexShrink: 0 })}
              />
              <span className={css({ fontSize: '14px', color: 'neutral.text.base', flex: 1 })}>
                결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
              </span>
              <span
                className={css({
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'warning.text.base',
                  cursor: 'pointer',
                })}
              >
                카드 변경
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Payment History Table */}
        <section>
          <div
            className={css({
              bg: 'neutral.surface.base',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              borderRadius: '12px',
              overflow: 'hidden',
            })}
          >
            {/* Table header row */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                p: '20px 24px',
                borderBottom: '1px solid',
                borderColor: 'neutral.border.base',
              })}
            >
              <h2 className={css({ fontSize: '18px', fontWeight: '700', color: 'neutral.text.base', m: 0 })}>
                결제 내역
              </h2>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  px: '14px',
                  py: '8px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  bg: 'neutral.surface.transparent',
                  color: 'neutral.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                })}
              >
                <Download size={16} className={css({ color: 'neutral.icon.base' })} />
                CSV 내보내기
              </button>
            </div>

            {/* Table */}
            <table
              className={css({
                w: '100%',
                borderCollapse: 'collapse',
              })}
            >
              <thead>
                <tr
                  className={css({
                    bg: 'neutral.canvas.01',
                  })}
                >
                  {['날짜', '내역', '금액', '상태', '액션'].map((h) => (
                    <th
                      key={h}
                      className={css({
                        px: '20px',
                        py: '12px',
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'neutral.text.base',
                        opacity: 0.38,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      })}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-08-01</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (8월)</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base' })}>결제 완료</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <button className={css({ p: '6px', borderRadius: '6px', border: 'none', bg: 'neutral.surface.transparent', color: 'neutral.icon.base', cursor: 'pointer' })}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className={css({ bg: 'neutral.canvas.01', borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-07-01</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (7월)</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base' })}>결제 완료</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <button className={css({ p: '6px', borderRadius: '6px', border: 'none', bg: 'neutral.surface.transparent', color: 'neutral.icon.base', cursor: 'pointer' })}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-06-15</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>추가 사용자 시트</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>₩9,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base' })}>결제 완료</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <button className={css({ p: '6px', borderRadius: '6px', border: 'none', bg: 'neutral.surface.transparent', color: 'neutral.icon.base', cursor: 'pointer' })}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 4 — 결제 실패 */}
                <tr className={css({ bg: 'critical.surface.base', borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-06-01</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (6월)</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'critical.fill.base', color: 'inverse.text.base' })}>결제 실패</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', gap: '4px', px: '10px', py: '6px', borderRadius: '6px', border: '1px solid', borderColor: 'critical.border.base', bg: 'neutral.surface.transparent', color: 'critical.text.base', fontSize: '13px', fontWeight: '600', cursor: 'pointer' })}>
                      <RefreshCw size={14} />
                      재시도
                    </button>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr className={css({ bg: 'neutral.canvas.01', borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-05-28</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (6월) 재시도</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base' })}>결제 완료</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <button className={css({ p: '6px', borderRadius: '6px', border: 'none', bg: 'neutral.surface.transparent', color: 'neutral.icon.base', cursor: 'pointer' })}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 6 */}
                <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-05-01</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (5월)</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base' })}>결제 완료</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <button className={css({ p: '6px', borderRadius: '6px', border: 'none', bg: 'neutral.surface.transparent', color: 'neutral.icon.base', cursor: 'pointer' })}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 7 — 처리 중 */}
                <tr className={css({ bg: 'neutral.canvas.01', borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-04-01</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (4월)</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'warning.surface.base', border: '1px solid', borderColor: 'warning.border.base', color: 'warning.text.base' })}>처리 중</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '14px', color: 'neutral.text.base', opacity: 0.38 })}>—</span>
                  </td>
                </tr>

                {/* Row 8 — 환불 완료 */}
                <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-03-10</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>환불 처리</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>-₩49,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'info.surface.base', border: '1px solid', borderColor: 'info.border.base', color: 'info.text.base' })}>환불 완료</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <button className={css({ p: '6px', borderRadius: '6px', border: 'none', bg: 'neutral.surface.transparent', color: 'neutral.icon.base', cursor: 'pointer' })}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>

                {/* Row 9 */}
                <tr className={css({ bg: 'neutral.canvas.01', borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>2025-03-01</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (3월)</td>
                  <td className={css({ px: '20px', py: '14px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', px: '8px', py: '3px', borderRadius: '9999px', bg: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base' })}>결제 완료</span>
                  </td>
                  <td className={css({ px: '20px', py: '14px' })}>
                    <button className={css({ p: '6px', borderRadius: '6px', border: 'none', bg: 'neutral.surface.transparent', color: 'neutral.icon.base', cursor: 'pointer' })}>
                      <FileText size={16} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Billing Summary Cards */}
        <section>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
            })}
          >
            {/* 이번 달 청구 */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <TrendingUp size={24} className={css({ color: 'positive.icon.base' })} />
              <div
                className={css({
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'neutral.text.base',
                })}
              >
                ₩58,000
              </div>
              <span
                className={css({
                  alignSelf: 'flex-start',
                  fontSize: '12px',
                  fontWeight: '600',
                  px: '8px',
                  py: '3px',
                  borderRadius: '9999px',
                  bg: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                })}
              >
                정상 결제
              </span>
              <p className={css({ fontSize: '13px', color: 'neutral.text.low', m: 0 })}>
                Pro ₩49,000 + 추가 ₩9,000
              </p>
            </div>

            {/* 미결제 금액 */}
            <div
              className={css({
                bg: 'critical.surface.base',
                border: '1px solid',
                borderColor: 'critical.border.base',
                borderRadius: '12px',
                p: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <AlertCircle size={24} className={css({ color: 'critical.icon.base' })} />
              <div
                className={css({
                  fontSize: '28px',
                  fontWeight: '700',
                  color: 'critical.text.base',
                })}
              >
                ₩49,000
              </div>
              <span
                className={css({
                  alignSelf: 'flex-start',
                  fontSize: '12px',
                  fontWeight: '600',
                  px: '8px',
                  py: '3px',
                  borderRadius: '9999px',
                  bg: 'critical.fill.base',
                  color: 'inverse.text.base',
                })}
              >
                미결제
              </span>
              <button
                className={css({
                  w: '100%',
                  py: '10px',
                  borderRadius: '8px',
                  bg: 'critical.fill.base',
                  border: 'none',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  mt: 'auto',
                })}
              >
                지금 결제
              </button>
            </div>

            {/* 다음 결제일 */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <Calendar size={24} className={css({ color: 'info.icon.base' })} />
              <div
                className={css({
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'neutral.text.base',
                })}
              >
                2025년 9월 1일
              </div>
              <span
                className={css({
                  alignSelf: 'flex-start',
                  fontSize: '12px',
                  fontWeight: '600',
                  px: '8px',
                  py: '3px',
                  borderRadius: '9999px',
                  bg: 'info.surface.base',
                  border: '1px solid',
                  borderColor: 'info.border.base',
                  color: 'info.text.base',
                })}
              >
                예정
              </span>
              <p className={css({ fontSize: '13px', color: 'neutral.text.low', m: 0 })}>
                Pro 플랜 월정액 ₩49,000
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
