import {
  Bell,
  Settings,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Zap,
  X,
  BellOff,
} from 'lucide-react';
import { css } from '@ds-token-test/styled-system-property-first/css';

export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
      })}
    >
      {/* ── Header ── */}
      <header
        className={css({
          bg: 'surface.neutral.default',
          borderBottom: '1px solid',
          borderColor: 'border.neutral.default',
          flexShrink: 0,
        })}
      >
        {/* Title row */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: '6',
            py: '4',
          })}
        >
          <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
            <Bell size={20} className={css({ color: 'icon.neutral.default' })} />
            <span
              className={css({
                fontSize: 'lg',
                fontWeight: 'semibold',
                color: 'text.neutral.default',
              })}
            >
              알림 센터
            </span>
          </div>

          <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
            {/* Ghost button — disabled (opacity 0.38) */}
            <button
              disabled
              className={css({
                px: '3',
                py: '1.5',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'md',
                fontSize: 'sm',
                color: 'text.neutral.default',
                cursor: 'not-allowed',
                opacity: 0.38,
              })}
            >
              모두 읽음 처리
            </button>
            {/* Settings ghost icon button */}
            <button
              className={css({
                p: '2',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'md',
                cursor: 'pointer',
                color: 'icon.neutral.default',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div className={css({ display: 'flex', px: '6' })}>
          {/* Active tab */}
          <button
            className={css({
              px: '4',
              py: '2',
              bg: 'surface.transparent',
              border: 'none',
              borderBottom: '2px solid',
              borderColor: 'border.brand.default',
              color: 'text.brand.default',
              fontSize: 'sm',
              fontWeight: 'medium',
              cursor: 'pointer',
            })}
          >
            전체
          </button>
          {/* Inactive tabs */}
          {['읽지 않음', '완료됨'].map((tab) => (
            <button
              key={tab}
              className={css({
                px: '4',
                py: '2',
                bg: 'surface.transparent',
                border: 'none',
                borderBottom: '2px solid transparent',
                color: 'text.neutral.default',
                fontSize: 'sm',
                cursor: 'pointer',
                opacity: 0.38,
              })}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      {/* ── Body ── */}
      <div className={css({ display: 'flex', flex: 1, overflow: 'hidden' })}>
        {/* Left sidebar */}
        <aside
          className={css({
            width: '200px',
            flexShrink: 0,
            bg: 'surface.neutral.subtle',
            borderRight: '1px solid',
            borderColor: 'border.neutral.default',
            overflowY: 'auto',
            py: '4',
            px: '3',
            display: 'flex',
            flexDirection: 'column',
            gap: '2',
          })}
        >
          {/* Counter cards */}
          {/* 1. Unread */}
          <div
            className={css({
              bg: 'surface.brand.subtle',
              border: '1px solid',
              borderColor: 'border.brand.default',
              borderRadius: 'md',
              p: '3',
              display: 'flex',
              flexDirection: 'column',
              gap: '1',
            })}
          >
            <Bell size={14} className={css({ color: 'icon.brand.default' })} />
            <span
              className={css({
                fontSize: '2xl',
                fontWeight: 'bold',
                color: 'text.brand.default',
                lineHeight: 1,
              })}
            >
              8
            </span>
            <span className={css({ fontSize: 'xs', color: 'text.neutral.muted' })}>읽지 않음</span>
          </div>

          {/* 2. Critical */}
          <div
            className={css({
              bg: 'surface.critical.subtle',
              border: '1px solid',
              borderColor: 'border.critical.default',
              borderRadius: 'md',
              p: '3',
              display: 'flex',
              flexDirection: 'column',
              gap: '1',
            })}
          >
            <AlertCircle size={14} className={css({ color: 'icon.critical.default' })} />
            <span
              className={css({
                fontSize: '2xl',
                fontWeight: 'bold',
                color: 'text.critical.default',
                lineHeight: 1,
              })}
            >
              2
            </span>
            <span className={css({ fontSize: 'xs', color: 'text.neutral.muted' })}>즉시 확인</span>
          </div>

          {/* 3. Warning */}
          <div
            className={css({
              bg: 'surface.warning.subtle',
              border: '1px solid',
              borderColor: 'border.warning.default',
              borderRadius: 'md',
              p: '3',
              display: 'flex',
              flexDirection: 'column',
              gap: '1',
            })}
          >
            <AlertTriangle size={14} className={css({ color: 'icon.warning.default' })} />
            <span
              className={css({
                fontSize: '2xl',
                fontWeight: 'bold',
                color: 'text.warning.default',
                lineHeight: 1,
              })}
            >
              3
            </span>
            <span className={css({ fontSize: 'xs', color: 'text.neutral.muted' })}>주의 필요</span>
          </div>

          {/* Divider */}
          <div
            className={css({
              borderTop: '1px solid',
              borderColor: 'border.neutral.subtle',
              my: '1',
            })}
          />

          {/* Category filters */}
          <div
            className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}
          >
            {/* Selected */}
            <button
              className={css({
                px: '3',
                py: '1.5',
                bg: 'fill.brand',
                border: 'none',
                borderRadius: 'full',
                fontSize: 'sm',
                fontWeight: 'medium',
                color: 'text.inverse',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              전체
            </button>
            {['시스템', '결제', '배포', '보안', '마케팅'].map((cat) => (
              <button
                key={cat}
                className={css({
                  px: '3',
                  py: '1.5',
                  bg: 'surface.neutral.ghost',
                  border: 'none',
                  borderRadius: 'full',
                  fontSize: 'sm',
                  color: 'text.neutral.default',
                  cursor: 'pointer',
                  textAlign: 'left',
                  _hover: { bg: 'surface.neutral.muted' },
                })}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* Notification list */}
        <main
          className={css({
            flex: 1,
            overflowY: 'auto',
            bg: 'surface.neutral.subtle',
            p: '4',
            display: 'flex',
            flexDirection: 'column',
            gap: '3',
          })}
        >
          {/* ── Notification 1: positive, unread ── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              bg: 'surface.brand.subtle',
              borderRadius: 'lg',
              overflow: 'hidden',
            })}
          >
            <div className={css({ width: '4px', flexShrink: 0, bg: 'fill.positive' })} />
            <div className={css({ flex: 1, p: '4' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '7' })}>
                <CheckCircle2
                  size={20}
                  className={css({ color: 'icon.positive.default', flexShrink: 0, mt: '0.5' })}
                />
                <div className={css({ flex: 1 })}>
                  <p
                    className={css({
                      fontWeight: 'semibold',
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '1',
                    })}
                  >
                    배포 v2.4.1 완료
                  </p>
                  <p
                    className={css({
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '3',
                      opacity: 0.38,
                    })}
                  >
                    프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
                  </p>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      flexWrap: 'wrap',
                    })}
                  >
                    <span className={css({ color: 'text.neutral.default', fontSize: 'xs', opacity: 0.38 })}>
                      방금 전
                    </span>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'surface.positive.subtle',
                        border: '1px solid',
                        borderColor: 'border.positive.default',
                        color: 'text.positive.default',
                        fontSize: 'xs',
                        borderRadius: 'full',
                      })}
                    >
                      완료됨
                    </span>
                    <button
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'surface.transparent',
                        border: '1px solid',
                        borderColor: 'border.positive.default',
                        color: 'text.positive.default',
                        fontSize: 'xs',
                        borderRadius: 'md',
                        cursor: 'pointer',
                        _hover: { bg: 'surface.positive.ghost' },
                      })}
                    >
                      배포 로그 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '3',
                right: '3',
                p: '1',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'sm',
                cursor: 'pointer',
                color: 'icon.neutral.muted',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Notification 2: critical, unread ── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              bg: 'surface.brand.subtle',
              borderRadius: 'lg',
              overflow: 'hidden',
            })}
          >
            <div className={css({ width: '4px', flexShrink: 0, bg: 'fill.critical' })} />
            <div className={css({ flex: 1, p: '4' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '7' })}>
                <XCircle
                  size={20}
                  className={css({ color: 'icon.critical.default', flexShrink: 0, mt: '0.5' })}
                />
                <div className={css({ flex: 1 })}>
                  <p
                    className={css({
                      fontWeight: 'semibold',
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '1',
                    })}
                  >
                    DB 연결 오류
                  </p>
                  <p
                    className={css({
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '3',
                      opacity: 0.38,
                    })}
                  >
                    데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
                  </p>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      flexWrap: 'wrap',
                    })}
                  >
                    <span className={css({ color: 'text.neutral.default', fontSize: 'xs', opacity: 0.38 })}>
                      3분 전
                    </span>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'fill.critical',
                        color: 'text.inverse',
                        fontSize: 'xs',
                        borderRadius: 'full',
                      })}
                    >
                      즉시 확인
                    </span>
                    <button
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'fill.critical',
                        border: 'none',
                        color: 'text.inverse',
                        fontSize: 'xs',
                        borderRadius: 'md',
                        cursor: 'pointer',
                      })}
                    >
                      상세 보기
                    </button>
                    <button
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'surface.transparent',
                        border: 'none',
                        color: 'text.neutral.default',
                        fontSize: 'xs',
                        borderRadius: 'md',
                        cursor: 'pointer',
                        opacity: 0.38,
                      })}
                    >
                      무시
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '3',
                right: '3',
                p: '1',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'sm',
                cursor: 'pointer',
                color: 'icon.neutral.muted',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Notification 3: warning, unread ── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              bg: 'surface.brand.subtle',
              borderRadius: 'lg',
              overflow: 'hidden',
            })}
          >
            <div className={css({ width: '4px', flexShrink: 0, bg: 'fill.warning' })} />
            <div className={css({ flex: 1, p: '4' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '7' })}>
                <AlertTriangle
                  size={20}
                  className={css({ color: 'icon.warning.default', flexShrink: 0, mt: '0.5' })}
                />
                <div className={css({ flex: 1 })}>
                  <p
                    className={css({
                      fontWeight: 'semibold',
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '1',
                    })}
                  >
                    메모리 사용량 경고
                  </p>
                  <p
                    className={css({
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '3',
                      opacity: 0.38,
                    })}
                  >
                    서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
                  </p>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      flexWrap: 'wrap',
                    })}
                  >
                    <span className={css({ color: 'text.neutral.default', fontSize: 'xs', opacity: 0.38 })}>
                      15분 전
                    </span>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'surface.warning.subtle',
                        border: '1px solid',
                        borderColor: 'border.warning.default',
                        color: 'text.warning.default',
                        fontSize: 'xs',
                        borderRadius: 'full',
                      })}
                    >
                      주의
                    </span>
                    <button
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'surface.transparent',
                        border: '1px solid',
                        borderColor: 'border.warning.default',
                        color: 'text.warning.default',
                        fontSize: 'xs',
                        borderRadius: 'md',
                        cursor: 'pointer',
                        _hover: { bg: 'surface.warning.ghost' },
                      })}
                    >
                      리소스 모니터 열기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '3',
                right: '3',
                p: '1',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'sm',
                cursor: 'pointer',
                color: 'icon.neutral.muted',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Notification 4: info, unread ── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              bg: 'surface.brand.subtle',
              borderRadius: 'lg',
              overflow: 'hidden',
            })}
          >
            <div className={css({ width: '4px', flexShrink: 0, bg: 'fill.info' })} />
            <div className={css({ flex: 1, p: '4' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '7' })}>
                <Info
                  size={20}
                  className={css({ color: 'icon.info.default', flexShrink: 0, mt: '0.5' })}
                />
                <div className={css({ flex: 1 })}>
                  <p
                    className={css({
                      fontWeight: 'semibold',
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '1',
                    })}
                  >
                    시스템 점검 예정
                  </p>
                  <p
                    className={css({
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '3',
                      opacity: 0.38,
                    })}
                  >
                    2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
                  </p>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      flexWrap: 'wrap',
                    })}
                  >
                    <span className={css({ color: 'text.neutral.default', fontSize: 'xs', opacity: 0.38 })}>
                      1시간 전
                    </span>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'surface.info.subtle',
                        border: '1px solid',
                        borderColor: 'border.info.default',
                        color: 'text.info.default',
                        fontSize: 'xs',
                        borderRadius: 'full',
                      })}
                    >
                      안내
                    </span>
                    <button
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'surface.transparent',
                        border: '1px solid',
                        borderColor: 'border.info.default',
                        color: 'text.info.default',
                        fontSize: 'xs',
                        borderRadius: 'md',
                        cursor: 'pointer',
                        _hover: { bg: 'surface.info.ghost' },
                      })}
                    >
                      일정 확인
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '3',
                right: '3',
                p: '1',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'sm',
                cursor: 'pointer',
                color: 'icon.neutral.muted',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Notification 5: brand, unread ── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              bg: 'surface.brand.subtle',
              borderRadius: 'lg',
              overflow: 'hidden',
            })}
          >
            <div className={css({ width: '4px', flexShrink: 0, bg: 'fill.brand' })} />
            <div className={css({ flex: 1, p: '4' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '7' })}>
                <Zap
                  size={20}
                  className={css({ color: 'icon.brand.default', flexShrink: 0, mt: '0.5' })}
                />
                <div className={css({ flex: 1 })}>
                  <p
                    className={css({
                      fontWeight: 'semibold',
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '1',
                    })}
                  >
                    새 기능 출시
                  </p>
                  <p
                    className={css({
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '3',
                      opacity: 0.38,
                    })}
                  >
                    대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
                  </p>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      flexWrap: 'wrap',
                    })}
                  >
                    <span className={css({ color: 'text.neutral.default', fontSize: 'xs', opacity: 0.38 })}>
                      2시간 전
                    </span>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'fill.brand',
                        color: 'text.inverse',
                        fontSize: 'xs',
                        borderRadius: 'full',
                      })}
                    >
                      새 기능
                    </span>
                    <button
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'fill.brand',
                        border: 'none',
                        color: 'text.inverse',
                        fontSize: 'xs',
                        borderRadius: 'md',
                        cursor: 'pointer',
                      })}
                    >
                      지금 확인
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '3',
                right: '3',
                p: '1',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'sm',
                cursor: 'pointer',
                color: 'icon.neutral.muted',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Notification 6: positive, read ── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              bg: 'surface.neutral.default',
              borderRadius: 'lg',
              overflow: 'hidden',
            })}
          >
            {/* Left accent border — opacity 0.38 for read */}
            <div
              className={css({ width: '4px', flexShrink: 0, bg: 'fill.positive', opacity: 0.38 })}
            />
            <div className={css({ flex: 1, p: '4' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '7' })}>
                <CheckCircle2
                  size={20}
                  className={css({
                    color: 'icon.positive.default',
                    flexShrink: 0,
                    mt: '0.5',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: 1 })}>
                  <p
                    className={css({
                      fontWeight: 'semibold',
                      color: 'text.neutral.muted',
                      fontSize: 'sm',
                      mb: '1',
                    })}
                  >
                    결제 처리 완료
                  </p>
                  <p
                    className={css({
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '3',
                      opacity: 0.38,
                    })}
                  >
                    Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
                  </p>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      flexWrap: 'wrap',
                    })}
                  >
                    <span className={css({ color: 'text.neutral.default', fontSize: 'xs', opacity: 0.38 })}>
                      어제
                    </span>
                    {/* badge with opacity reduced for read */}
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'surface.positive.subtle',
                        border: '1px solid',
                        borderColor: 'border.positive.subtle',
                        color: 'text.positive.default',
                        fontSize: 'xs',
                        borderRadius: 'full',
                        opacity: 0.38,
                      })}
                    >
                      완료됨
                    </span>
                    {/* Ghost button, disabled opacity */}
                    <button
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'surface.transparent',
                        border: 'none',
                        color: 'text.neutral.default',
                        fontSize: 'xs',
                        borderRadius: 'md',
                        cursor: 'pointer',
                        opacity: 0.38,
                        _hover: { bg: 'surface.neutral.ghost' },
                      })}
                    >
                      영수증 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '3',
                right: '3',
                p: '1',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'sm',
                cursor: 'pointer',
                color: 'icon.neutral.muted',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Notification 7: warning, read ── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              bg: 'surface.neutral.default',
              borderRadius: 'lg',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({ width: '4px', flexShrink: 0, bg: 'fill.warning', opacity: 0.38 })}
            />
            <div className={css({ flex: 1, p: '4' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '7' })}>
                <AlertCircle
                  size={20}
                  className={css({
                    color: 'icon.warning.default',
                    flexShrink: 0,
                    mt: '0.5',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: 1 })}>
                  <p
                    className={css({
                      fontWeight: 'semibold',
                      color: 'text.neutral.muted',
                      fontSize: 'sm',
                      mb: '1',
                    })}
                  >
                    API 응답 지연 감지
                  </p>
                  <p
                    className={css({
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '3',
                      opacity: 0.38,
                    })}
                  >
                    결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
                  </p>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      flexWrap: 'wrap',
                    })}
                  >
                    <span className={css({ color: 'text.neutral.default', fontSize: 'xs', opacity: 0.38 })}>
                      2일 전
                    </span>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'surface.neutral.subtle',
                        border: '1px solid',
                        borderColor: 'border.neutral.subtle',
                        color: 'text.neutral.muted',
                        fontSize: 'xs',
                        borderRadius: 'full',
                      })}
                    >
                      처리됨
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '3',
                right: '3',
                p: '1',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'sm',
                cursor: 'pointer',
                color: 'icon.neutral.muted',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Notification 8: info, read ── */}
          <div
            className={css({
              position: 'relative',
              display: 'flex',
              bg: 'surface.neutral.default',
              borderRadius: 'lg',
              overflow: 'hidden',
            })}
          >
            <div
              className={css({ width: '4px', flexShrink: 0, bg: 'fill.info', opacity: 0.38 })}
            />
            <div className={css({ flex: 1, p: '4' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '7' })}>
                <Info
                  size={20}
                  className={css({
                    color: 'icon.info.default',
                    flexShrink: 0,
                    mt: '0.5',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: 1 })}>
                  <p
                    className={css({
                      fontWeight: 'semibold',
                      color: 'text.neutral.muted',
                      fontSize: 'sm',
                      mb: '1',
                    })}
                  >
                    약관 업데이트 안내
                  </p>
                  <p
                    className={css({
                      color: 'text.neutral.default',
                      fontSize: 'sm',
                      mb: '3',
                      opacity: 0.38,
                    })}
                  >
                    서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
                  </p>
                  <div
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2',
                      flexWrap: 'wrap',
                    })}
                  >
                    <span className={css({ color: 'text.neutral.default', fontSize: 'xs', opacity: 0.38 })}>
                      3일 전
                    </span>
                    <span
                      className={css({
                        px: '2',
                        py: '0.5',
                        bg: 'surface.neutral.subtle',
                        border: '1px solid',
                        borderColor: 'border.neutral.subtle',
                        color: 'text.neutral.muted',
                        fontSize: 'xs',
                        borderRadius: 'full',
                      })}
                    >
                      안내
                    </span>
                    <button
                      className={css({
                        px: '3',
                        py: '1',
                        bg: 'surface.transparent',
                        border: 'none',
                        color: 'text.neutral.default',
                        fontSize: 'xs',
                        borderRadius: 'md',
                        cursor: 'pointer',
                        _hover: { bg: 'surface.neutral.ghost' },
                      })}
                    >
                      약관 보기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button
              className={css({
                position: 'absolute',
                top: '3',
                right: '3',
                p: '1',
                bg: 'surface.transparent',
                border: 'none',
                borderRadius: 'sm',
                cursor: 'pointer',
                color: 'icon.neutral.muted',
                _hover: { bg: 'surface.neutral.ghost' },
              })}
            >
              <X size={14} />
            </button>
          </div>

          {/* ── Divider ── */}
          <div
            className={css({
              borderTop: '1px solid',
              borderColor: 'border.neutral.default',
              my: '1',
            })}
          />

          {/* ── Empty state ── */}
          <div
            className={css({
              bg: 'surface.neutral.subtle',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              borderRadius: 'lg',
              p: '8',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '2',
            })}
          >
            <BellOff
              size={32}
              className={css({ color: 'icon.neutral.default', opacity: 0.38 })}
            />
            <span
              className={css({
                color: 'text.neutral.muted',
                fontSize: 'sm',
                fontWeight: 'medium',
              })}
            >
              모든 알림을 확인했습니다
            </span>
            <span
              className={css({
                color: 'text.neutral.default',
                fontSize: 'xs',
                opacity: 0.38,
              })}
            >
              새로운 알림이 오면 여기에 표시됩니다.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
