import { css } from '@ds-token-test/styled-system-intent-first/css';
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Bell,
  ScrollText,
  LogOut,
  Search,
  Settings,
  Plus,
  Filter,
  Download,
  Eye,
  CheckCircle2,
  XCircle,
  Info,
  TrendingUp,
  AlertCircle,
  Zap,
  Clock,
  AlertTriangle,
  X,
} from 'lucide-react';

export default function DashboardRun2Page() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        bg: 'neutral.canvas.01',
      })}
    >
      {/* ── Sidebar (dark local theme) ── */}
      <aside
        className={`dark ${css({
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          bg: 'neutral.canvas.03',
          borderRight: '1px solid',
          borderColor: 'neutral.border.base',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            px: '20px',
            py: '18px',
            borderBottom: '1px solid',
            borderColor: 'neutral.border.low',
          })}
        >
          <LayoutDashboard
            size={22}
            className={css({ color: 'primary.icon.base', flexShrink: 0 })}
          />
          <span
            className={css({
              color: 'neutral.text.base',
              fontWeight: '700',
              fontSize: '17px',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav menu */}
        <nav
          className={css({
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            px: '12px',
            py: '14px',
          })}
        >
          {/* 대시보드 — 활성 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              bg: 'neutral.fill.base',
              cursor: 'pointer',
            })}
          >
            <LayoutDashboard
              size={17}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                color: 'neutral.text.base',
                fontWeight: '600',
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
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Users size={17} className={css({ color: 'neutral.icon.base' })} />
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
              })}
            >
              사용자 관리
            </span>
          </div>

          {/* 결제 내역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <CreditCard
              size={17}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
              })}
            >
              결제 내역
            </span>
          </div>

          {/* 알림 설정 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Bell size={17} className={css({ color: 'neutral.icon.base' })} />
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
              })}
            >
              알림 설정
            </span>
          </div>

          {/* 시스템 로그 — 비활성 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              opacity: 0.38,
              cursor: 'not-allowed',
            })}
          >
            <ScrollText
              size={17}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
              })}
            >
              시스템 로그
            </span>
          </div>
        </nav>

        {/* 로그아웃 */}
        <div
          className={css({
            px: '20px',
            py: '16px',
            borderTop: '1px solid',
            borderColor: 'neutral.border.low',
          })}
        >
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
            })}
          >
            <LogOut
              size={17}
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

      {/* ── Main content ── */}
      <main
        className={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          bg: 'neutral.canvas.01',
          overflow: 'auto',
        })}
      >
        {/* Header bar */}
        <header
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: '24px',
            py: '12px',
            bg: 'neutral.canvas.02',
            borderBottom: '1px solid',
            borderColor: 'neutral.border.base',
            flexShrink: 0,
          })}
        >
          {/* Breadcrumb */}
          <nav
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '14px',
            })}
          >
            <span
              className={css({
                color: 'neutral.text.base',
                cursor: 'pointer',
                _hover: { color: 'primary.text.base' },
              })}
            >
              홈
            </span>
            <span
              className={css({
                color: 'neutral.text.base',
                opacity: 0.38,
              })}
            >
              /
            </span>
            <span
              className={css({
                color: 'neutral.text.base',
                cursor: 'pointer',
                _hover: { color: 'primary.text.base' },
              })}
            >
              모니터링
            </span>
            <span
              className={css({
                color: 'neutral.text.base',
                opacity: 0.38,
              })}
            >
              /
            </span>
            <span
              className={css({
                color: 'neutral.text.base',
                fontWeight: '600',
              })}
            >
              대시보드
            </span>
          </nav>

          {/* Right actions */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            })}
          >
            {/* Search icon button + tooltip */}
            <div className={css({ position: 'relative' })}>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  w: '36px',
                  h: '36px',
                  borderRadius: '8px',
                  bg: 'neutral.surface.transparent',
                  border: 'none',
                  cursor: 'pointer',
                  _hover: { bg: 'neutral.surface.high' },
                })}
              >
                <Search
                  size={18}
                  className={css({ color: 'neutral.icon.base' })}
                />
              </button>
              {/* Tooltip */}
              <div
                className={`dark ${css({
                  position: 'absolute',
                  top: '44px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  px: '8px',
                  py: '4px',
                  bg: 'neutral.canvas.03',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  fontSize: '12px',
                })}`}
              >
                <span className={css({ color: 'neutral.text.base' })}>
                  검색
                </span>
              </div>
            </div>

            {/* Bell icon button + badge + tooltip */}
            <div className={css({ position: 'relative' })}>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  w: '36px',
                  h: '36px',
                  borderRadius: '8px',
                  bg: 'neutral.surface.transparent',
                  border: 'none',
                  cursor: 'pointer',
                  _hover: { bg: 'neutral.surface.high' },
                })}
              >
                <Bell
                  size={18}
                  className={css({ color: 'neutral.icon.base' })}
                />
              </button>
              {/* Badge */}
              <span
                className={css({
                  position: 'absolute',
                  top: '2px',
                  right: '2px',
                  minW: '16px',
                  h: '16px',
                  px: '3px',
                  borderRadius: '9999px',
                  bg: 'critical.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '10px',
                  fontWeight: '700',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                })}
              >
                3
              </span>
              {/* Tooltip */}
              <div
                className={`dark ${css({
                  position: 'absolute',
                  top: '44px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  px: '8px',
                  py: '4px',
                  bg: 'neutral.canvas.03',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  fontSize: '12px',
                })}`}
              >
                <span className={css({ color: 'neutral.text.base' })}>
                  알림
                </span>
              </div>
            </div>

            {/* Settings icon button + tooltip */}
            <div className={css({ position: 'relative' })}>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  w: '36px',
                  h: '36px',
                  borderRadius: '8px',
                  bg: 'neutral.surface.transparent',
                  border: 'none',
                  cursor: 'pointer',
                  _hover: { bg: 'neutral.surface.high' },
                })}
              >
                <Settings
                  size={18}
                  className={css({ color: 'neutral.icon.base' })}
                />
              </button>
              {/* Tooltip */}
              <div
                className={`dark ${css({
                  position: 'absolute',
                  top: '44px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  px: '8px',
                  py: '4px',
                  bg: 'neutral.canvas.03',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  fontSize: '12px',
                })}`}
              >
                <span className={css({ color: 'neutral.text.base' })}>
                  설정
                </span>
              </div>
            </div>

            {/* Vertical divider */}
            <div
              className={css({
                w: '1px',
                h: '24px',
                bg: 'neutral.border.base',
                mx: '4px',
              })}
            />

            {/* 새 배포 filled button */}
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                px: '14px',
                py: '8px',
                borderRadius: '8px',
                bg: 'primary.fill.base',
                border: 'none',
                cursor: 'pointer',
                _hover: { opacity: 0.88 },
              })}
            >
              <Plus
                size={15}
                className={css({ color: 'inverse.icon.base' })}
              />
              <span
                className={css({
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '600',
                })}
              >
                새 배포
              </span>
            </button>

            {/* Profile avatar */}
            <div
              className={css({
                w: '36px',
                h: '36px',
                borderRadius: '9999px',
                bg: 'primary.fill.base',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              })}
            >
              <span
                className={css({
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '700',
                })}
              >
                K
              </span>
            </div>
          </div>
        </header>

        {/* Toast area — header 바로 아래, 우측 정렬 */}
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            px: '24px',
            pt: '12px',
            alignSelf: 'flex-end',
            width: '420px',
          })}
        >
          {/* Toast 1: 정상 완료 (positive) */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '14px',
              py: '11px',
              borderRadius: '8px',
              bg: 'positive.surface.base',
              border: '1px solid',
              borderColor: 'positive.border.base',
            })}
          >
            <CheckCircle2
              size={18}
              className={css({ color: 'positive.icon.base', flexShrink: 0 })}
            />
            <span
              className={css({
                flex: 1,
                color: 'positive.text.base',
                fontSize: '14px',
              })}
            >
              배포 v2.4.1이 완료되었습니다.
            </span>
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bg: 'neutral.surface.transparent',
                border: 'none',
                cursor: 'pointer',
                p: '2px',
                borderRadius: '4px',
              })}
            >
              <X size={15} className={css({ color: 'positive.icon.base' })} />
            </button>
          </div>

          {/* Toast 2: 심각한 문제 (critical) */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '14px',
              py: '11px',
              borderRadius: '8px',
              bg: 'critical.surface.base',
              border: '1px solid',
              borderColor: 'critical.border.base',
            })}
          >
            <XCircle
              size={18}
              className={css({ color: 'critical.icon.base', flexShrink: 0 })}
            />
            <span
              className={css({
                flex: 1,
                color: 'critical.text.base',
                fontSize: '14px',
              })}
            >
              DB 연결이 끊어졌습니다. 즉시 확인하세요.
            </span>
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bg: 'neutral.surface.transparent',
                border: 'none',
                cursor: 'pointer',
                p: '2px',
                borderRadius: '4px',
              })}
            >
              <X size={15} className={css({ color: 'critical.icon.base' })} />
            </button>
          </div>

          {/* Toast 3: 중립 안내 (info) */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '14px',
              py: '11px',
              borderRadius: '8px',
              bg: 'info.surface.base',
              border: '1px solid',
              borderColor: 'info.border.base',
            })}
          >
            <Info
              size={18}
              className={css({ color: 'info.icon.base', flexShrink: 0 })}
            />
            <span
              className={css({
                flex: 1,
                color: 'info.text.base',
                fontSize: '14px',
              })}
            >
              시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
            </span>
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bg: 'neutral.surface.transparent',
                border: 'none',
                cursor: 'pointer',
                p: '2px',
                borderRadius: '4px',
              })}
            >
              <X size={15} className={css({ color: 'info.icon.base' })} />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div
          className={css({
            flex: 1,
            overflowY: 'auto',
            px: '24px',
            py: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          })}
        >
          {/* ── 통계 카드 2×2 ── */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            })}
          >
            {/* 카드 1: 총 사용자 — positive */}
            <div
              className={css({
                bg: 'neutral.canvas.02',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '20px',
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
                <span
                  className={css({ color: 'neutral.text.low', fontSize: '13px' })}
                >
                  총 사용자
                </span>
                <TrendingUp
                  size={20}
                  className={css({ color: 'positive.icon.base' })}
                />
              </div>
              <div
                className={css({
                  color: 'neutral.text.base',
                  fontSize: '28px',
                  fontWeight: '700',
                })}
              >
                12,847
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  px: '8px',
                  py: '2px',
                  borderRadius: '9999px',
                  bg: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                })}
              >
                +12%
              </span>
            </div>

            {/* 카드 2: 결제 실패 — critical */}
            <div
              className={css({
                bg: 'neutral.canvas.02',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '20px',
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
                <span
                  className={css({ color: 'neutral.text.low', fontSize: '13px' })}
                >
                  결제 실패
                </span>
                <AlertCircle
                  size={20}
                  className={css({ color: 'critical.icon.base' })}
                />
              </div>
              <div
                className={css({
                  color: 'neutral.text.base',
                  fontSize: '28px',
                  fontWeight: '700',
                })}
              >
                24건
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  px: '8px',
                  py: '2px',
                  borderRadius: '9999px',
                  bg: 'critical.surface.base',
                  border: '1px solid',
                  borderColor: 'critical.border.base',
                  color: 'critical.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                })}
              >
                +3건
              </span>
            </div>

            {/* 카드 3: 평균 응답시간 — positive */}
            <div
              className={css({
                bg: 'neutral.canvas.02',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '20px',
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
                <span
                  className={css({ color: 'neutral.text.low', fontSize: '13px' })}
                >
                  평균 응답시간
                </span>
                <Zap
                  size={20}
                  className={css({ color: 'positive.icon.base' })}
                />
              </div>
              <div
                className={css({
                  color: 'neutral.text.base',
                  fontSize: '28px',
                  fontWeight: '700',
                })}
              >
                142ms
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  px: '8px',
                  py: '2px',
                  borderRadius: '9999px',
                  bg: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                })}
              >
                -8%
              </span>
            </div>

            {/* 카드 4: 미처리 민원 — warning */}
            <div
              className={css({
                bg: 'neutral.canvas.02',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '20px',
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
                <span
                  className={css({ color: 'neutral.text.low', fontSize: '13px' })}
                >
                  미처리 민원
                </span>
                <Clock
                  size={20}
                  className={css({ color: 'warning.icon.base' })}
                />
              </div>
              <div
                className={css({
                  color: 'neutral.text.base',
                  fontSize: '28px',
                  fontWeight: '700',
                })}
              >
                7건
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  alignSelf: 'flex-start',
                  px: '8px',
                  py: '2px',
                  borderRadius: '9999px',
                  bg: 'warning.surface.base',
                  border: '1px solid',
                  borderColor: 'warning.border.base',
                  color: 'warning.text.base',
                  fontSize: '12px',
                  fontWeight: '600',
                })}
              >
                +2건
              </span>
            </div>
          </div>

          {/* ── 시스템 리소스 (가로 3) ── */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '16px',
            })}
          >
            {/* CPU 42% — positive */}
            <div
              className={css({
                bg: 'neutral.canvas.02',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                })}
              >
                <span
                  className={css({ color: 'neutral.text.low', fontSize: '13px' })}
                >
                  CPU 사용량
                </span>
                <span
                  className={css({
                    color: 'neutral.text.base',
                    fontSize: '18px',
                    fontWeight: '700',
                  })}
                >
                  42%
                </span>
              </div>
              <div
                className={css({
                  h: '8px',
                  borderRadius: '9999px',
                  bg: 'neutral.fill.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    h: '100%',
                    width: '42%',
                    borderRadius: '9999px',
                    bg: 'positive.fill.base',
                  })}
                />
              </div>
              <span
                className={css({ color: 'positive.text.base', fontSize: '12px' })}
              >
                여유로운 상태
              </span>
            </div>

            {/* 메모리 78% — warning */}
            <div
              className={css({
                bg: 'neutral.canvas.02',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                })}
              >
                <span
                  className={css({ color: 'neutral.text.low', fontSize: '13px' })}
                >
                  메모리 사용량
                </span>
                <span
                  className={css({
                    color: 'neutral.text.base',
                    fontSize: '18px',
                    fontWeight: '700',
                  })}
                >
                  78%
                </span>
              </div>
              <div
                className={css({
                  h: '8px',
                  borderRadius: '9999px',
                  bg: 'neutral.fill.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    h: '100%',
                    width: '78%',
                    borderRadius: '9999px',
                    bg: 'warning.fill.base',
                  })}
                />
              </div>
              <span
                className={css({ color: 'warning.text.base', fontSize: '12px' })}
              >
                주의 필요
              </span>
            </div>

            {/* 디스크 91% — critical */}
            <div
              className={css({
                bg: 'neutral.canvas.02',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '12px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                })}
              >
                <span
                  className={css({ color: 'neutral.text.low', fontSize: '13px' })}
                >
                  디스크 사용량
                </span>
                <span
                  className={css({
                    color: 'neutral.text.base',
                    fontSize: '18px',
                    fontWeight: '700',
                  })}
                >
                  91%
                </span>
              </div>
              <div
                className={css({
                  h: '8px',
                  borderRadius: '9999px',
                  bg: 'neutral.fill.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    h: '100%',
                    width: '91%',
                    borderRadius: '9999px',
                    bg: 'critical.fill.base',
                  })}
                />
              </div>
              <span
                className={css({ color: 'critical.text.base', fontSize: '12px' })}
              >
                심각한 상태
              </span>
            </div>
          </div>

          {/* ── 최근 이벤트 테이블 ── */}
          <div
            className={css({
              bg: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              borderRadius: '12px',
              overflow: 'hidden',
            })}
          >
            {/* 테이블 헤더 영역 */}
            <div
              className={css({
                px: '20px',
                pt: '16px',
                borderBottom: '1px solid',
                borderColor: 'neutral.border.base',
              })}
            >
              {/* 탭 + 버튼 행 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  mb: '12px',
                })}
              >
                {/* 탭 */}
                <div className={css({ display: 'flex', gap: '0' })}>
                  {/* 활성 탭 */}
                  <button
                    className={css({
                      px: '16px',
                      py: '8px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'neutral.text.base',
                      bg: 'neutral.surface.transparent',
                      border: 'none',
                      borderBottom: '2px solid',
                      borderColor: 'neutral.border.high',
                      cursor: 'pointer',
                    })}
                  >
                    전체 이벤트
                  </button>
                  {/* 비활성 탭 */}
                  <button
                    className={css({
                      px: '16px',
                      py: '8px',
                      fontSize: '14px',
                      color: 'neutral.text.base',
                      opacity: 0.38,
                      bg: 'neutral.surface.transparent',
                      border: 'none',
                      borderBottom: '2px solid transparent',
                      cursor: 'pointer',
                      _hover: { opacity: 0.65 },
                    })}
                  >
                    미처리
                  </button>
                  <button
                    className={css({
                      px: '16px',
                      py: '8px',
                      fontSize: '14px',
                      color: 'neutral.text.base',
                      opacity: 0.38,
                      bg: 'neutral.surface.transparent',
                      border: 'none',
                      borderBottom: '2px solid transparent',
                      cursor: 'pointer',
                      _hover: { opacity: 0.65 },
                    })}
                  >
                    처리완료
                  </button>
                </div>

                {/* 우측 버튼들 */}
                <div className={css({ display: 'flex', gap: '8px' })}>
                  <button
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      px: '12px',
                      py: '7px',
                      fontSize: '13px',
                      color: 'neutral.text.base',
                      bg: 'neutral.surface.transparent',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      borderRadius: '7px',
                      cursor: 'pointer',
                    })}
                  >
                    <Filter
                      size={14}
                      className={css({ color: 'neutral.icon.base' })}
                    />
                    필터
                  </button>
                  <button
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      px: '12px',
                      py: '7px',
                      fontSize: '13px',
                      color: 'neutral.text.base',
                      bg: 'neutral.surface.transparent',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      borderRadius: '7px',
                      opacity: 0.38,
                      cursor: 'not-allowed',
                    })}
                  >
                    <Download
                      size={14}
                      className={css({ color: 'neutral.icon.base' })}
                    />
                    CSV 내보내기
                  </button>
                </div>
              </div>

              {/* 태그 필터 + 검색 행 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  pb: '14px',
                })}
              >
                {/* 태그 */}
                <div
                  className={css({
                    display: 'flex',
                    gap: '6px',
                    flex: 1,
                    flexWrap: 'wrap',
                  })}
                >
                  {/* 선택된 태그 */}
                  <span
                    className={css({
                      px: '12px',
                      py: '4px',
                      borderRadius: '9999px',
                      bg: 'primary.fill.base',
                      color: 'inverse.text.base',
                      fontSize: '13px',
                      fontWeight: '600',
                      cursor: 'pointer',
                    })}
                  >
                    전체
                  </span>
                  {(['로그인', '결제', '보안', '시스템'] as const).map((tag) => (
                    <span
                      key={tag}
                      className={css({
                        px: '12px',
                        py: '4px',
                        borderRadius: '9999px',
                        bg: 'neutral.fill.base',
                        color: 'neutral.text.base',
                        fontSize: '13px',
                        cursor: 'pointer',
                        _hover: { bg: 'neutral.fill.high' },
                      })}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 검색 인풋들 */}
                <div
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  })}
                >
                  {/* 기본 상태 */}
                  <input
                    type="text"
                    placeholder="이벤트 검색..."
                    className={css({
                      px: '10px',
                      py: '6px',
                      fontSize: '13px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      borderRadius: '7px',
                      bg: 'neutral.surface.base',
                      color: 'neutral.text.base',
                      outline: 'none',
                      _placeholder: { opacity: 0.38, color: 'neutral.text.base' },
                      _focus: {
                        borderColor: 'primary.border.base',
                        outline: '2px solid',
                        outlineColor: 'focus.border',
                        outlineOffset: '1px',
                      },
                    })}
                  />
                  {/* 오류 상태 */}
                  <div>
                    <input
                      type="text"
                      defaultValue="2025-99-99"
                      className={css({
                        px: '10px',
                        py: '6px',
                        fontSize: '13px',
                        border: '1px solid',
                        borderColor: 'critical.border.base',
                        borderRadius: '7px',
                        bg: 'critical.surface.base',
                        color: 'neutral.text.base',
                        outline: 'none',
                      })}
                    />
                    <p
                      className={css({
                        mt: '3px',
                        fontSize: '11px',
                        color: 'critical.text.base',
                      })}
                    >
                      잘못된 날짜 형식입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 테이블 */}
            <table
              className={css({
                width: '100%',
                borderCollapse: 'collapse',
              })}
            >
              <thead>
                <tr className={css({ bg: 'neutral.canvas.03' })}>
                  {(['사용자', '이벤트', '시간', '상태', '액션'] as const).map(
                    (col) => (
                      <th
                        key={col}
                        className={css({
                          px: '20px',
                          py: '10px',
                          textAlign: 'left',
                          fontSize: '12px',
                          fontWeight: '600',
                          color: 'neutral.text.low',
                          borderBottom: '1px solid',
                          borderColor: 'neutral.border.base',
                        })}
                      >
                        {col}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {(
                  [
                    {
                      initial: '홍',
                      event: '로그인 성공',
                      time: '14:32',
                      status: '정상 처리됨',
                      intent: 'positive',
                    },
                    {
                      initial: '김',
                      event: '결제 실패',
                      time: '14:28',
                      status: '문제 발생',
                      intent: 'critical',
                    },
                    {
                      initial: '이',
                      event: '비밀번호 5회 오류',
                      time: '14:21',
                      status: '주의 필요',
                      intent: 'warning',
                    },
                    {
                      initial: '박',
                      event: '회원가입',
                      time: '14:15',
                      status: '정상 처리됨',
                      intent: 'positive',
                    },
                    {
                      initial: '시',
                      event: 'API 응답 지연',
                      time: '14:09',
                      status: '주의 필요',
                      intent: 'warning',
                    },
                  ] as {
                    initial: string;
                    event: string;
                    time: string;
                    status: string;
                    intent: 'positive' | 'critical' | 'warning';
                  }[]
                ).map((row, i) => (
                  <tr
                    key={i}
                    className={css({
                      bg:
                        i % 2 === 1
                          ? 'neutral.canvas.03'
                          : 'neutral.canvas.02',
                    })}
                  >
                    {/* 사용자 */}
                    <td
                      className={css({
                        px: '20px',
                        py: '12px',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      <div
                        className={css({
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        })}
                      >
                        <div
                          className={css({
                            w: '30px',
                            h: '30px',
                            borderRadius: '9999px',
                            bg: 'neutral.fill.base',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          })}
                        >
                          <span
                            className={css({
                              color: 'neutral.text.base',
                              fontSize: '12px',
                              fontWeight: '600',
                            })}
                          >
                            {row.initial}
                          </span>
                        </div>
                        <span
                          className={css({
                            color: 'neutral.text.base',
                            fontSize: '14px',
                          })}
                        >
                          {row.initial}씨
                        </span>
                      </div>
                    </td>
                    {/* 이벤트 */}
                    <td
                      className={css({
                        px: '20px',
                        py: '12px',
                        fontSize: '14px',
                        color: 'neutral.text.base',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      {row.event}
                    </td>
                    {/* 시간 */}
                    <td
                      className={css({
                        px: '20px',
                        py: '12px',
                        fontSize: '14px',
                        color: 'neutral.text.low',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      {row.time}
                    </td>
                    {/* 상태 */}
                    <td
                      className={css({
                        px: '20px',
                        py: '12px',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      <div
                        className={css({
                          display: 'flex',
                          alignItems: 'center',
                          gap: '5px',
                        })}
                      >
                        {row.intent === 'positive' && (
                          <CheckCircle2
                            size={14}
                            className={css({ color: 'positive.icon.base' })}
                          />
                        )}
                        {row.intent === 'critical' && (
                          <XCircle
                            size={14}
                            className={css({ color: 'critical.icon.base' })}
                          />
                        )}
                        {row.intent === 'warning' && (
                          <AlertTriangle
                            size={14}
                            className={css({ color: 'warning.icon.base' })}
                          />
                        )}
                        <span
                          className={css({
                            fontSize: '13px',
                            color:
                              row.intent === 'positive'
                                ? 'positive.text.base'
                                : row.intent === 'critical'
                                ? 'critical.text.base'
                                : 'warning.text.base',
                          })}
                        >
                          {row.status}
                        </span>
                      </div>
                    </td>
                    {/* 액션 */}
                    <td
                      className={css({
                        px: '20px',
                        py: '12px',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      <button
                        className={css({
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          w: '30px',
                          h: '30px',
                          borderRadius: '6px',
                          bg: 'neutral.surface.transparent',
                          border: 'none',
                          cursor: 'pointer',
                          _hover: { bg: 'neutral.surface.high' },
                        })}
                      >
                        <Eye
                          size={16}
                          className={css({ color: 'neutral.icon.base' })}
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── 알림 수신 설정 토글 패널 ── */}
          <div
            className={css({
              bg: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              borderRadius: '12px',
              p: '20px',
            })}
          >
            <h3
              className={css({
                color: 'neutral.text.base',
                fontSize: '16px',
                fontWeight: '600',
                mb: '16px',
              })}
            >
              알림 수신 설정
            </h3>
            <div
              className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              })}
            >
              {/* 배포 알림 — 켜짐 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <span
                  className={css({ color: 'neutral.text.base', fontSize: '14px' })}
                >
                  배포 알림
                </span>
                <div
                  className={css({
                    w: '44px',
                    h: '24px',
                    borderRadius: '9999px',
                    bg: 'primary.fill.base',
                    position: 'relative',
                    cursor: 'pointer',
                  })}
                >
                  <div
                    className={css({
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      w: '20px',
                      h: '20px',
                      borderRadius: '9999px',
                      bg: 'neutral.canvas.01',
                    })}
                  />
                </div>
              </div>

              {/* 장애 알림 — 켜짐 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <span
                  className={css({ color: 'neutral.text.base', fontSize: '14px' })}
                >
                  장애 알림
                </span>
                <div
                  className={css({
                    w: '44px',
                    h: '24px',
                    borderRadius: '9999px',
                    bg: 'primary.fill.base',
                    position: 'relative',
                    cursor: 'pointer',
                  })}
                >
                  <div
                    className={css({
                      position: 'absolute',
                      top: '2px',
                      right: '2px',
                      w: '20px',
                      h: '20px',
                      borderRadius: '9999px',
                      bg: 'neutral.canvas.01',
                    })}
                  />
                </div>
              </div>

              {/* 보안 알림 — 꺼짐 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <span
                  className={css({ color: 'neutral.text.base', fontSize: '14px' })}
                >
                  보안 알림
                </span>
                <div
                  className={css({
                    w: '44px',
                    h: '24px',
                    borderRadius: '9999px',
                    bg: 'neutral.fill.base',
                    position: 'relative',
                    cursor: 'pointer',
                  })}
                >
                  <div
                    className={css({
                      position: 'absolute',
                      top: '2px',
                      left: '2px',
                      w: '20px',
                      h: '20px',
                      borderRadius: '9999px',
                      bg: 'neutral.canvas.01',
                    })}
                  />
                </div>
              </div>

              {/* 마케팅 알림 — 꺼짐 + 비활성 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  opacity: 0.38,
                })}
              >
                <span
                  className={css({ color: 'neutral.text.base', fontSize: '14px' })}
                >
                  마케팅 알림
                </span>
                <div
                  className={css({
                    w: '44px',
                    h: '24px',
                    borderRadius: '9999px',
                    bg: 'neutral.fill.base',
                    position: 'relative',
                    cursor: 'not-allowed',
                  })}
                >
                  <div
                    className={css({
                      position: 'absolute',
                      top: '2px',
                      left: '2px',
                      w: '20px',
                      h: '20px',
                      borderRadius: '9999px',
                      bg: 'neutral.canvas.01',
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── 하단 알림 카드 3개 ── */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '16px',
              pb: '8px',
            })}
          >
            {/* 카드 1: 배포 완료 — positive */}
            <div
              className={css({
                bg: 'positive.surface.base',
                border: '1px solid',
                borderColor: 'positive.border.base',
                borderRadius: '12px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <CheckCircle2
                  size={20}
                  className={css({ color: 'positive.icon.base' })}
                />
                <button
                  className={css({
                    display: 'flex',
                    bg: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                    p: '2px',
                    borderRadius: '4px',
                  })}
                >
                  <X
                    size={15}
                    className={css({ color: 'positive.icon.base' })}
                  />
                </button>
              </div>
              <div>
                <h4
                  className={css({
                    color: 'positive.text.base',
                    fontSize: '15px',
                    fontWeight: '600',
                    mb: '4px',
                  })}
                >
                  배포 완료
                </h4>
                <p
                  className={css({
                    color: 'positive.text.base',
                    fontSize: '13px',
                  })}
                >
                  v2.4.1이 성공적으로 배포되었습니다.
                </p>
              </div>
              <button
                className={css({
                  alignSelf: 'flex-start',
                  px: '12px',
                  py: '7px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'positive.text.base',
                  bg: 'neutral.surface.transparent',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  borderRadius: '7px',
                  cursor: 'pointer',
                })}
              >
                배포 로그 보기
              </button>
            </div>

            {/* 카드 2: 연결 실패 — critical */}
            <div
              className={css({
                bg: 'critical.surface.base',
                border: '1px solid',
                borderColor: 'critical.border.base',
                borderRadius: '12px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <XCircle
                  size={20}
                  className={css({ color: 'critical.icon.base' })}
                />
                <button
                  className={css({
                    display: 'flex',
                    bg: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                    p: '2px',
                    borderRadius: '4px',
                  })}
                >
                  <X
                    size={15}
                    className={css({ color: 'critical.icon.base' })}
                  />
                </button>
              </div>
              <div>
                <h4
                  className={css({
                    color: 'critical.text.base',
                    fontSize: '15px',
                    fontWeight: '600',
                    mb: '4px',
                  })}
                >
                  연결 실패
                </h4>
                <p
                  className={css({
                    color: 'critical.text.base',
                    fontSize: '13px',
                  })}
                >
                  DB 연결이 실패했습니다.
                </p>
              </div>
              <div className={css({ display: 'flex', gap: '8px' })}>
                <button
                  className={css({
                    px: '12px',
                    py: '7px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'inverse.text.base',
                    bg: 'critical.fill.base',
                    border: 'none',
                    borderRadius: '7px',
                    cursor: 'pointer',
                  })}
                >
                  즉시 확인
                </button>
                <button
                  className={css({
                    px: '12px',
                    py: '7px',
                    fontSize: '13px',
                    color: 'critical.text.base',
                    bg: 'neutral.surface.transparent',
                    border: 'none',
                    borderRadius: '7px',
                    cursor: 'pointer',
                    _hover: { bg: 'critical.surface.high' },
                  })}
                >
                  무시
                </button>
              </div>
            </div>

            {/* 카드 3: 용량 경고 — warning */}
            <div
              className={css({
                bg: 'warning.surface.base',
                border: '1px solid',
                borderColor: 'warning.border.base',
                borderRadius: '12px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                })}
              >
                <AlertTriangle
                  size={20}
                  className={css({ color: 'warning.icon.base' })}
                />
                <button
                  className={css({
                    display: 'flex',
                    bg: 'neutral.surface.transparent',
                    border: 'none',
                    cursor: 'pointer',
                    p: '2px',
                    borderRadius: '4px',
                  })}
                >
                  <X
                    size={15}
                    className={css({ color: 'warning.icon.base' })}
                  />
                </button>
              </div>
              <div>
                <h4
                  className={css({
                    color: 'warning.text.base',
                    fontSize: '15px',
                    fontWeight: '600',
                    mb: '4px',
                  })}
                >
                  용량 경고
                </h4>
                <p
                  className={css({
                    color: 'warning.text.base',
                    fontSize: '13px',
                  })}
                >
                  디스크 사용량이 85%입니다.
                </p>
              </div>
              <button
                className={css({
                  alignSelf: 'flex-start',
                  px: '12px',
                  py: '7px',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'warning.text.base',
                  bg: 'neutral.surface.transparent',
                  border: '1px solid',
                  borderColor: 'warning.border.base',
                  borderRadius: '7px',
                  cursor: 'pointer',
                })}
              >
                정리 시작
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
