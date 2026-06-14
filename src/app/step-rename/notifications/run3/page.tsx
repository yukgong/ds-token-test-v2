import { css } from '@ds-token-test/styled-system-intent-first-stepnames/css';
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

export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: 'neutral.canvas.01',
        overflow: 'hidden',
      })}
    >
      {/* 상단 헤더 바 */}
      <header
        className={css({
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'neutral.canvas.01',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'neutral.border.default',
          flexShrink: 0,
        })}
      >
        {/* 헤더 타이틀 행 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: '6',
            paddingY: '4',
          })}
        >
          {/* 왼쪽: Bell + 제목 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '2',
            })}
          >
            <Bell
              size={20}
              className={css({ color: 'neutral.icon.default' })}
            />
            <span
              className={css({
                fontSize: 'xl',
                fontWeight: 'bold',
                color: 'neutral.text.default',
              })}
            >
              알림 센터
            </span>
          </div>

          {/* 오른쪽: 모두 읽음 처리 + Settings */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '2',
            })}
          >
            <button
              className={css({
                opacity: 0.38,
                paddingX: '3',
                paddingY: '1.5',
                borderRadius: 'md',
                fontSize: 'sm',
                color: 'neutral.text.default',
                backgroundColor: 'neutral.surface.transparent',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'neutral.border.default',
                cursor: 'not-allowed',
              })}
              disabled
            >
              모두 읽음 처리
            </button>
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '8',
                height: '8',
                borderRadius: 'md',
                backgroundColor: 'neutral.surface.transparent',
                color: 'neutral.icon.default',
                borderWidth: '0',
                cursor: 'pointer',
              })}
            >
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* 탭 바 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            paddingX: '6',
          })}
        >
          {/* 활성 탭: 전체 */}
          <button
            className={css({
              position: 'relative',
              paddingX: '4',
              paddingY: '2.5',
              fontSize: 'sm',
              fontWeight: 'medium',
              color: 'primary.text.default',
              backgroundColor: 'neutral.surface.transparent',
              borderWidth: '0',
              cursor: 'pointer',
              _after: {
                content: '""',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0',
                height: '2px',
                backgroundColor: 'primary.fill.default',
                borderRadius: 'sm',
              },
            })}
          >
            전체
          </button>
          {/* 비활성 탭: 읽지 않음 */}
          <button
            className={css({
              opacity: 0.38,
              paddingX: '4',
              paddingY: '2.5',
              fontSize: 'sm',
              fontWeight: 'medium',
              color: 'neutral.text.default',
              backgroundColor: 'neutral.surface.transparent',
              borderWidth: '0',
              cursor: 'pointer',
            })}
          >
            읽지 않음
          </button>
          {/* 비활성 탭: 완료됨 */}
          <button
            className={css({
              opacity: 0.38,
              paddingX: '4',
              paddingY: '2.5',
              fontSize: 'sm',
              fontWeight: 'medium',
              color: 'neutral.text.default',
              backgroundColor: 'neutral.surface.transparent',
              borderWidth: '0',
              cursor: 'pointer',
            })}
          >
            완료됨
          </button>
        </div>
      </header>

      {/* 본문 2열 레이아웃 */}
      <div
        className={css({
          display: 'flex',
          flex: '1',
          overflow: 'hidden',
        })}
      >
        {/* 왼쪽 필터 사이드바 */}
        <aside
          className={css({
            width: '200px',
            flexShrink: 0,
            backgroundColor: 'neutral.canvas.02',
            borderRightWidth: '1px',
            borderRightStyle: 'solid',
            borderRightColor: 'neutral.border.default',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            padding: '4',
            gap: '3',
          })}
        >
          {/* 요약 카운터 카드 3개 */}

          {/* 1. 읽지 않음 카드 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '2',
              padding: '3',
              borderRadius: 'md',
              backgroundColor: 'primary.surface.default',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'primary.border.default',
            })}
          >
            <Bell
              size={16}
              className={css({ color: 'primary.icon.default', flexShrink: 0 })}
            />
            <div>
              <div
                className={css({
                  fontSize: 'lg',
                  fontWeight: 'bold',
                  color: 'primary.text.default',
                  lineHeight: '1.2',
                })}
              >
                8
              </div>
              <div
                className={css({
                  fontSize: 'xs',
                  color: 'primary.text.default',
                })}
              >
                읽지 않음
              </div>
            </div>
          </div>

          {/* 2. 오류/위험 카드 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '2',
              padding: '3',
              borderRadius: 'md',
              backgroundColor: 'critical.surface.default',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'critical.border.default',
            })}
          >
            <AlertCircle
              size={16}
              className={css({ color: 'critical.icon.default', flexShrink: 0 })}
            />
            <div>
              <div
                className={css({
                  fontSize: 'lg',
                  fontWeight: 'bold',
                  color: 'critical.text.default',
                  lineHeight: '1.2',
                })}
              >
                2
              </div>
              <div
                className={css({
                  fontSize: 'xs',
                  color: 'critical.text.default',
                })}
              >
                즉시 확인
              </div>
            </div>
          </div>

          {/* 3. 주의 카드 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '2',
              padding: '3',
              borderRadius: 'md',
              backgroundColor: 'warning.surface.default',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'warning.border.default',
            })}
          >
            <AlertTriangle
              size={16}
              className={css({ color: 'warning.icon.default', flexShrink: 0 })}
            />
            <div>
              <div
                className={css({
                  fontSize: 'lg',
                  fontWeight: 'bold',
                  color: 'warning.text.default',
                  lineHeight: '1.2',
                })}
              >
                3
              </div>
              <div
                className={css({
                  fontSize: 'xs',
                  color: 'warning.text.default',
                })}
              >
                주의 필요
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <hr
            className={css({
              borderWidth: '0',
              borderTopWidth: '1px',
              borderTopStyle: 'solid',
              borderTopColor: 'neutral.border.subtle',
              margin: '0',
            })}
          />

          {/* 카테고리 필터 */}
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '1',
            })}
          >
            {/* 전체 — 선택됨 */}
            <button
              className={css({
                display: 'block',
                width: '100%',
                textAlign: 'left',
                paddingX: '3',
                paddingY: '1.5',
                borderRadius: 'full',
                fontSize: 'sm',
                fontWeight: 'medium',
                color: 'inverse.text.default',
                backgroundColor: 'primary.fill.default',
                borderWidth: '0',
                cursor: 'pointer',
              })}
            >
              전체
            </button>

            {/* 미선택 항목들 */}
            {['시스템', '결제', '배포', '보안', '마케팅'].map((label) => (
              <button
                key={label}
                className={css({
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  paddingX: '3',
                  paddingY: '1.5',
                  borderRadius: 'full',
                  fontSize: 'sm',
                  color: 'neutral.text.subtle',
                  backgroundColor: 'neutral.surface.default',
                  borderWidth: '0',
                  cursor: 'pointer',
                  _hover: {
                    backgroundColor: 'neutral.surface.strongest',
                    color: 'neutral.text.default',
                  },
                })}
              >
                {label}
              </button>
            ))}
          </div>
        </aside>

        {/* 오른쪽 알림 목록 */}
        <main
          className={css({
            flex: '1',
            backgroundColor: 'neutral.canvas.02',
            overflowY: 'auto',
            padding: '4',
            display: 'flex',
            flexDirection: 'column',
            gap: '3',
          })}
        >
          {/* 알림 1 — 정상 완료 (읽지 않음) */}
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderRadius: 'lg',
              backgroundColor: 'primary.surface.default',
              overflow: 'hidden',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.subtle',
            })}
          >
            {/* 왼쪽 세로 강조 테두리 */}
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'positive.fill.default',
              })}
            />
            <div
              className={css({
                flex: '1',
                padding: '4',
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
              })}
            >
              {/* 헤더 행 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                })}
              >
                <CheckCircle2
                  size={18}
                  className={css({ color: 'positive.icon.default', flexShrink: 0, marginTop: '0.5' })}
                />
                <div className={css({ flex: '1' })}>
                  <span
                    className={css({
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'neutral.text.default',
                    })}
                  >
                    배포 v2.4.1 완료
                  </span>
                  <p
                    className={css({
                      fontSize: 'sm',
                      color: 'neutral.text.subtle',
                      marginTop: '1',
                      opacity: 0.38,
                    })}
                  >
                    프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
                  </p>
                </div>
                {/* X 닫기 버튼 */}
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '6',
                    height: '6',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.icon.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                    flexShrink: 0,
                    _hover: { backgroundColor: 'neutral.surface.strongest' },
                  })}
                >
                  <X size={14} />
                </button>
              </div>
              {/* 하단 행 */}
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
                    opacity: 0.38,
                  })}
                >
                  방금 전
                </span>
                {/* 상태 뱃지: 완료됨 */}
                <span
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2',
                    paddingY: '0.5',
                    borderRadius: 'full',
                    backgroundColor: 'positive.surface.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'positive.border.default',
                    color: 'positive.text.default',
                  })}
                >
                  완료됨
                </span>
                {/* 버튼: 배포 로그 보기 */}
                <button
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2.5',
                    paddingY: '1',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'positive.border.emphasis',
                    color: 'positive.text.default',
                    cursor: 'pointer',
                  })}
                >
                  배포 로그 보기
                </button>
              </div>
            </div>
          </div>

          {/* 알림 2 — 심각한 문제 (읽지 않음) */}
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderRadius: 'lg',
              backgroundColor: 'primary.surface.default',
              overflow: 'hidden',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.subtle',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'critical.fill.default',
              })}
            />
            <div
              className={css({
                flex: '1',
                padding: '4',
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                })}
              >
                <XCircle
                  size={18}
                  className={css({ color: 'critical.icon.default', flexShrink: 0, marginTop: '0.5' })}
                />
                <div className={css({ flex: '1' })}>
                  <span
                    className={css({
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'neutral.text.default',
                    })}
                  >
                    DB 연결 오류
                  </span>
                  <p
                    className={css({
                      fontSize: 'sm',
                      color: 'neutral.text.subtle',
                      marginTop: '1',
                      opacity: 0.38,
                    })}
                  >
                    데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
                  </p>
                </div>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '6',
                    height: '6',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.icon.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                    flexShrink: 0,
                    _hover: { backgroundColor: 'neutral.surface.strongest' },
                  })}
                >
                  <X size={14} />
                </button>
              </div>
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
                    opacity: 0.38,
                  })}
                >
                  3분 전
                </span>
                {/* 상태 뱃지: 즉시 확인 (Solid) */}
                <span
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2',
                    paddingY: '0.5',
                    borderRadius: 'full',
                    backgroundColor: 'critical.fill.default',
                    color: 'inverse.text.default',
                  })}
                >
                  즉시 확인
                </span>
                {/* 버튼: 상세 보기 (filled) */}
                <button
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2.5',
                    paddingY: '1',
                    borderRadius: 'md',
                    backgroundColor: 'critical.fill.default',
                    color: 'inverse.text.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                  })}
                >
                  상세 보기
                </button>
                {/* 버튼: 무시 (ghost, 비활성) */}
                <button
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2.5',
                    paddingY: '1',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.text.default',
                    borderWidth: '0',
                    cursor: 'not-allowed',
                    opacity: 0.38,
                  })}
                  disabled
                >
                  무시
                </button>
              </div>
            </div>
          </div>

          {/* 알림 3 — 주의 필요 (읽지 않음) */}
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderRadius: 'lg',
              backgroundColor: 'primary.surface.default',
              overflow: 'hidden',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.subtle',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'warning.fill.default',
              })}
            />
            <div
              className={css({
                flex: '1',
                padding: '4',
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                })}
              >
                <AlertTriangle
                  size={18}
                  className={css({ color: 'warning.icon.default', flexShrink: 0, marginTop: '0.5' })}
                />
                <div className={css({ flex: '1' })}>
                  <span
                    className={css({
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'neutral.text.default',
                    })}
                  >
                    메모리 사용량 경고
                  </span>
                  <p
                    className={css({
                      fontSize: 'sm',
                      color: 'neutral.text.subtle',
                      marginTop: '1',
                      opacity: 0.38,
                    })}
                  >
                    서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
                  </p>
                </div>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '6',
                    height: '6',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.icon.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                    flexShrink: 0,
                    _hover: { backgroundColor: 'neutral.surface.strongest' },
                  })}
                >
                  <X size={14} />
                </button>
              </div>
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
                    opacity: 0.38,
                  })}
                >
                  15분 전
                </span>
                {/* 상태 뱃지: 주의 */}
                <span
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2',
                    paddingY: '0.5',
                    borderRadius: 'full',
                    backgroundColor: 'warning.surface.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'warning.border.default',
                    color: 'warning.text.default',
                  })}
                >
                  주의
                </span>
                {/* 버튼: 리소스 모니터 열기 (outline) */}
                <button
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2.5',
                    paddingY: '1',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'warning.border.emphasis',
                    color: 'warning.text.default',
                    cursor: 'pointer',
                  })}
                >
                  리소스 모니터 열기
                </button>
              </div>
            </div>
          </div>

          {/* 알림 4 — 일반 안내 (읽지 않음) */}
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderRadius: 'lg',
              backgroundColor: 'primary.surface.default',
              overflow: 'hidden',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.subtle',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'info.fill.default',
              })}
            />
            <div
              className={css({
                flex: '1',
                padding: '4',
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                })}
              >
                <Info
                  size={18}
                  className={css({ color: 'info.icon.default', flexShrink: 0, marginTop: '0.5' })}
                />
                <div className={css({ flex: '1' })}>
                  <span
                    className={css({
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'neutral.text.default',
                    })}
                  >
                    시스템 점검 예정
                  </span>
                  <p
                    className={css({
                      fontSize: 'sm',
                      color: 'neutral.text.subtle',
                      marginTop: '1',
                      opacity: 0.38,
                    })}
                  >
                    2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
                  </p>
                </div>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '6',
                    height: '6',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.icon.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                    flexShrink: 0,
                    _hover: { backgroundColor: 'neutral.surface.strongest' },
                  })}
                >
                  <X size={14} />
                </button>
              </div>
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
                    opacity: 0.38,
                  })}
                >
                  1시간 전
                </span>
                {/* 상태 뱃지: 안내 */}
                <span
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2',
                    paddingY: '0.5',
                    borderRadius: 'full',
                    backgroundColor: 'info.surface.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'info.border.default',
                    color: 'info.text.default',
                  })}
                >
                  안내
                </span>
                {/* 버튼: 일정 확인 (outline) */}
                <button
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2.5',
                    paddingY: '1',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'info.border.emphasis',
                    color: 'info.text.default',
                    cursor: 'pointer',
                  })}
                >
                  일정 확인
                </button>
              </div>
            </div>
          </div>

          {/* 알림 5 — 메인 컬러/기능 (읽지 않음) */}
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderRadius: 'lg',
              backgroundColor: 'primary.surface.default',
              overflow: 'hidden',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.subtle',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'primary.fill.default',
              })}
            />
            <div
              className={css({
                flex: '1',
                padding: '4',
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                })}
              >
                <Zap
                  size={18}
                  className={css({ color: 'primary.icon.default', flexShrink: 0, marginTop: '0.5' })}
                />
                <div className={css({ flex: '1' })}>
                  <span
                    className={css({
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'neutral.text.default',
                    })}
                  >
                    새 기능 출시
                  </span>
                  <p
                    className={css({
                      fontSize: 'sm',
                      color: 'neutral.text.subtle',
                      marginTop: '1',
                      opacity: 0.38,
                    })}
                  >
                    대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
                  </p>
                </div>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '6',
                    height: '6',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.icon.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                    flexShrink: 0,
                    _hover: { backgroundColor: 'neutral.surface.strongest' },
                  })}
                >
                  <X size={14} />
                </button>
              </div>
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
                    opacity: 0.38,
                  })}
                >
                  2시간 전
                </span>
                {/* 상태 뱃지: 새 기능 (Solid) */}
                <span
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2',
                    paddingY: '0.5',
                    borderRadius: 'full',
                    backgroundColor: 'primary.fill.default',
                    color: 'inverse.text.default',
                  })}
                >
                  새 기능
                </span>
                {/* 버튼: 지금 확인 (filled) */}
                <button
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2.5',
                    paddingY: '1',
                    borderRadius: 'md',
                    backgroundColor: 'primary.fill.default',
                    color: 'inverse.text.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                  })}
                >
                  지금 확인
                </button>
              </div>
            </div>
          </div>

          {/* 알림 6 — 정상 완료 (읽음) */}
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderRadius: 'lg',
              backgroundColor: 'neutral.canvas.01',
              overflow: 'hidden',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.subtle',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'positive.fill.default',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: '1',
                padding: '4',
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                })}
              >
                <CheckCircle2
                  size={18}
                  className={css({
                    color: 'positive.icon.default',
                    flexShrink: 0,
                    marginTop: '0.5',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: '1' })}>
                  <span
                    className={css({
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'neutral.text.subtle',
                    })}
                  >
                    결제 처리 완료
                  </span>
                  <p
                    className={css({
                      fontSize: 'sm',
                      color: 'neutral.text.subtle',
                      marginTop: '1',
                      opacity: 0.38,
                    })}
                  >
                    Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
                  </p>
                </div>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '6',
                    height: '6',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.icon.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                    flexShrink: 0,
                    _hover: { backgroundColor: 'neutral.surface.strongest' },
                  })}
                >
                  <X size={14} />
                </button>
              </div>
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
                    opacity: 0.38,
                  })}
                >
                  어제
                </span>
                {/* 상태 뱃지: 완료됨 (읽음 — opacity 낮게) */}
                <span
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2',
                    paddingY: '0.5',
                    borderRadius: 'full',
                    backgroundColor: 'positive.surface.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'positive.border.default',
                    color: 'positive.text.default',
                    opacity: 0.38,
                  })}
                >
                  완료됨
                </span>
                {/* 버튼: 영수증 보기 (ghost, 비활성) */}
                <button
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2.5',
                    paddingY: '1',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.text.default',
                    borderWidth: '0',
                    cursor: 'not-allowed',
                    opacity: 0.38,
                  })}
                  disabled
                >
                  영수증 보기
                </button>
              </div>
            </div>
          </div>

          {/* 알림 7 — 주의 필요 (읽음) */}
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderRadius: 'lg',
              backgroundColor: 'neutral.canvas.01',
              overflow: 'hidden',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.subtle',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'warning.fill.default',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: '1',
                padding: '4',
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                })}
              >
                <AlertCircle
                  size={18}
                  className={css({
                    color: 'warning.icon.default',
                    flexShrink: 0,
                    marginTop: '0.5',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: '1' })}>
                  <span
                    className={css({
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'neutral.text.subtle',
                    })}
                  >
                    API 응답 지연 감지
                  </span>
                  <p
                    className={css({
                      fontSize: 'sm',
                      color: 'neutral.text.subtle',
                      marginTop: '1',
                      opacity: 0.38,
                    })}
                  >
                    결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
                  </p>
                </div>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '6',
                    height: '6',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.icon.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                    flexShrink: 0,
                    _hover: { backgroundColor: 'neutral.surface.strongest' },
                  })}
                >
                  <X size={14} />
                </button>
              </div>
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
                    opacity: 0.38,
                  })}
                >
                  2일 전
                </span>
                {/* 상태 뱃지: 처리됨 (neutral) */}
                <span
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2',
                    paddingY: '0.5',
                    borderRadius: 'full',
                    backgroundColor: 'neutral.surface.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'neutral.border.default',
                    color: 'neutral.text.subtle',
                  })}
                >
                  처리됨
                </span>
              </div>
            </div>
          </div>

          {/* 알림 8 — 일반 안내 (읽음) */}
          <div
            className={css({
              display: 'flex',
              position: 'relative',
              borderRadius: 'lg',
              backgroundColor: 'neutral.canvas.01',
              overflow: 'hidden',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.subtle',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'info.fill.default',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: '1',
                padding: '4',
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '3',
                })}
              >
                <Info
                  size={18}
                  className={css({
                    color: 'info.icon.default',
                    flexShrink: 0,
                    marginTop: '0.5',
                    opacity: 0.38,
                  })}
                />
                <div className={css({ flex: '1' })}>
                  <span
                    className={css({
                      fontSize: 'sm',
                      fontWeight: 'semibold',
                      color: 'neutral.text.subtle',
                    })}
                  >
                    약관 업데이트 안내
                  </span>
                  <p
                    className={css({
                      fontSize: 'sm',
                      color: 'neutral.text.subtle',
                      marginTop: '1',
                      opacity: 0.38,
                    })}
                  >
                    서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
                  </p>
                </div>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '6',
                    height: '6',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.icon.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                    flexShrink: 0,
                    _hover: { backgroundColor: 'neutral.surface.strongest' },
                  })}
                >
                  <X size={14} />
                </button>
              </div>
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
                    opacity: 0.38,
                  })}
                >
                  3일 전
                </span>
                {/* 상태 뱃지: 안내 (neutral) */}
                <span
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2',
                    paddingY: '0.5',
                    borderRadius: 'full',
                    backgroundColor: 'neutral.surface.default',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'neutral.border.default',
                    color: 'neutral.text.subtle',
                  })}
                >
                  안내
                </span>
                {/* 버튼: 약관 보기 (ghost) */}
                <button
                  className={css({
                    fontSize: 'xs',
                    paddingX: '2.5',
                    paddingY: '1',
                    borderRadius: 'md',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.text.default',
                    borderWidth: '0',
                    cursor: 'pointer',
                  })}
                >
                  약관 보기
                </button>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <hr
            className={css({
              borderWidth: '0',
              borderTopWidth: '1px',
              borderTopStyle: 'solid',
              borderTopColor: 'neutral.border.default',
              margin: '0',
            })}
          />

          {/* 빈 상태 카드 */}
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2',
              padding: '8',
              borderRadius: 'lg',
              backgroundColor: 'neutral.canvas.02',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.default',
              textAlign: 'center',
            })}
          >
            <BellOff
              size={32}
              className={css({
                color: 'neutral.icon.default',
                opacity: 0.38,
              })}
            />
            <span
              className={css({
                fontSize: 'sm',
                fontWeight: 'medium',
                color: 'neutral.text.subtle',
              })}
            >
              모든 알림을 확인했습니다
            </span>
            <span
              className={css({
                fontSize: 'xs',
                color: 'neutral.text.subtle',
                opacity: 0.38,
              })}
            >
              새로운 알림이 없습니다. 잠시 후 다시 확인해보세요.
            </span>
          </div>
        </main>
      </div>
    </div>
  );
}
