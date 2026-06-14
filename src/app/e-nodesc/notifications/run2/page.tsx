import { css } from '@ds-token-test/styled-system-intent-first/css';
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
          backgroundColor: 'neutral.surface.base',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: 'neutral.border.base',
          flexShrink: 0,
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingX: '24px',
            paddingY: '16px',
          })}
        >
          {/* 왼쪽: Bell + 제목 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            })}
          >
            <Bell
              size={20}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                fontSize: '18px',
                fontWeight: '600',
                color: 'neutral.text.base',
              })}
            >
              알림 센터
            </span>
          </div>

          {/* 오른쪽: 모두 읽음 처리 버튼 + Settings */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            })}
          >
            <button
              className={css({
                paddingX: '12px',
                paddingY: '6px',
                borderRadius: '6px',
                fontSize: '14px',
                color: 'neutral.text.base',
                backgroundColor: 'neutral.surface.transparent',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'neutral.border.base',
                cursor: 'not-allowed',
                opacity: 0.38,
              })}
              disabled
            >
              모두 읽음 처리
            </button>
            <button
              className={css({
                padding: '8px',
                borderRadius: '6px',
                color: 'neutral.icon.base',
                backgroundColor: 'neutral.surface.transparent',
                border: 'none',
                cursor: 'pointer',
              })}
            >
              <Settings size={20} />
            </button>
          </div>
        </div>

        {/* 탭 바 */}
        <div
          className={css({
            display: 'flex',
            paddingX: '24px',
            gap: '0px',
          })}
        >
          {/* 전체 — 활성 */}
          <button
            className={css({
              paddingX: '16px',
              paddingY: '12px',
              fontSize: '14px',
              fontWeight: '600',
              color: 'primary.text.base',
              borderBottomWidth: '2px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'primary.fill.base',
              backgroundColor: 'neutral.surface.transparent',
              border: 'none',
              borderBottom: '2px solid',
              borderBottomColor: 'primary.fill.base',
              cursor: 'pointer',
            })}
          >
            전체
          </button>

          {/* 읽지 않음 — 비활성 */}
          <button
            className={css({
              paddingX: '16px',
              paddingY: '12px',
              fontSize: '14px',
              color: 'neutral.text.base',
              backgroundColor: 'neutral.surface.transparent',
              border: 'none',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            읽지 않음
          </button>

          {/* 완료됨 — 비활성 */}
          <button
            className={css({
              paddingX: '16px',
              paddingY: '12px',
              fontSize: '14px',
              color: 'neutral.text.base',
              backgroundColor: 'neutral.surface.transparent',
              border: 'none',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            완료됨
          </button>
        </div>
      </header>

      {/* 바디: 2열 레이아웃 */}
      <div
        className={css({
          display: 'flex',
          flex: 1,
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
            borderRightColor: 'neutral.border.base',
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          })}
        >
          {/* 요약 카운터 카드 3개 */}

          {/* 읽지 않음 카드 */}
          <div
            className={css({
              backgroundColor: 'primary.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'primary.border.base',
              borderRadius: '8px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            })}
          >
            <Bell
              size={16}
              className={css({ color: 'primary.icon.base' })}
            />
            <span
              className={css({
                fontSize: '24px',
                fontWeight: '700',
                color: 'primary.text.base',
              })}
            >
              8
            </span>
            <span
              className={css({
                fontSize: '12px',
                color: 'primary.text.base',
              })}
            >
              읽지 않음
            </span>
          </div>

          {/* 오류/위험 카드 */}
          <div
            className={css({
              backgroundColor: 'critical.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'critical.border.base',
              borderRadius: '8px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            })}
          >
            <AlertCircle
              size={16}
              className={css({ color: 'critical.icon.base' })}
            />
            <span
              className={css({
                fontSize: '24px',
                fontWeight: '700',
                color: 'critical.text.base',
              })}
            >
              2
            </span>
            <span
              className={css({
                fontSize: '12px',
                color: 'critical.text.base',
              })}
            >
              즉시 확인
            </span>
          </div>

          {/* 주의 카드 */}
          <div
            className={css({
              backgroundColor: 'warning.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'warning.border.base',
              borderRadius: '8px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            })}
          >
            <AlertTriangle
              size={16}
              className={css({ color: 'warning.icon.base' })}
            />
            <span
              className={css({
                fontSize: '24px',
                fontWeight: '700',
                color: 'warning.text.base',
              })}
            >
              3
            </span>
            <span
              className={css({
                fontSize: '12px',
                color: 'warning.text.base',
              })}
            >
              주의 필요
            </span>
          </div>

          {/* 구분선 */}
          <hr
            className={css({
              borderColor: 'neutral.border.base',
              borderTopWidth: '1px',
              margin: '4px 0',
            })}
          />

          {/* 카테고리 필터 */}
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            })}
          >
            {/* 전체 — 선택됨 */}
            <button
              className={css({
                paddingX: '12px',
                paddingY: '6px',
                borderRadius: '9999px',
                fontSize: '13px',
                fontWeight: '500',
                color: 'inverse.text.base',
                backgroundColor: 'primary.fill.base',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              전체
            </button>

            {/* 시스템 */}
            <button
              className={css({
                paddingX: '12px',
                paddingY: '6px',
                borderRadius: '9999px',
                fontSize: '13px',
                color: 'neutral.text.base',
                backgroundColor: 'neutral.surface.base',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              시스템
            </button>

            {/* 결제 */}
            <button
              className={css({
                paddingX: '12px',
                paddingY: '6px',
                borderRadius: '9999px',
                fontSize: '13px',
                color: 'neutral.text.base',
                backgroundColor: 'neutral.surface.base',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              결제
            </button>

            {/* 배포 */}
            <button
              className={css({
                paddingX: '12px',
                paddingY: '6px',
                borderRadius: '9999px',
                fontSize: '13px',
                color: 'neutral.text.base',
                backgroundColor: 'neutral.surface.base',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              배포
            </button>

            {/* 보안 */}
            <button
              className={css({
                paddingX: '12px',
                paddingY: '6px',
                borderRadius: '9999px',
                fontSize: '13px',
                color: 'neutral.text.base',
                backgroundColor: 'neutral.surface.base',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              보안
            </button>

            {/* 마케팅 */}
            <button
              className={css({
                paddingX: '12px',
                paddingY: '6px',
                borderRadius: '9999px',
                fontSize: '13px',
                color: 'neutral.text.base',
                backgroundColor: 'neutral.surface.base',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              마케팅
            </button>
          </div>
        </aside>

        {/* 오른쪽 알림 목록 */}
        <main
          className={css({
            flex: 1,
            overflowY: 'auto',
            backgroundColor: 'neutral.canvas.02',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          })}
        >
          {/* 알림 1 — 정상 완료 (읽지 않음) */}
          <div
            className={css({
              display: 'flex',
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'primary.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.low',
            })}
          >
            {/* 왼쪽 강조선 */}
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'positive.fill.base',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <CheckCircle2
                    size={18}
                    className={css({ color: 'positive.icon.base' })}
                  />
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.base',
                    })}
                  >
                    배포 v2.4.1 완료
                  </span>
                </div>
                <button
                  className={css({
                    padding: '4px',
                    borderRadius: '4px',
                    color: 'neutral.icon.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  <X size={16} />
                </button>
              </div>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  opacity: 0.38,
                  margin: 0,
                })}
              >
                프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.low',
                    opacity: 0.38,
                  })}
                >
                  방금 전
                </span>
                {/* 뱃지: 완료됨 */}
                <span
                  className={css({
                    paddingX: '8px',
                    paddingY: '2px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'positive.surface.base',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'positive.border.base',
                    color: 'positive.text.base',
                  })}
                >
                  완료됨
                </span>
                {/* 버튼: 배포 로그 보기 */}
                <button
                  className={css({
                    paddingX: '10px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'positive.text.base',
                    backgroundColor: 'neutral.surface.transparent',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'positive.border.base',
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
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'primary.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.low',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'critical.fill.base',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <XCircle
                    size={18}
                    className={css({ color: 'critical.icon.base' })}
                  />
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.base',
                    })}
                  >
                    DB 연결 오류
                  </span>
                </div>
                <button
                  className={css({
                    padding: '4px',
                    borderRadius: '4px',
                    color: 'neutral.icon.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  <X size={16} />
                </button>
              </div>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  opacity: 0.38,
                  margin: 0,
                })}
              >
                데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.low',
                    opacity: 0.38,
                  })}
                >
                  3분 전
                </span>
                {/* 뱃지: 즉시 확인 (filled) */}
                <span
                  className={css({
                    paddingX: '8px',
                    paddingY: '2px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'critical.fill.base',
                    color: 'inverse.text.base',
                  })}
                >
                  즉시 확인
                </span>
                {/* 버튼: 상세 보기 (filled) */}
                <button
                  className={css({
                    paddingX: '10px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'inverse.text.base',
                    backgroundColor: 'critical.fill.base',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  상세 보기
                </button>
                {/* 버튼: 무시 (ghost, 비활성) */}
                <button
                  className={css({
                    paddingX: '10px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'neutral.text.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
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
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'primary.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.low',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'warning.fill.base',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <AlertTriangle
                    size={18}
                    className={css({ color: 'warning.icon.base' })}
                  />
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.base',
                    })}
                  >
                    메모리 사용량 경고
                  </span>
                </div>
                <button
                  className={css({
                    padding: '4px',
                    borderRadius: '4px',
                    color: 'neutral.icon.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  <X size={16} />
                </button>
              </div>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  opacity: 0.38,
                  margin: 0,
                })}
              >
                서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.low',
                    opacity: 0.38,
                  })}
                >
                  15분 전
                </span>
                {/* 뱃지: 주의 */}
                <span
                  className={css({
                    paddingX: '8px',
                    paddingY: '2px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'warning.surface.base',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'warning.border.base',
                    color: 'warning.text.base',
                  })}
                >
                  주의
                </span>
                {/* 버튼: 리소스 모니터 열기 (outline) */}
                <button
                  className={css({
                    paddingX: '10px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'warning.text.base',
                    backgroundColor: 'neutral.surface.transparent',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'warning.border.base',
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
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'primary.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.low',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'info.fill.base',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <Info
                    size={18}
                    className={css({ color: 'info.icon.base' })}
                  />
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.base',
                    })}
                  >
                    시스템 점검 예정
                  </span>
                </div>
                <button
                  className={css({
                    padding: '4px',
                    borderRadius: '4px',
                    color: 'neutral.icon.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  <X size={16} />
                </button>
              </div>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  opacity: 0.38,
                  margin: 0,
                })}
              >
                2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.low',
                    opacity: 0.38,
                  })}
                >
                  1시간 전
                </span>
                {/* 뱃지: 안내 */}
                <span
                  className={css({
                    paddingX: '8px',
                    paddingY: '2px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'info.surface.base',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'info.border.base',
                    color: 'info.text.base',
                  })}
                >
                  안내
                </span>
                {/* 버튼: 일정 확인 (outline) */}
                <button
                  className={css({
                    paddingX: '10px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'info.text.base',
                    backgroundColor: 'neutral.surface.transparent',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'info.border.base',
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
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'primary.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.low',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'primary.fill.base',
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <Zap
                    size={18}
                    className={css({ color: 'primary.icon.base' })}
                  />
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.base',
                    })}
                  >
                    새 기능 출시
                  </span>
                </div>
                <button
                  className={css({
                    padding: '4px',
                    borderRadius: '4px',
                    color: 'neutral.icon.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  <X size={16} />
                </button>
              </div>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  opacity: 0.38,
                  margin: 0,
                })}
              >
                대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.low',
                    opacity: 0.38,
                  })}
                >
                  2시간 전
                </span>
                {/* 뱃지: 새 기능 (filled) */}
                <span
                  className={css({
                    paddingX: '8px',
                    paddingY: '2px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'primary.fill.base',
                    color: 'inverse.text.base',
                  })}
                >
                  새 기능
                </span>
                {/* 버튼: 지금 확인 (filled) */}
                <button
                  className={css({
                    paddingX: '10px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'inverse.text.base',
                    backgroundColor: 'primary.fill.base',
                    border: 'none',
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
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'neutral.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.low',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'positive.fill.base',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <CheckCircle2
                    size={18}
                    className={css({
                      color: 'positive.icon.base',
                      opacity: 0.38,
                    })}
                  />
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.low',
                    })}
                  >
                    결제 처리 완료
                  </span>
                </div>
                <button
                  className={css({
                    padding: '4px',
                    borderRadius: '4px',
                    color: 'neutral.icon.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  <X size={16} />
                </button>
              </div>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  opacity: 0.38,
                  margin: 0,
                })}
              >
                Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.low',
                    opacity: 0.38,
                  })}
                >
                  어제
                </span>
                {/* 뱃지: 완료됨 (연한, 읽음 낮은 opacity) */}
                <span
                  className={css({
                    paddingX: '8px',
                    paddingY: '2px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'positive.surface.base',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'positive.border.base',
                    color: 'positive.text.base',
                    opacity: 0.38,
                  })}
                >
                  완료됨
                </span>
                {/* 버튼: 영수증 보기 (ghost, 비활성) */}
                <button
                  className={css({
                    paddingX: '10px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'neutral.text.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
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
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'neutral.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.low',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'warning.fill.base',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <AlertCircle
                    size={18}
                    className={css({
                      color: 'warning.icon.base',
                      opacity: 0.38,
                    })}
                  />
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.low',
                    })}
                  >
                    API 응답 지연 감지
                  </span>
                </div>
                <button
                  className={css({
                    padding: '4px',
                    borderRadius: '4px',
                    color: 'neutral.icon.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  <X size={16} />
                </button>
              </div>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  opacity: 0.38,
                  margin: 0,
                })}
              >
                결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.low',
                    opacity: 0.38,
                  })}
                >
                  2일 전
                </span>
                {/* 뱃지: 처리됨 (중립) */}
                <span
                  className={css({
                    paddingX: '8px',
                    paddingY: '2px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'neutral.surface.high',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'neutral.border.base',
                    color: 'neutral.text.base',
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
              borderRadius: '8px',
              overflow: 'hidden',
              backgroundColor: 'neutral.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.low',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'info.fill.base',
                opacity: 0.38,
              })}
            />
            <div
              className={css({
                flex: 1,
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <div
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  })}
                >
                  <Info
                    size={18}
                    className={css({
                      color: 'info.icon.base',
                      opacity: 0.38,
                    })}
                  />
                  <span
                    className={css({
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.low',
                    })}
                  >
                    약관 업데이트 안내
                  </span>
                </div>
                <button
                  className={css({
                    padding: '4px',
                    borderRadius: '4px',
                    color: 'neutral.icon.base',
                    backgroundColor: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  <X size={16} />
                </button>
              </div>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.base',
                  opacity: 0.38,
                  margin: 0,
                })}
              >
                서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
              </p>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.low',
                    opacity: 0.38,
                  })}
                >
                  3일 전
                </span>
                {/* 뱃지: 안내 (중립) */}
                <span
                  className={css({
                    paddingX: '8px',
                    paddingY: '2px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    backgroundColor: 'neutral.surface.high',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'neutral.border.base',
                    color: 'neutral.text.base',
                  })}
                >
                  안내
                </span>
                {/* 버튼: 약관 보기 (ghost) */}
                <button
                  className={css({
                    paddingX: '10px',
                    paddingY: '4px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    color: 'neutral.text.base',
                    backgroundColor: 'neutral.surface.transparent',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'neutral.border.base',
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
              borderColor: 'neutral.border.base',
              borderTopWidth: '1px',
              margin: '4px 0',
            })}
          />

          {/* 빈 상태 카드 */}
          <div
            className={css({
              backgroundColor: 'neutral.surface.base',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'neutral.border.base',
              borderRadius: '8px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            })}
          >
            <BellOff
              size={32}
              className={css({
                color: 'neutral.icon.base',
                opacity: 0.38,
              })}
            />
            <span
              className={css({
                fontSize: '14px',
                fontWeight: '500',
                color: 'neutral.text.low',
              })}
            >
              모든 알림을 확인했습니다
            </span>
            <span
              className={css({
                fontSize: '13px',
                color: 'neutral.text.base',
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
