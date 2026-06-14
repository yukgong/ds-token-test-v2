import { css } from '@ds-token-test/styled-system-intent-first-stepnames/css';
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
  Receipt,
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
          height: '100vh',
          backgroundColor: 'neutral.canvas.01',
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
            className={css({ color: 'neutral.icon.default' })}
          />
          <span
            className={css({
              fontWeight: '700',
              fontSize: '18px',
              color: 'neutral.text.default',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav
          className={css({
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '0 12px',
          })}
        >
          {/* 결제 내역 — active */}
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
              className={css({ color: 'neutral.icon.default' })}
            />
            <span
              className={css({
                fontSize: '14px',
                fontWeight: '600',
                color: 'neutral.text.default',
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
              className={css({ color: 'neutral.icon.default' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'neutral.text.subtle',
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
              className={css({ color: 'neutral.icon.default' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'neutral.text.subtle',
              })}
            >
              사용자 관리
            </span>
          </div>

          {/* 설정 — disabled */}
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
              className={css({ color: 'neutral.icon.default' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'neutral.text.subtle',
              })}
            >
              설정
            </span>
          </div>
        </nav>

        {/* 로그아웃 */}
        <div
          className={css({
            padding: '16px 12px 24px',
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
              className={css({ color: 'critical.icon.default' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'critical.text.default',
              })}
            >
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
              fontSize: '20px',
              fontWeight: '700',
              color: 'neutral.text.default',
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
                backgroundColor: 'neutral.canvas.02',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'neutral.border.default',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              <div className={css({ padding: '24px', flex: 1 })}>
                <div
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'neutral.text.default',
                    marginBottom: '8px',
                  })}
                >
                  Free
                </div>
                <div
                  className={css({
                    fontSize: '28px',
                    fontWeight: '800',
                    color: 'neutral.text.default',
                    marginBottom: '20px',
                  })}
                >
                  ₩0/월
                </div>
                <ul
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '24px',
                  })}
                >
                  {['최대 3개 프로젝트', '기본 분석', '이메일 지원'].map((f) => (
                    <li
                      key={f}
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      })}
                    >
                      <Check
                        size={16}
                        className={css({ color: 'positive.icon.default', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          fontSize: '14px',
                          color: 'neutral.text.default',
                        })}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                  {['고급 분석', '우선 지원'].map((f) => (
                    <li
                      key={f}
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        opacity: 0.38,
                      })}
                    >
                      <X
                        size={16}
                        className={css({ color: 'neutral.icon.default', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          fontSize: '14px',
                          color: 'neutral.text.default',
                        })}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={css({ padding: '0 24px 24px' })}>
                <button
                  className={css({
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'not-allowed',
                    opacity: 0.38,
                  })}
                >
                  현재 플랜
                </button>
              </div>
            </div>

            {/* Pro 카드 */}
            <div
              className={css({
                backgroundColor: 'primary.surface.default',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'primary.border.emphasis',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              {/* 배너 */}
              <div
                className={css({
                  backgroundColor: 'primary.fill.default',
                  padding: '10px 24px',
                  textAlign: 'center',
                })}
              >
                <span
                  className={css({
                    fontSize: '13px',
                    fontWeight: '700',
                    color: 'inverse.text.default',
                  })}
                >
                  추천
                </span>
              </div>
              <div className={css({ padding: '24px', flex: 1 })}>
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '8px',
                  })}
                >
                  <span
                    className={css({
                      fontSize: '18px',
                      fontWeight: '700',
                      color: 'primary.text.default',
                    })}
                  >
                    Pro
                  </span>
                  <span
                    className={css({
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'primary.fill.default',
                      color: 'inverse.text.default',
                      padding: '2px 8px',
                      borderRadius: '999px',
                    })}
                  >
                    현재 플랜
                  </span>
                </div>
                <div
                  className={css({
                    fontSize: '28px',
                    fontWeight: '800',
                    color: 'primary.text.default',
                    marginBottom: '20px',
                  })}
                >
                  ₩49,000/월
                </div>
                <ul
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '24px',
                  })}
                >
                  {[
                    '무제한 프로젝트',
                    '고급 분석',
                    '우선 지원',
                    '팀 협업',
                    'API 액세스',
                  ].map((f) => (
                    <li
                      key={f}
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      })}
                    >
                      <Check
                        size={16}
                        className={css({ color: 'primary.icon.default', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          fontSize: '14px',
                          color: 'neutral.text.default',
                        })}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                  {['전담 매니저'].map((f) => (
                    <li
                      key={f}
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        opacity: 0.38,
                      })}
                    >
                      <X
                        size={16}
                        className={css({ color: 'neutral.icon.default', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          fontSize: '14px',
                          color: 'neutral.text.default',
                        })}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={css({ padding: '0 24px 16px' })}>
                <button
                  className={css({
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'primary.fill.default',
                    color: 'inverse.text.default',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'not-allowed',
                    opacity: 0.38,
                    borderWidth: '0',
                  })}
                >
                  현재 사용 중
                </button>
              </div>
              <div
                className={css({
                  padding: '0 24px 20px',
                  opacity: 0.38,
                })}
              >
                <span
                  className={css({
                    fontSize: '13px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  다음 결제일: 2025년 9월 1일
                </span>
              </div>
            </div>

            {/* Enterprise 카드 */}
            <div
              className={css({
                backgroundColor: 'neutral.canvas.02',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'neutral.border.default',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              <div className={css({ padding: '24px', flex: 1 })}>
                <div
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'neutral.text.default',
                    marginBottom: '8px',
                  })}
                >
                  Enterprise
                </div>
                <div
                  className={css({
                    fontSize: '28px',
                    fontWeight: '800',
                    color: 'neutral.text.default',
                    marginBottom: '20px',
                  })}
                >
                  맞춤 견적
                </div>
                <ul
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    marginBottom: '24px',
                  })}
                >
                  {[
                    '무제한 프로젝트',
                    '엔터프라이즈 분석',
                    '전담 지원',
                    '팀 협업',
                    'API 액세스',
                    '전담 매니저',
                  ].map((f) => (
                    <li
                      key={f}
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      })}
                    >
                      <Check
                        size={16}
                        className={css({ color: 'positive.icon.default', flexShrink: 0 })}
                      />
                      <span
                        className={css({
                          fontSize: '14px',
                          color: 'neutral.text.default',
                        })}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={css({ padding: '0 24px 24px' })}>
                <button
                  className={css({
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    backgroundColor: 'primary.fill.default',
                    color: 'inverse.text.default',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    borderWidth: '0',
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
            backgroundColor: 'neutral.canvas.02',
            borderRadius: '16px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'neutral.border.default',
            padding: '24px',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.default',
              marginBottom: '20px',
            })}
          >
            등록된 결제 수단
          </h2>

          {/* 카드 정보 행 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            })}
          >
            {/* 카드 아트 */}
            <div
              className={css({
                width: '180px',
                height: '110px',
                backgroundColor: 'neutral.canvas.03',
                borderRadius: '10px',
                padding: '14px 16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexShrink: 0,
              })}
            >
              <CreditCard
                size={22}
                className={css({ color: 'neutral.icon.default', opacity: 0.38 })}
              />
              <span
                className={css({
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'neutral.text.default',
                  letterSpacing: '2px',
                })}
              >
                •••• •••• •••• 4242
              </span>
            </div>

            {/* 카드 정보 */}
            <div className={css({ flex: 1 })}>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '6px',
                })}
              >
                <span
                  className={css({
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'neutral.text.default',
                  })}
                >
                  Visa
                </span>
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'positive.surface.default',
                    color: 'positive.text.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'positive.border.default',
                    padding: '2px 8px',
                    borderRadius: '999px',
                  })}
                >
                  유효
                </span>
              </div>
              <div
                className={css({
                  fontSize: '14px',
                  color: 'neutral.text.subtle',
                })}
              >
                만료일 12/26
              </div>
            </div>

            {/* 버튼들 */}
            <div
              className={css({
                display: 'flex',
                gap: '8px',
                flexShrink: 0,
              })}
            >
              <button
                className={css({
                  padding: '8px 16px',
                  borderRadius: '8px',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'neutral.border.default',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.default',
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
                  borderWidth: '0',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'critical.text.default',
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
              marginTop: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'warning.surface.default',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'warning.border.default',
              borderRadius: '10px',
              padding: '14px 16px',
            })}
          >
            <AlertTriangle
              size={18}
              className={css({ color: 'warning.icon.default', flexShrink: 0 })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'warning.text.default',
                flex: 1,
              })}
            >
              결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
            </span>
            <span
              className={css({
                fontSize: '14px',
                fontWeight: '600',
                color: 'warning.text.default',
                cursor: 'pointer',
                textDecoration: 'underline',
              })}
            >
              카드 변경
            </span>
          </div>
        </section>

        {/* Section 3: 결제 내역 테이블 */}
        <section
          className={css({
            backgroundColor: 'neutral.canvas.02',
            borderRadius: '16px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'neutral.border.default',
            overflow: 'hidden',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '24px 24px 20px',
            })}
          >
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '700',
                color: 'neutral.text.default',
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
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'neutral.border.default',
                backgroundColor: 'neutral.surface.transparent',
                color: 'neutral.text.default',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              <Download size={15} className={css({ color: 'neutral.icon.default' })} />
              CSV 내보내기
            </button>
          </div>

          <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
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
                      padding: '10px 20px',
                      textAlign: 'left',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'neutral.text.default',
                      opacity: 0.38,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      borderBottomWidth: '1px',
                      borderBottomStyle: 'solid',
                      borderBottomColor: 'neutral.border.subtle',
                    })}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className={css({ backgroundColor: 'neutral.canvas.02' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-08-01</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>Pro 플랜 (8월)</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>₩49,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'positive.surface.default',
                      color: 'positive.text.default',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'positive.border.default',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 20px' })}>
                  <button className={css({ backgroundColor: 'neutral.surface.transparent', borderWidth: '0', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.default' })} />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className={css({ backgroundColor: 'neutral.canvas.01' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-07-01</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>Pro 플랜 (7월)</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>₩49,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'positive.surface.default',
                      color: 'positive.text.default',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'positive.border.default',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 20px' })}>
                  <button className={css({ backgroundColor: 'neutral.surface.transparent', borderWidth: '0', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.default' })} />
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className={css({ backgroundColor: 'neutral.canvas.02' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-06-15</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>추가 사용자 시트</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>₩9,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'positive.surface.default',
                      color: 'positive.text.default',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'positive.border.default',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 20px' })}>
                  <button className={css({ backgroundColor: 'neutral.surface.transparent', borderWidth: '0', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.default' })} />
                  </button>
                </td>
              </tr>

              {/* Row 4 — 결제 실패, critical 행 배경 */}
              <tr className={css({ backgroundColor: 'critical.surface.default' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-06-01</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>Pro 플랜 (6월)</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>₩49,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'critical.fill.default',
                      color: 'inverse.text.default',
                    })}
                  >
                    결제 실패
                  </span>
                </td>
                <td className={css({ padding: '14px 20px' })}>
                  <button
                    className={css({
                      padding: '6px 12px',
                      borderRadius: '6px',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'critical.border.emphasis',
                      backgroundColor: 'neutral.surface.transparent',
                      color: 'critical.text.default',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    })}
                  >
                    재시도
                  </button>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className={css({ backgroundColor: 'neutral.canvas.02' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-05-28</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>Pro 플랜 (6월) 재시도</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>₩49,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'positive.surface.default',
                      color: 'positive.text.default',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'positive.border.default',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 20px' })}>
                  <button className={css({ backgroundColor: 'neutral.surface.transparent', borderWidth: '0', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.default' })} />
                  </button>
                </td>
              </tr>

              {/* Row 6 */}
              <tr className={css({ backgroundColor: 'neutral.canvas.01' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-05-01</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>Pro 플랜 (5월)</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>₩49,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'positive.surface.default',
                      color: 'positive.text.default',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'positive.border.default',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 20px' })}>
                  <button className={css({ backgroundColor: 'neutral.surface.transparent', borderWidth: '0', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.default' })} />
                  </button>
                </td>
              </tr>

              {/* Row 7 — 처리 중, warning */}
              <tr className={css({ backgroundColor: 'neutral.canvas.02' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-04-01</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>Pro 플랜 (4월)</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>₩49,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'warning.surface.default',
                      color: 'warning.text.default',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'warning.border.default',
                    })}
                  >
                    처리 중
                  </span>
                </td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.subtle' })}>—</td>
              </tr>

              {/* Row 8 — 환불 완료, info */}
              <tr className={css({ backgroundColor: 'neutral.canvas.01' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-03-10</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>환불 처리</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>-₩49,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'info.surface.default',
                      color: 'info.text.default',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'info.border.default',
                    })}
                  >
                    환불 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 20px' })}>
                  <button className={css({ backgroundColor: 'neutral.surface.transparent', borderWidth: '0', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.default' })} />
                  </button>
                </td>
              </tr>

              {/* Row 9 */}
              <tr className={css({ backgroundColor: 'neutral.canvas.02' })}>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>2025-03-01</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>Pro 플랜 (3월)</td>
                <td className={css({ padding: '14px 20px', fontSize: '14px', color: 'neutral.text.default' })}>₩49,000</td>
                <td className={css({ padding: '14px 20px' })}>
                  <span
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      fontWeight: '600',
                      backgroundColor: 'positive.surface.default',
                      color: 'positive.text.default',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'positive.border.default',
                    })}
                  >
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: '14px 20px' })}>
                  <button className={css({ backgroundColor: 'neutral.surface.transparent', borderWidth: '0', cursor: 'pointer', padding: '4px', borderRadius: '6px' })}>
                    <FileText size={16} className={css({ color: 'neutral.icon.default' })} />
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
                backgroundColor: 'neutral.canvas.02',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'neutral.border.default',
                borderRadius: '16px',
                padding: '24px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                })}
              >
                <TrendingUp
                  size={22}
                  className={css({ color: 'positive.icon.default' })}
                />
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'positive.surface.default',
                    color: 'positive.text.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'positive.border.default',
                    padding: '2px 8px',
                    borderRadius: '999px',
                  })}
                >
                  정상 결제
                </span>
              </div>
              <div
                className={css({
                  fontSize: '28px',
                  fontWeight: '800',
                  color: 'neutral.text.default',
                  marginBottom: '4px',
                })}
              >
                ₩58,000
              </div>
              <div
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.subtle',
                  marginBottom: '6px',
                })}
              >
                이번 달 청구
              </div>
              <div
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.subtle',
                })}
              >
                Pro ₩49,000 + 추가 ₩9,000
              </div>
            </div>

            {/* 미결제 금액 */}
            <div
              className={css({
                backgroundColor: 'critical.surface.default',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'critical.border.default',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                })}
              >
                <AlertCircle
                  size={22}
                  className={css({ color: 'critical.icon.default' })}
                />
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'critical.fill.default',
                    color: 'inverse.text.default',
                    padding: '2px 8px',
                    borderRadius: '999px',
                  })}
                >
                  미결제
                </span>
              </div>
              <div
                className={css({
                  fontSize: '28px',
                  fontWeight: '800',
                  color: 'critical.text.default',
                  marginBottom: '4px',
                })}
              >
                ₩49,000
              </div>
              <div
                className={css({
                  fontSize: '13px',
                  color: 'critical.text.default',
                  marginBottom: '16px',
                  flex: 1,
                })}
              >
                미결제 금액
              </div>
              <button
                className={css({
                  width: '100%',
                  padding: '10px',
                  borderRadius: '8px',
                  backgroundColor: 'critical.fill.default',
                  color: 'inverse.text.default',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  borderWidth: '0',
                })}
              >
                지금 결제
              </button>
            </div>

            {/* 다음 결제일 */}
            <div
              className={css({
                backgroundColor: 'neutral.canvas.02',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'neutral.border.default',
                borderRadius: '16px',
                padding: '24px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '12px',
                })}
              >
                <Calendar
                  size={22}
                  className={css({ color: 'info.icon.default' })}
                />
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    backgroundColor: 'info.surface.default',
                    color: 'info.text.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'info.border.default',
                    padding: '2px 8px',
                    borderRadius: '999px',
                  })}
                >
                  예정
                </span>
              </div>
              <div
                className={css({
                  fontSize: '24px',
                  fontWeight: '800',
                  color: 'neutral.text.default',
                  marginBottom: '4px',
                })}
              >
                2025년 9월 1일
              </div>
              <div
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.subtle',
                  marginBottom: '6px',
                })}
              >
                다음 결제일
              </div>
              <div
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.subtle',
                })}
              >
                Pro 플랜 월정액 ₩49,000
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
