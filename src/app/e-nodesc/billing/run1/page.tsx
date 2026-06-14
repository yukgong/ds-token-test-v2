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
  Download,
  FileText,
  TrendingUp,
  AlertCircle,
  Calendar,
} from 'lucide-react';

export default function BillingPage() {
  return (
    <div
      className={css({
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'neutral.canvas.02',
      })}
    >
      {/* Sidebar */}
      <aside
        className={`dark ${css({
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'neutral.canvas.03',
          borderRight: '1px solid',
          borderColor: 'neutral.border.base',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '24px 20px',
          })}
        >
          <LayoutDashboard
            size={22}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              color: 'neutral.text.base',
              fontWeight: '700',
              fontSize: '16px',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav className={css({ flex: 1, padding: '8px 12px', display: 'flex', flexDirection: 'column', gap: '4px' })}>
          {/* Active: 결제 내역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'neutral.fill.base',
            })}
          >
            <CreditCard
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
                fontWeight: '600',
              })}
            >
              결제 내역
            </span>
          </div>

          {/* 대시보드 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              opacity: 0.38,
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>대시보드</span>
          </div>

          {/* 사용자 관리 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              opacity: 0.38,
            })}
          >
            <Users
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>사용자 관리</span>
          </div>

          {/* 설정 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              opacity: 0.38,
            })}
          >
            <Settings
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>설정</span>
          </div>
        </nav>

        {/* Logout */}
        <div
          className={css({
            padding: '16px 12px',
            borderTop: '1px solid',
            borderColor: 'neutral.border.base',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <LogOut
              size={18}
              className={css({ color: 'critical.icon.base' })}
            />
            <span className={css({ color: 'critical.text.base', fontSize: '14px' })}>로그아웃</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        })}
      >
        {/* Section 1: Plan Selection */}
        <section>
          <h2
            className={css({
              color: 'neutral.text.base',
              fontSize: '20px',
              fontWeight: '700',
              marginBottom: '16px',
            })}
          >
            플랜 선택
          </h2>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            })}
          >
            {/* Free Card */}
            <div
              className={css({
                backgroundColor: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              })}
            >
              <div>
                <p
                  className={css({
                    color: 'neutral.text.base',
                    fontWeight: '700',
                    fontSize: '18px',
                  })}
                >
                  Free
                </p>
                <p
                  className={css({
                    color: 'neutral.text.base',
                    fontWeight: '700',
                    fontSize: '28px',
                    marginTop: '8px',
                  })}
                >
                  ₩0/월
                </p>
              </div>
              <ul className={css({ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 })}>
                <li className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <Check size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                  <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>기본 대시보드</span>
                </li>
                <li className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <Check size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                  <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>사용자 1명</span>
                </li>
                <li className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <Check size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                  <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>5GB 스토리지</span>
                </li>
                <li className={css({ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.38 })}>
                  <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                  <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>고급 분석</span>
                </li>
                <li className={css({ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.38 })}>
                  <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                  <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>API 연동</span>
                </li>
              </ul>
              <button
                className={css({
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  backgroundColor: 'neutral.surface.base',
                  color: 'neutral.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                  opacity: 0.38,
                  cursor: 'not-allowed',
                })}
                disabled
              >
                현재 플랜
              </button>
            </div>

            {/* Pro Card */}
            <div
              className={css({
                border: '1px solid',
                borderColor: 'primary.border.high',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              {/* Banner */}
              <div
                className={css({
                  backgroundColor: 'primary.fill.base',
                  padding: '8px 24px',
                  textAlign: 'center',
                })}
              >
                <span
                  className={css({
                    color: 'inverse.text.base',
                    fontSize: '13px',
                    fontWeight: '700',
                  })}
                >
                  추천
                </span>
              </div>
              <div
                className={css({
                  backgroundColor: 'primary.surface.base',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  flex: 1,
                })}
              >
                <div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' })}>
                    <p
                      className={css({
                        color: 'primary.text.base',
                        fontWeight: '700',
                        fontSize: '18px',
                      })}
                    >
                      Pro
                    </p>
                    <span
                      className={css({
                        backgroundColor: 'primary.fill.base',
                        color: 'inverse.text.base',
                        fontSize: '11px',
                        fontWeight: '600',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                      })}
                    >
                      현재 플랜
                    </span>
                  </div>
                  <p
                    className={css({
                      color: 'primary.text.base',
                      fontWeight: '700',
                      fontSize: '28px',
                    })}
                  >
                    ₩49,000/월
                  </p>
                </div>
                <ul className={css({ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 })}>
                  <li className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
                    <span className={css({ color: 'primary.text.base', fontSize: '14px' })}>고급 대시보드</span>
                  </li>
                  <li className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
                    <span className={css({ color: 'primary.text.base', fontSize: '14px' })}>사용자 10명</span>
                  </li>
                  <li className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
                    <span className={css({ color: 'primary.text.base', fontSize: '14px' })}>100GB 스토리지</span>
                  </li>
                  <li className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
                    <span className={css({ color: 'primary.text.base', fontSize: '14px' })}>고급 분석</span>
                  </li>
                  <li className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
                    <span className={css({ color: 'primary.text.base', fontSize: '14px' })}>API 연동</span>
                  </li>
                  <li className={css({ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.38 })}>
                    <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                    <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>전용 지원</span>
                  </li>
                </ul>
                <button
                  className={css({
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: 'primary.fill.base',
                    color: 'inverse.text.base',
                    fontSize: '14px',
                    fontWeight: '600',
                    opacity: 0.38,
                    cursor: 'not-allowed',
                  })}
                  disabled
                >
                  현재 사용 중
                </button>
                <p
                  className={css({
                    color: 'neutral.text.base',
                    fontSize: '12px',
                    textAlign: 'center',
                    opacity: 0.38,
                  })}
                >
                  다음 결제일: 2025년 9월 1일
                </p>
              </div>
            </div>

            {/* Enterprise Card */}
            <div
              className={css({
                backgroundColor: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              })}
            >
              <div>
                <p
                  className={css({
                    color: 'neutral.text.base',
                    fontWeight: '700',
                    fontSize: '18px',
                  })}
                >
                  Enterprise
                </p>
                <p
                  className={css({
                    color: 'neutral.text.base',
                    fontWeight: '700',
                    fontSize: '28px',
                    marginTop: '8px',
                  })}
                >
                  맞춤 견적
                </p>
              </div>
              <ul className={css({ display: 'flex', flexDirection: 'column', gap: '8px', listStyle: 'none', padding: 0, margin: 0 })}>
                {['무제한 사용자', '무제한 스토리지', '고급 분석', 'API 연동', '전용 지원', 'SLA 보장'].map((feature) => (
                  <li key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                    <Check size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                    <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={css({
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'primary.fill.base',
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

        {/* Section 2: Payment Method */}
        <section
          className={css({
            backgroundColor: 'neutral.surface.base',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2
            className={css({
              color: 'neutral.text.base',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '20px',
            })}
          >
            등록된 결제 수단
          </h2>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' })}>
            {/* Card Art */}
            <div
              className={css({
                backgroundColor: 'neutral.fill.base',
                borderRadius: '8px',
                padding: '16px',
                width: '180px',
                minWidth: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '110px',
              })}
            >
              <CreditCard
                size={24}
                className={css({ color: 'neutral.icon.base', opacity: 0.38 })}
              />
              <p
                className={css({
                  color: 'neutral.text.base',
                  fontWeight: '600',
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                })}
              >
                •••• •••• •••• 4242
              </p>
            </div>

            {/* Card Info */}
            <div className={css({ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <p className={css({ color: 'neutral.text.base', fontWeight: '700', fontSize: '16px' })}>Visa</p>
              <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                <span className={css({ color: 'neutral.text.low', fontSize: '14px' })}>만료일 12/26</span>
                <span
                  className={css({
                    backgroundColor: 'positive.surface.base',
                    border: '1px solid',
                    borderColor: 'positive.border.base',
                    color: 'positive.text.base',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '9999px',
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
                  padding: '8px 16px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.base',
                  fontSize: '14px',
                  fontWeight: '500',
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
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'critical.text.base',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                })}
              >
                삭제
              </button>
            </div>
          </div>

          {/* Warning Banner */}
          <div
            className={css({
              marginTop: '16px',
              backgroundColor: 'warning.surface.base',
              border: '1px solid',
              borderColor: 'warning.border.base',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            })}
          >
            <AlertTriangle
              size={18}
              className={css({ color: 'warning.icon.base', flexShrink: 0 })}
            />
            <p className={css({ color: 'warning.text.base', fontSize: '14px', flex: 1 })}>
              결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.{' '}
              <span
                className={css({
                  color: 'warning.text.base',
                  fontWeight: '700',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                })}
              >
                카드 변경
              </span>
            </p>
          </div>
        </section>

        {/* Section 3: Billing History Table */}
        <section
          className={css({
            backgroundColor: 'neutral.surface.base',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            borderRadius: '12px',
            overflow: 'hidden',
          })}
        >
          <div
            className={css({
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid',
              borderColor: 'neutral.border.base',
            })}
          >
            <h2 className={css({ color: 'neutral.text.base', fontSize: '18px', fontWeight: '700' })}>결제 내역</h2>
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                backgroundColor: 'neutral.surface.transparent',
                color: 'neutral.text.base',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              <Download size={14} className={css({ color: 'neutral.icon.base' })} />
              CSV 내보내기
            </button>
          </div>

          <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
            <thead>
              <tr
                className={css({
                  backgroundColor: 'neutral.canvas.02',
                })}
              >
                {['날짜', '내역', '금액', '상태', '액션'].map((header) => (
                  <th
                    key={header}
                    className={css({
                      padding: '10px 16px',
                      textAlign: 'left',
                      fontSize: '11px',
                      fontWeight: '700',
                      color: 'neutral.text.base',
                      opacity: 0.38,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    })}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-08-01</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (8월)</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'positive.surface.base',
                      border: '1px solid',
                      borderColor: 'positive.border.base',
                      color: 'positive.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 2 - even */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low', backgroundColor: 'neutral.canvas.01' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-07-01</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (7월)</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'positive.surface.base',
                      border: '1px solid',
                      borderColor: 'positive.border.base',
                      color: 'positive.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-06-15</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>추가 사용자 시트</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>₩9,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'positive.surface.base',
                      border: '1px solid',
                      borderColor: 'positive.border.base',
                      color: 'positive.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 4 - even, critical failure row */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low', backgroundColor: 'critical.surface.base' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-06-01</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (6월)</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'critical.fill.base',
                      color: 'inverse.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    결제 실패
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button
                    className={css({
                      border: '1px solid',
                      borderColor: 'critical.border.base',
                      backgroundColor: 'neutral.surface.transparent',
                      color: 'critical.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '4px 12px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                    })}
                  >
                    재시도
                  </button>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-05-28</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (6월) 재시도</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'positive.surface.base',
                      border: '1px solid',
                      borderColor: 'positive.border.base',
                      color: 'positive.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 6 - even */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low', backgroundColor: 'neutral.canvas.01' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-05-01</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (5월)</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'positive.surface.base',
                      border: '1px solid',
                      borderColor: 'positive.border.base',
                      color: 'positive.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 7 - 처리 중 */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-04-01</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (4월)</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'warning.surface.base',
                      border: '1px solid',
                      borderColor: 'warning.border.base',
                      color: 'warning.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    처리 중
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ color: 'neutral.text.base', opacity: 0.38, fontSize: '14px' })}>—</span>
                </td>
              </tr>

              {/* Row 8 - even, 환불 완료 */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low', backgroundColor: 'neutral.canvas.01' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-03-10</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>환불 처리</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>-₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'info.surface.base',
                      border: '1px solid',
                      borderColor: 'info.border.base',
                      color: 'info.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    환불 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 9 */}
              <tr className={css({ borderTop: '1px solid', borderColor: 'neutral.border.low' })}>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>2025-03-01</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>Pro 플랜 (3월)</td>
                <td className={css({ padding: '14px 16px', fontSize: '14px', color: 'neutral.text.base' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span
                    className={css({
                      backgroundColor: 'positive.surface.base',
                      border: '1px solid',
                      borderColor: 'positive.border.base',
                      color: 'positive.text.base',
                      fontSize: '12px',
                      fontWeight: '600',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Section 4: Billing Summary Cards */}
        <section>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            })}
          >
            {/* 이번 달 청구 */}
            <div
              className={css({
                backgroundColor: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <TrendingUp size={24} className={css({ color: 'positive.icon.base' })} />
              <p
                className={css({
                  color: 'neutral.text.base',
                  fontWeight: '700',
                  fontSize: '28px',
                })}
              >
                ₩58,000
              </p>
              <span
                className={css({
                  alignSelf: 'flex-start',
                  backgroundColor: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                })}
              >
                정상 결제
              </span>
              <p className={css({ color: 'neutral.text.low', fontSize: '13px' })}>Pro ₩49,000 + 추가 ₩9,000</p>
            </div>

            {/* 미결제 금액 */}
            <div
              className={css({
                backgroundColor: 'critical.surface.base',
                border: '1px solid',
                borderColor: 'critical.border.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <AlertCircle size={24} className={css({ color: 'critical.icon.base' })} />
              <p
                className={css({
                  color: 'critical.text.base',
                  fontWeight: '700',
                  fontSize: '28px',
                })}
              >
                ₩49,000
              </p>
              <span
                className={css({
                  alignSelf: 'flex-start',
                  backgroundColor: 'critical.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                })}
              >
                미결제
              </span>
              <button
                className={css({
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'critical.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: '4px',
                })}
              >
                지금 결제
              </button>
            </div>

            {/* 다음 결제일 */}
            <div
              className={css({
                backgroundColor: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <Calendar size={24} className={css({ color: 'info.icon.base' })} />
              <p
                className={css({
                  color: 'neutral.text.base',
                  fontWeight: '700',
                  fontSize: '24px',
                })}
              >
                2025년 9월 1일
              </p>
              <span
                className={css({
                  alignSelf: 'flex-start',
                  backgroundColor: 'info.surface.base',
                  border: '1px solid',
                  borderColor: 'info.border.base',
                  color: 'info.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '9999px',
                })}
              >
                예정
              </span>
              <p className={css({ color: 'neutral.text.low', fontSize: '13px' })}>Pro 플랜 월정액 ₩49,000</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
