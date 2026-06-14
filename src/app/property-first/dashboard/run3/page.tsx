import { css } from '@ds-token-test/styled-system-property-first/css';
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
      })}
    >
      {/* ── Sidebar ── */}
      <aside
        className={css({
          width: '240px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'surface.neutral.emphasis',
          padding: '24px 16px',
          height: '100vh',
          overflow: 'hidden',
        })}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '32px',
          })}
        >
          <LayoutDashboard
            size={24}
            className={css({ color: 'icon.brand.default' })}
          />
          <span
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'text.inverse',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            flex: 1,
          })}
        >
          {/* Active */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'surface.brand.default',
              cursor: 'pointer',
            })}
          >
            <LayoutDashboard size={18} className={css({ color: 'icon.inverse' })} />
            <span className={css({ color: 'text.inverse', fontSize: '14px', fontWeight: '600' })}>
              대시보드
            </span>
          </div>

          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Users size={18} className={css({ color: 'icon.neutral.muted' })} />
            <span className={css({ color: 'text.neutral.muted', fontSize: '14px' })}>사용자 관리</span>
          </div>

          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <CreditCard size={18} className={css({ color: 'icon.neutral.muted' })} />
            <span className={css({ color: 'text.neutral.muted', fontSize: '14px' })}>결제 내역</span>
          </div>

          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Bell size={18} className={css({ color: 'icon.neutral.muted' })} />
            <span className={css({ color: 'text.neutral.muted', fontSize: '14px' })}>알림 설정</span>
          </div>

          {/* Disabled nav item */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            <ScrollText size={18} className={css({ color: 'icon.neutral.muted' })} />
            <span className={css({ color: 'text.neutral.muted', fontSize: '14px' })}>시스템 로그</span>
          </div>
        </nav>

        {/* Logout */}
        <div
          className={css({
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid',
            borderColor: 'border.neutral.subtle',
          })}
        >
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 12px',
              borderRadius: '8px',
              color: 'text.critical.default',
              cursor: 'pointer',
              width: '100%',
              background: 'none',
              border: 'none',
            })}
          >
            <LogOut size={18} className={css({ color: 'icon.critical.default' })} />
            <span>로그아웃</span>
          </button>
        </div>
      </aside>

      {/* ── Main ── */}
      <main
        className={css({
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'surface.neutral.subtle',
          overflow: 'auto',
        })}
      >
        {/* Header bar */}
        <header
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 24px',
            backgroundColor: 'surface.neutral.default',
            borderBottom: '1px solid',
            borderColor: 'border.neutral.default',
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
            <a
              href="#"
              className={css({
                color: 'text.neutral.default',
                textDecoration: 'none',
                _hover: { color: 'text.brand.default' },
              })}
            >
              홈
            </a>
            <span
              className={css({
                color: 'text.neutral.subtle',
                opacity: 0.38,
              })}
            >
              /
            </span>
            <a
              href="#"
              className={css({
                color: 'text.neutral.default',
                textDecoration: 'none',
                _hover: { color: 'text.brand.default' },
              })}
            >
              모니터링
            </a>
            <span
              className={css({
                color: 'text.neutral.subtle',
                opacity: 0.38,
              })}
            >
              /
            </span>
            <span
              className={css({
                color: 'text.neutral.default',
                fontWeight: '600',
              })}
            >
              대시보드
            </span>
          </nav>

          {/* Right side */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            })}
          >
            {/* Search tooltip button */}
            <div
              className={css({
                position: 'relative',
                display: 'inline-flex',
                _hover: {
                  '& [data-tooltip]': { visibility: 'visible', opacity: 1 },
                },
              })}
            >
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  _hover: { backgroundColor: 'surface.neutral.ghost' },
                })}
              >
                <Search size={18} className={css({ color: 'icon.neutral.default' })} />
              </button>
              <span
                data-tooltip
                className={css({
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '4px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'surface.neutral.emphasis',
                  color: 'text.inverse',
                  fontSize: '12px',
                  whiteSpace: 'nowrap',
                  visibility: 'hidden',
                  opacity: 0,
                  zIndex: 10,
                  pointerEvents: 'none',
                })}
              >
                검색
              </span>
            </div>

            {/* Bell tooltip button with badge */}
            <div
              className={css({
                position: 'relative',
                display: 'inline-flex',
                _hover: {
                  '& [data-tooltip]': { visibility: 'visible', opacity: 1 },
                },
              })}
            >
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  position: 'relative',
                  _hover: { backgroundColor: 'surface.neutral.ghost' },
                })}
              >
                <Bell size={18} className={css({ color: 'icon.neutral.default' })} />
                <span
                  className={css({
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    backgroundColor: 'fill.critical',
                    color: 'text.inverse',
                    fontSize: '10px',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  })}
                >
                  3
                </span>
              </button>
              <span
                data-tooltip
                className={css({
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '4px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'surface.neutral.emphasis',
                  color: 'text.inverse',
                  fontSize: '12px',
                  whiteSpace: 'nowrap',
                  visibility: 'hidden',
                  opacity: 0,
                  zIndex: 10,
                  pointerEvents: 'none',
                })}
              >
                알림
              </span>
            </div>

            {/* Settings tooltip button */}
            <div
              className={css({
                position: 'relative',
                display: 'inline-flex',
                _hover: {
                  '& [data-tooltip]': { visibility: 'visible', opacity: 1 },
                },
              })}
            >
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                  _hover: { backgroundColor: 'surface.neutral.ghost' },
                })}
              >
                <Settings size={18} className={css({ color: 'icon.neutral.default' })} />
              </button>
              <span
                data-tooltip
                className={css({
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: '4px',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  backgroundColor: 'surface.neutral.emphasis',
                  color: 'text.inverse',
                  fontSize: '12px',
                  whiteSpace: 'nowrap',
                  visibility: 'hidden',
                  opacity: 0,
                  zIndex: 10,
                  pointerEvents: 'none',
                })}
              >
                설정
              </span>
            </div>

            {/* Vertical divider */}
            <div
              className={css({
                width: '1px',
                height: '24px',
                backgroundColor: 'border.neutral.default',
                margin: '0 4px',
              })}
            />

            {/* Primary button */}
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'fill.brand',
                color: 'text.inverse',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                _hover: { backgroundColor: 'surface.brand.emphasis' },
              })}
            >
              <Plus size={16} className={css({ color: 'icon.inverse' })} />
              새 배포
            </button>

            {/* Avatar */}
            <div
              className={css({
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'surface.brand.default',
                color: 'text.inverse',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: '700',
                fontSize: '14px',
                flexShrink: 0,
              })}
            >
              K
            </div>
          </div>
        </header>

        {/* Toast area */}
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '8px',
            padding: '12px 24px',
            flexShrink: 0,
          })}
        >
          {/* Success toast */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid',
              minWidth: '320px',
              maxWidth: '420px',
              backgroundColor: 'surface.positive.subtle',
              borderColor: 'border.positive.default',
            })}
          >
            <CheckCircle2
              size={18}
              className={css({ color: 'icon.positive.default', flexShrink: 0, marginTop: '1px' })}
            />
            <span className={css({ fontSize: '13px', color: 'text.positive.default', flex: 1 })}>
              배포 v2.4.1이 완료되었습니다.
            </span>
            <button
              className={css({
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0',
              })}
            >
              <X size={14} className={css({ color: 'icon.positive.default' })} />
            </button>
          </div>

          {/* Critical toast */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid',
              minWidth: '320px',
              maxWidth: '420px',
              backgroundColor: 'surface.critical.subtle',
              borderColor: 'border.critical.default',
            })}
          >
            <XCircle
              size={18}
              className={css({ color: 'icon.critical.default', flexShrink: 0, marginTop: '1px' })}
            />
            <span className={css({ fontSize: '13px', color: 'text.critical.default', flex: 1 })}>
              DB 연결이 끊어졌습니다. 즉시 확인하세요.
            </span>
            <button
              className={css({
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0',
              })}
            >
              <X size={14} className={css({ color: 'icon.critical.default' })} />
            </button>
          </div>

          {/* Info toast */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'flex-start',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              border: '1px solid',
              minWidth: '320px',
              maxWidth: '420px',
              backgroundColor: 'surface.info.subtle',
              borderColor: 'border.info.default',
            })}
          >
            <Info
              size={18}
              className={css({ color: 'icon.info.default', flexShrink: 0, marginTop: '1px' })}
            />
            <span className={css({ fontSize: '13px', color: 'text.info.default', flex: 1 })}>
              시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
            </span>
            <button
              className={css({
                marginLeft: 'auto',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                padding: '0',
              })}
            >
              <X size={14} className={css({ color: 'icon.info.default' })} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div
          className={css({
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          })}
        >
          {/* Stats cards 2x2 */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            })}
          >
            {/* Card 1: 총 사용자 — positive */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.default',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '12px',
                padding: '20px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                })}
              >
                <span className={css({ fontSize: '13px', color: 'text.neutral.muted', fontWeight: '500' })}>
                  총 사용자
                </span>
                <TrendingUp size={20} className={css({ color: 'icon.positive.default' })} />
              </div>
              <div className={css({ fontSize: '28px', fontWeight: '700', color: 'text.neutral.default', marginBottom: '8px' })}>
                12,847
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: '1px solid',
                  backgroundColor: 'surface.positive.subtle',
                  color: 'text.positive.default',
                  borderColor: 'border.positive.default',
                })}
              >
                +12%
              </span>
            </div>

            {/* Card 2: 결제 실패 — critical */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.default',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '12px',
                padding: '20px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                })}
              >
                <span className={css({ fontSize: '13px', color: 'text.neutral.muted', fontWeight: '500' })}>
                  결제 실패
                </span>
                <AlertCircle size={20} className={css({ color: 'icon.critical.default' })} />
              </div>
              <div className={css({ fontSize: '28px', fontWeight: '700', color: 'text.neutral.default', marginBottom: '8px' })}>
                24건
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: '1px solid',
                  backgroundColor: 'surface.critical.subtle',
                  color: 'text.critical.default',
                  borderColor: 'border.critical.default',
                })}
              >
                +3건
              </span>
            </div>

            {/* Card 3: 평균 응답시간 — positive */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.default',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '12px',
                padding: '20px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                })}
              >
                <span className={css({ fontSize: '13px', color: 'text.neutral.muted', fontWeight: '500' })}>
                  평균 응답시간
                </span>
                <Zap size={20} className={css({ color: 'icon.positive.default' })} />
              </div>
              <div className={css({ fontSize: '28px', fontWeight: '700', color: 'text.neutral.default', marginBottom: '8px' })}>
                142ms
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: '1px solid',
                  backgroundColor: 'surface.positive.subtle',
                  color: 'text.positive.default',
                  borderColor: 'border.positive.default',
                })}
              >
                -8%
              </span>
            </div>

            {/* Card 4: 미처리 민원 — warning */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.default',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '12px',
                padding: '20px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '12px',
                })}
              >
                <span className={css({ fontSize: '13px', color: 'text.neutral.muted', fontWeight: '500' })}>
                  미처리 민원
                </span>
                <Clock size={20} className={css({ color: 'icon.warning.default' })} />
              </div>
              <div className={css({ fontSize: '28px', fontWeight: '700', color: 'text.neutral.default', marginBottom: '8px' })}>
                7건
              </div>
              <span
                className={css({
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  fontSize: '12px',
                  fontWeight: '600',
                  border: '1px solid',
                  backgroundColor: 'surface.warning.subtle',
                  color: 'text.warning.default',
                  borderColor: 'border.warning.default',
                })}
              >
                +2건
              </span>
            </div>
          </div>

          {/* System resources */}
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
                backgroundColor: 'surface.neutral.default',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '12px',
                padding: '20px',
              })}
            >
              <div className={css({ fontSize: '13px', color: 'text.neutral.muted', marginBottom: '4px' })}>
                CPU 사용량
              </div>
              <div className={css({ fontSize: '24px', fontWeight: '700', color: 'text.neutral.default' })}>42%</div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: 'surface.neutral.ghost',
                  overflow: 'hidden',
                  margin: '8px 0',
                })}
              >
                <div
                  className={css({
                    width: '42%',
                    height: '100%',
                    borderRadius: '9999px',
                    backgroundColor: 'fill.positive',
                  })}
                />
              </div>
              <div className={css({ fontSize: '12px', color: 'text.positive.default' })}>여유로운 상태</div>
            </div>

            {/* Memory 78% — warning */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.default',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '12px',
                padding: '20px',
              })}
            >
              <div className={css({ fontSize: '13px', color: 'text.neutral.muted', marginBottom: '4px' })}>
                메모리 사용량
              </div>
              <div className={css({ fontSize: '24px', fontWeight: '700', color: 'text.neutral.default' })}>78%</div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: 'surface.neutral.ghost',
                  overflow: 'hidden',
                  margin: '8px 0',
                })}
              >
                <div
                  className={css({
                    width: '78%',
                    height: '100%',
                    borderRadius: '9999px',
                    backgroundColor: 'fill.warning',
                  })}
                />
              </div>
              <div className={css({ fontSize: '12px', color: 'text.warning.default' })}>주의 필요</div>
            </div>

            {/* Disk 91% — critical */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.default',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                borderRadius: '12px',
                padding: '20px',
              })}
            >
              <div className={css({ fontSize: '13px', color: 'text.neutral.muted', marginBottom: '4px' })}>
                디스크 사용량
              </div>
              <div className={css({ fontSize: '24px', fontWeight: '700', color: 'text.neutral.default' })}>91%</div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '9999px',
                  backgroundColor: 'surface.neutral.ghost',
                  overflow: 'hidden',
                  margin: '8px 0',
                })}
              >
                <div
                  className={css({
                    width: '91%',
                    height: '100%',
                    borderRadius: '9999px',
                    backgroundColor: 'fill.critical',
                  })}
                />
              </div>
              <div className={css({ fontSize: '12px', color: 'text.critical.default' })}>위험 상태</div>
            </div>
          </div>

          {/* Events table section */}
          <div
            className={css({
              backgroundColor: 'surface.neutral.default',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              borderRadius: '12px',
              overflow: 'hidden',
            })}
          >
            {/* Table header area */}
            <div
              className={css({
                padding: '16px 20px',
                borderBottom: '1px solid',
                borderColor: 'border.neutral.subtle',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              {/* Tabs row */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', gap: '0' })}>
                  <button
                    className={css({
                      padding: '8px 16px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'text.brand.default',
                      background: 'none',
                      border: 'none',
                      borderBottom: '2px solid',
                      borderBottomColor: 'border.brand.default',
                      cursor: 'pointer',
                    })}
                  >
                    전체 이벤트
                  </button>
                  <button
                    className={css({
                      padding: '8px 16px',
                      fontSize: '14px',
                      color: 'text.neutral.muted',
                      background: 'none',
                      border: 'none',
                      borderBottom: '2px solid transparent',
                      cursor: 'pointer',
                      opacity: 0.38,
                      _hover: { opacity: 1, color: 'text.neutral.default' },
                    })}
                  >
                    미처리
                  </button>
                  <button
                    className={css({
                      padding: '8px 16px',
                      fontSize: '14px',
                      color: 'text.neutral.muted',
                      background: 'none',
                      border: 'none',
                      borderBottom: '2px solid transparent',
                      cursor: 'pointer',
                      opacity: 0.38,
                      _hover: { opacity: 1, color: 'text.neutral.default' },
                    })}
                  >
                    처리완료
                  </button>
                </div>

                <div className={css({ display: 'flex', gap: '8px' })}>
                  <button
                    className={css({
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'border.neutral.default',
                      backgroundColor: 'surface.neutral.default',
                      color: 'text.neutral.default',
                      fontSize: '13px',
                      cursor: 'pointer',
                      _hover: { backgroundColor: 'surface.neutral.ghost' },
                    })}
                  >
                    <Filter size={14} className={css({ color: 'icon.neutral.default' })} />
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
                      borderColor: 'border.neutral.default',
                      backgroundColor: 'surface.neutral.default',
                      color: 'text.neutral.default',
                      fontSize: '13px',
                      cursor: 'not-allowed',
                      opacity: 0.38,
                    })}
                    disabled
                  >
                    <Download size={14} className={css({ color: 'icon.neutral.default' })} />
                    CSV 내보내기
                  </button>
                </div>
              </div>

              {/* Tag filter + search */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                })}
              >
                <button
                  className={css({
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '13px',
                    fontWeight: '600',
                    backgroundColor: 'fill.brand',
                    color: 'text.inverse',
                    border: 'none',
                    cursor: 'pointer',
                  })}
                >
                  전체
                </button>
                {['로그인', '결제', '보안', '시스템'].map((tag) => (
                  <button
                    key={tag}
                    className={css({
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      fontSize: '13px',
                      backgroundColor: 'surface.neutral.ghost',
                      color: 'text.neutral.default',
                      border: '1px solid',
                      borderColor: 'border.neutral.subtle',
                      cursor: 'pointer',
                      _hover: { backgroundColor: 'surface.neutral.muted' },
                    })}
                  >
                    {tag}
                  </button>
                ))}
                <input
                  type="text"
                  placeholder="이벤트 검색..."
                  className={css({
                    marginLeft: 'auto',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.default',
                    backgroundColor: 'surface.neutral.default',
                    color: 'text.neutral.default',
                    fontSize: '13px',
                    outline: 'none',
                    _placeholder: { color: 'text.neutral.subtle', opacity: 0.38 },
                    _focus: {
                      borderColor: 'border.brand.default',
                      boxShadow: '0 0 0 2px token(colors.focusRing.default)',
                    },
                  })}
                />
              </div>

              {/* Error state input */}
              <div>
                <input
                  type="text"
                  defaultValue="2025-99-99"
                  className={css({
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.critical.default',
                    backgroundColor: 'surface.critical.subtle',
                    color: 'text.neutral.default',
                    fontSize: '13px',
                    outline: 'none',
                  })}
                />
                <p className={css({ fontSize: '12px', color: 'text.critical.default', marginTop: '4px' })}>
                  잘못된 날짜 형식입니다. (예: 2025-06-13)
                </p>
              </div>
            </div>

            {/* Table */}
            <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
              <thead className={css({ backgroundColor: 'surface.neutral.subtle' })}>
                <tr>
                  {['사용자', '이벤트', '시간', '상태', '액션'].map((col) => (
                    <th
                      key={col}
                      className={css({
                        padding: '10px 16px',
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'text.neutral.muted',
                        borderBottom: '1px solid',
                        borderColor: 'border.neutral.subtle',
                      })}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1 odd — positive */}
                <tr>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <span className={css({ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'surface.neutral.muted', color: 'text.neutral.default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flexShrink: 0 })}>
                        홍
                      </span>
                      홍길동
                    </div>
                  </td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>로그인 성공</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.muted', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>14:32</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <span className={css({ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'text.positive.default' })}>
                      <CheckCircle2 size={14} className={css({ color: 'icon.positive.default' })} />
                      정상 처리됨
                    </span>
                  </td>
                  <td className={css({ padding: '12px 16px', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '6px', border: 'none', background: 'none', cursor: 'pointer', _hover: { backgroundColor: 'surface.neutral.ghost' } })}>
                      <Eye size={16} className={css({ color: 'icon.neutral.default' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 2 even — critical */}
                <tr className={css({ backgroundColor: 'surface.neutral.ghost' })}>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <span className={css({ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'surface.neutral.muted', color: 'text.neutral.default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flexShrink: 0 })}>
                        김
                      </span>
                      김철수
                    </div>
                  </td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>결제 실패</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.muted', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>14:28</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <span className={css({ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'text.critical.default' })}>
                      <XCircle size={14} className={css({ color: 'icon.critical.default' })} />
                      문제 발생
                    </span>
                  </td>
                  <td className={css({ padding: '12px 16px', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '6px', border: 'none', background: 'none', cursor: 'pointer', _hover: { backgroundColor: 'surface.neutral.ghost' } })}>
                      <Eye size={16} className={css({ color: 'icon.neutral.default' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 3 odd — warning */}
                <tr>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <span className={css({ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'surface.neutral.muted', color: 'text.neutral.default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flexShrink: 0 })}>
                        이
                      </span>
                      이영희
                    </div>
                  </td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>비밀번호 5회 오류</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.muted', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>14:21</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <span className={css({ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'text.warning.default' })}>
                      <AlertTriangle size={14} className={css({ color: 'icon.warning.default' })} />
                      주의 필요
                    </span>
                  </td>
                  <td className={css({ padding: '12px 16px', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '6px', border: 'none', background: 'none', cursor: 'pointer', _hover: { backgroundColor: 'surface.neutral.ghost' } })}>
                      <Eye size={16} className={css({ color: 'icon.neutral.default' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 4 even — positive */}
                <tr className={css({ backgroundColor: 'surface.neutral.ghost' })}>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <span className={css({ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'surface.neutral.muted', color: 'text.neutral.default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flexShrink: 0 })}>
                        박
                      </span>
                      박민준
                    </div>
                  </td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>회원가입</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.muted', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>14:15</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <span className={css({ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'text.positive.default' })}>
                      <CheckCircle2 size={14} className={css({ color: 'icon.positive.default' })} />
                      정상 처리됨
                    </span>
                  </td>
                  <td className={css({ padding: '12px 16px', borderBottom: '1px solid', borderColor: 'border.neutral.subtle' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '6px', border: 'none', background: 'none', cursor: 'pointer', _hover: { backgroundColor: 'surface.neutral.ghost' } })}>
                      <Eye size={16} className={css({ color: 'icon.neutral.default' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 5 odd — warning */}
                <tr>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <span className={css({ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'surface.neutral.muted', color: 'text.neutral.default', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '11px', flexShrink: 0 })}>
                        시
                      </span>
                      시스템
                    </div>
                  </td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.default' })}>API 응답 지연</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px', color: 'text.neutral.muted' })}>14:09</td>
                  <td className={css({ padding: '12px 16px', fontSize: '13px' })}>
                    <span className={css({ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'text.warning.default' })}>
                      <AlertTriangle size={14} className={css({ color: 'icon.warning.default' })} />
                      주의 필요
                    </span>
                  </td>
                  <td className={css({ padding: '12px 16px' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '6px', border: 'none', background: 'none', cursor: 'pointer', _hover: { backgroundColor: 'surface.neutral.ghost' } })}>
                      <Eye size={16} className={css({ color: 'icon.neutral.default' })} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Toggle panel */}
          <div
            className={css({
              backgroundColor: 'surface.neutral.default',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              borderRadius: '12px',
              padding: '20px',
            })}
          >
            <h2 className={css({ fontSize: '16px', fontWeight: '600', color: 'text.neutral.default', marginBottom: '16px' })}>
              알림 수신 설정
            </h2>

            {/* Deploy - on */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid',
                borderColor: 'border.neutral.subtle',
              })}
            >
              <span className={css({ fontSize: '14px', color: 'text.neutral.default' })}>배포 알림</span>
              <button
                className={css({
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '9999px',
                  backgroundColor: 'fill.brand',
                  cursor: 'pointer',
                  border: 'none',
                  flexShrink: 0,
                })}
                role="switch"
                aria-checked="true"
              >
                <span
                  className={css({
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'fill.inverse',
                  })}
                />
              </button>
            </div>

            {/* Failure - on */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid',
                borderColor: 'border.neutral.subtle',
              })}
            >
              <span className={css({ fontSize: '14px', color: 'text.neutral.default' })}>장애 알림</span>
              <button
                className={css({
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '9999px',
                  backgroundColor: 'fill.brand',
                  cursor: 'pointer',
                  border: 'none',
                  flexShrink: 0,
                })}
                role="switch"
                aria-checked="true"
              >
                <span
                  className={css({
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'fill.inverse',
                  })}
                />
              </button>
            </div>

            {/* Security - off */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                borderBottom: '1px solid',
                borderColor: 'border.neutral.subtle',
              })}
            >
              <span className={css({ fontSize: '14px', color: 'text.neutral.default' })}>보안 알림</span>
              <button
                className={css({
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '9999px',
                  backgroundColor: 'surface.neutral.muted',
                  cursor: 'pointer',
                  border: 'none',
                  flexShrink: 0,
                })}
                role="switch"
                aria-checked="false"
              >
                <span
                  className={css({
                    position: 'absolute',
                    top: '2px',
                    left: '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'fill.inverse',
                  })}
                />
              </button>
            </div>

            {/* Marketing - off + disabled */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 0',
                opacity: 0.38,
              })}
            >
              <span className={css({ fontSize: '14px', color: 'text.neutral.default' })}>마케팅 알림</span>
              <button
                className={css({
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '9999px',
                  backgroundColor: 'surface.neutral.muted',
                  cursor: 'not-allowed',
                  border: 'none',
                  flexShrink: 0,
                })}
                role="switch"
                aria-checked="false"
                disabled
              >
                <span
                  className={css({
                    position: 'absolute',
                    top: '2px',
                    left: '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'fill.inverse',
                  })}
                />
              </button>
            </div>
          </div>

          {/* Bottom notification cards */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: '16px',
            })}
          >
            {/* Success card */}
            <div
              className={css({
                backgroundColor: 'surface.positive.subtle',
                border: '1px solid',
                borderColor: 'border.positive.default',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' })}>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <CheckCircle2 size={20} className={css({ color: 'icon.positive.default' })} />
                  <span className={css({ fontSize: '14px', fontWeight: '600', color: 'text.positive.default' })}>
                    배포 완료
                  </span>
                </div>
                <button className={css({ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' })}>
                  <X size={16} className={css({ color: 'icon.positive.default' })} />
                </button>
              </div>
              <p className={css({ fontSize: '13px', color: 'text.positive.default' })}>
                v2.4.1이 성공적으로 배포되었습니다.
              </p>
              <div className={css({ display: 'flex', gap: '8px', marginTop: '4px' })}>
                <button
                  className={css({
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.positive.default',
                    backgroundColor: 'surface.transparent',
                    color: 'text.positive.default',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  })}
                >
                  배포 로그 보기
                </button>
              </div>
            </div>

            {/* Critical card */}
            <div
              className={css({
                backgroundColor: 'surface.critical.subtle',
                border: '1px solid',
                borderColor: 'border.critical.default',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' })}>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <XCircle size={20} className={css({ color: 'icon.critical.default' })} />
                  <span className={css({ fontSize: '14px', fontWeight: '600', color: 'text.critical.default' })}>
                    연결 실패
                  </span>
                </div>
                <button className={css({ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' })}>
                  <X size={16} className={css({ color: 'icon.critical.default' })} />
                </button>
              </div>
              <p className={css({ fontSize: '13px', color: 'text.critical.default' })}>
                DB 연결이 실패했습니다.
              </p>
              <div className={css({ display: 'flex', gap: '8px', marginTop: '4px' })}>
                <button
                  className={css({
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'fill.critical',
                    color: 'text.inverse',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  })}
                >
                  즉시 확인
                </button>
                <button
                  className={css({
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'surface.transparent',
                    color: 'text.neutral.muted',
                    fontSize: '13px',
                    cursor: 'pointer',
                    _hover: { backgroundColor: 'surface.neutral.ghost' },
                  })}
                >
                  무시
                </button>
              </div>
            </div>

            {/* Warning card */}
            <div
              className={css({
                backgroundColor: 'surface.warning.subtle',
                border: '1px solid',
                borderColor: 'border.warning.default',
                borderRadius: '12px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' })}>
                <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <AlertTriangle size={20} className={css({ color: 'icon.warning.default' })} />
                  <span className={css({ fontSize: '14px', fontWeight: '600', color: 'text.warning.default' })}>
                    용량 경고
                  </span>
                </div>
                <button className={css({ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' })}>
                  <X size={16} className={css({ color: 'icon.warning.default' })} />
                </button>
              </div>
              <p className={css({ fontSize: '13px', color: 'text.warning.default' })}>
                디스크 사용량이 85%입니다.
              </p>
              <div className={css({ display: 'flex', gap: '8px', marginTop: '4px' })}>
                <button
                  className={css({
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.warning.default',
                    backgroundColor: 'surface.transparent',
                    color: 'text.warning.default',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  })}
                >
                  정리 시작
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
