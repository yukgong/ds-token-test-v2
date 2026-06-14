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
  CheckCircle2,
  XCircle,
  Info,
  TrendingUp,
  AlertCircle,
  Zap,
  Clock,
  Filter,
  Download,
  Eye,
  AlertTriangle,
  X,
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        bg: 'neutral.canvas.01',
      })}
    >
      {/* Sidebar */}
      <aside
        className={`dark ${css({
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          bg: 'neutral.canvas.03',
          borderRight: '1px solid',
          borderColor: 'neutral.border.base',
          height: '100vh',
          overflow: 'hidden',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '20px 16px',
            borderBottom: '1px solid',
            borderColor: 'neutral.border.base',
          })}
        >
          <LayoutDashboard
            size={24}
            className={css({ color: 'primary.icon.base' })}
          />
          <span
            className={css({
              fontWeight: 700,
              fontSize: '18px',
              color: 'neutral.text.base',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Navigation */}
        <nav className={css({ flex: 1, padding: '12px 8px', overflowY: 'auto' })}>
          {/* Active: 대시보드 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              bg: 'neutral.fill.base',
              marginBottom: '4px',
              cursor: 'pointer',
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ color: 'neutral.text.base', fontWeight: 600, fontSize: '14px' })}>
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
              marginBottom: '4px',
              cursor: 'pointer',
            })}
          >
            <Users
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
              사용자 관리
            </span>
          </div>

          {/* 결제 내역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              marginBottom: '4px',
              cursor: 'pointer',
            })}
          >
            <CreditCard
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
              결제 내역
            </span>
          </div>

          {/* 알림 설정 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              marginBottom: '4px',
              cursor: 'pointer',
            })}
          >
            <Bell
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
              알림 설정
            </span>
          </div>

          {/* 시스템 로그 — disabled */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              marginBottom: '4px',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            <ScrollText
              size={18}
              className={css({ color: 'neutral.icon.base' })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
              시스템 로그
            </span>
          </div>
        </nav>

        {/* Logout */}
        <div
          className={css({
            padding: '12px 8px',
            borderTop: '1px solid',
            borderColor: 'neutral.border.base',
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
            <span className={css({ color: 'critical.text.base', fontSize: '14px' })}>
              로그아웃
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          bg: 'neutral.canvas.01',
        })}
      >
        {/* Header Bar */}
        <header
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            height: '56px',
            bg: 'neutral.surface.base',
            borderBottom: '1px solid',
            borderColor: 'neutral.border.base',
            flexShrink: 0,
            position: 'relative',
          })}
        >
          {/* Breadcrumb */}
          <nav className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
            <a
              href="#"
              className={css({
                color: 'neutral.text.low',
                fontSize: '14px',
                textDecoration: 'none',
                _hover: { color: 'primary.text.base' },
              })}
            >
              홈
            </a>
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
                opacity: 0.38,
              })}
            >
              /
            </span>
            <a
              href="#"
              className={css({
                color: 'neutral.text.low',
                fontSize: '14px',
                textDecoration: 'none',
                _hover: { color: 'primary.text.base' },
              })}
            >
              모니터링
            </a>
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
                opacity: 0.38,
              })}
            >
              /
            </span>
            <span
              className={css({
                color: 'neutral.text.base',
                fontSize: '14px',
                fontWeight: 600,
              })}
            >
              대시보드
            </span>
          </nav>

          {/* Right actions */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
            {/* Search icon button with tooltip */}
            <div className={css({ position: 'relative', display: 'inline-flex' })}>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: 'none',
                  bg: 'neutral.surface.transparent',
                  cursor: 'pointer',
                  _hover: { bg: 'neutral.surface.high' },
                })}
                aria-label="검색"
              >
                <Search size={18} className={css({ color: 'neutral.icon.base' })} />
              </button>
              <span
                className={`dark ${css({
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bg: 'neutral.fill.high',
                  color: 'inverse.text.base',
                  fontSize: '12px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 10,
                })}`}
              >
                검색
              </span>
            </div>

            {/* Bell icon button with badge and tooltip */}
            <div className={css({ position: 'relative', display: 'inline-flex' })}>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: 'none',
                  bg: 'neutral.surface.transparent',
                  cursor: 'pointer',
                  _hover: { bg: 'neutral.surface.high' },
                  position: 'relative',
                })}
                aria-label="알림"
              >
                <Bell size={18} className={css({ color: 'neutral.icon.base' })} />
                <span
                  className={css({
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    bg: 'critical.fill.base',
                    color: 'inverse.text.base',
                    fontSize: '10px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  })}
                >
                  3
                </span>
              </button>
              <span
                className={`dark ${css({
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bg: 'neutral.fill.high',
                  color: 'inverse.text.base',
                  fontSize: '12px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 10,
                })}`}
              >
                알림
              </span>
            </div>

            {/* Settings icon button with tooltip */}
            <div className={css({ position: 'relative', display: 'inline-flex' })}>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: 'none',
                  bg: 'neutral.surface.transparent',
                  cursor: 'pointer',
                  _hover: { bg: 'neutral.surface.high' },
                })}
                aria-label="설정"
              >
                <Settings size={18} className={css({ color: 'neutral.icon.base' })} />
              </button>
              <span
                className={`dark ${css({
                  position: 'absolute',
                  top: 'calc(100% + 6px)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  bg: 'neutral.fill.high',
                  color: 'inverse.text.base',
                  fontSize: '12px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 10,
                })}`}
              >
                설정
              </span>
            </div>

            {/* Vertical divider */}
            <div
              className={css({
                width: '1px',
                height: '24px',
                bg: 'neutral.border.base',
                marginX: '4px',
              })}
            />

            {/* New Deploy button */}
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '6px',
                border: 'none',
                bg: 'primary.fill.base',
                color: 'inverse.text.base',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
                _hover: { bg: 'primary.surface.high' },
              })}
            >
              <Plus size={16} className={css({ color: 'inverse.icon.base' })} />
              새 배포
            </button>

            {/* Profile avatar */}
            <div
              className={css({
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                bg: 'primary.surface.base',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              })}
            >
              <span className={css({ color: 'primary.text.base', fontSize: '14px', fontWeight: 600 })}>
                K
              </span>
            </div>
          </div>
        </header>

        {/* Scrollable content area */}
        <div
          className={css({
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          })}
        >
          {/* Toast notifications */}
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              alignSelf: 'flex-end',
              width: '100%',
              maxWidth: '420px',
            })}
          >
            {/* Toast 1 — positive */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '8px',
                bg: 'positive.surface.base',
                border: '1px solid',
                borderColor: 'positive.border.base',
              })}
            >
              <CheckCircle2
                size={18}
                className={css({ color: 'positive.icon.base', flexShrink: 0, marginTop: '1px' })}
              />
              <span className={css({ color: 'positive.text.base', fontSize: '14px', flex: 1 })}>
                배포 v2.4.1이 완료되었습니다.
              </span>
              <button
                className={css({
                  border: 'none',
                  bg: 'neutral.surface.transparent',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                })}
              >
                <X size={14} className={css({ color: 'positive.icon.base' })} />
              </button>
            </div>

            {/* Toast 2 — critical */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '8px',
                bg: 'critical.surface.base',
                border: '1px solid',
                borderColor: 'critical.border.base',
              })}
            >
              <XCircle
                size={18}
                className={css({ color: 'critical.icon.base', flexShrink: 0, marginTop: '1px' })}
              />
              <span className={css({ color: 'critical.text.base', fontSize: '14px', flex: 1 })}>
                DB 연결이 끊어졌습니다. 즉시 확인하세요.
              </span>
              <button
                className={css({
                  border: 'none',
                  bg: 'neutral.surface.transparent',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                })}
              >
                <X size={14} className={css({ color: 'critical.icon.base' })} />
              </button>
            </div>

            {/* Toast 3 — info */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '12px 14px',
                borderRadius: '8px',
                bg: 'info.surface.base',
                border: '1px solid',
                borderColor: 'info.border.base',
              })}
            >
              <Info
                size={18}
                className={css({ color: 'info.icon.base', flexShrink: 0, marginTop: '1px' })}
              />
              <span className={css({ color: 'info.text.base', fontSize: '14px', flex: 1 })}>
                시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
              </span>
              <button
                className={css({
                  border: 'none',
                  bg: 'neutral.surface.transparent',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  alignItems: 'center',
                })}
              >
                <X size={14} className={css({ color: 'info.icon.base' })} />
              </button>
            </div>
          </div>

          {/* Stats cards 2x2 grid */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            })}
          >
            {/* Card 1 — 총 사용자, positive */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <span className={css({ color: 'neutral.text.low', fontSize: '13px' })}>총 사용자</span>
                <TrendingUp size={20} className={css({ color: 'positive.icon.base' })} />
              </div>
              <div className={css({ color: 'neutral.text.base', fontSize: '28px', fontWeight: 700 })}>
                12,847
              </div>
              <div
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  bg: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  width: 'fit-content',
                })}
              >
                <span className={css({ color: 'positive.text.base', fontSize: '12px', fontWeight: 500 })}>
                  +12%
                </span>
              </div>
            </div>

            {/* Card 2 — 결제 실패, critical */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <span className={css({ color: 'neutral.text.low', fontSize: '13px' })}>결제 실패</span>
                <AlertCircle size={20} className={css({ color: 'critical.icon.base' })} />
              </div>
              <div className={css({ color: 'neutral.text.base', fontSize: '28px', fontWeight: 700 })}>
                24건
              </div>
              <div
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  bg: 'critical.surface.base',
                  border: '1px solid',
                  borderColor: 'critical.border.base',
                  width: 'fit-content',
                })}
              >
                <span className={css({ color: 'critical.text.base', fontSize: '12px', fontWeight: 500 })}>
                  +3건
                </span>
              </div>
            </div>

            {/* Card 3 — 평균 응답시간, positive */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <span className={css({ color: 'neutral.text.low', fontSize: '13px' })}>평균 응답시간</span>
                <Zap size={20} className={css({ color: 'positive.icon.base' })} />
              </div>
              <div className={css({ color: 'neutral.text.base', fontSize: '28px', fontWeight: 700 })}>
                142ms
              </div>
              <div
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  bg: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  width: 'fit-content',
                })}
              >
                <span className={css({ color: 'positive.text.base', fontSize: '12px', fontWeight: 500 })}>
                  -8%
                </span>
              </div>
            </div>

            {/* Card 4 — 미처리 민원, warning */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <span className={css({ color: 'neutral.text.low', fontSize: '13px' })}>미처리 민원</span>
                <Clock size={20} className={css({ color: 'warning.icon.base' })} />
              </div>
              <div className={css({ color: 'neutral.text.base', fontSize: '28px', fontWeight: 700 })}>
                7건
              </div>
              <div
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  bg: 'warning.surface.base',
                  border: '1px solid',
                  borderColor: 'warning.border.base',
                  width: 'fit-content',
                })}
              >
                <span className={css({ color: 'warning.text.base', fontSize: '12px', fontWeight: 500 })}>
                  +2건
                </span>
              </div>
            </div>
          </div>

          {/* System Resources */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            })}
          >
            {/* CPU 42% — positive */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                <span className={css({ color: 'neutral.text.low', fontSize: '13px' })}>CPU 사용량</span>
                <span className={css({ color: 'neutral.text.base', fontSize: '20px', fontWeight: 700 })}>42%</span>
              </div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '4px',
                  bg: 'neutral.fill.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    height: '100%',
                    width: '42%',
                    borderRadius: '4px',
                    bg: 'positive.fill.base',
                  })}
                />
              </div>
              <span className={css({ color: 'positive.text.base', fontSize: '12px' })}>여유로운 상태</span>
            </div>

            {/* Memory 78% — warning */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                <span className={css({ color: 'neutral.text.low', fontSize: '13px' })}>메모리 사용량</span>
                <span className={css({ color: 'neutral.text.base', fontSize: '20px', fontWeight: 700 })}>78%</span>
              </div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '4px',
                  bg: 'neutral.fill.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    height: '100%',
                    width: '78%',
                    borderRadius: '4px',
                    bg: 'warning.fill.base',
                  })}
                />
              </div>
              <span className={css({ color: 'warning.text.base', fontSize: '12px' })}>주의 필요</span>
            </div>

            {/* Disk 91% — critical */}
            <div
              className={css({
                bg: 'neutral.surface.base',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                borderRadius: '10px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center' })}>
                <span className={css({ color: 'neutral.text.low', fontSize: '13px' })}>디스크 사용량</span>
                <span className={css({ color: 'neutral.text.base', fontSize: '20px', fontWeight: 700 })}>91%</span>
              </div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '4px',
                  bg: 'neutral.fill.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    height: '100%',
                    width: '91%',
                    borderRadius: '4px',
                    bg: 'critical.fill.base',
                  })}
                />
              </div>
              <span className={css({ color: 'critical.text.base', fontSize: '12px' })}>심각한 상태</span>
            </div>
          </div>

          {/* Recent Events Table */}
          <div
            className={css({
              bg: 'neutral.surface.base',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            {/* Table header controls */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 20px 0',
                borderBottom: '1px solid',
                borderColor: 'neutral.border.base',
              })}
            >
              {/* Tabs */}
              <div className={css({ display: 'flex', gap: '0', alignItems: 'flex-end' })}>
                {/* Active tab */}
                <button
                  className={css({
                    padding: '8px 16px',
                    border: 'none',
                    bg: 'neutral.surface.transparent',
                    borderBottom: '2px solid',
                    borderColor: 'primary.border.high',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                  })}
                >
                  전체 이벤트
                </button>
                <button
                  className={css({
                    padding: '8px 16px',
                    border: 'none',
                    borderBottom: '2px solid transparent',
                    bg: 'neutral.surface.transparent',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    cursor: 'pointer',
                    opacity: 0.38,
                    _hover: { opacity: 1, color: 'neutral.text.low' },
                  })}
                >
                  미처리
                </button>
                <button
                  className={css({
                    padding: '8px 16px',
                    border: 'none',
                    borderBottom: '2px solid transparent',
                    bg: 'neutral.surface.transparent',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    cursor: 'pointer',
                    opacity: 0.38,
                    _hover: { opacity: 1, color: 'neutral.text.low' },
                  })}
                >
                  처리완료
                </button>
              </div>

              {/* Buttons */}
              <div className={css({ display: 'flex', gap: '8px', paddingBottom: '8px' })}>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    bg: 'neutral.surface.transparent',
                    color: 'neutral.text.base',
                    fontSize: '13px',
                    cursor: 'pointer',
                  })}
                >
                  <Filter size={14} className={css({ color: 'neutral.icon.base' })} />
                  필터
                </button>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    bg: 'neutral.surface.transparent',
                    color: 'neutral.text.base',
                    fontSize: '13px',
                    cursor: 'not-allowed',
                    opacity: 0.38,
                  })}
                >
                  <Download size={14} className={css({ color: 'neutral.icon.base' })} />
                  CSV 내보내기
                </button>
              </div>
            </div>

            {/* Tag filter bar + search */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 20px',
                gap: '12px',
                borderBottom: '1px solid',
                borderColor: 'neutral.border.base',
              })}
            >
              <div className={css({ display: 'flex', gap: '8px' })}>
                {/* Selected tag */}
                <span
                  className={css({
                    padding: '4px 12px',
                    borderRadius: '12px',
                    bg: 'primary.fill.base',
                    color: 'inverse.text.base',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  })}
                >
                  전체
                </span>
                {['로그인', '결제', '보안', '시스템'].map((tag) => (
                  <span
                    key={tag}
                    className={css({
                      padding: '4px 12px',
                      borderRadius: '12px',
                      bg: 'neutral.fill.base',
                      color: 'neutral.text.low',
                      fontSize: '13px',
                      cursor: 'pointer',
                      _hover: { bg: 'neutral.surface.high', color: 'neutral.text.base' },
                    })}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Search inputs */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                {/* Normal search */}
                <input
                  type="text"
                  placeholder="이벤트 검색..."
                  className={css({
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    bg: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '13px',
                    outline: 'none',
                    _placeholder: { opacity: 0.38, color: 'neutral.text.base' },
                    _focus: {
                      borderColor: 'primary.border.base',
                      boxShadow: '0 0 0 2px token(colors.focus.border)',
                    },
                  })}
                />
                {/* Error state search */}
                <div>
                  <input
                    type="text"
                    defaultValue="2025/99/99"
                    className={css({
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'critical.border.base',
                      bg: 'critical.surface.base',
                      color: 'neutral.text.base',
                      fontSize: '13px',
                      outline: 'none',
                    })}
                  />
                  <p className={css({ color: 'critical.text.base', fontSize: '11px', marginTop: '2px' })}>
                    잘못된 날짜 형식입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Table */}
            <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
              <thead>
                <tr
                  className={css({
                    bg: 'neutral.surface.high',
                  })}
                >
                  {['사용자', '이벤트', '시간', '상태', '액션'].map((col) => (
                    <th
                      key={col}
                      className={css({
                        padding: '10px 20px',
                        textAlign: 'left',
                        color: 'neutral.text.low',
                        fontSize: '12px',
                        fontWeight: 600,
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.base',
                      })}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { initial: '홍', event: '로그인 성공', time: '14:32', status: '정상 처리됨', intent: 'positive' as const },
                  { initial: '김', event: '결제 실패', time: '14:28', status: '문제 발생', intent: 'critical' as const },
                  { initial: '이', event: '비밀번호 5회 오류', time: '14:21', status: '주의 필요', intent: 'warning' as const },
                  { initial: '박', event: '회원가입', time: '14:15', status: '정상 처리됨', intent: 'positive' as const },
                  { initial: '시', event: 'API 응답 지연', time: '14:09', status: '주의 필요', intent: 'warning' as const },
                ].map((row, idx) => (
                  <tr
                    key={row.initial}
                    className={css({
                      bg: idx % 2 === 1 ? 'neutral.surface.high' : 'neutral.surface.base',
                      _hover: { bg: 'neutral.fill.base' },
                    })}
                  >
                    <td
                      className={css({
                        padding: '12px 20px',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                        <div
                          className={css({
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            bg: 'neutral.fill.base',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          })}
                        >
                          <span className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: 600 })}>
                            {row.initial}
                          </span>
                        </div>
                        <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
                          {row.initial}길동
                        </span>
                      </div>
                    </td>
                    <td
                      className={css({
                        padding: '12px 20px',
                        color: 'neutral.text.base',
                        fontSize: '14px',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      {row.event}
                    </td>
                    <td
                      className={css({
                        padding: '12px 20px',
                        color: 'neutral.text.low',
                        fontSize: '14px',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      {row.time}
                    </td>
                    <td
                      className={css({
                        padding: '12px 20px',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      <div className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
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
                          <AlertCircle
                            size={14}
                            className={css({ color: 'warning.icon.base' })}
                          />
                        )}
                        <span
                          className={css({
                            fontSize: '13px',
                            color: row.intent === 'positive'
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
                    <td
                      className={css({
                        padding: '12px 20px',
                        borderBottom: '1px solid',
                        borderColor: 'neutral.border.low',
                      })}
                    >
                      <button
                        className={css({
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '32px',
                          height: '32px',
                          borderRadius: '6px',
                          border: 'none',
                          bg: 'neutral.surface.transparent',
                          cursor: 'pointer',
                          _hover: { bg: 'neutral.surface.high' },
                        })}
                      >
                        <Eye size={16} className={css({ color: 'neutral.icon.base' })} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notification Toggle Panel */}
          <div
            className={css({
              bg: 'neutral.surface.base',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              borderRadius: '10px',
              padding: '20px',
            })}
          >
            <h3
              className={css({
                color: 'neutral.text.base',
                fontSize: '15px',
                fontWeight: 600,
                marginBottom: '16px',
              })}
            >
              알림 수신 설정
            </h3>

            <div className={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>
              {/* Toggle 1 — 배포 알림, ON */}
              <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>배포 알림</span>
                <div
                  className={css({
                    width: '44px',
                    height: '24px',
                    borderRadius: '12px',
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
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      bg: 'neutral.canvas.01',
                    })}
                  />
                </div>
              </div>

              {/* Toggle 2 — 장애 알림, ON */}
              <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>장애 알림</span>
                <div
                  className={css({
                    width: '44px',
                    height: '24px',
                    borderRadius: '12px',
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
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      bg: 'neutral.canvas.01',
                    })}
                  />
                </div>
              </div>

              {/* Toggle 3 — 보안 알림, OFF */}
              <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
                <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>보안 알림</span>
                <div
                  className={css({
                    width: '44px',
                    height: '24px',
                    borderRadius: '12px',
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
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      bg: 'neutral.canvas.01',
                    })}
                  />
                </div>
              </div>

              {/* Toggle 4 — 마케팅 알림, OFF + disabled */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  opacity: 0.38,
                })}
              >
                <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>마케팅 알림</span>
                <div
                  className={css({
                    width: '44px',
                    height: '24px',
                    borderRadius: '12px',
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
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      bg: 'neutral.canvas.01',
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom notification cards */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            })}
          >
            {/* Card 1 — positive: 배포 완료 */}
            <div
              className={css({
                bg: 'positive.surface.base',
                border: '1px solid',
                borderColor: 'positive.border.base',
                borderRadius: '10px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <CheckCircle2 size={20} className={css({ color: 'positive.icon.base' })} />
                <button
                  className={css({
                    border: 'none',
                    bg: 'neutral.surface.transparent',
                    cursor: 'pointer',
                    padding: '0',
                  })}
                >
                  <X size={16} className={css({ color: 'positive.icon.base' })} />
                </button>
              </div>
              <div>
                <p className={css({ color: 'positive.text.base', fontSize: '14px', fontWeight: 600, marginBottom: '4px' })}>
                  배포 완료
                </p>
                <p className={css({ color: 'positive.text.base', fontSize: '13px' })}>
                  v2.4.1이 성공적으로 배포되었습니다.
                </p>
              </div>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'positive.border.high',
                  bg: 'neutral.surface.transparent',
                  color: 'positive.text.base',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                })}
              >
                배포 로그 보기
              </button>
            </div>

            {/* Card 2 — critical: 연결 실패 */}
            <div
              className={css({
                bg: 'critical.surface.base',
                border: '1px solid',
                borderColor: 'critical.border.base',
                borderRadius: '10px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <XCircle size={20} className={css({ color: 'critical.icon.base' })} />
                <button
                  className={css({
                    border: 'none',
                    bg: 'neutral.surface.transparent',
                    cursor: 'pointer',
                    padding: '0',
                  })}
                >
                  <X size={16} className={css({ color: 'critical.icon.base' })} />
                </button>
              </div>
              <div>
                <p className={css({ color: 'critical.text.base', fontSize: '14px', fontWeight: 600, marginBottom: '4px' })}>
                  연결 실패
                </p>
                <p className={css({ color: 'critical.text.base', fontSize: '13px' })}>
                  DB 연결이 실패했습니다.
                </p>
              </div>
              <div className={css({ display: 'flex', gap: '8px' })}>
                <button
                  className={css({
                    flex: 1,
                    padding: '7px 14px',
                    borderRadius: '6px',
                    border: 'none',
                    bg: 'critical.fill.base',
                    color: 'inverse.text.base',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  })}
                >
                  즉시 확인
                </button>
                <button
                  className={css({
                    padding: '7px 14px',
                    borderRadius: '6px',
                    border: 'none',
                    bg: 'neutral.surface.transparent',
                    color: 'critical.text.base',
                    fontSize: '13px',
                    cursor: 'pointer',
                    _hover: { bg: 'critical.surface.high' },
                  })}
                >
                  무시
                </button>
              </div>
            </div>

            {/* Card 3 — warning: 용량 경고 */}
            <div
              className={css({
                bg: 'warning.surface.base',
                border: '1px solid',
                borderColor: 'warning.border.base',
                borderRadius: '10px',
                padding: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div className={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' })}>
                <AlertTriangle size={20} className={css({ color: 'warning.icon.base' })} />
                <button
                  className={css({
                    border: 'none',
                    bg: 'neutral.surface.transparent',
                    cursor: 'pointer',
                    padding: '0',
                  })}
                >
                  <X size={16} className={css({ color: 'warning.icon.base' })} />
                </button>
              </div>
              <div>
                <p className={css({ color: 'warning.text.base', fontSize: '14px', fontWeight: 600, marginBottom: '4px' })}>
                  용량 경고
                </p>
                <p className={css({ color: 'warning.text.base', fontSize: '13px' })}>
                  디스크 사용량이 85%입니다.
                </p>
              </div>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '7px 14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'warning.border.high',
                  bg: 'neutral.surface.transparent',
                  color: 'warning.text.base',
                  fontSize: '13px',
                  fontWeight: 500,
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
