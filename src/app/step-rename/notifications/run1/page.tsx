import { css } from '@ds-token-test/styled-system-intent-first-stepnames/css';
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
        fontFamily: 'sans',
        fontSize: 'sm',
        bg: 'neutral.canvas.01',
      })}
    >
      {/* ===== HEADER ===== */}
      <header
        className={css({
          bg: 'neutral.canvas.01',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.default',
          px: '5',
          h: '14',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexShrink: 0,
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <Bell
            size={20}
            className={css({ color: 'neutral.icon.default', flexShrink: 0 })}
          />
          <span
            className={css({
              fontSize: 'lg',
              fontWeight: 'semibold',
              color: 'neutral.text.default',
            })}
          >
            알림 센터
          </span>
        </div>

        <div className={css({ display: 'flex', alignItems: 'center', gap: '1' })}>
          {/* 모두 읽음 처리 — ghost, disabled (opacity: 0.38) */}
          <button
            className={css({
              px: '3',
              py: '1.5',
              bg: 'neutral.surface.transparent',
              border: 'none',
              color: 'neutral.text.default',
              fontSize: 'sm',
              rounded: 'md',
              cursor: 'not-allowed',
              opacity: '0.38',
            })}
          >
            모두 읽음 처리
          </button>
          {/* Settings — ghost */}
          <button
            className={css({
              p: '1.5',
              bg: 'neutral.surface.transparent',
              border: 'none',
              color: 'neutral.icon.default',
              rounded: 'md',
              cursor: 'pointer',
              _hover: { bg: 'neutral.surface.strongest' },
            })}
          >
            <Settings size={18} />
          </button>
        </div>
      </header>

      {/* ===== TABS BAR ===== */}
      <div
        className={css({
          bg: 'neutral.canvas.01',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.default',
          px: '5',
          display: 'flex',
          flexShrink: 0,
        })}
      >
        {/* 활성 탭: 전체 */}
        <button
          className={css({
            px: '4',
            py: '3',
            bg: 'neutral.surface.transparent',
            border: 'none',
            borderBottom: '2px solid',
            borderColor: 'primary.border.emphasis',
            color: 'primary.text.default',
            fontSize: 'sm',
            fontWeight: 'medium',
            cursor: 'pointer',
          })}
        >
          전체
        </button>
        {/* 비활성 탭: 읽지 않음 (opacity: 0.38) */}
        <button
          className={css({
            px: '4',
            py: '3',
            bg: 'neutral.surface.transparent',
            border: 'none',
            borderBottom: '2px solid',
            borderColor: 'neutral.border.transparent',
            color: 'neutral.text.default',
            fontSize: 'sm',
            cursor: 'pointer',
            opacity: '0.38',
          })}
        >
          읽지 않음
        </button>
        {/* 비활성 탭: 완료됨 (opacity: 0.38) */}
        <button
          className={css({
            px: '4',
            py: '3',
            bg: 'neutral.surface.transparent',
            border: 'none',
            borderBottom: '2px solid',
            borderColor: 'neutral.border.transparent',
            color: 'neutral.text.default',
            fontSize: 'sm',
            cursor: 'pointer',
            opacity: '0.38',
          })}
        >
          완료됨
        </button>
      </div>

      {/* ===== CONTENT AREA ===== */}
      <div className={css({ flex: '1', display: 'flex', overflow: 'hidden' })}>

        {/* ===== LEFT FILTER SIDEBAR ===== */}
        <aside
          className={css({
            w: '[200px]',
            flexShrink: 0,
            bg: 'neutral.canvas.02',
            borderRight: '1px solid',
            borderColor: 'neutral.border.default',
            display: 'flex',
            flexDir: 'column',
            gap: '3',
            p: '4',
            overflowY: 'auto',
          })}
        >
          {/* 카운터 카드 1 — 읽지 않음 (primary) */}
          <div
            className={css({
              bg: 'primary.surface.default',
              border: '1px solid',
              borderColor: 'primary.border.default',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <Bell size={15} className={css({ color: 'primary.icon.default' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'primary.text.default',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              8
            </span>
            <span className={css({ fontSize: 'xs', color: 'primary.text.default' })}>
              읽지 않음
            </span>
          </div>

          {/* 카운터 카드 2 — 오류/위험 (critical) */}
          <div
            className={css({
              bg: 'critical.surface.default',
              border: '1px solid',
              borderColor: 'critical.border.default',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <AlertCircle size={15} className={css({ color: 'critical.icon.default' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'critical.text.default',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              2
            </span>
            <span className={css({ fontSize: 'xs', color: 'critical.text.default' })}>
              즉시 확인
            </span>
          </div>

          {/* 카운터 카드 3 — 주의 (warning) */}
          <div
            className={css({
              bg: 'warning.surface.default',
              border: '1px solid',
              borderColor: 'warning.border.default',
              rounded: 'lg',
              p: '3',
              display: 'flex',
              flexDir: 'column',
              gap: '1',
            })}
          >
            <AlertTriangle size={15} className={css({ color: 'warning.icon.default' })} />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'warning.text.default',
                lineHeight: '1.2',
                mt: '0.5',
              })}
            >
              3
            </span>
            <span className={css({ fontSize: 'xs', color: 'warning.text.default' })}>
              주의 필요
            </span>
          </div>

          {/* 구분선 */}
          <div
            className={css({
              h: '[1px]',
              bg: 'neutral.border.subtle',
            })}
          />

          {/* 카테고리 필터 */}
          <div className={css({ display: 'flex', flexDir: 'column', gap: '1' })}>
            {/* 선택됨 — primary filled, pill */}
            <button
              className={css({
                px: '3',
                py: '1.5',
                bg: 'primary.fill.default',
                color: 'inverse.text.default',
                fontSize: 'sm',
                fontWeight: 'medium',
                rounded: 'full',
                border: 'none',
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
                  bg: 'neutral.surface.default',
                  color: 'neutral.text.subtle',
                  fontSize: 'sm',
                  rounded: 'full',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  _hover: {
                    bg: 'neutral.surface.strongest',
                    color: 'neutral.text.default',
                  },
                })}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        {/* ===== NOTIFICATION LIST ===== */}
        <main
          className={css({
            flex: '1',
            overflowY: 'auto',
            bg: 'neutral.canvas.02',
            p: '4',
            display: 'flex',
            flexDir: 'column',
            gap: '3',
          })}
        >

          {/* ── 알림 1: 정상 완료, 읽지 않음 ── */}
          <div
            className={css({
              rounded: 'lg',
              overflow: 'hidden',
              bg: 'primary.surface.default',
              borderLeft: '4px solid',
              borderColor: 'positive.fill.default',
              p: '4',
              display: 'flex',
              gap: '3',
            })}
          >
            <CheckCircle2
              size={20}
              className={css({ color: 'positive.icon.default', flexShrink: 0, mt: '0.5' })}
            />
            <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  color: 'neutral.text.default',
                })}
              >
                배포 v2.4.1 완료
              </p>
              <p
                className={css({
                  fontSize: 'sm',
                  color: 'neutral.text.default',
                  opacity: '0.38',
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
                <span
                  className={css({
                    fontSize: 'xs',
                    color: 'neutral.text.subtle',
                    opacity: '0.38',
                  })}
                >
                  방금 전
                </span>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    bg: 'positive.surface.default',
                    border: '1px solid',
                    borderColor: 'positive.border.default',
                    color: 'positive.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'full',
                  })}
                >
                  완료됨
                </span>
                <button
                  className={css({
                    px: '2.5',
                    py: '1',
                    bg: 'neutral.surface.transparent',
                    border: '1px solid',
                    borderColor: 'positive.border.emphasis',
                    color: 'positive.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'positive.surface.strongest' },
                  })}
                >
                  배포 로그 보기
                </button>
              </div>
            </div>
            <button
              className={css({
                p: '1',
                bg: 'neutral.surface.transparent',
                border: 'none',
                color: 'neutral.icon.default',
                rounded: 'md',
                cursor: 'pointer',
                flexShrink: 0,
                alignSelf: 'flex-start',
                _hover: { bg: 'neutral.surface.strongest' },
              })}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── 알림 2: 심각한 오류, 읽지 않음 ── */}
          <div
            className={css({
              rounded: 'lg',
              overflow: 'hidden',
              bg: 'primary.surface.default',
              borderLeft: '4px solid',
              borderColor: 'critical.fill.default',
              p: '4',
              display: 'flex',
              gap: '3',
            })}
          >
            <XCircle
              size={20}
              className={css({ color: 'critical.icon.default', flexShrink: 0, mt: '0.5' })}
            />
            <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  color: 'critical.text.default',
                })}
              >
                DB 연결 오류
              </p>
              <p
                className={css({
                  fontSize: 'sm',
                  color: 'neutral.text.default',
                  opacity: '0.38',
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
                <span
                  className={css({
                    fontSize: 'xs',
                    color: 'neutral.text.subtle',
                    opacity: '0.38',
                  })}
                >
                  3분 전
                </span>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    bg: 'critical.fill.default',
                    color: 'inverse.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'full',
                  })}
                >
                  즉시 확인
                </span>
                <button
                  className={css({
                    px: '2.5',
                    py: '1',
                    bg: 'critical.fill.default',
                    border: 'none',
                    color: 'inverse.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'critical.surface.strongest' },
                  })}
                >
                  상세 보기
                </button>
                {/* 무시 — ghost, 비활성 */}
                <button
                  className={css({
                    px: '2.5',
                    py: '1',
                    bg: 'neutral.surface.transparent',
                    border: 'none',
                    color: 'neutral.text.default',
                    fontSize: 'xs',
                    rounded: 'md',
                    cursor: 'not-allowed',
                    opacity: '0.38',
                  })}
                >
                  무시
                </button>
              </div>
            </div>
            <button
              className={css({
                p: '1',
                bg: 'neutral.surface.transparent',
                border: 'none',
                color: 'neutral.icon.default',
                rounded: 'md',
                cursor: 'pointer',
                flexShrink: 0,
                alignSelf: 'flex-start',
                _hover: { bg: 'neutral.surface.strongest' },
              })}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── 알림 3: 주의 필요, 읽지 않음 ── */}
          <div
            className={css({
              rounded: 'lg',
              overflow: 'hidden',
              bg: 'primary.surface.default',
              borderLeft: '4px solid',
              borderColor: 'warning.fill.default',
              p: '4',
              display: 'flex',
              gap: '3',
            })}
          >
            <AlertTriangle
              size={20}
              className={css({ color: 'warning.icon.default', flexShrink: 0, mt: '0.5' })}
            />
            <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  color: 'neutral.text.default',
                })}
              >
                메모리 사용량 경고
              </p>
              <p
                className={css({
                  fontSize: 'sm',
                  color: 'neutral.text.default',
                  opacity: '0.38',
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
                <span
                  className={css({
                    fontSize: 'xs',
                    color: 'neutral.text.subtle',
                    opacity: '0.38',
                  })}
                >
                  15분 전
                </span>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    bg: 'warning.surface.default',
                    border: '1px solid',
                    borderColor: 'warning.border.default',
                    color: 'warning.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'full',
                  })}
                >
                  주의
                </span>
                <button
                  className={css({
                    px: '2.5',
                    py: '1',
                    bg: 'neutral.surface.transparent',
                    border: '1px solid',
                    borderColor: 'warning.border.emphasis',
                    color: 'warning.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'warning.surface.strongest' },
                  })}
                >
                  리소스 모니터 열기
                </button>
              </div>
            </div>
            <button
              className={css({
                p: '1',
                bg: 'neutral.surface.transparent',
                border: 'none',
                color: 'neutral.icon.default',
                rounded: 'md',
                cursor: 'pointer',
                flexShrink: 0,
                alignSelf: 'flex-start',
                _hover: { bg: 'neutral.surface.strongest' },
              })}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── 알림 4: 일반 안내, 읽지 않음 ── */}
          <div
            className={css({
              rounded: 'lg',
              overflow: 'hidden',
              bg: 'primary.surface.default',
              borderLeft: '4px solid',
              borderColor: 'info.fill.default',
              p: '4',
              display: 'flex',
              gap: '3',
            })}
          >
            <Info
              size={20}
              className={css({ color: 'info.icon.default', flexShrink: 0, mt: '0.5' })}
            />
            <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  color: 'neutral.text.default',
                })}
              >
                시스템 점검 예정
              </p>
              <p
                className={css({
                  fontSize: 'sm',
                  color: 'neutral.text.default',
                  opacity: '0.38',
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
                <span
                  className={css({
                    fontSize: 'xs',
                    color: 'neutral.text.subtle',
                    opacity: '0.38',
                  })}
                >
                  1시간 전
                </span>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    bg: 'info.surface.default',
                    border: '1px solid',
                    borderColor: 'info.border.default',
                    color: 'info.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'full',
                  })}
                >
                  안내
                </span>
                <button
                  className={css({
                    px: '2.5',
                    py: '1',
                    bg: 'neutral.surface.transparent',
                    border: '1px solid',
                    borderColor: 'info.border.emphasis',
                    color: 'info.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'info.surface.strongest' },
                  })}
                >
                  일정 확인
                </button>
              </div>
            </div>
            <button
              className={css({
                p: '1',
                bg: 'neutral.surface.transparent',
                border: 'none',
                color: 'neutral.icon.default',
                rounded: 'md',
                cursor: 'pointer',
                flexShrink: 0,
                alignSelf: 'flex-start',
                _hover: { bg: 'neutral.surface.strongest' },
              })}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── 알림 5: 메인 컬러/기능, 읽지 않음 ── */}
          <div
            className={css({
              rounded: 'lg',
              overflow: 'hidden',
              bg: 'primary.surface.default',
              borderLeft: '4px solid',
              borderColor: 'primary.fill.default',
              p: '4',
              display: 'flex',
              gap: '3',
            })}
          >
            <Zap
              size={20}
              className={css({ color: 'primary.icon.default', flexShrink: 0, mt: '0.5' })}
            />
            <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'semibold',
                  color: 'neutral.text.default',
                })}
              >
                새 기능 출시
              </p>
              <p
                className={css({
                  fontSize: 'sm',
                  color: 'neutral.text.default',
                  opacity: '0.38',
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
                <span
                  className={css({
                    fontSize: 'xs',
                    color: 'neutral.text.subtle',
                    opacity: '0.38',
                  })}
                >
                  2시간 전
                </span>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    bg: 'primary.fill.default',
                    color: 'inverse.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'full',
                  })}
                >
                  새 기능
                </span>
                <button
                  className={css({
                    px: '2.5',
                    py: '1',
                    bg: 'primary.fill.default',
                    border: 'none',
                    color: 'inverse.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'primary.surface.strongest' },
                  })}
                >
                  지금 확인
                </button>
              </div>
            </div>
            <button
              className={css({
                p: '1',
                bg: 'neutral.surface.transparent',
                border: 'none',
                color: 'neutral.icon.default',
                rounded: 'md',
                cursor: 'pointer',
                flexShrink: 0,
                alignSelf: 'flex-start',
                _hover: { bg: 'neutral.surface.strongest' },
              })}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── 알림 6: 정상 완료, 읽음 ── */}
          <div
            className={css({
              rounded: 'lg',
              overflow: 'hidden',
              bg: 'neutral.canvas.01',
              borderLeft: '4px solid',
              borderColor: 'positive.fill.default',
              p: '4',
              display: 'flex',
              gap: '3',
              opacity: '0.38',
            })}
          >
            <CheckCircle2
              size={20}
              className={css({ color: 'positive.icon.default', flexShrink: 0, mt: '0.5' })}
            />
            <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  color: 'neutral.text.subtle',
                })}
              >
                결제 처리 완료
              </p>
              <p className={css({ fontSize: 'sm', color: 'neutral.text.subtle' })}>
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
                <span className={css({ fontSize: 'xs', color: 'neutral.text.muted' })}>어제</span>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    bg: 'positive.surface.default',
                    border: '1px solid',
                    borderColor: 'positive.border.default',
                    color: 'positive.text.default',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'full',
                  })}
                >
                  완료됨
                </span>
                <button
                  className={css({
                    px: '2.5',
                    py: '1',
                    bg: 'neutral.surface.transparent',
                    border: 'none',
                    color: 'neutral.text.subtle',
                    fontSize: 'xs',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'neutral.surface.strongest' },
                  })}
                >
                  영수증 보기
                </button>
              </div>
            </div>
            <button
              className={css({
                p: '1',
                bg: 'neutral.surface.transparent',
                border: 'none',
                color: 'neutral.icon.default',
                rounded: 'md',
                cursor: 'pointer',
                flexShrink: 0,
                alignSelf: 'flex-start',
                _hover: { bg: 'neutral.surface.strongest' },
              })}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── 알림 7: 주의 필요, 읽음 ── */}
          <div
            className={css({
              rounded: 'lg',
              overflow: 'hidden',
              bg: 'neutral.canvas.01',
              borderLeft: '4px solid',
              borderColor: 'warning.fill.default',
              p: '4',
              display: 'flex',
              gap: '3',
            })}
          >
            <AlertCircle
              size={20}
              className={css({
                color: 'warning.icon.default',
                flexShrink: 0,
                mt: '0.5',
                opacity: '0.38',
              })}
            />
            <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  color: 'neutral.text.subtle',
                })}
              >
                API 응답 지연 감지
              </p>
              <p className={css({ fontSize: 'sm', color: 'neutral.text.subtle' })}>
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
                <span
                  className={css({
                    fontSize: 'xs',
                    color: 'neutral.text.muted',
                    opacity: '0.38',
                  })}
                >
                  2일 전
                </span>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    bg: 'neutral.surface.default',
                    border: '1px solid',
                    borderColor: 'neutral.border.subtle',
                    color: 'neutral.text.subtle',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'full',
                  })}
                >
                  처리됨
                </span>
              </div>
            </div>
            <button
              className={css({
                p: '1',
                bg: 'neutral.surface.transparent',
                border: 'none',
                color: 'neutral.icon.default',
                rounded: 'md',
                cursor: 'pointer',
                flexShrink: 0,
                alignSelf: 'flex-start',
                _hover: { bg: 'neutral.surface.strongest' },
              })}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── 알림 8: 일반 안내, 읽음 ── */}
          <div
            className={css({
              rounded: 'lg',
              overflow: 'hidden',
              bg: 'neutral.canvas.01',
              borderLeft: '4px solid',
              borderColor: 'info.fill.default',
              p: '4',
              display: 'flex',
              gap: '3',
            })}
          >
            <Info
              size={20}
              className={css({
                color: 'info.icon.default',
                flexShrink: 0,
                mt: '0.5',
                opacity: '0.38',
              })}
            />
            <div className={css({ flex: '1', display: 'flex', flexDir: 'column', gap: '1.5' })}>
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  color: 'neutral.text.subtle',
                })}
              >
                약관 업데이트 안내
              </p>
              <p className={css({ fontSize: 'sm', color: 'neutral.text.subtle' })}>
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
                <span
                  className={css({
                    fontSize: 'xs',
                    color: 'neutral.text.muted',
                    opacity: '0.38',
                  })}
                >
                  3일 전
                </span>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    bg: 'neutral.surface.default',
                    border: '1px solid',
                    borderColor: 'neutral.border.subtle',
                    color: 'neutral.text.subtle',
                    fontSize: 'xs',
                    fontWeight: 'medium',
                    rounded: 'full',
                  })}
                >
                  안내
                </span>
                <button
                  className={css({
                    px: '2.5',
                    py: '1',
                    bg: 'neutral.surface.transparent',
                    border: 'none',
                    color: 'neutral.text.subtle',
                    fontSize: 'xs',
                    rounded: 'md',
                    cursor: 'pointer',
                    _hover: { bg: 'neutral.surface.strongest' },
                  })}
                >
                  약관 보기
                </button>
              </div>
            </div>
            <button
              className={css({
                p: '1',
                bg: 'neutral.surface.transparent',
                border: 'none',
                color: 'neutral.icon.default',
                rounded: 'md',
                cursor: 'pointer',
                flexShrink: 0,
                alignSelf: 'flex-start',
                _hover: { bg: 'neutral.surface.strongest' },
              })}
            >
              <X size={16} />
            </button>
          </div>

          {/* ── 빈 상태 ── */}
          <div>
            <div
              className={css({
                h: '[1px]',
                bg: 'neutral.border.subtle',
                my: '2',
              })}
            />
            <div
              className={css({
                bg: 'neutral.surface.default',
                border: '1px solid',
                borderColor: 'neutral.border.default',
                rounded: 'lg',
                p: '8',
                display: 'flex',
                flexDir: 'column',
                alignItems: 'center',
                gap: '2',
              })}
            >
              <BellOff
                size={24}
                className={css({
                  color: 'neutral.icon.default',
                  opacity: '0.38',
                })}
              />
              <p
                className={css({
                  fontSize: 'sm',
                  fontWeight: 'medium',
                  color: 'neutral.text.subtle',
                })}
              >
                모든 알림을 확인했습니다
              </p>
              <p
                className={css({
                  fontSize: 'xs',
                  color: 'neutral.text.muted',
                  opacity: '0.38',
                })}
              >
                새로운 알림이 없습니다
              </p>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
