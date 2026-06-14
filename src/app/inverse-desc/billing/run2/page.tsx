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
        backgroundColor: 'canvas.neutral.01',
      })}
    >
      {/* Sidebar */}
      <aside
        className={`dark ${css({
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'canvas.neutral.01',
          borderRight: '1px solid',
          borderRightColor: 'border.neutral.base',
          padding: '24px 16px',
          gap: '8px',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            paddingBottom: '24px',
            paddingLeft: '8px',
          })}
        >
          <LayoutDashboard
            size={24}
            className={css({ color: 'icon.neutral.base' })}
          />
          <span
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'text.neutral.base',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav menu */}
        <nav className={css({ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 })}>
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
            <CreditCard
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
            <span
              className={css({
                fontSize: '14px',
                fontWeight: '600',
                color: 'text.neutral.base',
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
              cursor: 'pointer',
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: 'icon.neutral.base', opacity: 0.6 })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'text.neutral.low',
              })}
            >
              대시보드
            </span>
          </div>

          {/* 사용자 관리 */}
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
            <Users
              size={18}
              className={css({ color: 'icon.neutral.base', opacity: 0.6 })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'text.neutral.low',
              })}
            >
              사용자 관리
            </span>
          </div>

          {/* 설정 (비활성) */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            <Settings
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'text.neutral.base',
              })}
            >
              설정
            </span>
          </div>
        </nav>

        {/* 로그아웃 */}
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
            className={css({ color: 'icon.critical.base' })}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'text.critical.base',
            })}
          >
            로그아웃
          </span>
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
        {/* Section 1: 플랜 선택 */}
        <section>
          <h2
            className={css({
              fontSize: '20px',
              fontWeight: '700',
              color: 'text.neutral.base',
              marginBottom: '20px',
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
                <span
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  Free
                </span>
              </div>
              <div>
                <span
                  className={css({
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  ₩0/월
                </span>
              </div>
              <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px' })}>
                {['기본 대시보드', '사용자 1명', '월 100건 처리'].map((feature) => (
                  <li
                    key={feature}
                    className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
                  >
                    <Check
                      size={16}
                      className={css({ color: 'icon.positive.base', flexShrink: 0 })}
                    />
                    <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                      {feature}
                    </span>
                  </li>
                ))}
                {['고급 분석', '우선 지원'].map((feature) => (
                  <li
                    key={feature}
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      opacity: 0.38,
                    })}
                  >
                    <X
                      size={16}
                      className={css({ color: 'icon.neutral.base', flexShrink: 0 })}
                    />
                    <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={css({
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  color: 'text.neutral.base',
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
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'border.primary.high',
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
                <span
                  className={css({
                    fontSize: '13px',
                    fontWeight: '700',
                    color: 'inverse.text.base',
                  })}
                >
                  추천
                </span>
              </div>
              <div
                className={css({
                  backgroundColor: 'surface.primary.base',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  flex: 1,
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  })}
                >
                  <span
                    className={css({
                      fontSize: '18px',
                      fontWeight: '700',
                      color: 'text.primary.base',
                    })}
                  >
                    Pro
                  </span>
                  <span
                    className={css({
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'fill.primary.base',
                      color: 'inverse.text.base',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                    })}
                  >
                    현재 플랜
                  </span>
                </div>
                <div>
                  <span
                    className={css({
                      fontSize: '28px',
                      fontWeight: '700',
                      color: 'text.primary.base',
                    })}
                  >
                    ₩49,000/월
                  </span>
                </div>
                <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px' })}>
                  {[
                    '전체 대시보드',
                    '사용자 10명',
                    '무제한 처리',
                    '고급 분석',
                    '우선 지원',
                  ].map((feature) => (
                    <li
                      key={feature}
                      className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
                    >
                      <Check
                        size={16}
                        className={css({ color: 'icon.primary.base', flexShrink: 0 })}
                      />
                      <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  <li
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      opacity: 0.38,
                    })}
                  >
                    <X
                      size={16}
                      className={css({ color: 'icon.neutral.base', flexShrink: 0 })}
                    />
                    <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                      전용 계정 매니저
                    </span>
                  </li>
                </ul>
                <button
                  className={css({
                    padding: '10px 16px',
                    borderRadius: '8px',
                    backgroundColor: 'fill.primary.base',
                    color: 'inverse.text.base',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'not-allowed',
                    opacity: 0.38,
                    border: 'none',
                  })}
                  disabled
                >
                  현재 사용 중
                </button>
                <p
                  className={css({
                    fontSize: '12px',
                    color: 'text.neutral.low',
                    opacity: 0.38,
                    textAlign: 'center',
                  })}
                >
                  다음 결제일: 2025년 9월 1일
                </p>
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
                <span
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  Enterprise
                </span>
              </div>
              <div>
                <span
                  className={css({
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  맞춤 견적
                </span>
              </div>
              <ul className={css({ display: 'flex', flexDirection: 'column', gap: '10px' })}>
                {[
                  '전체 대시보드',
                  '무제한 사용자',
                  '무제한 처리',
                  '고급 분석',
                  '우선 지원',
                  '전용 계정 매니저',
                ].map((feature) => (
                  <li
                    key={feature}
                    className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
                  >
                    <Check
                      size={16}
                      className={css({ color: 'icon.positive.base', flexShrink: 0 })}
                    />
                    <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={css({
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'fill.primary.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                })}
              >
                영업팀 문의
              </button>
            </div>
          </div>
        </section>

        {/* Section 2: 결제 수단 */}
        <section>
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
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '700',
                color: 'text.neutral.base',
              })}
            >
              등록된 결제 수단
            </h2>

            {/* Card Info Row */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
              })}
            >
              {/* Card Art */}
              <div
                className={css({
                  width: '160px',
                  height: '100px',
                  backgroundColor: 'surface.neutral.base',
                  borderRadius: '8px',
                  padding: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  flexShrink: 0,
                })}
              >
                <CreditCard
                  size={20}
                  className={css({ color: 'icon.neutral.base', opacity: 0.38 })}
                />
                <span
                  className={css({
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'text.neutral.base',
                    letterSpacing: '2px',
                  })}
                >
                  •••• •••• •••• 4242
                </span>
              </div>

              {/* Card Details */}
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  flex: 1,
                })}
              >
                <span
                  className={css({
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  Visa
                </span>
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <span className={css({ fontSize: '14px', color: 'text.neutral.low' })}>
                    12/26
                  </span>
                  <span
                    className={css({
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'surface.positive.base',
                      border: '1px solid',
                      borderColor: 'border.positive.base',
                      color: 'text.positive.base',
                      padding: '2px 8px',
                      borderRadius: '9999px',
                    })}
                  >
                    유효
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className={css({ display: 'flex', gap: '8px' })}>
                <button
                  className={css({
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.transparent',
                    color: 'text.neutral.base',
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
                    backgroundColor: 'surface.neutral.transparent',
                    color: 'text.critical.base',
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
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: 'surface.warning.base',
                border: '1px solid',
                borderColor: 'border.warning.base',
                borderRadius: '8px',
                padding: '12px 16px',
              })}
            >
              <AlertTriangle
                size={18}
                className={css({ color: 'icon.warning.base', flexShrink: 0 })}
              />
              <span className={css({ fontSize: '14px', color: 'text.neutral.base', flex: 1 })}>
                결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
              </span>
              <button
                className={css({
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'text.warning.base',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textDecoration: 'underline',
                })}
              >
                카드 변경
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: 결제 내역 테이블 */}
        <section>
          <div
            className={css({
              backgroundColor: 'canvas.neutral.02',
              border: '1px solid',
              borderColor: 'border.neutral.base',
              borderRadius: '12px',
              overflow: 'hidden',
            })}
          >
            {/* Table Header Row */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid',
                borderBottomColor: 'border.neutral.low',
              })}
            >
              <h2
                className={css({
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'text.neutral.base',
                })}
              >
                결제 내역
              </h2>
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
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                })}
              >
                <Download size={16} className={css({ color: 'icon.neutral.base' })} />
                CSV 내보내기
              </button>
            </div>

            {/* Table */}
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr
                  className={css({
                    backgroundColor: 'canvas.neutral.01',
                  })}
                >
                  {['날짜', '내역', '금액', '상태', '액션'].map((header) => (
                    <th
                      key={header}
                      className={css({
                        padding: '12px 24px',
                        textAlign: 'left',
                        fontSize: '11px',
                        fontWeight: '600',
                        color: 'text.neutral.base',
                        opacity: 0.38,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        borderBottom: '1px solid',
                        borderBottomColor: 'border.neutral.low',
                      })}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1 */}
                <tr>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-08-01</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>Pro 플랜 (8월)</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>₩49,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', padding: '3px 10px', borderRadius: '9999px' })}>결제 완료</span>
                  </td>
                  <td className={css({ padding: '14px 24px' })}>
                    <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                      <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 2 */}
                <tr className={css({ backgroundColor: 'canvas.neutral.01' })}>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-07-01</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>Pro 플랜 (7월)</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>₩49,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', padding: '3px 10px', borderRadius: '9999px' })}>결제 완료</span>
                  </td>
                  <td className={css({ padding: '14px 24px' })}>
                    <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                      <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 3 */}
                <tr>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-06-15</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>추가 사용자 시트</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>₩9,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', padding: '3px 10px', borderRadius: '9999px' })}>결제 완료</span>
                  </td>
                  <td className={css({ padding: '14px 24px' })}>
                    <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                      <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 4: 결제 실패 */}
                <tr
                  className={css({ backgroundColor: 'surface.critical.base' })}
                >
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-06-01</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>Pro 플랜 (6월)</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>₩49,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'fill.critical.base', color: 'inverse.text.base', padding: '3px 10px', borderRadius: '9999px' })}>결제 실패</span>
                  </td>
                  <td className={css({ padding: '14px 24px' })}>
                    <button className={css({ padding: '6px 12px', borderRadius: '6px', border: '1px solid', borderColor: 'border.critical.base', backgroundColor: 'surface.neutral.transparent', color: 'text.critical.base', fontSize: '13px', fontWeight: '500', cursor: 'pointer' })}>
                      재시도
                    </button>
                  </td>
                </tr>

                {/* Row 5 */}
                <tr>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-05-28</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>Pro 플랜 (6월) 재시도</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>₩49,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', padding: '3px 10px', borderRadius: '9999px' })}>결제 완료</span>
                  </td>
                  <td className={css({ padding: '14px 24px' })}>
                    <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                      <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 6 */}
                <tr className={css({ backgroundColor: 'canvas.neutral.01' })}>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-05-01</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>Pro 플랜 (5월)</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>₩49,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', padding: '3px 10px', borderRadius: '9999px' })}>결제 완료</span>
                  </td>
                  <td className={css({ padding: '14px 24px' })}>
                    <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                      <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 7: 처리 중 */}
                <tr>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-04-01</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>Pro 플랜 (4월)</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>₩49,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'surface.warning.base', border: '1px solid', borderColor: 'border.warning.base', color: 'text.warning.base', padding: '3px 10px', borderRadius: '9999px' })}>처리 중</span>
                  </td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.low' })}>—</td>
                </tr>

                {/* Row 8: 환불 완료 */}
                <tr className={css({ backgroundColor: 'canvas.neutral.01' })}>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-03-10</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>환불 처리</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>-₩49,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'surface.info.base', border: '1px solid', borderColor: 'border.info.base', color: 'text.info.base', padding: '3px 10px', borderRadius: '9999px' })}>환불 완료</span>
                  </td>
                  <td className={css({ padding: '14px 24px' })}>
                    <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                      <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 9 */}
                <tr>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>2025-03-01</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>Pro 플랜 (3월)</td>
                  <td className={css({ padding: '14px 24px', fontSize: '14px', color: 'text.neutral.base' })}>₩49,000</td>
                  <td className={css({ padding: '14px 24px' })}>
                    <span className={css({ fontSize: '12px', fontWeight: '600', backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', padding: '3px 10px', borderRadius: '9999px' })}>결제 완료</span>
                  </td>
                  <td className={css({ padding: '14px 24px' })}>
                    <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                      <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: 청구 요약 카드 */}
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
              <TrendingUp
                size={24}
                className={css({ color: 'icon.positive.base' })}
              />
              <div>
                <span
                  className={css({
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  ₩58,000
                </span>
              </div>
              <div>
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'surface.positive.base',
                    border: '1px solid',
                    borderColor: 'border.positive.base',
                    color: 'text.positive.base',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                  })}
                >
                  정상 결제
                </span>
              </div>
              <p className={css({ fontSize: '13px', color: 'text.neutral.low' })}>
                Pro ₩49,000 + 추가 ₩9,000
              </p>
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
              <AlertCircle
                size={24}
                className={css({ color: 'icon.critical.base' })}
              />
              <div>
                <span
                  className={css({
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'text.critical.base',
                  })}
                >
                  ₩49,000
                </span>
              </div>
              <div>
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'fill.critical.base',
                    color: 'inverse.text.base',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                  })}
                >
                  미결제
                </span>
              </div>
              <button
                className={css({
                  padding: '10px 16px',
                  borderRadius: '8px',
                  backgroundColor: 'fill.critical.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  border: 'none',
                  marginTop: '4px',
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
              <Calendar
                size={24}
                className={css({ color: 'icon.info.base' })}
              />
              <div>
                <span
                  className={css({
                    fontSize: '22px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  2025년 9월 1일
                </span>
              </div>
              <div>
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'surface.info.base',
                    border: '1px solid',
                    borderColor: 'border.info.base',
                    color: 'text.info.base',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                  })}
                >
                  예정
                </span>
              </div>
              <p className={css({ fontSize: '13px', color: 'text.neutral.low' })}>
                Pro 플랜 월정액 ₩49,000
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
