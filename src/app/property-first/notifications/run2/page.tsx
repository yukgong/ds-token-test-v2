import { css } from '@ds-token-test/styled-system-property-first/css';
import {
  Bell,
  BellOff,
  Settings,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Zap,
  X,
} from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDir: 'column',
        h: '100vh',
        overflow: 'hidden',
        fontFamily: 'sans-serif',
        fontSize: '14px',
      })}
    >
      {/* ===== HEADER ===== */}
      <header
        className={css({
          backgroundColor: 'surface.neutral.default',
          borderBottom: '1px solid',
          borderColor: 'border.neutral.default',
          flexShrink: 0,
        })}
      >
        {/* Header top row */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 24px',
          })}
        >
          {/* Left: Bell + Title */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
            <Bell
              size={20}
              className={css({ color: 'icon.neutral.default', flexShrink: 0 })}
            />
            <span
              className={css({
                fontSize: '18px',
                fontWeight: '600',
                color: 'text.neutral.default',
              })}
            >
              알림 센터
            </span>
          </div>

          {/* Right: "모두 읽음 처리" (ghost, disabled) + Settings */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
            <button
              className={css({
                padding: '6px 12px',
                backgroundColor: 'surface.transparent',
                border: 'none',
                color: 'text.neutral.muted',
                fontSize: '13px',
                borderRadius: '6px',
                cursor: 'pointer',
                opacity: 0.38,
              })}
            >
              모두 읽음 처리
            </button>
            <button
              className={css({
                padding: '6px',
                backgroundColor: 'surface.transparent',
                border: 'none',
                color: 'icon.neutral.muted',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              })}
            >
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div
          className={css({
            display: 'flex',
            paddingLeft: '24px',
          })}
        >
          {/* Active tab */}
          <button
            className={css({
              padding: '10px 16px',
              backgroundColor: 'surface.transparent',
              border: 'none',
              borderBottom: '2px solid',
              borderColor: 'border.brand.default',
              color: 'text.brand.default',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
            })}
          >
            전체
          </button>
          {/* Inactive tabs */}
          <button
            className={css({
              padding: '10px 16px',
              backgroundColor: 'surface.transparent',
              border: 'none',
              borderBottom: '2px solid transparent',
              color: 'text.neutral.muted',
              fontSize: '14px',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            읽지 않음
          </button>
          <button
            className={css({
              padding: '10px 16px',
              backgroundColor: 'surface.transparent',
              border: 'none',
              borderBottom: '2px solid transparent',
              color: 'text.neutral.muted',
              fontSize: '14px',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            완료됨
          </button>
        </div>
      </header>

      {/* ===== BODY ===== */}
      <div
        className={css({
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
        })}
      >
        {/* ===== LEFT SIDEBAR ===== */}
        <aside
          className={css({
            width: '200px',
            flexShrink: 0,
            backgroundColor: 'surface.neutral.subtle',
            borderRight: '1px solid',
            borderColor: 'border.neutral.default',
            display: 'flex',
            flexDir: 'column',
            gap: '8px',
            padding: '16px 12px',
            overflowY: 'auto',
          })}
        >
          {/* Counter card: 읽지 않음 (brand) */}
          <div
            className={css({
              backgroundColor: 'surface.brand.subtle',
              border: '1px solid',
              borderColor: 'border.brand.default',
              borderRadius: '8px',
              padding: '10px 12px',
              display: 'flex',
              flexDir: 'column',
              gap: '4px',
            })}
          >
            <Bell size={14} className={css({ color: 'icon.brand.default' })} />
            <span
              className={css({
                fontSize: '20px',
                fontWeight: '700',
                color: 'text.brand.default',
                lineHeight: '1.2',
              })}
            >
              8
            </span>
            <span className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
              읽지 않음
            </span>
          </div>

          {/* Counter card: 오류/위험 (critical) */}
          <div
            className={css({
              backgroundColor: 'surface.critical.subtle',
              border: '1px solid',
              borderColor: 'border.critical.default',
              borderRadius: '8px',
              padding: '10px 12px',
              display: 'flex',
              flexDir: 'column',
              gap: '4px',
            })}
          >
            <AlertCircle size={14} className={css({ color: 'icon.critical.default' })} />
            <span
              className={css({
                fontSize: '20px',
                fontWeight: '700',
                color: 'text.critical.default',
                lineHeight: '1.2',
              })}
            >
              2
            </span>
            <span className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
              즉시 확인
            </span>
          </div>

          {/* Counter card: 주의 (warning) */}
          <div
            className={css({
              backgroundColor: 'surface.warning.subtle',
              border: '1px solid',
              borderColor: 'border.warning.default',
              borderRadius: '8px',
              padding: '10px 12px',
              display: 'flex',
              flexDir: 'column',
              gap: '4px',
            })}
          >
            <AlertTriangle size={14} className={css({ color: 'icon.warning.default' })} />
            <span
              className={css({
                fontSize: '20px',
                fontWeight: '700',
                color: 'text.warning.default',
                lineHeight: '1.2',
              })}
            >
              3
            </span>
            <span className={css({ fontSize: '12px', color: 'text.neutral.muted' })}>
              주의 필요
            </span>
          </div>

          {/* Divider */}
          <div
            className={css({
              height: '1px',
              backgroundColor: 'border.neutral.default',
              margin: '4px 0',
            })}
          />

          {/* Category filters */}
          {/* Selected */}
          <button
            className={css({
              display: 'block',
              width: '100%',
              textAlign: 'left',
              padding: '6px 12px',
              backgroundColor: 'fill.brand',
              color: 'text.inverse',
              fontSize: '13px',
              fontWeight: '600',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
            })}
          >
            전체
          </button>
          {(['시스템', '결제', '배포', '보안', '마케팅'] as const).map((cat) => (
            <button
              key={cat}
              className={css({
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '6px 12px',
                backgroundColor: 'surface.neutral.ghost',
                color: 'text.neutral.muted',
                fontSize: '13px',
                borderRadius: '9999px',
                border: 'none',
                cursor: 'pointer',
              })}
            >
              {cat}
            </button>
          ))}
        </aside>

        {/* ===== NOTIFICATION LIST ===== */}
        <main
          className={css({
            flex: 1,
            overflowY: 'auto',
            backgroundColor: 'surface.neutral.subtle',
            padding: '16px',
            display: 'flex',
            flexDir: 'column',
            gap: '12px',
          })}
        >

          {/* ─── Card 1: 정상 완료 / 읽지 않음 ─── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              backgroundColor: 'surface.brand.subtle',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            {/* Left accent bar */}
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'fill.positive',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '14px 16px',
                display: 'flex',
                flexDir: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
                <CheckCircle2
                  size={18}
                  className={css({ color: 'icon.positive.default', flexShrink: 0, marginTop: '1px' })}
                />
                <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4px' })}>
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.neutral.default',
                    })}
                  >
                    배포 v2.4.1 완료
                  </span>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.muted',
                      opacity: 0.38,
                    })}
                  >
                    프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
                  </p>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({ fontSize: '12px', color: 'text.neutral.muted', opacity: 0.38 })}
                >
                  방금 전
                </span>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'text.positive.default',
                    backgroundColor: 'surface.positive.subtle',
                    border: '1px solid',
                    borderColor: 'border.positive.default',
                    borderRadius: '4px',
                    padding: '2px 6px',
                  })}
                >
                  완료됨
                </span>
                <button
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.positive.default',
                    backgroundColor: 'surface.transparent',
                    border: '1px solid',
                    borderColor: 'border.positive.default',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                  })}
                >
                  배포 로그 보기
                </button>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'surface.transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'icon.neutral.subtle',
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ─── Card 2: 심각한 문제 / 읽지 않음 ─── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              backgroundColor: 'surface.brand.subtle',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'fill.critical',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '14px 16px',
                display: 'flex',
                flexDir: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
                <XCircle
                  size={18}
                  className={css({ color: 'icon.critical.default', flexShrink: 0, marginTop: '1px' })}
                />
                <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4px' })}>
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.neutral.default',
                    })}
                  >
                    DB 연결 오류
                  </span>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.muted',
                      opacity: 0.38,
                    })}
                  >
                    데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
                  </p>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({ fontSize: '12px', color: 'text.neutral.muted', opacity: 0.38 })}
                >
                  3분 전
                </span>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'text.inverse',
                    backgroundColor: 'fill.critical',
                    borderRadius: '4px',
                    padding: '2px 6px',
                  })}
                >
                  즉시 확인
                </span>
                <button
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.inverse',
                    backgroundColor: 'fill.critical',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                  })}
                >
                  상세 보기
                </button>
                <button
                  className={css({
                    fontSize: '12px',
                    color: 'text.neutral.muted',
                    backgroundColor: 'surface.transparent',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                    opacity: 0.38,
                  })}
                >
                  무시
                </button>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'surface.transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'icon.neutral.subtle',
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ─── Card 3: 주의 필요 / 읽지 않음 ─── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              backgroundColor: 'surface.brand.subtle',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'fill.warning',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '14px 16px',
                display: 'flex',
                flexDir: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
                <AlertTriangle
                  size={18}
                  className={css({ color: 'icon.warning.default', flexShrink: 0, marginTop: '1px' })}
                />
                <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4px' })}>
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.neutral.default',
                    })}
                  >
                    메모리 사용량 경고
                  </span>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.muted',
                      opacity: 0.38,
                    })}
                  >
                    서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
                  </p>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({ fontSize: '12px', color: 'text.neutral.muted', opacity: 0.38 })}
                >
                  15분 전
                </span>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'text.warning.default',
                    backgroundColor: 'surface.warning.subtle',
                    border: '1px solid',
                    borderColor: 'border.warning.default',
                    borderRadius: '4px',
                    padding: '2px 6px',
                  })}
                >
                  주의
                </span>
                <button
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.warning.default',
                    backgroundColor: 'surface.transparent',
                    border: '1px solid',
                    borderColor: 'border.warning.default',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                  })}
                >
                  리소스 모니터 열기
                </button>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'surface.transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'icon.neutral.subtle',
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ─── Card 4: 일반 안내 / 읽지 않음 ─── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              backgroundColor: 'surface.brand.subtle',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'fill.info',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '14px 16px',
                display: 'flex',
                flexDir: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
                <Info
                  size={18}
                  className={css({ color: 'icon.info.default', flexShrink: 0, marginTop: '1px' })}
                />
                <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4px' })}>
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.neutral.default',
                    })}
                  >
                    시스템 점검 예정
                  </span>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.muted',
                      opacity: 0.38,
                    })}
                  >
                    2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
                  </p>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({ fontSize: '12px', color: 'text.neutral.muted', opacity: 0.38 })}
                >
                  1시간 전
                </span>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'text.info.default',
                    backgroundColor: 'surface.info.subtle',
                    border: '1px solid',
                    borderColor: 'border.info.default',
                    borderRadius: '4px',
                    padding: '2px 6px',
                  })}
                >
                  안내
                </span>
                <button
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.info.default',
                    backgroundColor: 'surface.transparent',
                    border: '1px solid',
                    borderColor: 'border.info.default',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                  })}
                >
                  일정 확인
                </button>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'surface.transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'icon.neutral.subtle',
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ─── Card 5: 메인 컬러/기능 / 읽지 않음 ─── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              backgroundColor: 'surface.brand.subtle',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'fill.brand',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '14px 16px',
                display: 'flex',
                flexDir: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
                <Zap
                  size={18}
                  className={css({ color: 'icon.brand.default', flexShrink: 0, marginTop: '1px' })}
                />
                <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4px' })}>
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.neutral.default',
                    })}
                  >
                    새 기능 출시
                  </span>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.muted',
                      opacity: 0.38,
                    })}
                  >
                    대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
                  </p>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({ fontSize: '12px', color: 'text.neutral.muted', opacity: 0.38 })}
                >
                  2시간 전
                </span>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'text.inverse',
                    backgroundColor: 'fill.brand',
                    borderRadius: '4px',
                    padding: '2px 6px',
                  })}
                >
                  새 기능
                </span>
                <button
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.inverse',
                    backgroundColor: 'fill.brand',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                  })}
                >
                  지금 확인
                </button>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'surface.transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'icon.neutral.subtle',
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ─── Card 6: 정상 완료 / 읽음 ─── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              backgroundColor: 'surface.neutral.default',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'fill.positive',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '14px 16px',
                display: 'flex',
                flexDir: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
                <CheckCircle2
                  size={18}
                  className={css({
                    color: 'icon.positive.default',
                    flexShrink: 0,
                    marginTop: '1px',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4px' })}>
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.neutral.muted',
                    })}
                  >
                    결제 처리 완료
                  </span>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.muted',
                      opacity: 0.38,
                    })}
                  >
                    Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
                  </p>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({ fontSize: '12px', color: 'text.neutral.muted', opacity: 0.38 })}
                >
                  어제
                </span>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'text.positive.default',
                    backgroundColor: 'surface.positive.subtle',
                    border: '1px solid',
                    borderColor: 'border.positive.default',
                    borderRadius: '4px',
                    padding: '2px 6px',
                    opacity: 0.38,
                  })}
                >
                  완료됨
                </span>
                <button
                  className={css({
                    fontSize: '12px',
                    color: 'text.neutral.muted',
                    backgroundColor: 'surface.transparent',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                    opacity: 0.38,
                  })}
                >
                  영수증 보기
                </button>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'surface.transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'icon.neutral.subtle',
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ─── Card 7: 주의 필요 / 읽음 ─── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              backgroundColor: 'surface.neutral.default',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'fill.warning',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '14px 16px',
                display: 'flex',
                flexDir: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
                <AlertCircle
                  size={18}
                  className={css({
                    color: 'icon.warning.default',
                    flexShrink: 0,
                    marginTop: '1px',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4px' })}>
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.neutral.muted',
                    })}
                  >
                    API 응답 지연 감지
                  </span>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.muted',
                      opacity: 0.38,
                    })}
                  >
                    결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
                  </p>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({ fontSize: '12px', color: 'text.neutral.muted', opacity: 0.38 })}
                >
                  2일 전
                </span>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'text.neutral.muted',
                    backgroundColor: 'surface.neutral.subtle',
                    border: '1px solid',
                    borderColor: 'border.neutral.default',
                    borderRadius: '4px',
                    padding: '2px 6px',
                  })}
                >
                  처리됨
                </span>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'surface.transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'icon.neutral.subtle',
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ─── Card 8: 일반 안내 / 읽음 ─── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              backgroundColor: 'surface.neutral.default',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'fill.info',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '14px 16px',
                display: 'flex',
                flexDir: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
                <Info
                  size={18}
                  className={css({
                    color: 'icon.info.default',
                    flexShrink: 0,
                    marginTop: '1px',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: 1, display: 'flex', flexDir: 'column', gap: '4px' })}>
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.neutral.muted',
                    })}
                  >
                    약관 업데이트 안내
                  </span>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.muted',
                      opacity: 0.38,
                    })}
                  >
                    서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
                  </p>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({ fontSize: '12px', color: 'text.neutral.muted', opacity: 0.38 })}
                >
                  3일 전
                </span>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'text.neutral.muted',
                    backgroundColor: 'surface.neutral.subtle',
                    border: '1px solid',
                    borderColor: 'border.neutral.default',
                    borderRadius: '4px',
                    padding: '2px 6px',
                  })}
                >
                  안내
                </span>
                <button
                  className={css({
                    fontSize: '12px',
                    color: 'text.neutral.muted',
                    backgroundColor: 'surface.transparent',
                    border: 'none',
                    borderRadius: '6px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                  })}
                >
                  약관 보기
                </button>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '10px',
                right: '10px',
                width: '28px',
                height: '28px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'surface.transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                color: 'icon.neutral.subtle',
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ─── Divider + Empty state ─── */}
          <div
            className={css({
              height: '1px',
              backgroundColor: 'border.neutral.default',
              margin: '4px 0',
            })}
          />
          <div
            className={css({
              display: 'flex',
              flexDir: 'column',
              alignItems: 'center',
              gap: '8px',
              padding: '32px 24px',
              backgroundColor: 'surface.neutral.ghost',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              borderRadius: '10px',
            })}
          >
            <BellOff
              size={24}
              className={css({ color: 'icon.neutral.muted', opacity: 0.38 })}
            />
            <span
              className={css({
                fontSize: '14px',
                fontWeight: '500',
                color: 'text.neutral.muted',
              })}
            >
              모든 알림을 확인했습니다
            </span>
            <span
              className={css({
                fontSize: '13px',
                color: 'text.neutral.subtle',
                opacity: 0.38,
              })}
            >
              새로운 알림이 도착하면 여기에 표시됩니다.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
