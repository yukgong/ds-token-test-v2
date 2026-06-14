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
  TrendingUp,
  Calendar,
  Download,
  FileText,
  RotateCcw,
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
      {/* Sidebar */}
      <aside
        className={`dark ${css({
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'neutral.canvas.03',
          height: '100vh',
          overflow: 'hidden',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '24px 20px',
          })}
        >
          <LayoutDashboard
            size={24}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              color: 'neutral.text.base',
              fontWeight: 700,
              fontSize: '18px',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Navigation */}
        <nav
          className={css({
            flex: 1,
            padding: '8px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          })}
        >
          {/* Active: 결제 내역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'neutral.fill.base',
              cursor: 'pointer',
            })}
          >
            <CreditCard
              size={18}
              className={css({ color: 'inverse.icon.base' })}
            />
            <span
              className={css({
                color: 'inverse.text.base',
                fontWeight: 500,
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
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                color: 'neutral.text.base',
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
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Users
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
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
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
              })}
            >
              설정
            </span>
          </div>
        </nav>

        {/* 로그아웃 */}
        <div
          className={css({
            padding: '16px 12px',
            borderTop: '1px solid',
            borderTopColor: 'neutral.border.base',
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
            <span
              className={css({
                color: 'critical.text.base',
                fontSize: '14px',
              })}
            >
              로그아웃
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={css({
          flex: 1,
          overflow: 'auto',
          backgroundColor: 'neutral.canvas.01',
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
              color: 'neutral.text.base',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '20px',
            })}
          >
            플랜 선택
          </h2>
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '24px',
            })}
          >
            {/* Free 카드 */}
            <div
              className={css({
                backgroundColor: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              <div
                className={css({
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  flex: 1,
                })}
              >
                <div>
                  <p
                    className={css({
                      color: 'neutral.text.base',
                      fontWeight: 700,
                      fontSize: '18px',
                    })}
                  >
                    Free
                  </p>
                  <p
                    className={css({
                      color: 'neutral.text.base',
                      fontWeight: 700,
                      fontSize: '28px',
                      marginTop: '8px',
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
                  {['프로젝트 3개', '팀원 2명', '기본 분석'].map((feat) => (
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
                        className={css({ color: 'positive.icon.base', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          color: 'neutral.text.base',
                          fontSize: '14px',
                        })}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                  {['고급 분석', '우선 지원'].map((feat) => (
                    <li
                      key={feat}
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        opacity: 0.38,
                      })}
                    >
                      <X
                        size={16}
                        className={css({ color: 'neutral.icon.base', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          color: 'neutral.text.base',
                          fontSize: '14px',
                        })}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={css({
                  padding: '0 24px 24px',
                })}
              >
                <button
                  className={css({
                    width: '100%',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'not-allowed',
                    opacity: 0.38,
                  })}
                  disabled
                >
                  현재 플랜
                </button>
              </div>
            </div>

            {/* Pro 카드 */}
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
              {/* 추천 배너 */}
              <div
                className={css({
                  backgroundColor: 'primary.fill.base',
                  padding: '8px 16px',
                  textAlign: 'center',
                })}
              >
                <span
                  className={css({
                    color: 'inverse.text.base',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  })}
                >
                  추천
                </span>
              </div>
              <div
                className={css({
                  backgroundColor: 'primary.surface.base',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1,
                })}
              >
                <div
                  className={css({
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    flex: 1,
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
                          color: 'primary.text.base',
                          fontWeight: 700,
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
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: '99px',
                        })}
                      >
                        현재 플랜
                      </span>
                    </div>
                    <p
                      className={css({
                        color: 'primary.text.base',
                        fontWeight: 700,
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
                    {[
                      '프로젝트 무제한',
                      '팀원 20명',
                      '고급 분석',
                      '우선 지원',
                      'API 접근',
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
                          className={css({ color: 'primary.icon.base', flexShrink: 0 })}
                        />
                        <span
                          className={css({
                            color: 'neutral.text.base',
                            fontSize: '14px',
                          })}
                        >
                          {feat}
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
                        className={css({ color: 'neutral.icon.base', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          color: 'neutral.text.base',
                          fontSize: '14px',
                        })}
                      >
                        전담 매니저
                      </span>
                    </li>
                  </ul>
                </div>
                <div
                  className={css({
                    padding: '0 24px 16px',
                  })}
                >
                  <button
                    className={css({
                      width: '100%',
                      padding: '10px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: 'primary.fill.base',
                      color: 'inverse.text.base',
                      fontSize: '14px',
                      fontWeight: 500,
                      cursor: 'not-allowed',
                      opacity: 0.38,
                    })}
                    disabled
                  >
                    현재 사용 중
                  </button>
                </div>
                <p
                  className={css({
                    padding: '0 24px 24px',
                    color: 'neutral.text.base',
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
                backgroundColor: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              <div
                className={css({
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  flex: 1,
                })}
              >
                <div>
                  <p
                    className={css({
                      color: 'neutral.text.base',
                      fontWeight: 700,
                      fontSize: '18px',
                    })}
                  >
                    Enterprise
                  </p>
                  <p
                    className={css({
                      color: 'neutral.text.base',
                      fontWeight: 700,
                      fontSize: '28px',
                      marginTop: '8px',
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
                    '프로젝트 무제한',
                    '팀원 무제한',
                    '고급 분석',
                    '우선 지원',
                    'API 접근',
                    '전담 매니저',
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
                        className={css({ color: 'positive.icon.base', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          color: 'neutral.text.base',
                          fontSize: '14px',
                        })}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={css({
                  padding: '0 24px 24px',
                })}
              >
                <button
                  className={css({
                    width: '100%',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: 'primary.fill.base',
                    color: 'inverse.text.base',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  })}
                >
                  영업팀 문의
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 결제 수단 */}
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
              fontWeight: 700,
              marginBottom: '20px',
            })}
          >
            등록된 결제 수단
          </h2>

          {/* 카드 정보 */}
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
                width: '180px',
                height: '110px',
                backgroundColor: 'neutral.canvas.02',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexShrink: 0,
              })}
            >
              <CreditCard
                size={24}
                className={css({ color: 'neutral.icon.base', opacity: 0.38 })}
              />
              <span
                className={css({
                  color: 'neutral.text.base',
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                })}
              >
                •••• •••• •••• 4242
              </span>
            </div>

            {/* 카드 정보 */}
            <div
              className={css({
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
              })}
            >
              <span
                className={css({
                  color: 'neutral.text.base',
                  fontWeight: 700,
                  fontSize: '16px',
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
                <span
                  className={css({
                    color: 'neutral.text.low',
                    fontSize: '14px',
                  })}
                >
                  만료일 12/26
                </span>
                <span
                  className={css({
                    backgroundColor: 'positive.surface.base',
                    border: '1px solid',
                    borderColor: 'positive.border.base',
                    color: 'positive.text.base',
                    fontSize: '12px',
                    fontWeight: 500,
                    padding: '2px 8px',
                    borderRadius: '99px',
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
                  borderColor: 'neutral.border.base',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.base',
                  fontSize: '14px',
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
            <span
              className={css({
                color: 'warning.text.base',
                fontSize: '14px',
                flex: 1,
              })}
            >
              결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
            </span>
            <button
              className={css({
                border: 'none',
                backgroundColor: 'neutral.surface.transparent',
                color: 'warning.text.base',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                textDecoration: 'underline',
              })}
            >
              카드 변경
            </button>
          </div>
        </section>

        {/* Section 3: 결제 내역 테이블 */}
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
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px',
              borderBottom: '1px solid',
              borderBottomColor: 'neutral.border.base',
            })}
          >
            <h2
              className={css({
                color: 'neutral.text.base',
                fontSize: '18px',
                fontWeight: 700,
              })}
            >
              결제 내역
            </h2>
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                backgroundColor: 'neutral.surface.transparent',
                color: 'neutral.text.base',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              <Download size={16} className={css({ color: 'neutral.icon.base' })} />
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
                  backgroundColor: 'neutral.canvas.01',
                })}
              >
                {['날짜', '내역', '금액', '상태', '액션'].map((h) => (
                  <th
                    key={h}
                    className={css({
                      padding: '12px 16px',
                      textAlign: 'left',
                      color: 'neutral.text.base',
                      fontSize: '12px',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      opacity: 0.38,
                    })}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1 - 결제 완료 */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-08-01</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>Pro 플랜 (8월)</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '6px', borderRadius: '6px', color: 'neutral.icon.base' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 2 - 결제 완료 (even) */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                  backgroundColor: 'neutral.canvas.01',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-07-01</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>Pro 플랜 (7월)</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '6px', borderRadius: '6px', color: 'neutral.icon.base' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 3 - 결제 완료 */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-06-15</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>추가 사용자 시트</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>₩9,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '6px', borderRadius: '6px', color: 'neutral.icon.base' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 4 - 결제 실패 (even + critical bg) */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                  backgroundColor: 'critical.surface.base',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-06-01</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>Pro 플랜 (6월)</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'critical.fill.base', border: '1px solid', borderColor: 'critical.border.base', color: 'inverse.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>결제 실패</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid', borderColor: 'critical.border.base', backgroundColor: 'neutral.surface.transparent', color: 'critical.text.base', fontSize: '13px', fontWeight: 500, padding: '5px 10px', borderRadius: '6px', cursor: 'pointer' })}>
                    <RotateCcw size={14} className={css({ color: 'critical.icon.base' })} />
                    재시도
                  </button>
                </td>
              </tr>

              {/* Row 5 - 결제 완료 */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-05-28</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>Pro 플랜 (6월) 재시도</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '6px', borderRadius: '6px', color: 'neutral.icon.base' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 6 - 결제 완료 (even) */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                  backgroundColor: 'neutral.canvas.01',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-05-01</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>Pro 플랜 (5월)</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '6px', borderRadius: '6px', color: 'neutral.icon.base' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 7 - 처리 중 */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-04-01</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>Pro 플랜 (4월)</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'warning.surface.base', border: '1px solid', borderColor: 'warning.border.base', color: 'warning.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>처리 중</span>
                </td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.low', fontSize: '14px' })}>—</td>
              </tr>

              {/* Row 8 - 환불 완료 (even) */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                  backgroundColor: 'neutral.canvas.01',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-03-10</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>환불 처리</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>-₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'info.surface.base', border: '1px solid', borderColor: 'info.border.base', color: 'info.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>환불 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '6px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                  </button>
                </td>
              </tr>

              {/* Row 9 - 결제 완료 */}
              <tr
                className={css({
                  borderTop: '1px solid',
                  borderTopColor: 'neutral.border.low',
                })}
              >
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>2025-03-01</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>Pro 플랜 (3월)</td>
                <td className={css({ padding: '14px 16px', color: 'neutral.text.base', fontSize: '14px' })}>₩49,000</td>
                <td className={css({ padding: '14px 16px' })}>
                  <span className={css({ backgroundColor: 'positive.surface.base', border: '1px solid', borderColor: 'positive.border.base', color: 'positive.text.base', fontSize: '12px', fontWeight: 500, padding: '3px 10px', borderRadius: '99px' })}>결제 완료</span>
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <button className={css({ border: 'none', backgroundColor: 'neutral.surface.transparent', cursor: 'pointer', padding: '6px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
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
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '24px',
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
              <TrendingUp
                size={24}
                className={css({ color: 'positive.icon.base' })}
              />
              <p
                className={css({
                  color: 'neutral.text.base',
                  fontWeight: 700,
                  fontSize: '28px',
                })}
              >
                ₩58,000
              </p>
              <span
                className={css({
                  backgroundColor: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '3px 10px',
                  borderRadius: '99px',
                  alignSelf: 'flex-start',
                })}
              >
                정상 결제
              </span>
              <p
                className={css({
                  color: 'neutral.text.low',
                  fontSize: '13px',
                })}
              >
                Pro ₩49,000 + 추가 ₩9,000
              </p>
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
              <AlertCircle
                size={24}
                className={css({ color: 'critical.icon.base' })}
              />
              <p
                className={css({
                  color: 'critical.text.base',
                  fontWeight: 700,
                  fontSize: '28px',
                })}
              >
                ₩49,000
              </p>
              <span
                className={css({
                  backgroundColor: 'critical.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '3px 10px',
                  borderRadius: '99px',
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
                  backgroundColor: 'critical.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: 600,
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
              <Calendar
                size={24}
                className={css({ color: 'info.icon.base' })}
              />
              <p
                className={css({
                  color: 'neutral.text.base',
                  fontWeight: 700,
                  fontSize: '24px',
                })}
              >
                2025년 9월 1일
              </p>
              <span
                className={css({
                  backgroundColor: 'info.surface.base',
                  border: '1px solid',
                  borderColor: 'info.border.base',
                  color: 'info.text.base',
                  fontSize: '12px',
                  fontWeight: 500,
                  padding: '3px 10px',
                  borderRadius: '99px',
                  alignSelf: 'flex-start',
                })}
              >
                예정
              </span>
              <p
                className={css({
                  color: 'neutral.text.low',
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
