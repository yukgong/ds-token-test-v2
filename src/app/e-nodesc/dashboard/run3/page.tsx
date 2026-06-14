import { css } from "@ds-token-test/styled-system-intent-first/css";
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
} from "lucide-react";

export default function DashboardPage() {
  return (
    <div
      className={css({
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        bg: "neutral.canvas.01",
      })}
    >
      {/* Sidebar */}
      <aside
        className={`dark ${css({
          width: "240px",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          bg: "neutral.canvas.03",
          borderRight: "1px solid",
          borderColor: "neutral.border.base",
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "20px 16px",
            borderBottom: "1px solid",
            borderColor: "neutral.border.low",
          })}
        >
          <LayoutDashboard
            size={24}
            className={css({ color: "primary.icon.base" })}
          />
          <span
            className={css({
              fontWeight: "700",
              fontSize: "18px",
              color: "neutral.text.base",
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav menu */}
        <nav className={css({ flex: 1, padding: "12px 8px" })}>
          {/* Active: 대시보드 */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "8px",
              bg: "neutral.fill.base",
              marginBottom: "4px",
              cursor: "pointer",
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: "neutral.icon.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                fontWeight: "600",
                color: "neutral.text.base",
              })}
            >
              대시보드
            </span>
          </div>

          {/* 사용자 관리 */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "8px",
              marginBottom: "4px",
              cursor: "pointer",
            })}
          >
            <Users
              size={18}
              className={css({ color: "neutral.icon.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "neutral.text.base",
              })}
            >
              사용자 관리
            </span>
          </div>

          {/* 결제 내역 */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "8px",
              marginBottom: "4px",
              cursor: "pointer",
            })}
          >
            <CreditCard
              size={18}
              className={css({ color: "neutral.icon.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "neutral.text.base",
              })}
            >
              결제 내역
            </span>
          </div>

          {/* 알림 설정 */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "8px",
              marginBottom: "4px",
              cursor: "pointer",
            })}
          >
            <Bell
              size={18}
              className={css({ color: "neutral.icon.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "neutral.text.base",
              })}
            >
              알림 설정
            </span>
          </div>

          {/* 시스템 로그 — 비활성 */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "8px",
              marginBottom: "4px",
              cursor: "not-allowed",
              opacity: 0.38,
            })}
          >
            <ScrollText
              size={18}
              className={css({ color: "neutral.icon.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "neutral.text.base",
              })}
            >
              시스템 로그
            </span>
          </div>
        </nav>

        {/* Logout */}
        <div
          className={css({
            padding: "16px 8px",
            borderTop: "1px solid",
            borderColor: "neutral.border.low",
          })}
        >
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "8px",
              cursor: "pointer",
            })}
          >
            <LogOut
              size={18}
              className={css({ color: "critical.icon.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "critical.text.base",
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
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bg: "neutral.canvas.01",
        })}
      >
        {/* Header bar */}
        <header
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "56px",
            flexShrink: 0,
            bg: "neutral.surface.base",
            borderBottom: "1px solid",
            borderColor: "neutral.border.base",
          })}
        >
          {/* Breadcrumb */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "14px",
            })}
          >
            <span
              className={css({
                color: "primary.text.base",
                cursor: "pointer",
              })}
            >
              홈
            </span>
            <span className={css({ color: "neutral.text.base", opacity: 0.38 })}>
              /
            </span>
            <span
              className={css({
                color: "primary.text.base",
                cursor: "pointer",
              })}
            >
              모니터링
            </span>
            <span className={css({ color: "neutral.text.base", opacity: 0.38 })}>
              /
            </span>
            <span
              className={css({
                color: "neutral.text.base",
                fontWeight: "600",
              })}
            >
              대시보드
            </span>
          </div>

          {/* Right controls */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "8px",
            })}
          >
            {/* Search icon button with tooltip */}
            <div className={css({ position: "relative" })}>
              <button
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "none",
                  bg: "neutral.surface.transparent",
                  cursor: "pointer",
                  _hover: { bg: "neutral.surface.high" },
                })}
              >
                <Search
                  size={18}
                  className={css({ color: "neutral.icon.base" })}
                />
              </button>
              <span
                className={css({
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bg: "neutral.fill.high",
                  color: "inverse.text.base",
                  fontSize: "12px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  zIndex: 10,
                })}
              >
                검색
              </span>
            </div>

            {/* Bell icon button with badge + tooltip */}
            <div className={css({ position: "relative" })}>
              <button
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "none",
                  bg: "neutral.surface.transparent",
                  cursor: "pointer",
                  _hover: { bg: "neutral.surface.high" },
                })}
              >
                <Bell
                  size={18}
                  className={css({ color: "neutral.icon.base" })}
                />
                <span
                  className={css({
                    position: "absolute",
                    top: "4px",
                    right: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "16px",
                    height: "16px",
                    borderRadius: "9999px",
                    bg: "critical.fill.base",
                    color: "inverse.text.base",
                    fontSize: "10px",
                    fontWeight: "700",
                  })}
                >
                  3
                </span>
              </button>
              <span
                className={css({
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bg: "neutral.fill.high",
                  color: "inverse.text.base",
                  fontSize: "12px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  zIndex: 10,
                })}
              >
                알림
              </span>
            </div>

            {/* Settings icon button with tooltip */}
            <div className={css({ position: "relative" })}>
              <button
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "8px",
                  border: "none",
                  bg: "neutral.surface.transparent",
                  cursor: "pointer",
                  _hover: { bg: "neutral.surface.high" },
                })}
              >
                <Settings
                  size={18}
                  className={css({ color: "neutral.icon.base" })}
                />
              </button>
              <span
                className={css({
                  position: "absolute",
                  top: "calc(100% + 4px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bg: "neutral.fill.high",
                  color: "inverse.text.base",
                  fontSize: "12px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                  zIndex: 10,
                })}
              >
                설정
              </span>
            </div>

            {/* Vertical divider */}
            <div
              className={css({
                width: "1px",
                height: "24px",
                bg: "neutral.border.base",
                mx: "4px",
              })}
            />

            {/* New deploy button */}
            <button
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                border: "none",
                bg: "primary.fill.base",
                color: "inverse.text.base",
                fontSize: "14px",
                fontWeight: "600",
                cursor: "pointer",
                _hover: { bg: "primary.fill.base", opacity: 0.9 },
              })}
            >
              <Plus size={16} className={css({ color: "inverse.icon.base" })} />
              새 배포
            </button>

            {/* Avatar */}
            <div
              className={css({
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                bg: "primary.surface.high",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              })}
            >
              <span
                className={css({
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "primary.text.base",
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
            overflowY: "auto",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          })}
        >
          {/* Toast notifications */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignItems: "flex-end",
            })}
          >
            {/* Toast 1: positive */}
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 16px",
                borderRadius: "8px",
                bg: "positive.surface.base",
                border: "1px solid",
                borderColor: "positive.border.base",
                minWidth: "320px",
                maxWidth: "480px",
              })}
            >
              <CheckCircle2
                size={18}
                className={css({ color: "positive.icon.base", flexShrink: 0 })}
              />
              <span
                className={css({ flex: 1, fontSize: "14px", color: "positive.text.base" })}
              >
                배포 v2.4.1이 완료되었습니다.
              </span>
              <button
                className={css({
                  border: "none",
                  bg: "neutral.surface.transparent",
                  cursor: "pointer",
                  padding: "2px",
                  borderRadius: "4px",
                })}
              >
                <X
                  size={14}
                  className={css({ color: "positive.icon.base" })}
                />
              </button>
            </div>

            {/* Toast 2: critical */}
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 16px",
                borderRadius: "8px",
                bg: "critical.surface.base",
                border: "1px solid",
                borderColor: "critical.border.base",
                minWidth: "320px",
                maxWidth: "480px",
              })}
            >
              <XCircle
                size={18}
                className={css({ color: "critical.icon.base", flexShrink: 0 })}
              />
              <span
                className={css({ flex: 1, fontSize: "14px", color: "critical.text.base" })}
              >
                DB 연결이 끊어졌습니다. 즉시 확인하세요.
              </span>
              <button
                className={css({
                  border: "none",
                  bg: "neutral.surface.transparent",
                  cursor: "pointer",
                  padding: "2px",
                  borderRadius: "4px",
                })}
              >
                <X
                  size={14}
                  className={css({ color: "critical.icon.base" })}
                />
              </button>
            </div>

            {/* Toast 3: info */}
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 16px",
                borderRadius: "8px",
                bg: "info.surface.base",
                border: "1px solid",
                borderColor: "info.border.base",
                minWidth: "320px",
                maxWidth: "480px",
              })}
            >
              <Info
                size={18}
                className={css({ color: "info.icon.base", flexShrink: 0 })}
              />
              <span
                className={css({ flex: 1, fontSize: "14px", color: "info.text.base" })}
              >
                시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
              </span>
              <button
                className={css({
                  border: "none",
                  bg: "neutral.surface.transparent",
                  cursor: "pointer",
                  padding: "2px",
                  borderRadius: "4px",
                })}
              >
                <X
                  size={14}
                  className={css({ color: "info.icon.base" })}
                />
              </button>
            </div>
          </div>

          {/* Stats cards 2x2 */}
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            })}
          >
            {/* Card 1: 총 사용자 — positive */}
            <div
              className={css({
                bg: "neutral.surface.base",
                border: "1px solid",
                borderColor: "neutral.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                })}
              >
                <span
                  className={css({
                    fontSize: "13px",
                    color: "neutral.text.low",
                  })}
                >
                  총 사용자
                </span>
                <TrendingUp
                  size={20}
                  className={css({ color: "positive.icon.base" })}
                />
              </div>
              <span
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "neutral.text.base",
                })}
              >
                12,847
              </span>
              <div>
                <span
                  className={css({
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    bg: "positive.surface.base",
                    color: "positive.text.base",
                    border: "1px solid",
                    borderColor: "positive.border.base",
                  })}
                >
                  +12%
                </span>
              </div>
            </div>

            {/* Card 2: 결제 실패 — critical */}
            <div
              className={css({
                bg: "neutral.surface.base",
                border: "1px solid",
                borderColor: "neutral.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                })}
              >
                <span
                  className={css({
                    fontSize: "13px",
                    color: "neutral.text.low",
                  })}
                >
                  결제 실패
                </span>
                <AlertCircle
                  size={20}
                  className={css({ color: "critical.icon.base" })}
                />
              </div>
              <span
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "neutral.text.base",
                })}
              >
                24건
              </span>
              <div>
                <span
                  className={css({
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    bg: "critical.surface.base",
                    color: "critical.text.base",
                    border: "1px solid",
                    borderColor: "critical.border.base",
                  })}
                >
                  +3건
                </span>
              </div>
            </div>

            {/* Card 3: 평균 응답시간 — positive */}
            <div
              className={css({
                bg: "neutral.surface.base",
                border: "1px solid",
                borderColor: "neutral.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                })}
              >
                <span
                  className={css({
                    fontSize: "13px",
                    color: "neutral.text.low",
                  })}
                >
                  평균 응답시간
                </span>
                <Zap
                  size={20}
                  className={css({ color: "positive.icon.base" })}
                />
              </div>
              <span
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "neutral.text.base",
                })}
              >
                142ms
              </span>
              <div>
                <span
                  className={css({
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    bg: "positive.surface.base",
                    color: "positive.text.base",
                    border: "1px solid",
                    borderColor: "positive.border.base",
                  })}
                >
                  -8%
                </span>
              </div>
            </div>

            {/* Card 4: 미처리 민원 — warning */}
            <div
              className={css({
                bg: "neutral.surface.base",
                border: "1px solid",
                borderColor: "neutral.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                })}
              >
                <span
                  className={css({
                    fontSize: "13px",
                    color: "neutral.text.low",
                  })}
                >
                  미처리 민원
                </span>
                <Clock
                  size={20}
                  className={css({ color: "warning.icon.base" })}
                />
              </div>
              <span
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "neutral.text.base",
                })}
              >
                7건
              </span>
              <div>
                <span
                  className={css({
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    bg: "warning.surface.base",
                    color: "warning.text.base",
                    border: "1px solid",
                    borderColor: "warning.border.base",
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
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            })}
          >
            {/* CPU — positive */}
            <div
              className={css({
                bg: "neutral.surface.base",
                border: "1px solid",
                borderColor: "neutral.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <span
                  className={css({ fontSize: "13px", color: "neutral.text.low" })}
                >
                  CPU 사용량
                </span>
                <span
                  className={css({
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "neutral.text.base",
                  })}
                >
                  42%
                </span>
              </div>
              <div
                className={css({
                  height: "8px",
                  borderRadius: "9999px",
                  bg: "neutral.surface.high",
                  overflow: "hidden",
                })}
              >
                <div
                  className={css({
                    height: "100%",
                    width: "42%",
                    borderRadius: "9999px",
                    bg: "positive.fill.base",
                  })}
                />
              </div>
              <span
                className={css({ fontSize: "12px", color: "positive.text.base" })}
              >
                여유로운 상태
              </span>
            </div>

            {/* Memory — warning */}
            <div
              className={css({
                bg: "neutral.surface.base",
                border: "1px solid",
                borderColor: "neutral.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <span
                  className={css({ fontSize: "13px", color: "neutral.text.low" })}
                >
                  메모리 사용량
                </span>
                <span
                  className={css({
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "neutral.text.base",
                  })}
                >
                  78%
                </span>
              </div>
              <div
                className={css({
                  height: "8px",
                  borderRadius: "9999px",
                  bg: "neutral.surface.high",
                  overflow: "hidden",
                })}
              >
                <div
                  className={css({
                    height: "100%",
                    width: "78%",
                    borderRadius: "9999px",
                    bg: "warning.fill.base",
                  })}
                />
              </div>
              <span
                className={css({ fontSize: "12px", color: "warning.text.base" })}
              >
                주의 필요
              </span>
            </div>

            {/* Disk — critical */}
            <div
              className={css({
                bg: "neutral.surface.base",
                border: "1px solid",
                borderColor: "neutral.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <span
                  className={css({ fontSize: "13px", color: "neutral.text.low" })}
                >
                  디스크 사용량
                </span>
                <span
                  className={css({
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "neutral.text.base",
                  })}
                >
                  91%
                </span>
              </div>
              <div
                className={css({
                  height: "8px",
                  borderRadius: "9999px",
                  bg: "neutral.surface.high",
                  overflow: "hidden",
                })}
              >
                <div
                  className={css({
                    height: "100%",
                    width: "91%",
                    borderRadius: "9999px",
                    bg: "critical.fill.base",
                  })}
                />
              </div>
              <span
                className={css({ fontSize: "12px", color: "critical.text.base" })}
              >
                심각한 상태
              </span>
            </div>
          </div>

          {/* Events table */}
          <div
            className={css({
              bg: "neutral.surface.base",
              border: "1px solid",
              borderColor: "neutral.border.base",
              borderRadius: "12px",
              overflow: "hidden",
            })}
          >
            {/* Table header controls */}
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px 0",
                borderBottom: "1px solid",
                borderColor: "neutral.border.base",
              })}
            >
              {/* Tabs */}
              <div className={css({ display: "flex", gap: "0" })}>
                {/* Active tab */}
                <button
                  className={css({
                    padding: "10px 16px",
                    border: "none",
                    borderBottom: "2px solid",
                    borderColor: "primary.border.high",
                    bg: "neutral.surface.transparent",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "primary.text.base",
                    cursor: "pointer",
                    marginBottom: "-1px",
                  })}
                >
                  전체 이벤트
                </button>
                <button
                  className={css({
                    padding: "10px 16px",
                    border: "none",
                    borderBottom: "2px solid",
                    borderColor: "neutral.border.transparent",
                    bg: "neutral.surface.transparent",
                    fontSize: "14px",
                    color: "neutral.text.base",
                    cursor: "pointer",
                    opacity: 0.38,
                    marginBottom: "-1px",
                    _hover: { opacity: 0.7 },
                  })}
                >
                  미처리
                </button>
                <button
                  className={css({
                    padding: "10px 16px",
                    border: "none",
                    borderBottom: "2px solid",
                    borderColor: "neutral.border.transparent",
                    bg: "neutral.surface.transparent",
                    fontSize: "14px",
                    color: "neutral.text.base",
                    cursor: "pointer",
                    opacity: 0.38,
                    marginBottom: "-1px",
                    _hover: { opacity: 0.7 },
                  })}
                >
                  처리완료
                </button>
              </div>

              {/* Buttons */}
              <div className={css({ display: "flex", gap: "8px", paddingBottom: "12px" })}>
                <button
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    border: "1px solid",
                    borderColor: "neutral.border.base",
                    bg: "neutral.surface.transparent",
                    fontSize: "13px",
                    color: "neutral.text.base",
                    cursor: "pointer",
                  })}
                >
                  <Filter size={14} className={css({ color: "neutral.icon.base" })} />
                  필터
                </button>
                <button
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    border: "1px solid",
                    borderColor: "neutral.border.base",
                    bg: "neutral.surface.transparent",
                    fontSize: "13px",
                    color: "neutral.text.base",
                    cursor: "not-allowed",
                    opacity: 0.38,
                  })}
                >
                  <Download size={14} className={css({ color: "neutral.icon.base" })} />
                  CSV 내보내기
                </button>
              </div>
            </div>

            {/* Tag filter bar + search */}
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                borderBottom: "1px solid",
                borderColor: "neutral.border.low",
                gap: "12px",
              })}
            >
              <div className={css({ display: "flex", gap: "8px" })}>
                {/* Selected tag */}
                <span
                  className={css({
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    bg: "primary.fill.base",
                    color: "inverse.text.base",
                    fontSize: "13px",
                    cursor: "pointer",
                  })}
                >
                  전체
                </span>
                {["로그인", "결제", "보안", "시스템"].map((tag) => (
                  <span
                    key={tag}
                    className={css({
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      bg: "neutral.surface.high",
                      color: "neutral.text.low",
                      fontSize: "13px",
                      cursor: "pointer",
                      _hover: { bg: "neutral.fill.base", color: "neutral.text.base" },
                    })}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Search inputs */}
              <div className={css({ display: "flex", flexDirection: "column", gap: "6px" })}>
                {/* Normal search input */}
                <input
                  type="text"
                  placeholder="이벤트 검색..."
                  className={css({
                    padding: "7px 12px",
                    borderRadius: "8px",
                    border: "1px solid",
                    borderColor: "neutral.border.base",
                    bg: "neutral.surface.base",
                    fontSize: "13px",
                    color: "neutral.text.base",
                    outline: "none",
                    _placeholder: { color: "neutral.text.lowest", opacity: 0.38 },
                    _focus: {
                      borderColor: "primary.border.base",
                      outline: "2px solid",
                      outlineColor: "focus.border",
                    },
                    width: "200px",
                  })}
                />
                {/* Error state input */}
                <div className={css({ display: "flex", flexDirection: "column", gap: "3px" })}>
                  <input
                    type="text"
                    defaultValue="2025/13/99"
                    className={css({
                      padding: "7px 12px",
                      borderRadius: "8px",
                      border: "1px solid",
                      borderColor: "critical.border.base",
                      bg: "critical.surface.base",
                      fontSize: "13px",
                      color: "neutral.text.base",
                      outline: "none",
                      width: "200px",
                    })}
                  />
                  <span
                    className={css({ fontSize: "11px", color: "critical.text.base" })}
                  >
                    잘못된 날짜 형식입니다.
                  </span>
                </div>
              </div>
            </div>

            {/* Table */}
            <table
              className={css({
                width: "100%",
                borderCollapse: "collapse",
              })}
            >
              <thead>
                <tr
                  className={css({
                    bg: "neutral.surface.high",
                  })}
                >
                  {["사용자", "이벤트", "시간", "상태", "액션"].map((col) => (
                    <th
                      key={col}
                      className={css({
                        padding: "10px 20px",
                        textAlign: "left",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "neutral.text.low",
                        borderBottom: "1px solid",
                        borderColor: "neutral.border.base",
                      })}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    initial: "홍",
                    name: "홍길동",
                    event: "로그인 성공",
                    time: "14:32",
                    status: "정상 처리됨",
                    intent: "positive" as const,
                  },
                  {
                    initial: "김",
                    name: "김철수",
                    event: "결제 실패",
                    time: "14:28",
                    status: "문제 발생",
                    intent: "critical" as const,
                  },
                  {
                    initial: "이",
                    name: "이영희",
                    event: "비밀번호 5회 오류",
                    time: "14:21",
                    status: "주의 필요",
                    intent: "warning" as const,
                  },
                  {
                    initial: "박",
                    name: "박민준",
                    event: "회원가입",
                    time: "14:15",
                    status: "정상 처리됨",
                    intent: "positive" as const,
                  },
                  {
                    initial: "시",
                    name: "시스템",
                    event: "API 응답 지연",
                    time: "14:09",
                    status: "주의 필요",
                    intent: "warning" as const,
                  },
                ].map((row, idx) => {
                  const iconColorMap = {
                    positive: "positive.icon.base",
                    critical: "critical.icon.base",
                    warning: "warning.icon.base",
                  } as const;
                  const textColorMap = {
                    positive: "positive.text.base",
                    critical: "critical.text.base",
                    warning: "warning.text.base",
                  } as const;

                  return (
                    <tr
                      key={row.initial + idx}
                      className={css({
                        bg: idx % 2 === 1 ? "neutral.surface.high" : "neutral.surface.base",
                        _hover: { bg: "neutral.canvas.02" },
                      })}
                    >
                      {/* 사용자 */}
                      <td
                        className={css({
                          padding: "12px 20px",
                          borderBottom: "1px solid",
                          borderColor: "neutral.border.low",
                        })}
                      >
                        <div
                          className={css({
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                          })}
                        >
                          <div
                            className={css({
                              width: "30px",
                              height: "30px",
                              borderRadius: "9999px",
                              bg: "neutral.fill.base",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            })}
                          >
                            <span
                              className={css({
                                fontSize: "12px",
                                fontWeight: "600",
                                color: "inverse.text.base",
                              })}
                            >
                              {row.initial}
                            </span>
                          </div>
                          <span
                            className={css({
                              fontSize: "14px",
                              color: "neutral.text.base",
                            })}
                          >
                            {row.name}
                          </span>
                        </div>
                      </td>
                      {/* 이벤트 */}
                      <td
                        className={css({
                          padding: "12px 20px",
                          fontSize: "14px",
                          color: "neutral.text.base",
                          borderBottom: "1px solid",
                          borderColor: "neutral.border.low",
                        })}
                      >
                        {row.event}
                      </td>
                      {/* 시간 */}
                      <td
                        className={css({
                          padding: "12px 20px",
                          fontSize: "14px",
                          color: "neutral.text.low",
                          borderBottom: "1px solid",
                          borderColor: "neutral.border.low",
                        })}
                      >
                        {row.time}
                      </td>
                      {/* 상태 */}
                      <td
                        className={css({
                          padding: "12px 20px",
                          borderBottom: "1px solid",
                          borderColor: "neutral.border.low",
                        })}
                      >
                        <div
                          className={css({
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          })}
                        >
                          {row.intent === "positive" && (
                            <CheckCircle2
                              size={14}
                              className={css({ color: iconColorMap[row.intent] })}
                            />
                          )}
                          {row.intent === "critical" && (
                            <XCircle
                              size={14}
                              className={css({ color: iconColorMap[row.intent] })}
                            />
                          )}
                          {row.intent === "warning" && (
                            <AlertTriangle
                              size={14}
                              className={css({ color: iconColorMap[row.intent] })}
                            />
                          )}
                          <span
                            className={css({
                              fontSize: "13px",
                              color: textColorMap[row.intent],
                            })}
                          >
                            {row.status}
                          </span>
                        </div>
                      </td>
                      {/* 액션 */}
                      <td
                        className={css({
                          padding: "12px 20px",
                          borderBottom: "1px solid",
                          borderColor: "neutral.border.low",
                        })}
                      >
                        <button
                          className={css({
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: "32px",
                            height: "32px",
                            borderRadius: "6px",
                            border: "none",
                            bg: "neutral.surface.transparent",
                            cursor: "pointer",
                            _hover: { bg: "neutral.surface.high" },
                          })}
                        >
                          <Eye
                            size={16}
                            className={css({ color: "neutral.icon.base" })}
                          />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Notification settings toggle panel */}
          <div
            className={css({
              bg: "neutral.surface.base",
              border: "1px solid",
              borderColor: "neutral.border.base",
              borderRadius: "12px",
              padding: "20px",
            })}
          >
            <h3
              className={css({
                fontSize: "15px",
                fontWeight: "600",
                color: "neutral.text.base",
                marginBottom: "16px",
              })}
            >
              알림 수신 설정
            </h3>
            <div
              className={css({ display: "flex", flexDirection: "column", gap: "14px" })}
            >
              {/* Toggle 1: 배포 알림 — on */}
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <span
                  className={css({ fontSize: "14px", color: "neutral.text.base" })}
                >
                  배포 알림
                </span>
                <div
                  className={css({
                    width: "44px",
                    height: "24px",
                    borderRadius: "9999px",
                    bg: "primary.fill.base",
                    position: "relative",
                    cursor: "pointer",
                  })}
                >
                  <div
                    className={css({
                      position: "absolute",
                      top: "2px",
                      right: "2px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "9999px",
                      bg: "neutral.canvas.01",
                    })}
                  />
                </div>
              </div>

              {/* Toggle 2: 장애 알림 — on */}
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <span
                  className={css({ fontSize: "14px", color: "neutral.text.base" })}
                >
                  장애 알림
                </span>
                <div
                  className={css({
                    width: "44px",
                    height: "24px",
                    borderRadius: "9999px",
                    bg: "primary.fill.base",
                    position: "relative",
                    cursor: "pointer",
                  })}
                >
                  <div
                    className={css({
                      position: "absolute",
                      top: "2px",
                      right: "2px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "9999px",
                      bg: "neutral.canvas.01",
                    })}
                  />
                </div>
              </div>

              {/* Toggle 3: 보안 알림 — off */}
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                })}
              >
                <span
                  className={css({ fontSize: "14px", color: "neutral.text.base" })}
                >
                  보안 알림
                </span>
                <div
                  className={css({
                    width: "44px",
                    height: "24px",
                    borderRadius: "9999px",
                    bg: "neutral.fill.base",
                    position: "relative",
                    cursor: "pointer",
                  })}
                >
                  <div
                    className={css({
                      position: "absolute",
                      top: "2px",
                      left: "2px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "9999px",
                      bg: "neutral.canvas.01",
                    })}
                  />
                </div>
              </div>

              {/* Toggle 4: 마케팅 알림 — off + disabled */}
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  opacity: 0.38,
                })}
              >
                <span
                  className={css({ fontSize: "14px", color: "neutral.text.base" })}
                >
                  마케팅 알림
                </span>
                <div
                  className={css({
                    width: "44px",
                    height: "24px",
                    borderRadius: "9999px",
                    bg: "neutral.fill.base",
                    position: "relative",
                    cursor: "not-allowed",
                  })}
                >
                  <div
                    className={css({
                      position: "absolute",
                      top: "2px",
                      left: "2px",
                      width: "20px",
                      height: "20px",
                      borderRadius: "9999px",
                      bg: "neutral.canvas.01",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom notification cards */}
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            })}
          >
            {/* Card 1: positive */}
            <div
              className={css({
                bg: "positive.surface.base",
                border: "1px solid",
                borderColor: "positive.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                })}
              >
                <CheckCircle2
                  size={22}
                  className={css({ color: "positive.icon.base" })}
                />
                <button
                  className={css({
                    border: "none",
                    bg: "neutral.surface.transparent",
                    cursor: "pointer",
                    padding: "2px",
                    borderRadius: "4px",
                  })}
                >
                  <X size={14} className={css({ color: "positive.icon.base" })} />
                </button>
              </div>
              <div>
                <p
                  className={css({
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "positive.text.base",
                    marginBottom: "4px",
                  })}
                >
                  배포 완료
                </p>
                <p
                  className={css({ fontSize: "13px", color: "positive.text.base" })}
                >
                  v2.4.1이 성공적으로 배포되었습니다.
                </p>
              </div>
              <button
                className={css({
                  padding: "7px 14px",
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: "positive.border.high",
                  bg: "neutral.surface.transparent",
                  fontSize: "13px",
                  color: "positive.text.base",
                  cursor: "pointer",
                  fontWeight: "500",
                })}
              >
                배포 로그 보기
              </button>
            </div>

            {/* Card 2: critical */}
            <div
              className={css({
                bg: "critical.surface.base",
                border: "1px solid",
                borderColor: "critical.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                })}
              >
                <XCircle
                  size={22}
                  className={css({ color: "critical.icon.base" })}
                />
                <button
                  className={css({
                    border: "none",
                    bg: "neutral.surface.transparent",
                    cursor: "pointer",
                    padding: "2px",
                    borderRadius: "4px",
                  })}
                >
                  <X size={14} className={css({ color: "critical.icon.base" })} />
                </button>
              </div>
              <div>
                <p
                  className={css({
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "critical.text.base",
                    marginBottom: "4px",
                  })}
                >
                  연결 실패
                </p>
                <p
                  className={css({ fontSize: "13px", color: "critical.text.base" })}
                >
                  DB 연결이 실패했습니다.
                </p>
              </div>
              <div className={css({ display: "flex", gap: "8px" })}>
                <button
                  className={css({
                    flex: 1,
                    padding: "7px 14px",
                    borderRadius: "8px",
                    border: "none",
                    bg: "critical.fill.base",
                    fontSize: "13px",
                    color: "inverse.text.base",
                    cursor: "pointer",
                    fontWeight: "500",
                  })}
                >
                  즉시 확인
                </button>
                <button
                  className={css({
                    padding: "7px 14px",
                    borderRadius: "8px",
                    border: "none",
                    bg: "neutral.surface.transparent",
                    fontSize: "13px",
                    color: "critical.text.base",
                    cursor: "pointer",
                  })}
                >
                  무시
                </button>
              </div>
            </div>

            {/* Card 3: warning */}
            <div
              className={css({
                bg: "warning.surface.base",
                border: "1px solid",
                borderColor: "warning.border.base",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                })}
              >
                <AlertTriangle
                  size={22}
                  className={css({ color: "warning.icon.base" })}
                />
                <button
                  className={css({
                    border: "none",
                    bg: "neutral.surface.transparent",
                    cursor: "pointer",
                    padding: "2px",
                    borderRadius: "4px",
                  })}
                >
                  <X size={14} className={css({ color: "warning.icon.base" })} />
                </button>
              </div>
              <div>
                <p
                  className={css({
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "warning.text.base",
                    marginBottom: "4px",
                  })}
                >
                  용량 경고
                </p>
                <p
                  className={css({ fontSize: "13px", color: "warning.text.base" })}
                >
                  디스크 사용량이 85%입니다.
                </p>
              </div>
              <button
                className={css({
                  padding: "7px 14px",
                  borderRadius: "8px",
                  border: "1px solid",
                  borderColor: "warning.border.high",
                  bg: "neutral.surface.transparent",
                  fontSize: "13px",
                  color: "warning.text.base",
                  cursor: "pointer",
                  fontWeight: "500",
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
