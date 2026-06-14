import { css } from '@ds-token-test/styled-system-intent-first-slotfirst/css';
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

export default function DashboardPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        bg: 'canvas.neutral.01',
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
          bg: 'canvas.neutral.01',
          borderRight: '1px solid',
          borderColor: 'border.neutral.low',
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            px: '20px',
            py: '18px',
            borderBottom: '1px solid',
            borderColor: 'border.neutral.low',
          })}
        >
          <LayoutDashboard
            size={22}
            className={css({ color: 'icon.primary.base' })}
          />
          <span
            className={css({
              fontSize: '16px',
              fontWeight: '700',
              color: 'text.neutral.base',
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav className={css({ flex: 1, py: '12px', px: '12px' })}>
          {/* Active: 대시보드 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              mb: '2px',
              bg: 'overlay.lighten.hover',
              cursor: 'pointer',
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
            <span
              className={css({
                fontSize: '14px',
                fontWeight: '600',
                color: 'text.neutral.base',
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
              mb: '2px',
              cursor: 'pointer',
            })}
          >
            <Users
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'text.neutral.base',
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
              mb: '2px',
              cursor: 'pointer',
            })}
          >
            <CreditCard
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'text.neutral.base',
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
              mb: '2px',
              cursor: 'pointer',
            })}
          >
            <Bell
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'text.neutral.base',
              })}
            >
              알림 설정
            </span>
          </div>

          {/* 시스템 로그 — disabled */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              px: '12px',
              py: '10px',
              borderRadius: '8px',
              mb: '2px',
              opacity: 0.38,
              cursor: 'not-allowed',
            })}
          >
            <ScrollText
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'text.neutral.base',
              })}
            >
              시스템 로그
            </span>
          </div>
        </nav>

        {/* Logout */}
        <div
          className={css({
            px: '12px',
            py: '16px',
            borderTop: '1px solid',
            borderColor: 'border.neutral.low',
          })}
        >
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
            <LogOut
              size={18}
              className={css({ color: 'icon.critical.base' })}
            />
            <span
              className={css({
                fontSize: '14px',
                color: 'text.critical.base',
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
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          bg: 'canvas.neutral.01',
        })}
      >
        {/* Header bar */}
        <header
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: '24px',
            py: '0',
            height: '56px',
            flexShrink: 0,
            bg: 'canvas.neutral.02',
            borderBottom: '1px solid',
            borderColor: 'border.neutral.low',
          })}
        >
          {/* Breadcrumb */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            })}
          >
            <a
              href="#"
              className={css({
                fontSize: '13px',
                color: 'text.neutral.base',
                textDecoration: 'none',
                _hover: { color: 'text.primary.base' },
              })}
            >
              홈
            </a>
            <span
              className={css({
                fontSize: '13px',
                color: 'text.neutral.base',
                opacity: 0.38,
              })}
            >
              /
            </span>
            <a
              href="#"
              className={css({
                fontSize: '13px',
                color: 'text.neutral.base',
                textDecoration: 'none',
                _hover: { color: 'text.primary.base' },
              })}
            >
              모니터링
            </a>
            <span
              className={css({
                fontSize: '13px',
                color: 'text.neutral.base',
                opacity: 0.38,
              })}
            >
              /
            </span>
            <span
              className={css({
                fontSize: '13px',
                fontWeight: '600',
                color: 'text.neutral.base',
              })}
            >
              대시보드
            </span>
          </div>

          {/* Right side */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            })}
          >
            {/* Search icon button + tooltip */}
            <div className={css({ position: 'relative' })}>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: 'none',
                  bg: 'surface.neutral.transparent',
                  cursor: 'pointer',
                  _hover: { bg: 'surface.neutral.high' },
                })}
              >
                <Search
                  size={18}
                  className={css({ color: 'icon.neutral.base' })}
                />
              </button>
              <div
                className={css({
                  position: 'absolute',
                  bottom: '-32px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  px: '8px',
                  py: '4px',
                  borderRadius: '4px',
                  bg: 'fill.neutral.high',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  pointerEvents: 'none',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'inverse.text.base',
                  })}
                >
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
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: 'none',
                  bg: 'surface.neutral.transparent',
                  cursor: 'pointer',
                  _hover: { bg: 'surface.neutral.high' },
                })}
              >
                <Bell
                  size={18}
                  className={css({ color: 'icon.neutral.base' })}
                />
                <span
                  className={css({
                    position: 'absolute',
                    top: '4px',
                    right: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '16px',
                    height: '16px',
                    borderRadius: '999px',
                    fontSize: '10px',
                    fontWeight: '700',
                    bg: 'fill.critical.base',
                    color: 'inverse.text.base',
                  })}
                >
                  3
                </span>
              </button>
              <div
                className={css({
                  position: 'absolute',
                  bottom: '-32px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  px: '8px',
                  py: '4px',
                  borderRadius: '4px',
                  bg: 'fill.neutral.high',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  pointerEvents: 'none',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'inverse.text.base',
                  })}
                >
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
                  width: '36px',
                  height: '36px',
                  borderRadius: '6px',
                  border: 'none',
                  bg: 'surface.neutral.transparent',
                  cursor: 'pointer',
                  _hover: { bg: 'surface.neutral.high' },
                })}
              >
                <Settings
                  size={18}
                  className={css({ color: 'icon.neutral.base' })}
                />
              </button>
              <div
                className={css({
                  position: 'absolute',
                  bottom: '-32px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  px: '8px',
                  py: '4px',
                  borderRadius: '4px',
                  bg: 'fill.neutral.high',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  pointerEvents: 'none',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    color: 'inverse.text.base',
                  })}
                >
                  설정
                </span>
              </div>
            </div>

            {/* Vertical divider */}
            <div
              className={css({
                width: '1px',
                height: '24px',
                bg: 'border.neutral.low',
                mx: '4px',
              })}
            />

            {/* New deploy button */}
            <button
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                px: '14px',
                py: '8px',
                borderRadius: '6px',
                border: 'none',
                bg: 'fill.primary.base',
                cursor: 'pointer',
                _hover: { opacity: 0.88 },
              })}
            >
              <Plus
                size={16}
                className={css({ color: 'inverse.icon.base' })}
              />
              <span
                className={css({
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'inverse.text.base',
                })}
              >
                새 배포
              </span>
            </button>

            {/* Profile avatar */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                borderRadius: '999px',
                bg: 'fill.primary.base',
                cursor: 'pointer',
              })}
            >
              <span
                className={css({
                  fontSize: '13px',
                  fontWeight: '700',
                  color: 'inverse.text.base',
                })}
              >
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
            p: '24px',
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
              width: '360px',
            })}
          >
            {/* Toast 1: positive */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                px: '14px',
                py: '12px',
                borderRadius: '8px',
                border: '1px solid',
                bg: 'surface.positive.base',
                borderColor: 'border.positive.base',
              })}
            >
              <CheckCircle2
                size={18}
                className={css({ color: 'icon.positive.base', flexShrink: 0, mt: '1px' })}
              />
              <span
                className={css({
                  flex: 1,
                  fontSize: '13px',
                  color: 'text.positive.base',
                })}
              >
                배포 v2.4.1이 완료되었습니다.
              </span>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  bg: 'surface.neutral.transparent',
                  cursor: 'pointer',
                  p: '0',
                })}
              >
                <X size={15} className={css({ color: 'icon.positive.base' })} />
              </button>
            </div>

            {/* Toast 2: critical */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                px: '14px',
                py: '12px',
                borderRadius: '8px',
                border: '1px solid',
                bg: 'surface.critical.base',
                borderColor: 'border.critical.base',
              })}
            >
              <XCircle
                size={18}
                className={css({ color: 'icon.critical.base', flexShrink: 0, mt: '1px' })}
              />
              <span
                className={css({
                  flex: 1,
                  fontSize: '13px',
                  color: 'text.critical.base',
                })}
              >
                DB 연결이 끊어졌습니다. 즉시 확인하세요.
              </span>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  bg: 'surface.neutral.transparent',
                  cursor: 'pointer',
                  p: '0',
                })}
              >
                <X size={15} className={css({ color: 'icon.critical.base' })} />
              </button>
            </div>

            {/* Toast 3: info */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px',
                px: '14px',
                py: '12px',
                borderRadius: '8px',
                border: '1px solid',
                bg: 'surface.info.base',
                borderColor: 'border.info.base',
              })}
            >
              <Info
                size={18}
                className={css({ color: 'icon.info.base', flexShrink: 0, mt: '1px' })}
              />
              <span
                className={css({
                  flex: 1,
                  fontSize: '13px',
                  color: 'text.info.base',
                })}
              >
                시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
              </span>
              <button
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: 'none',
                  bg: 'surface.neutral.transparent',
                  cursor: 'pointer',
                  p: '0',
                })}
              >
                <X size={15} className={css({ color: 'icon.info.base' })} />
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
            {/* Card 1: 총 사용자 — positive */}
            <div
              className={css({
                bg: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '10px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.low',
                      mb: '4px',
                    })}
                  >
                    총 사용자
                  </p>
                  <p
                    className={css({
                      fontSize: '26px',
                      fontWeight: '700',
                      color: 'text.neutral.base',
                    })}
                  >
                    12,847
                  </p>
                </div>
                <TrendingUp
                  size={22}
                  className={css({ color: 'icon.positive.base' })}
                />
              </div>
              <div
                className={css({
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  px: '8px',
                  py: '3px',
                  borderRadius: '999px',
                  border: '1px solid',
                  bg: 'surface.positive.base',
                  borderColor: 'border.positive.base',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.positive.base',
                  })}
                >
                  +12%
                </span>
              </div>
            </div>

            {/* Card 2: 결제 실패 — critical */}
            <div
              className={css({
                bg: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '10px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.low',
                      mb: '4px',
                    })}
                  >
                    결제 실패
                  </p>
                  <p
                    className={css({
                      fontSize: '26px',
                      fontWeight: '700',
                      color: 'text.neutral.base',
                    })}
                  >
                    24건
                  </p>
                </div>
                <AlertCircle
                  size={22}
                  className={css({ color: 'icon.critical.base' })}
                />
              </div>
              <div
                className={css({
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  px: '8px',
                  py: '3px',
                  borderRadius: '999px',
                  border: '1px solid',
                  bg: 'surface.critical.base',
                  borderColor: 'border.critical.base',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.critical.base',
                  })}
                >
                  +3건
                </span>
              </div>
            </div>

            {/* Card 3: 평균 응답시간 — positive */}
            <div
              className={css({
                bg: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '10px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.low',
                      mb: '4px',
                    })}
                  >
                    평균 응답시간
                  </p>
                  <p
                    className={css({
                      fontSize: '26px',
                      fontWeight: '700',
                      color: 'text.neutral.base',
                    })}
                  >
                    142ms
                  </p>
                </div>
                <Zap
                  size={22}
                  className={css({ color: 'icon.positive.base' })}
                />
              </div>
              <div
                className={css({
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  px: '8px',
                  py: '3px',
                  borderRadius: '999px',
                  border: '1px solid',
                  bg: 'surface.positive.base',
                  borderColor: 'border.positive.base',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.positive.base',
                  })}
                >
                  -8%
                </span>
              </div>
            </div>

            {/* Card 4: 미처리 민원 — warning */}
            <div
              className={css({
                bg: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '10px',
                p: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div>
                  <p
                    className={css({
                      fontSize: '13px',
                      color: 'text.neutral.low',
                      mb: '4px',
                    })}
                  >
                    미처리 민원
                  </p>
                  <p
                    className={css({
                      fontSize: '26px',
                      fontWeight: '700',
                      color: 'text.neutral.base',
                    })}
                  >
                    7건
                  </p>
                </div>
                <Clock
                  size={22}
                  className={css({ color: 'icon.warning.base' })}
                />
              </div>
              <div
                className={css({
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  px: '8px',
                  py: '3px',
                  borderRadius: '999px',
                  border: '1px solid',
                  bg: 'surface.warning.base',
                  borderColor: 'border.warning.base',
                })}
              >
                <span
                  className={css({
                    fontSize: '12px',
                    fontWeight: '600',
                    color: 'text.warning.base',
                  })}
                >
                  +2건
                </span>
              </div>
            </div>
          </div>

          {/* System resources */}
          <div
            className={css({
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
            })}
          >
            {/* CPU */}
            <div
              className={css({
                bg: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '10px',
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
                  className={css({ fontSize: '14px', color: 'text.neutral.low' })}
                >
                  CPU 사용량
                </span>
                <span
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  42%
                </span>
              </div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '999px',
                  bg: 'fill.neutral.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    height: '100%',
                    width: '42%',
                    borderRadius: '999px',
                    bg: 'fill.positive.base',
                  })}
                />
              </div>
              <span
                className={css({ fontSize: '12px', color: 'text.positive.base' })}
              >
                여유로운 상태
              </span>
            </div>

            {/* Memory */}
            <div
              className={css({
                bg: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '10px',
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
                  className={css({ fontSize: '14px', color: 'text.neutral.low' })}
                >
                  메모리 사용량
                </span>
                <span
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  78%
                </span>
              </div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '999px',
                  bg: 'fill.neutral.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    height: '100%',
                    width: '78%',
                    borderRadius: '999px',
                    bg: 'fill.warning.base',
                  })}
                />
              </div>
              <span
                className={css({ fontSize: '12px', color: 'text.warning.base' })}
              >
                주의 필요
              </span>
            </div>

            {/* Disk */}
            <div
              className={css({
                bg: 'canvas.neutral.02',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '10px',
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
                  className={css({ fontSize: '14px', color: 'text.neutral.low' })}
                >
                  디스크 사용량
                </span>
                <span
                  className={css({
                    fontSize: '18px',
                    fontWeight: '700',
                    color: 'text.neutral.base',
                  })}
                >
                  91%
                </span>
              </div>
              <div
                className={css({
                  height: '8px',
                  borderRadius: '999px',
                  bg: 'fill.neutral.base',
                  overflow: 'hidden',
                })}
              >
                <div
                  className={css({
                    height: '100%',
                    width: '91%',
                    borderRadius: '999px',
                    bg: 'fill.critical.base',
                  })}
                />
              </div>
              <span
                className={css({ fontSize: '12px', color: 'text.critical.base' })}
              >
                심각한 상태
              </span>
            </div>
          </div>

          {/* Event table */}
          <div
            className={css({
              bg: 'canvas.neutral.02',
              border: '1px solid',
              borderColor: 'border.neutral.base',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            {/* Table header area */}
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: '20px',
                pt: '16px',
                pb: '0',
                borderBottom: '1px solid',
                borderColor: 'border.neutral.low',
              })}
            >
              {/* Tabs */}
              <div className={css({ display: 'flex', gap: '0' })}>
                <button
                  className={css({
                    px: '14px',
                    py: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'text.neutral.base',
                    border: 'none',
                    bg: 'surface.neutral.transparent',
                    borderBottom: '2px solid',
                    borderColor: 'border.primary.highest',
                    cursor: 'pointer',
                  })}
                >
                  전체 이벤트
                </button>
                <button
                  className={css({
                    px: '14px',
                    py: '10px',
                    fontSize: '14px',
                    color: 'text.neutral.base',
                    border: 'none',
                    borderBottom: '2px solid transparent',
                    bg: 'surface.neutral.transparent',
                    opacity: 0.38,
                    cursor: 'pointer',
                    _hover: { opacity: 1 },
                  })}
                >
                  미처리
                </button>
                <button
                  className={css({
                    px: '14px',
                    py: '10px',
                    fontSize: '14px',
                    color: 'text.neutral.base',
                    border: 'none',
                    borderBottom: '2px solid transparent',
                    bg: 'surface.neutral.transparent',
                    opacity: 0.38,
                    cursor: 'pointer',
                    _hover: { opacity: 1 },
                  })}
                >
                  처리완료
                </button>
              </div>

              {/* Filter / CSV buttons */}
              <div className={css({ display: 'flex', gap: '8px', pb: '10px' })}>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    px: '12px',
                    py: '7px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    bg: 'surface.neutral.transparent',
                    cursor: 'pointer',
                    _hover: { bg: 'surface.neutral.high' },
                  })}
                >
                  <Filter
                    size={14}
                    className={css({ color: 'icon.neutral.base' })}
                  />
                  <span
                    className={css({ fontSize: '13px', color: 'text.neutral.base' })}
                  >
                    필터
                  </span>
                </button>
                <button
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    px: '12px',
                    py: '7px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    bg: 'surface.neutral.transparent',
                    opacity: 0.38,
                    cursor: 'not-allowed',
                  })}
                >
                  <Download
                    size={14}
                    className={css({ color: 'icon.neutral.base' })}
                  />
                  <span
                    className={css({ fontSize: '13px', color: 'text.neutral.base' })}
                  >
                    CSV 내보내기
                  </span>
                </button>
              </div>
            </div>

            {/* Tag filter bar + search */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                px: '20px',
                py: '12px',
                borderBottom: '1px solid',
                borderColor: 'border.neutral.low',
              })}
            >
              {/* Tags */}
              <div className={css({ display: 'flex', gap: '6px', flex: 1 })}>
                {/* Selected */}
                <span
                  className={css({
                    px: '10px',
                    py: '4px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: '600',
                    bg: 'fill.primary.base',
                    color: 'inverse.text.base',
                    cursor: 'pointer',
                  })}
                >
                  전체
                </span>
                {['로그인', '결제', '보안', '시스템'].map((tag) => (
                  <span
                    key={tag}
                    className={css({
                      px: '10px',
                      py: '4px',
                      borderRadius: '999px',
                      fontSize: '12px',
                      bg: 'surface.neutral.base',
                      color: 'text.neutral.base',
                      cursor: 'pointer',
                      _hover: { bg: 'surface.neutral.high' },
                    })}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Search inputs */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                {/* Normal input */}
                <input
                  type="text"
                  placeholder="이벤트 검색..."
                  className={css({
                    px: '10px',
                    py: '7px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    bg: 'surface.neutral.base',
                    fontSize: '13px',
                    color: 'text.neutral.base',
                    outline: 'none',
                    _placeholder: { color: 'text.neutral.lowest', opacity: 0.38 },
                    _focus: {
                      borderColor: 'focus.border',
                      outline: '2px solid',
                      outlineColor: 'focus.border',
                      outlineOffset: '1px',
                    },
                  })}
                />
                {/* Error input */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '3px' })}>
                  <input
                    type="text"
                    defaultValue="2025/99/99"
                    className={css({
                      px: '10px',
                      py: '7px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'border.critical.base',
                      bg: 'surface.critical.base',
                      fontSize: '13px',
                      color: 'text.neutral.base',
                      outline: 'none',
                    })}
                  />
                  <span
                    className={css({ fontSize: '11px', color: 'text.critical.base' })}
                  >
                    잘못된 날짜 형식입니다.
                  </span>
                </div>
              </div>
            </div>

            {/* Table */}
            <table
              className={css({
                width: '100%',
                borderCollapse: 'collapse',
              })}
            >
              <thead>
                <tr
                  className={css({
                    bg: 'canvas.neutral.03',
                  })}
                >
                  {['사용자', '이벤트', '시간', '상태', '액션'].map((col) => (
                    <th
                      key={col}
                      className={css({
                        px: '20px',
                        py: '10px',
                        textAlign: 'left',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'text.neutral.low',
                        borderBottom: '1px solid',
                        borderColor: 'border.neutral.low',
                      })}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1: 홍 — positive */}
                <tr className={css({ bg: 'canvas.neutral.02' })}>
                  <td
                    className={css({
                      px: '20px',
                      py: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    })}
                  >
                    <div
                      className={css({
                        width: '30px',
                        height: '30px',
                        borderRadius: '999px',
                        bg: 'surface.neutral.base',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      })}
                    >
                      <span className={css({ fontSize: '12px', fontWeight: '600', color: 'text.neutral.base' })}>홍</span>
                    </div>
                    <span className={css({ fontSize: '13px', color: 'text.neutral.base' })}>홍길동</span>
                  </td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.base' })}>로그인 성공</td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.low' })}>14:32</td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
                      <CheckCircle2 size={14} className={css({ color: 'icon.positive.base' })} />
                      <span className={css({ fontSize: '13px', color: 'text.positive.base' })}>정상 처리됨</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '6px', border: 'none', bg: 'surface.neutral.transparent', cursor: 'pointer', _hover: { bg: 'surface.neutral.high' } })}>
                      <Eye size={15} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 2: 김 — critical (even row) */}
                <tr className={css({ bg: 'canvas.neutral.01' })}>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <div className={css({ width: '30px', height: '30px', borderRadius: '999px', bg: 'surface.neutral.base', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 })}>
                        <span className={css({ fontSize: '12px', fontWeight: '600', color: 'text.neutral.base' })}>김</span>
                      </div>
                      <span className={css({ fontSize: '13px', color: 'text.neutral.base' })}>김철수</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.base' })}>결제 실패</td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.low' })}>14:28</td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
                      <XCircle size={14} className={css({ color: 'icon.critical.base' })} />
                      <span className={css({ fontSize: '13px', color: 'text.critical.base' })}>문제 발생</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '6px', border: 'none', bg: 'surface.neutral.transparent', cursor: 'pointer', _hover: { bg: 'surface.neutral.high' } })}>
                      <Eye size={15} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 3: 이 — warning */}
                <tr className={css({ bg: 'canvas.neutral.02' })}>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <div className={css({ width: '30px', height: '30px', borderRadius: '999px', bg: 'surface.neutral.base', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 })}>
                        <span className={css({ fontSize: '12px', fontWeight: '600', color: 'text.neutral.base' })}>이</span>
                      </div>
                      <span className={css({ fontSize: '13px', color: 'text.neutral.base' })}>이영희</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.base' })}>비밀번호 5회 오류</td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.low' })}>14:21</td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
                      <AlertTriangle size={14} className={css({ color: 'icon.warning.base' })} />
                      <span className={css({ fontSize: '13px', color: 'text.warning.base' })}>주의 필요</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '6px', border: 'none', bg: 'surface.neutral.transparent', cursor: 'pointer', _hover: { bg: 'surface.neutral.high' } })}>
                      <Eye size={15} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 4: 박 — positive (even row) */}
                <tr className={css({ bg: 'canvas.neutral.01' })}>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <div className={css({ width: '30px', height: '30px', borderRadius: '999px', bg: 'surface.neutral.base', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 })}>
                        <span className={css({ fontSize: '12px', fontWeight: '600', color: 'text.neutral.base' })}>박</span>
                      </div>
                      <span className={css({ fontSize: '13px', color: 'text.neutral.base' })}>박민준</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.base' })}>회원가입</td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.low' })}>14:15</td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
                      <CheckCircle2 size={14} className={css({ color: 'icon.positive.base' })} />
                      <span className={css({ fontSize: '13px', color: 'text.positive.base' })}>정상 처리됨</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '6px', border: 'none', bg: 'surface.neutral.transparent', cursor: 'pointer', _hover: { bg: 'surface.neutral.high' } })}>
                      <Eye size={15} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>

                {/* Row 5: 시 — warning */}
                <tr className={css({ bg: 'canvas.neutral.02' })}>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                      <div className={css({ width: '30px', height: '30px', borderRadius: '999px', bg: 'surface.neutral.base', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 })}>
                        <span className={css({ fontSize: '12px', fontWeight: '600', color: 'text.neutral.base' })}>시</span>
                      </div>
                      <span className={css({ fontSize: '13px', color: 'text.neutral.base' })}>시스템</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.base' })}>API 응답 지연</td>
                  <td className={css({ px: '20px', py: '12px', fontSize: '13px', color: 'text.neutral.low' })}>14:09</td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <div className={css({ display: 'flex', alignItems: 'center', gap: '5px' })}>
                      <AlertTriangle size={14} className={css({ color: 'icon.warning.base' })} />
                      <span className={css({ fontSize: '13px', color: 'text.warning.base' })}>주의 필요</span>
                    </div>
                  </td>
                  <td className={css({ px: '20px', py: '12px' })}>
                    <button className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '30px', height: '30px', borderRadius: '6px', border: 'none', bg: 'surface.neutral.transparent', cursor: 'pointer', _hover: { bg: 'surface.neutral.high' } })}>
                      <Eye size={15} className={css({ color: 'icon.neutral.base' })} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Notification toggle panel */}
          <div
            className={css({
              bg: 'canvas.neutral.02',
              border: '1px solid',
              borderColor: 'border.neutral.base',
              borderRadius: '10px',
              p: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            })}
          >
            <h2
              className={css({
                fontSize: '15px',
                fontWeight: '700',
                color: 'text.neutral.base',
                m: '0',
              })}
            >
              알림 수신 설정
            </h2>

            {/* Toggle 1: 배포 알림 — on */}
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                배포 알림
              </span>
              <div
                className={css({
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '999px',
                  bg: 'fill.primary.base',
                  cursor: 'pointer',
                })}
              >
                <div
                  className={css({
                    position: 'absolute',
                    top: '3px',
                    right: '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    bg: 'canvas.neutral.02',
                  })}
                />
              </div>
            </div>

            {/* Toggle 2: 장애 알림 — on */}
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                장애 알림
              </span>
              <div
                className={css({
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '999px',
                  bg: 'fill.primary.base',
                  cursor: 'pointer',
                })}
              >
                <div
                  className={css({
                    position: 'absolute',
                    top: '3px',
                    right: '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    bg: 'canvas.neutral.02',
                  })}
                />
              </div>
            </div>

            {/* Toggle 3: 보안 알림 — off */}
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              })}
            >
              <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                보안 알림
              </span>
              <div
                className={css({
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '999px',
                  bg: 'fill.neutral.base',
                  cursor: 'pointer',
                })}
              >
                <div
                  className={css({
                    position: 'absolute',
                    top: '3px',
                    left: '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    bg: 'canvas.neutral.02',
                  })}
                />
              </div>
            </div>

            {/* Toggle 4: 마케팅 알림 — off + disabled */}
            <div
              className={css({
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: 0.38,
              })}
            >
              <span className={css({ fontSize: '14px', color: 'text.neutral.base' })}>
                마케팅 알림
              </span>
              <div
                className={css({
                  position: 'relative',
                  width: '44px',
                  height: '24px',
                  borderRadius: '999px',
                  bg: 'fill.neutral.base',
                  cursor: 'not-allowed',
                })}
              >
                <div
                  className={css({
                    position: 'absolute',
                    top: '3px',
                    left: '3px',
                    width: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    bg: 'canvas.neutral.02',
                  })}
                />
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
            {/* Card 1: positive — 배포 완료 */}
            <div
              className={css({
                bg: 'surface.positive.base',
                border: '1px solid',
                borderColor: 'border.positive.base',
                borderRadius: '10px',
                p: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <CheckCircle2 size={18} className={css({ color: 'icon.positive.base' })} />
                  <span className={css({ fontSize: '14px', fontWeight: '700', color: 'text.positive.base' })}>배포 완료</span>
                </div>
                <button
                  className={css({
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: 'none', bg: 'surface.neutral.transparent', cursor: 'pointer', p: '0',
                  })}
                >
                  <X size={15} className={css({ color: 'icon.positive.base' })} />
                </button>
              </div>
              <p className={css({ fontSize: '13px', color: 'text.positive.base', m: '0' })}>
                v2.4.1이 성공적으로 배포되었습니다.
              </p>
              <button
                className={css({
                  alignSelf: 'flex-start',
                  px: '12px',
                  py: '6px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.positive.highest',
                  bg: 'surface.neutral.transparent',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'text.positive.base',
                  cursor: 'pointer',
                  _hover: { bg: 'surface.positive.high' },
                })}
              >
                배포 로그 보기
              </button>
            </div>

            {/* Card 2: critical — 연결 실패 */}
            <div
              className={css({
                bg: 'surface.critical.base',
                border: '1px solid',
                borderColor: 'border.critical.base',
                borderRadius: '10px',
                p: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <XCircle size={18} className={css({ color: 'icon.critical.base' })} />
                  <span className={css({ fontSize: '14px', fontWeight: '700', color: 'text.critical.base' })}>연결 실패</span>
                </div>
                <button
                  className={css({
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: 'none', bg: 'surface.neutral.transparent', cursor: 'pointer', p: '0',
                  })}
                >
                  <X size={15} className={css({ color: 'icon.critical.base' })} />
                </button>
              </div>
              <p className={css({ fontSize: '13px', color: 'text.critical.base', m: '0' })}>
                DB 연결이 실패했습니다.
              </p>
              <div className={css({ display: 'flex', gap: '8px' })}>
                <button
                  className={css({
                    px: '12px',
                    py: '6px',
                    borderRadius: '6px',
                    border: 'none',
                    bg: 'fill.critical.base',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'inverse.text.base',
                    cursor: 'pointer',
                    _hover: { opacity: 0.88 },
                  })}
                >
                  즉시 확인
                </button>
                <button
                  className={css({
                    px: '12px',
                    py: '6px',
                    borderRadius: '6px',
                    border: 'none',
                    bg: 'surface.neutral.transparent',
                    fontSize: '13px',
                    color: 'text.critical.base',
                    cursor: 'pointer',
                    _hover: { bg: 'surface.critical.high' },
                  })}
                >
                  무시
                </button>
              </div>
            </div>

            {/* Card 3: warning — 용량 경고 */}
            <div
              className={css({
                bg: 'surface.warning.base',
                border: '1px solid',
                borderColor: 'border.warning.base',
                borderRadius: '10px',
                p: '18px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              })}
            >
              <div
                className={css({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
                  <AlertTriangle size={18} className={css({ color: 'icon.warning.base' })} />
                  <span className={css({ fontSize: '14px', fontWeight: '700', color: 'text.warning.base' })}>용량 경고</span>
                </div>
                <button
                  className={css({
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    border: 'none', bg: 'surface.neutral.transparent', cursor: 'pointer', p: '0',
                  })}
                >
                  <X size={15} className={css({ color: 'icon.warning.base' })} />
                </button>
              </div>
              <p className={css({ fontSize: '13px', color: 'text.warning.base', m: '0' })}>
                디스크 사용량이 85%입니다.
              </p>
              <button
                className={css({
                  alignSelf: 'flex-start',
                  px: '12px',
                  py: '6px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.warning.highest',
                  bg: 'surface.neutral.transparent',
                  fontSize: '13px',
                  fontWeight: '600',
                  color: 'text.warning.base',
                  cursor: 'pointer',
                  _hover: { bg: 'surface.warning.high' },
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
