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
  Download,
  FileText,
  TrendingUp,
  AlertCircle,
  Calendar,
  ReceiptText,
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
          height: '100vh',
          backgroundColor: 'canvas.neutral.02',
          borderRight: '1px solid',
          borderColor: 'border.neutral.low',
          padding: '24px 16px',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '32px',
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
              fontSize: '16px',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            flex: 1,
          })}
        >
          {/* Active: 결제 내역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 12px',
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
                color: 'text.neutral.base',
                fontWeight: '600',
                fontSize: '14px',
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
              padding: '9px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: 'icon.neutral.base', opacity: 0.38 })}
            />
            <span
              className={css({
                color: 'text.neutral.base',
                opacity: 0.38,
                fontSize: '14px',
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
              padding: '9px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Users
              size={18}
              className={css({ color: 'icon.neutral.base', opacity: 0.38 })}
            />
            <span
              className={css({
                color: 'text.neutral.base',
                opacity: 0.38,
                fontSize: '14px',
              })}
            >
              사용자 관리
            </span>
          </div>

          {/* 설정 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '9px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Settings
              size={18}
              className={css({ color: 'icon.neutral.base', opacity: 0.38 })}
            />
            <span
              className={css({
                color: 'text.neutral.base',
                opacity: 0.38,
                fontSize: '14px',
              })}
            >
              설정
            </span>
          </div>
        </nav>

        {/* Logout */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '9px 12px',
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
              color: 'text.critical.base',
              fontSize: '14px',
            })}
          >
            로그아웃
          </span>
        </div>
      </aside>

      {/* Main content */}
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
              color: 'text.neutral.base',
              fontSize: '20px',
              fontWeight: '700',
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
            {/* Free 카드 */}
            <div
              className={css({
                backgroundColor: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '12px',
                overflow: 'hidden',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              })}
            >
              <div>
                <p
                  className={css({
                    color: 'text.neutral.base',
                    fontWeight: '700',
                    fontSize: '18px',
                    marginBottom: '8px',
                  })}
                >
                  Free
                </p>
                <p
                  className={css({
                    color: 'text.neutral.base',
                    fontWeight: '700',
                    fontSize: '28px',
                  })}
                >
                  ₩0/월
                </p>
              </div>
              <ul
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                })}
              >
                {['기본 대시보드', '5개 프로젝트', '1GB 스토리지'].map((feat) => (
                  <li
                    key={feat}
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    })}
                  >
                    <Check
                      size={16}
                      className={css({ color: 'icon.positive.base', flexShrink: 0 })}
                    />
                    <span
                      className={css({ color: 'text.neutral.base', fontSize: '14px' })}
                    >
                      {feat}
                    </span>
                  </li>
                ))}
                {['우선 지원', '고급 분석'].map((feat) => (
                  <li
                    key={feat}
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      opacity: 0.38,
                    })}
                  >
                    <X size={16} className={css({ color: 'icon.neutral.base', flexShrink: 0 })} />
                    <span
                      className={css({ color: 'text.neutral.base', fontSize: '14px' })}
                    >
                      {feat}
                    </span>
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

            {/* Pro 카드 */}
            <div
              className={css({
                backgroundColor: 'surface.primary.base',
                border: '1px solid',
                borderColor: 'border.primary.high',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              {/* 배너 */}
              <div
                className={css({
                  backgroundColor: 'fill.primary.base',
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
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                })}
              >
                <div>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '8px',
                    })}
                  >
                    <p
                      className={css({
                        color: 'text.primary.base',
                        fontWeight: '700',
                        fontSize: '18px',
                      })}
                    >
                      Pro
                    </p>
                    <span
                      className={css({
                        backgroundColor: 'fill.primary.base',
                        color: 'inverse.text.base',
                        fontSize: '11px',
                        fontWeight: '700',
                        padding: '2px 8px',
                        borderRadius: '999px',
                      })}
                    >
                      현재 플랜
                    </span>
                  </div>
                  <p
                    className={css({
                      color: 'text.primary.base',
                      fontWeight: '700',
                      fontSize: '28px',
                    })}
                  >
                    ₩49,000/월
                  </p>
                </div>

                <ul
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                  })}
                >
                  {['무제한 프로젝트', '우선 지원', '50GB 스토리지', '고급 분석', '팀 협업 도구'].map(
                    (feat) => (
                      <li
                        key={feat}
                        className={css({
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        })}
                      >
                        <Check
                          size={16}
                          className={css({ color: 'icon.primary.base', flexShrink: 0 })}
                        />
                        <span
                          className={css({ color: 'text.neutral.base', fontSize: '14px' })}
                        >
                          {feat}
                        </span>
                      </li>
                    )
                  )}
                  <li
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      opacity: 0.38,
                    })}
                  >
                    <X size={16} className={css({ color: 'icon.neutral.base', flexShrink: 0 })} />
                    <span className={css({ color: 'text.neutral.base', fontSize: '14px' })}>
                      전용 서버
                    </span>
                  </li>
                </ul>

                <button
                  className={css({
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: 'fill.primary.base',
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
                    color: 'text.neutral.base',
                    fontSize: '12px',
                    opacity: 0.38,
                    textAlign: 'center',
                  })}
                >
                  다음 결제일: 2025년 9월 1일
                </p>
              </div>
            </div>

            {/* Enterprise 카드 */}
            <div
              className={css({
                backgroundColor: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '12px',
                overflow: 'hidden',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              })}
            >
              <div>
                <p
                  className={css({
                    color: 'text.neutral.base',
                    fontWeight: '700',
                    fontSize: '18px',
                    marginBottom: '8px',
                  })}
                >
                  Enterprise
                </p>
                <p
                  className={css({
                    color: 'text.neutral.base',
                    fontWeight: '700',
                    fontSize: '28px',
                  })}
                >
                  맞춤 견적
                </p>
              </div>
              <ul
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                })}
              >
                {[
                  '무제한 프로젝트',
                  '전담 지원',
                  '무제한 스토리지',
                  '고급 분석',
                  '전용 서버',
                  'SLA 보장',
                ].map((feat) => (
                  <li
                    key={feat}
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    })}
                  >
                    <Check
                      size={16}
                      className={css({ color: 'icon.positive.base', flexShrink: 0 })}
                    />
                    <span
                      className={css({ color: 'text.neutral.base', fontSize: '14px' })}
                    >
                      {feat}
                    </span>
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

        {/* Section 2: 결제 수단 */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2
            className={css({
              color: 'text.neutral.base',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '20px',
            })}
          >
            등록된 결제 수단
          </h2>

          {/* 카드 표시 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '16px',
            })}
          >
            {/* 카드 아트 */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.base',
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
                size={22}
                className={css({ color: 'icon.neutral.base', opacity: 0.38 })}
              />
              <p
                className={css({
                  color: 'text.neutral.base',
                  fontWeight: '700',
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                })}
              >
                •••• •••• •••• 4242
              </p>
            </div>

            {/* 카드 정보 */}
            <div
              className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                flex: 1,
              })}
            >
              <p
                className={css({
                  color: 'text.neutral.base',
                  fontWeight: '700',
                  fontSize: '16px',
                })}
              >
                Visa
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                })}
              >
                <span
                  className={css({
                    color: 'text.neutral.low',
                    fontSize: '14px',
                  })}
                >
                  만료 12/26
                </span>
                <span
                  className={css({
                    backgroundColor: 'surface.positive.base',
                    border: '1px solid',
                    borderColor: 'border.positive.base',
                    color: 'text.positive.base',
                    fontSize: '11px',
                    fontWeight: '600',
                    padding: '2px 8px',
                    borderRadius: '999px',
                  })}
                >
                  유효
                </span>
              </div>
            </div>

            {/* 버튼들 */}
            <div
              className={css({
                display: 'flex',
                gap: '8px',
              })}
            >
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

          {/* 만료 임박 경고 배너 */}
          <div
            className={css({
              backgroundColor: 'surface.warning.base',
              border: '1px solid',
              borderColor: 'border.warning.base',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            })}
          >
            <AlertTriangle
              size={18}
              className={css({ color: 'icon.warning.base', flexShrink: 0 })}
            />
            <p
              className={css({
                color: 'text.warning.base',
                fontSize: '14px',
                flex: 1,
              })}
            >
              결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
            </p>
            <button
              className={css({
                color: 'text.warning.base',
                fontSize: '14px',
                fontWeight: '600',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                textDecoration: 'underline',
                flexShrink: 0,
              })}
            >
              카드 변경
            </button>
          </div>
        </section>

        {/* Section 3: 결제 내역 테이블 */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
            overflow: 'hidden',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '20px',
            })}
          >
            <h2
              className={css({
                color: 'text.neutral.base',
                fontSize: '18px',
                fontWeight: '700',
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
              <Download size={15} className={css({ color: 'icon.neutral.base' })} />
              CSV 내보내기
            </button>
          </div>

          <table
            className={css({
              width: '100%',
              borderCollapse: 'collapse',
            })}
          >
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
                      padding: '10px 14px',
                      textAlign: 'left',
                      color: 'text.neutral.base',
                      opacity: 0.38,
                      fontSize: '11px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
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
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-08-01</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (8월)</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '12px 14px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                    <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className={css({ backgroundColor: 'canvas.neutral.01' })}>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-07-01</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (7월)</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '12px 14px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                    <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-06-15</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>추가 사용자 시트</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>₩9,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '12px 14px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                    <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 4 — 결제 실패 (critical row bg) */}
              <tr className={css({ backgroundColor: 'surface.critical.base' })}>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-06-01</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (6월)</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'fill.critical.base', color: 'inverse.text.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>결제 실패</span>
                </td>
                <td className={css({ padding: '12px 14px' })}>
                  <button className={css({ padding: '6px 12px', borderRadius: '6px', border: '1px solid', borderColor: 'border.critical.base', backgroundColor: 'surface.neutral.transparent', color: 'text.critical.base', fontSize: '13px', fontWeight: '500', cursor: 'pointer' })}>
                    재시도
                  </button>
                </td>
              </tr>

              {/* Row 5 */}
              <tr>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-05-28</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (6월) 재시도</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '12px 14px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                    <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 6 */}
              <tr className={css({ backgroundColor: 'canvas.neutral.01' })}>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-05-01</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (5월)</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '12px 14px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                    <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 7 — 처리 중 (warning badge) */}
              <tr>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-04-01</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (4월)</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'surface.warning.base', border: '1px solid', borderColor: 'border.warning.base', color: 'text.warning.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>처리 중</span>
                </td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', opacity: 0.38, fontSize: '14px' })}>—</td>
              </tr>

              {/* Row 8 — 환불 완료 (info badge) */}
              <tr className={css({ backgroundColor: 'canvas.neutral.01' })}>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-03-10</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>환불 처리</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>-₩49,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'surface.info.base', border: '1px solid', borderColor: 'border.info.base', color: 'text.info.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>환불 완료</span>
                </td>
                <td className={css({ padding: '12px 14px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                    <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 9 */}
              <tr>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>2025-03-01</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>Pro 플랜 (3월)</td>
                <td className={css({ padding: '12px 14px', color: 'text.neutral.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '12px 14px' })}>
                  <span className={css({ backgroundColor: 'surface.positive.base', border: '1px solid', borderColor: 'border.positive.base', color: 'text.positive.base', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '999px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '12px 14px' })}>
                  <button className={css({ padding: '6px', borderRadius: '6px', border: 'none', backgroundColor: 'surface.neutral.transparent', cursor: 'pointer' })}>
                    <FileText size={16} className={css({ color: 'icon.neutral.base' })} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
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
              <TrendingUp size={22} className={css({ color: 'icon.positive.base' })} />
              <p
                className={css({
                  color: 'text.neutral.base',
                  fontWeight: '700',
                  fontSize: '28px',
                })}
              >
                ₩58,000
              </p>
              <span
                className={css({
                  backgroundColor: 'surface.positive.base',
                  border: '1px solid',
                  borderColor: 'border.positive.base',
                  color: 'text.positive.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  alignSelf: 'flex-start',
                })}
              >
                정상 결제
              </span>
              <p
                className={css({
                  color: 'text.neutral.low',
                  fontSize: '13px',
                })}
              >
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
              <AlertCircle size={22} className={css({ color: 'icon.critical.base' })} />
              <p
                className={css({
                  color: 'text.critical.base',
                  fontWeight: '700',
                  fontSize: '28px',
                })}
              >
                ₩49,000
              </p>
              <span
                className={css({
                  backgroundColor: 'fill.critical.base',
                  color: 'inverse.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  alignSelf: 'flex-start',
                })}
              >
                미결제
              </span>
              <button
                className={css({
                  padding: '10px 16px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'fill.critical.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginTop: 'auto',
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
              <Calendar size={22} className={css({ color: 'icon.info.base' })} />
              <p
                className={css({
                  color: 'text.neutral.base',
                  fontWeight: '700',
                  fontSize: '22px',
                })}
              >
                2025년 9월 1일
              </p>
              <span
                className={css({
                  backgroundColor: 'surface.info.base',
                  border: '1px solid',
                  borderColor: 'border.info.base',
                  color: 'text.info.base',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '3px 10px',
                  borderRadius: '999px',
                  alignSelf: 'flex-start',
                })}
              >
                예정
              </span>
              <p
                className={css({
                  color: 'text.neutral.low',
                  fontSize: '13px',
                })}
              >
                Pro 플랜 월정액 ₩49,000
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
