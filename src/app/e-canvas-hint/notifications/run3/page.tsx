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
        overflow: 'hidden',
        backgroundColor: 'neutral.canvas.01',
      })}
    >
      {/* 상단 헤더 바 */}
      <header
        className={css({
          backgroundColor: 'neutral.canvas.02',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.base',
          flexShrink: 0,
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 24px',
          })}
        >
          {/* 왼쪽: Bell 아이콘 + 제목 */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
            <Bell size={20} className={css({ color: 'neutral.icon.base' })} />
            <h1
              className={css({
                color: 'neutral.text.base',
                fontSize: '18px',
                fontWeight: '700',
                margin: 0,
              })}
            >
              알림 센터
            </h1>
          </div>

          {/* 오른쪽: 모두 읽음 처리 버튼(비활성) + Settings 아이콘 버튼 */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
            <button
              className={css({
                padding: '6px 14px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'neutral.surface.transparent',
                color: 'neutral.text.base',
                fontSize: '14px',
                cursor: 'pointer',
                opacity: 0.38,
              })}
            >
              모두 읽음 처리
            </button>
            <button
              className={css({
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'neutral.surface.transparent',
                cursor: 'pointer',
              })}
            >
              <Settings size={18} className={css({ color: 'neutral.icon.base' })} />
            </button>
          </div>
        </div>

        {/* 탭 바 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            gap: '0',
          })}
        >
          {/* 전체 — 활성 탭 */}
          <button
            className={css({
              padding: '10px 16px',
              border: 'none',
              borderBottom: '2px solid',
              borderColor: 'primary.border.highest',
              backgroundColor: 'neutral.surface.transparent',
              color: 'primary.text.base',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
            })}
          >
            전체
          </button>
          {/* 읽지 않음 — 비활성 탭 */}
          <button
            className={css({
              padding: '10px 16px',
              border: 'none',
              borderBottom: '2px solid',
              borderColor: 'neutral.border.transparent',
              backgroundColor: 'neutral.surface.transparent',
              color: 'neutral.text.base',
              fontSize: '14px',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            읽지 않음
          </button>
          {/* 완료됨 — 비활성 탭 */}
          <button
            className={css({
              padding: '10px 16px',
              border: 'none',
              borderBottom: '2px solid',
              borderColor: 'neutral.border.transparent',
              backgroundColor: 'neutral.surface.transparent',
              color: 'neutral.text.base',
              fontSize: '14px',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            완료됨
          </button>
        </div>
      </header>

      {/* 본문 2열 레이아웃 */}
      <div className={css({ display: 'flex', flex: 1, overflow: 'hidden' })}>

        {/* 왼쪽 필터 사이드바 */}
        <aside
          className={css({
            width: '200px',
            flexShrink: 0,
            backgroundColor: 'neutral.canvas.01',
            borderRight: '1px solid',
            borderColor: 'neutral.border.base',
            overflowY: 'auto',
            padding: '16px 12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          })}
        >
          {/* 요약 카운터 카드 3개 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
            {/* 카드 1: 읽지 않음 */}
            <div
              className={css({
                backgroundColor: 'primary.surface.base',
                border: '1px solid',
                borderColor: 'primary.border.base',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              })}
            >
              <Bell size={18} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
              <div>
                <div className={css({ color: 'primary.text.base', fontSize: '18px', fontWeight: '700', lineHeight: '1' })}>
                  8
                </div>
                <div className={css({ color: 'primary.text.base', fontSize: '12px', marginTop: '2px' })}>
                  읽지 않음
                </div>
              </div>
            </div>

            {/* 카드 2: 오류/위험 */}
            <div
              className={css({
                backgroundColor: 'critical.surface.base',
                border: '1px solid',
                borderColor: 'critical.border.base',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              })}
            >
              <AlertCircle size={18} className={css({ color: 'critical.icon.base', flexShrink: 0 })} />
              <div>
                <div className={css({ color: 'critical.text.base', fontSize: '18px', fontWeight: '700', lineHeight: '1' })}>
                  2
                </div>
                <div className={css({ color: 'critical.text.base', fontSize: '12px', marginTop: '2px' })}>
                  즉시 확인
                </div>
              </div>
            </div>

            {/* 카드 3: 주의 */}
            <div
              className={css({
                backgroundColor: 'warning.surface.base',
                border: '1px solid',
                borderColor: 'warning.border.base',
                borderRadius: '8px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              })}
            >
              <AlertTriangle size={18} className={css({ color: 'warning.icon.base', flexShrink: 0 })} />
              <div>
                <div className={css({ color: 'warning.text.base', fontSize: '18px', fontWeight: '700', lineHeight: '1' })}>
                  3
                </div>
                <div className={css({ color: 'warning.text.base', fontSize: '12px', marginTop: '2px' })}>
                  주의 필요
                </div>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div
            className={css({
              borderTop: '1px solid',
              borderColor: 'neutral.border.low',
            })}
          />

          {/* 카테고리 필터 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
            {/* 전체 — 선택됨 */}
            <button
              className={css({
                padding: '7px 14px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'primary.fill.base',
                color: 'inverse.text.base',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              전체
            </button>

            {/* 시스템 — 미선택 */}
            <button
              className={css({
                padding: '7px 14px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'neutral.surface.base',
                color: 'neutral.text.base',
                fontSize: '13px',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              시스템
            </button>

            {/* 결제 — 미선택 */}
            <button
              className={css({
                padding: '7px 14px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'neutral.surface.base',
                color: 'neutral.text.base',
                fontSize: '13px',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              결제
            </button>

            {/* 배포 — 미선택 */}
            <button
              className={css({
                padding: '7px 14px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'neutral.surface.base',
                color: 'neutral.text.base',
                fontSize: '13px',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              배포
            </button>

            {/* 보안 — 미선택 */}
            <button
              className={css({
                padding: '7px 14px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'neutral.surface.base',
                color: 'neutral.text.base',
                fontSize: '13px',
                cursor: 'pointer',
                textAlign: 'left',
              })}
            >
              보안
            </button>

            {/* 마케팅 — 미선택 */}
            <button
              className={css({
                padding: '7px 14px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: 'neutral.surface.base',
                color: 'neutral.text.base',
                fontSize: '13px',
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
            backgroundColor: 'neutral.canvas.01',
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          })}
        >

          {/* 알림 1 — 정상 완료 (읽지 않음) */}
          <div
            className={css({
              position: 'relative',
              backgroundColor: 'primary.surface.base',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
              display: 'flex',
            })}
          >
            {/* 왼쪽 세로 강조선 */}
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'positive.fill.base',
              })}
            />
            <div className={css({ flex: 1, padding: '14px 16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <CheckCircle2 size={20} className={css({ color: 'positive.icon.base', flexShrink: 0, marginTop: '1px' })} />
                <div className={css({ flex: 1, minWidth: 0 })}>
                  <div className={css({ color: 'neutral.text.base', fontSize: '15px', fontWeight: '600', marginBottom: '4px' })}>
                    배포 v2.4.1 완료
                  </div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38, marginBottom: '10px' })}>
                    프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
                  </div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' })}>
                    <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>방금 전</span>
                    <span
                      className={css({
                        backgroundColor: 'positive.surface.base',
                        border: '1px solid',
                        borderColor: 'positive.border.base',
                        color: 'positive.text.base',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                      })}
                    >
                      완료됨
                    </span>
                    <button
                      className={css({
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: 'positive.border.base',
                        backgroundColor: 'neutral.surface.transparent',
                        color: 'positive.text.base',
                        fontSize: '12px',
                        cursor: 'pointer',
                      })}
                    >
                      배포 로그 보기
                    </button>
                  </div>
                </div>
                {/* X 닫기 버튼 */}
                <button
                  className={css({
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    cursor: 'pointer',
                  })}
                >
                  <X size={14} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </div>
            </div>
          </div>

          {/* 알림 2 — 심각한 문제 (읽지 않음) */}
          <div
            className={css({
              position: 'relative',
              backgroundColor: 'primary.surface.base',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
              display: 'flex',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'critical.fill.base',
              })}
            />
            <div className={css({ flex: 1, padding: '14px 16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <XCircle size={20} className={css({ color: 'critical.icon.base', flexShrink: 0, marginTop: '1px' })} />
                <div className={css({ flex: 1, minWidth: 0 })}>
                  <div className={css({ color: 'critical.text.base', fontSize: '15px', fontWeight: '600', marginBottom: '4px' })}>
                    DB 연결 오류
                  </div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38, marginBottom: '10px' })}>
                    데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
                  </div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' })}>
                    <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>3분 전</span>
                    <span
                      className={css({
                        backgroundColor: 'critical.fill.base',
                        color: 'inverse.text.base',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                      })}
                    >
                      즉시 확인
                    </span>
                    <button
                      className={css({
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: 'critical.fill.base',
                        color: 'inverse.text.base',
                        fontSize: '12px',
                        fontWeight: '500',
                        cursor: 'pointer',
                      })}
                    >
                      상세 보기
                    </button>
                    <button
                      className={css({
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: 'neutral.surface.transparent',
                        color: 'neutral.text.base',
                        fontSize: '12px',
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
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    cursor: 'pointer',
                  })}
                >
                  <X size={14} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </div>
            </div>
          </div>

          {/* 알림 3 — 주의 필요 (읽지 않음) */}
          <div
            className={css({
              position: 'relative',
              backgroundColor: 'primary.surface.base',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
              display: 'flex',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'warning.fill.base',
              })}
            />
            <div className={css({ flex: 1, padding: '14px 16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <AlertTriangle size={20} className={css({ color: 'warning.icon.base', flexShrink: 0, marginTop: '1px' })} />
                <div className={css({ flex: 1, minWidth: 0 })}>
                  <div className={css({ color: 'neutral.text.base', fontSize: '15px', fontWeight: '600', marginBottom: '4px' })}>
                    메모리 사용량 경고
                  </div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38, marginBottom: '10px' })}>
                    서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
                  </div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' })}>
                    <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>15분 전</span>
                    <span
                      className={css({
                        backgroundColor: 'warning.surface.base',
                        border: '1px solid',
                        borderColor: 'warning.border.base',
                        color: 'warning.text.base',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                      })}
                    >
                      주의
                    </span>
                    <button
                      className={css({
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: 'warning.border.base',
                        backgroundColor: 'neutral.surface.transparent',
                        color: 'warning.text.base',
                        fontSize: '12px',
                        cursor: 'pointer',
                      })}
                    >
                      리소스 모니터 열기
                    </button>
                  </div>
                </div>
                <button
                  className={css({
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    cursor: 'pointer',
                  })}
                >
                  <X size={14} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </div>
            </div>
          </div>

          {/* 알림 4 — 일반 안내 (읽지 않음) */}
          <div
            className={css({
              position: 'relative',
              backgroundColor: 'primary.surface.base',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
              display: 'flex',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'info.fill.base',
              })}
            />
            <div className={css({ flex: 1, padding: '14px 16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <Info size={20} className={css({ color: 'info.icon.base', flexShrink: 0, marginTop: '1px' })} />
                <div className={css({ flex: 1, minWidth: 0 })}>
                  <div className={css({ color: 'neutral.text.base', fontSize: '15px', fontWeight: '600', marginBottom: '4px' })}>
                    시스템 점검 예정
                  </div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38, marginBottom: '10px' })}>
                    2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
                  </div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' })}>
                    <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>1시간 전</span>
                    <span
                      className={css({
                        backgroundColor: 'info.surface.base',
                        border: '1px solid',
                        borderColor: 'info.border.base',
                        color: 'info.text.base',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                      })}
                    >
                      안내
                    </span>
                    <button
                      className={css({
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: 'info.border.base',
                        backgroundColor: 'neutral.surface.transparent',
                        color: 'info.text.base',
                        fontSize: '12px',
                        cursor: 'pointer',
                      })}
                    >
                      일정 확인
                    </button>
                  </div>
                </div>
                <button
                  className={css({
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    cursor: 'pointer',
                  })}
                >
                  <X size={14} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </div>
            </div>
          </div>

          {/* 알림 5 — 메인 컬러/기능 (읽지 않음) */}
          <div
            className={css({
              position: 'relative',
              backgroundColor: 'primary.surface.base',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
              display: 'flex',
            })}
          >
            <div
              className={css({
                width: '4px',
                flexShrink: 0,
                backgroundColor: 'primary.fill.base',
              })}
            />
            <div className={css({ flex: 1, padding: '14px 16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <Zap size={20} className={css({ color: 'primary.icon.base', flexShrink: 0, marginTop: '1px' })} />
                <div className={css({ flex: 1, minWidth: 0 })}>
                  <div className={css({ color: 'neutral.text.base', fontSize: '15px', fontWeight: '600', marginBottom: '4px' })}>
                    새 기능 출시
                  </div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38, marginBottom: '10px' })}>
                    대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
                  </div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' })}>
                    <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>2시간 전</span>
                    <span
                      className={css({
                        backgroundColor: 'primary.fill.base',
                        color: 'inverse.text.base',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                      })}
                    >
                      새 기능
                    </span>
                    <button
                      className={css({
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: 'primary.fill.base',
                        color: 'inverse.text.base',
                        fontSize: '12px',
                        fontWeight: '500',
                        cursor: 'pointer',
                      })}
                    >
                      지금 확인
                    </button>
                  </div>
                </div>
                <button
                  className={css({
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    cursor: 'pointer',
                  })}
                >
                  <X size={14} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </div>
            </div>
          </div>

          {/* 알림 6 — 정상 완료 (읽음) */}
          <div
            className={css({
              position: 'relative',
              backgroundColor: 'neutral.canvas.02',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
              display: 'flex',
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
            <div className={css({ flex: 1, padding: '14px 16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <CheckCircle2
                  size={20}
                  className={css({ color: 'positive.icon.base', flexShrink: 0, marginTop: '1px', opacity: 0.38 })}
                />
                <div className={css({ flex: 1, minWidth: 0 })}>
                  <div className={css({ color: 'neutral.text.low', fontSize: '15px', fontWeight: '600', marginBottom: '4px' })}>
                    결제 처리 완료
                  </div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38, marginBottom: '10px' })}>
                    Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
                  </div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' })}>
                    <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>어제</span>
                    <span
                      className={css({
                        backgroundColor: 'positive.surface.base',
                        border: '1px solid',
                        borderColor: 'positive.border.base',
                        color: 'positive.text.base',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                        opacity: 0.38,
                      })}
                    >
                      완료됨
                    </span>
                    <button
                      className={css({
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: 'neutral.surface.transparent',
                        color: 'neutral.text.base',
                        fontSize: '12px',
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
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    cursor: 'pointer',
                  })}
                >
                  <X size={14} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </div>
            </div>
          </div>

          {/* 알림 7 — 주의 필요 (읽음) */}
          <div
            className={css({
              position: 'relative',
              backgroundColor: 'neutral.canvas.02',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
              display: 'flex',
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
            <div className={css({ flex: 1, padding: '14px 16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <AlertCircle
                  size={20}
                  className={css({ color: 'warning.icon.base', flexShrink: 0, marginTop: '1px', opacity: 0.38 })}
                />
                <div className={css({ flex: 1, minWidth: 0 })}>
                  <div className={css({ color: 'neutral.text.low', fontSize: '15px', fontWeight: '600', marginBottom: '4px' })}>
                    API 응답 지연 감지
                  </div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38, marginBottom: '10px' })}>
                    결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
                  </div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' })}>
                    <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>2일 전</span>
                    <span
                      className={css({
                        backgroundColor: 'neutral.surface.base',
                        border: '1px solid',
                        borderColor: 'neutral.border.base',
                        color: 'neutral.text.low',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                      })}
                    >
                      처리됨
                    </span>
                  </div>
                </div>
                <button
                  className={css({
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    cursor: 'pointer',
                  })}
                >
                  <X size={14} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </div>
            </div>
          </div>

          {/* 알림 8 — 일반 안내 (읽음) */}
          <div
            className={css({
              position: 'relative',
              backgroundColor: 'neutral.canvas.02',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
              display: 'flex',
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
            <div className={css({ flex: 1, padding: '14px 16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <Info
                  size={20}
                  className={css({ color: 'info.icon.base', flexShrink: 0, marginTop: '1px', opacity: 0.38 })}
                />
                <div className={css({ flex: 1, minWidth: 0 })}>
                  <div className={css({ color: 'neutral.text.low', fontSize: '15px', fontWeight: '600', marginBottom: '4px' })}>
                    약관 업데이트 안내
                  </div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38, marginBottom: '10px' })}>
                    서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
                  </div>
                  <div className={css({ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' })}>
                    <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>3일 전</span>
                    <span
                      className={css({
                        backgroundColor: 'neutral.surface.base',
                        border: '1px solid',
                        borderColor: 'neutral.border.base',
                        color: 'neutral.text.low',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        fontSize: '12px',
                        fontWeight: '500',
                      })}
                    >
                      안내
                    </span>
                    <button
                      className={css({
                        padding: '4px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: 'neutral.surface.transparent',
                        color: 'neutral.text.base',
                        fontSize: '12px',
                        cursor: 'pointer',
                      })}
                    >
                      약관 보기
                    </button>
                  </div>
                </div>
                <button
                  className={css({
                    flexShrink: 0,
                    width: '28px',
                    height: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    cursor: 'pointer',
                  })}
                >
                  <X size={14} className={css({ color: 'neutral.icon.base' })} />
                </button>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div
            className={css({
              borderTop: '1px solid',
              borderColor: 'neutral.border.low',
              marginTop: '4px',
            })}
          />

          {/* 빈 상태 카드 */}
          <div
            className={css({
              backgroundColor: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              borderRadius: '8px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            })}
          >
            <BellOff size={24} className={css({ color: 'neutral.icon.base', opacity: 0.38 })} />
            <div className={css({ color: 'neutral.text.low', fontSize: '14px', fontWeight: '500' })}>
              모든 알림을 확인했습니다
            </div>
            <div className={css({ color: 'neutral.text.base', fontSize: '13px', opacity: 0.38 })}>
              새로운 알림이 도착하면 여기에 표시됩니다.
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
