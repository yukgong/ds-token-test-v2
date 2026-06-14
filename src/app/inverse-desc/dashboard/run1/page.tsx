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
  X,
  TrendingUp,
  AlertCircle,
  Zap,
  Clock,
  Filter,
  Download,
  Eye,
  AlertTriangle,
} from "lucide-react";
import { css } from "@ds-token-test/styled-system-intent-first-slotfirst/css";

export default function DashboardPage() {
  return (
    <div
      className={css({
        display: "flex",
        height: "100vh",
        overflow: "hidden",
        bg: "canvas.neutral.01",
      })}
    >
      {/* Sidebar */}
      <aside
        className={`dark ${css({
          width: "240px",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          bg: "canvas.neutral.01",
          borderRight: "1px solid",
          borderColor: "border.neutral.low",
        })}`}
      >
        {/* Logo */}
        <div
          className={css({
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "20px 16px",
          })}
        >
          <LayoutDashboard
            size={24}
            className={css({ color: "icon.primary.base" })}
          />
          <span
            className={css({
              fontSize: "18px",
              fontWeight: "700",
              color: "text.neutral.base",
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav className={css({ flex: 1, padding: "8px 8px" })}>
          {/* Active: Dashboard */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "8px",
              cursor: "pointer",
              bg: "overlay.lighten.hover",
            })}
          >
            <LayoutDashboard
              size={18}
              className={css({ color: "icon.neutral.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                fontWeight: "600",
                color: "text.neutral.base",
              })}
            >
              대시보드
            </span>
          </div>

          {/* Users */}
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
            <Users
              size={18}
              className={css({ color: "icon.neutral.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "text.neutral.base",
              })}
            >
              사용자 관리
            </span>
          </div>

          {/* Payment */}
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
            <CreditCard
              size={18}
              className={css({ color: "icon.neutral.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "text.neutral.base",
              })}
            >
              결제 내역
            </span>
          </div>

          {/* Notifications */}
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
            <Bell
              size={18}
              className={css({ color: "icon.neutral.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "text.neutral.base",
              })}
            >
              알림 설정
            </span>
          </div>

          {/* System Log — disabled */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 12px",
              borderRadius: "8px",
              cursor: "not-allowed",
              opacity: 0.38,
            })}
          >
            <ScrollText
              size={18}
              className={css({ color: "icon.neutral.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "text.neutral.base",
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
            borderColor: "border.neutral.low",
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
              className={css({ color: "icon.critical.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "text.critical.base",
              })}
            >
              로그아웃
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={css({
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          bg: "canvas.neutral.01",
        })}
      >
        {/* Header Bar */}
        <header
          className={css({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
            height: "56px",
            bg: "canvas.neutral.02",
            borderBottom: "1px solid",
            borderColor: "border.neutral.base",
            flexShrink: 0,
          })}
        >
          {/* Breadcrumb */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "14px",
            })}
          >
            <span
              className={css({
                color: "text.neutral.base",
                cursor: "pointer",
                _hover: { color: "text.primary.base" },
              })}
            >
              홈
            </span>
            <span
              className={css({
                color: "text.neutral.base",
                opacity: 0.38,
              })}
            >
              /
            </span>
            <span
              className={css({
                color: "text.neutral.base",
                cursor: "pointer",
                _hover: { color: "text.primary.base" },
              })}
            >
              모니터링
            </span>
            <span
              className={css({
                color: "text.neutral.base",
                opacity: 0.38,
              })}
            >
              /
            </span>
            <span
              className={css({
                color: "text.neutral.base",
                fontWeight: "600",
              })}
            >
              대시보드
            </span>
          </div>

          {/* Right Actions */}
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
                  bg: "surface.neutral.transparent",
                  border: "none",
                  cursor: "pointer",
                  _hover: { bg: "surface.neutral.high" },
                })}
              >
                <Search
                  size={18}
                  className={css({ color: "icon.neutral.base" })}
                />
              </button>
              <div
                className={`dark ${css({
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bg: "fill.neutral.high",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                })}`}
              >
                <span
                  className={css({
                    fontSize: "12px",
                    color: "text.neutral.base",
                  })}
                >
                  검색
                </span>
              </div>
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
                  bg: "surface.neutral.transparent",
                  border: "none",
                  cursor: "pointer",
                  _hover: { bg: "surface.neutral.high" },
                })}
              >
                <Bell
                  size={18}
                  className={css({ color: "icon.neutral.base" })}
                />
                <span
                  className={css({
                    position: "absolute",
                    top: "4px",
                    right: "4px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "9999px",
                    bg: "fill.critical.base",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "10px",
                    fontWeight: "700",
                    color: "inverse.text.base",
                  })}
                >
                  3
                </span>
              </button>
              <div
                className={`dark ${css({
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bg: "fill.neutral.high",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                })}`}
              >
                <span
                  className={css({
                    fontSize: "12px",
                    color: "text.neutral.base",
                  })}
                >
                  알림
                </span>
              </div>
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
                  bg: "surface.neutral.transparent",
                  border: "none",
                  cursor: "pointer",
                  _hover: { bg: "surface.neutral.high" },
                })}
              >
                <Settings
                  size={18}
                  className={css({ color: "icon.neutral.base" })}
                />
              </button>
              <div
                className={`dark ${css({
                  position: "absolute",
                  top: "calc(100% + 6px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  bg: "fill.neutral.high",
                  borderRadius: "6px",
                  padding: "4px 8px",
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                })}`}
              >
                <span
                  className={css({
                    fontSize: "12px",
                    color: "text.neutral.base",
                  })}
                >
                  설정
                </span>
              </div>
            </div>

            {/* Vertical divider */}
            <div
              className={css({
                width: "1px",
                height: "24px",
                bg: "border.neutral.base",
              })}
            />

            {/* New Deploy button */}
            <button
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 16px",
                borderRadius: "8px",
                bg: "fill.primary.base",
                border: "none",
                cursor: "pointer",
                _hover: { bg: "surface.primary.high" },
              })}
            >
              <Plus
                size={16}
                className={css({ color: "inverse.icon.base" })}
              />
              <span
                className={css({
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "inverse.text.base",
                })}
              >
                새 배포
              </span>
            </button>

            {/* Profile Avatar */}
            <div
              className={css({
                width: "36px",
                height: "36px",
                borderRadius: "9999px",
                bg: "surface.primary.base",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              })}
            >
              <span
                className={css({
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "text.primary.base",
                })}
              >
                K
              </span>
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div
          className={css({
            flex: 1,
            overflow: "auto",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          })}
        >
          {/* Toast Notifications */}
          <div
            className={css({
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              alignSelf: "flex-end",
              width: "400px",
            })}
          >
            {/* Toast 1: Success */}
            <div
              className={css({
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                padding: "12px 16px",
                borderRadius: "10px",
                bg: "surface.positive.base",
                border: "1px solid",
                borderColor: "border.positive.base",
              })}
            >
              <CheckCircle2
                size={18}
                className={css({ color: "icon.positive.base", flexShrink: 0 })}
              />
              <span
                className={css({
                  flex: 1,
                  fontSize: "14px",
                  color: "text.positive.base",
                })}
              >
                배포 v2.4.1이 완료되었습니다.
              </span>
              <button
                className={css({
                  bg: "surface.neutral.transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                })}
              >
                <X
                  size={16}
                  className={css({ color: "icon.positive.base" })}
                />
              </button>
            </div>

            {/* Toast 2: Critical */}
            <div
              className={css({
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                padding: "12px 16px",
                borderRadius: "10px",
                bg: "surface.critical.base",
                border: "1px solid",
                borderColor: "border.critical.base",
              })}
            >
              <XCircle
                size={18}
                className={css({ color: "icon.critical.base", flexShrink: 0 })}
              />
              <span
                className={css({
                  flex: 1,
                  fontSize: "14px",
                  color: "text.critical.base",
                })}
              >
                DB 연결이 끊어졌습니다. 즉시 확인하세요.
              </span>
              <button
                className={css({
                  bg: "surface.neutral.transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                })}
              >
                <X
                  size={16}
                  className={css({ color: "icon.critical.base" })}
                />
              </button>
            </div>

            {/* Toast 3: Info */}
            <div
              className={css({
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                padding: "12px 16px",
                borderRadius: "10px",
                bg: "surface.info.base",
                border: "1px solid",
                borderColor: "border.info.base",
              })}
            >
              <Info
                size={18}
                className={css({ color: "icon.info.base", flexShrink: 0 })}
              />
              <span
                className={css({
                  flex: 1,
                  fontSize: "14px",
                  color: "text.info.base",
                })}
              >
                시스템 점검이 2025-06-10 02:00에 예정되어 있습니다.
              </span>
              <button
                className={css({
                  bg: "surface.neutral.transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                })}
              >
                <X
                  size={16}
                  className={css({ color: "icon.info.base" })}
                />
              </button>
            </div>
          </div>

          {/* Stats Cards 2x2 */}
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            })}
          >
            {/* Card 1: Total Users - Positive */}
            <div
              className={css({
                bg: "canvas.neutral.02",
                border: "1px solid",
                borderColor: "border.neutral.base",
                borderRadius: "12px",
                padding: "20px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.low",
                  })}
                >
                  총 사용자
                </span>
                <TrendingUp
                  size={20}
                  className={css({ color: "icon.positive.base" })}
                />
              </div>
              <div
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "text.neutral.base",
                  marginBottom: "8px",
                })}
              >
                12,847
              </div>
              <span
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  bg: "surface.positive.base",
                  border: "1px solid",
                  borderColor: "border.positive.base",
                  fontSize: "12px",
                  color: "text.positive.base",
                })}
              >
                +12%
              </span>
            </div>

            {/* Card 2: Payment Failures - Critical */}
            <div
              className={css({
                bg: "canvas.neutral.02",
                border: "1px solid",
                borderColor: "border.neutral.base",
                borderRadius: "12px",
                padding: "20px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.low",
                  })}
                >
                  결제 실패
                </span>
                <AlertCircle
                  size={20}
                  className={css({ color: "icon.critical.base" })}
                />
              </div>
              <div
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "text.neutral.base",
                  marginBottom: "8px",
                })}
              >
                24건
              </div>
              <span
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  bg: "surface.critical.base",
                  border: "1px solid",
                  borderColor: "border.critical.base",
                  fontSize: "12px",
                  color: "text.critical.base",
                })}
              >
                +3건
              </span>
            </div>

            {/* Card 3: Avg Response - Positive */}
            <div
              className={css({
                bg: "canvas.neutral.02",
                border: "1px solid",
                borderColor: "border.neutral.base",
                borderRadius: "12px",
                padding: "20px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.low",
                  })}
                >
                  평균 응답시간
                </span>
                <Zap
                  size={20}
                  className={css({ color: "icon.positive.base" })}
                />
              </div>
              <div
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "text.neutral.base",
                  marginBottom: "8px",
                })}
              >
                142ms
              </div>
              <span
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  bg: "surface.positive.base",
                  border: "1px solid",
                  borderColor: "border.positive.base",
                  fontSize: "12px",
                  color: "text.positive.base",
                })}
              >
                -8%
              </span>
            </div>

            {/* Card 4: Unprocessed Complaints - Warning */}
            <div
              className={css({
                bg: "canvas.neutral.02",
                border: "1px solid",
                borderColor: "border.neutral.base",
                borderRadius: "12px",
                padding: "20px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "12px",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.low",
                  })}
                >
                  미처리 민원
                </span>
                <Clock
                  size={20}
                  className={css({ color: "icon.warning.base" })}
                />
              </div>
              <div
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "text.neutral.base",
                  marginBottom: "8px",
                })}
              >
                7건
              </div>
              <span
                className={css({
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  bg: "surface.warning.base",
                  border: "1px solid",
                  borderColor: "border.warning.base",
                  fontSize: "12px",
                  color: "text.warning.base",
                })}
              >
                +2건
              </span>
            </div>
          </div>

          {/* System Resources */}
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            })}
          >
            {/* CPU */}
            <div
              className={css({
                bg: "canvas.neutral.02",
                border: "1px solid",
                borderColor: "border.neutral.base",
                borderRadius: "12px",
                padding: "20px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.low",
                  })}
                >
                  CPU 사용량
                </span>
                <span
                  className={css({
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "text.neutral.base",
                  })}
                >
                  42%
                </span>
              </div>
              <div
                className={css({
                  height: "8px",
                  borderRadius: "9999px",
                  bg: "fill.neutral.base",
                  overflow: "hidden",
                  marginBottom: "8px",
                })}
              >
                <div
                  className={css({
                    height: "100%",
                    width: "42%",
                    borderRadius: "9999px",
                    bg: "fill.positive.base",
                  })}
                />
              </div>
              <span
                className={css({
                  fontSize: "12px",
                  color: "text.positive.base",
                })}
              >
                여유로운 상태
              </span>
            </div>

            {/* Memory */}
            <div
              className={css({
                bg: "canvas.neutral.02",
                border: "1px solid",
                borderColor: "border.neutral.base",
                borderRadius: "12px",
                padding: "20px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.low",
                  })}
                >
                  메모리 사용량
                </span>
                <span
                  className={css({
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "text.neutral.base",
                  })}
                >
                  78%
                </span>
              </div>
              <div
                className={css({
                  height: "8px",
                  borderRadius: "9999px",
                  bg: "fill.neutral.base",
                  overflow: "hidden",
                  marginBottom: "8px",
                })}
              >
                <div
                  className={css({
                    height: "100%",
                    width: "78%",
                    borderRadius: "9999px",
                    bg: "fill.warning.base",
                  })}
                />
              </div>
              <span
                className={css({
                  fontSize: "12px",
                  color: "text.warning.base",
                })}
              >
                주의 필요
              </span>
            </div>

            {/* Disk */}
            <div
              className={css({
                bg: "canvas.neutral.02",
                border: "1px solid",
                borderColor: "border.neutral.base",
                borderRadius: "12px",
                padding: "20px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "8px",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.low",
                  })}
                >
                  디스크 사용량
                </span>
                <span
                  className={css({
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "text.neutral.base",
                  })}
                >
                  91%
                </span>
              </div>
              <div
                className={css({
                  height: "8px",
                  borderRadius: "9999px",
                  bg: "fill.neutral.base",
                  overflow: "hidden",
                  marginBottom: "8px",
                })}
              >
                <div
                  className={css({
                    height: "100%",
                    width: "91%",
                    borderRadius: "9999px",
                    bg: "fill.critical.base",
                  })}
                />
              </div>
              <span
                className={css({
                  fontSize: "12px",
                  color: "text.critical.base",
                })}
              >
                심각한 문제
              </span>
            </div>
          </div>

          {/* Events Table */}
          <div
            className={css({
              bg: "canvas.neutral.02",
              border: "1px solid",
              borderColor: "border.neutral.base",
              borderRadius: "12px",
              overflow: "hidden",
            })}
          >
            {/* Table Header */}
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "16px 20px",
                borderBottom: "1px solid",
                borderColor: "border.neutral.low",
              })}
            >
              {/* Tabs */}
              <div
                className={css({
                  display: "flex",
                  gap: "0",
                })}
              >
                {/* Active Tab */}
                <button
                  className={css({
                    padding: "8px 16px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "text.neutral.base",
                    bg: "surface.neutral.transparent",
                    border: "none",
                    borderBottom: "2px solid",
                    borderColor: "border.primary.highest",
                    cursor: "pointer",
                  })}
                >
                  전체 이벤트
                </button>
                {/* Inactive Tab */}
                <button
                  className={css({
                    padding: "8px 16px",
                    fontSize: "14px",
                    color: "text.neutral.base",
                    bg: "surface.neutral.transparent",
                    border: "none",
                    borderBottom: "2px solid transparent",
                    cursor: "pointer",
                    opacity: 0.38,
                    _hover: { opacity: 1, color: "text.neutral.base" },
                  })}
                >
                  미처리
                </button>
                <button
                  className={css({
                    padding: "8px 16px",
                    fontSize: "14px",
                    color: "text.neutral.base",
                    bg: "surface.neutral.transparent",
                    border: "none",
                    borderBottom: "2px solid transparent",
                    cursor: "pointer",
                    opacity: 0.38,
                    _hover: { opacity: 1, color: "text.neutral.base" },
                  })}
                >
                  처리완료
                </button>
              </div>

              {/* Buttons */}
              <div
                className={css({
                  display: "flex",
                  gap: "8px",
                })}
              >
                <button
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    bg: "surface.neutral.transparent",
                    border: "1px solid",
                    borderColor: "border.neutral.base",
                    cursor: "pointer",
                    fontSize: "14px",
                    color: "text.neutral.base",
                    _hover: { bg: "surface.neutral.high" },
                  })}
                >
                  <Filter
                    size={16}
                    className={css({ color: "icon.neutral.base" })}
                  />
                  필터
                </button>
                <button
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "7px 14px",
                    borderRadius: "8px",
                    bg: "surface.neutral.transparent",
                    border: "1px solid",
                    borderColor: "border.neutral.base",
                    cursor: "not-allowed",
                    fontSize: "14px",
                    color: "text.neutral.base",
                    opacity: 0.38,
                  })}
                >
                  <Download
                    size={16}
                    className={css({ color: "icon.neutral.base" })}
                  />
                  CSV 내보내기
                </button>
              </div>
            </div>

            {/* Tag Filter Bar + Search */}
            <div
              className={css({
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 20px",
                borderBottom: "1px solid",
                borderColor: "border.neutral.low",
                gap: "12px",
              })}
            >
              <div
                className={css({
                  display: "flex",
                  gap: "8px",
                })}
              >
                {/* Selected tag */}
                <span
                  className={css({
                    padding: "4px 12px",
                    borderRadius: "9999px",
                    bg: "fill.primary.base",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "inverse.text.base",
                    cursor: "pointer",
                  })}
                >
                  전체
                </span>
                {["로그인", "결제", "보안", "시스템"].map((tag) => (
                  <span
                    key={tag}
                    className={css({
                      padding: "4px 12px",
                      borderRadius: "9999px",
                      bg: "surface.neutral.base",
                      border: "1px solid",
                      borderColor: "border.neutral.base",
                      fontSize: "13px",
                      color: "text.neutral.base",
                      cursor: "pointer",
                      _hover: { bg: "surface.neutral.high" },
                    })}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Search inputs */}
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                })}
              >
                {/* Normal search */}
                <input
                  type="text"
                  placeholder="이벤트 검색..."
                  className={css({
                    padding: "7px 12px",
                    borderRadius: "8px",
                    bg: "surface.neutral.base",
                    border: "1px solid",
                    borderColor: "border.neutral.base",
                    fontSize: "14px",
                    color: "text.neutral.base",
                    outline: "none",
                    _placeholder: { color: "text.neutral.lowest", opacity: 0.38 },
                    _focus: {
                      borderColor: "focus.border",
                      boxShadow: "0 0 0 2px token(colors.focus.border)",
                    },
                  })}
                />
                {/* Error state input */}
                <div>
                  <input
                    type="text"
                    defaultValue="2025/99/99"
                    className={css({
                      padding: "7px 12px",
                      borderRadius: "8px",
                      bg: "surface.critical.base",
                      border: "1px solid",
                      borderColor: "border.critical.base",
                      fontSize: "14px",
                      color: "text.neutral.base",
                      outline: "none",
                    })}
                  />
                  <p
                    className={css({
                      marginTop: "4px",
                      fontSize: "12px",
                      color: "text.critical.base",
                    })}
                  >
                    잘못된 날짜 형식입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Table */}
            <table className={css({ width: "100%", borderCollapse: "collapse" })}>
              <thead>
                <tr
                  className={css({
                    bg: "canvas.neutral.03",
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
                        color: "text.neutral.low",
                        borderBottom: "1px solid",
                        borderColor: "border.neutral.low",
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
                    event: "로그인 성공",
                    time: "14:32",
                    status: "정상 처리됨",
                    statusIntent: "positive" as const,
                  },
                  {
                    initial: "김",
                    event: "결제 실패",
                    time: "14:28",
                    status: "문제 발생",
                    statusIntent: "critical" as const,
                  },
                  {
                    initial: "이",
                    event: "비밀번호 5회 오류",
                    time: "14:21",
                    status: "주의 필요",
                    statusIntent: "warning" as const,
                  },
                  {
                    initial: "박",
                    event: "회원가입",
                    time: "14:15",
                    status: "정상 처리됨",
                    statusIntent: "positive" as const,
                  },
                  {
                    initial: "시",
                    event: "API 응답 지연",
                    time: "14:09",
                    status: "주의 필요",
                    statusIntent: "warning" as const,
                  },
                ].map((row, idx) => (
                  <tr
                    key={idx}
                    className={css({
                      bg: idx % 2 === 1 ? "canvas.neutral.03" : "canvas.neutral.02",
                      _hover: { bg: "surface.neutral.high" },
                    })}
                  >
                    {/* User */}
                    <td
                      className={css({
                        padding: "12px 20px",
                        borderBottom: "1px solid",
                        borderColor: "border.neutral.low",
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
                            width: "32px",
                            height: "32px",
                            borderRadius: "9999px",
                            bg: "surface.neutral.base",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          })}
                        >
                          <span
                            className={css({
                              fontSize: "13px",
                              fontWeight: "600",
                              color: "text.neutral.base",
                            })}
                          >
                            {row.initial}
                          </span>
                        </div>
                        <span
                          className={css({
                            fontSize: "14px",
                            color: "text.neutral.base",
                          })}
                        >
                          {row.initial}씨
                        </span>
                      </div>
                    </td>

                    {/* Event */}
                    <td
                      className={css({
                        padding: "12px 20px",
                        fontSize: "14px",
                        color: "text.neutral.base",
                        borderBottom: "1px solid",
                        borderColor: "border.neutral.low",
                      })}
                    >
                      {row.event}
                    </td>

                    {/* Time */}
                    <td
                      className={css({
                        padding: "12px 20px",
                        fontSize: "14px",
                        color: "text.neutral.low",
                        borderBottom: "1px solid",
                        borderColor: "border.neutral.low",
                      })}
                    >
                      {row.time}
                    </td>

                    {/* Status */}
                    <td
                      className={css({
                        padding: "12px 20px",
                        borderBottom: "1px solid",
                        borderColor: "border.neutral.low",
                      })}
                    >
                      <div
                        className={css({
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        })}
                      >
                        {row.statusIntent === "positive" && (
                          <CheckCircle2
                            size={16}
                            className={css({ color: "icon.positive.base" })}
                          />
                        )}
                        {row.statusIntent === "critical" && (
                          <XCircle
                            size={16}
                            className={css({ color: "icon.critical.base" })}
                          />
                        )}
                        {row.statusIntent === "warning" && (
                          <AlertCircle
                            size={16}
                            className={css({ color: "icon.warning.base" })}
                          />
                        )}
                        <span
                          className={css({
                            fontSize: "14px",
                            color:
                              row.statusIntent === "positive"
                                ? "text.positive.base"
                                : row.statusIntent === "critical"
                                ? "text.critical.base"
                                : "text.warning.base",
                          })}
                        >
                          {row.status}
                        </span>
                      </div>
                    </td>

                    {/* Action */}
                    <td
                      className={css({
                        padding: "12px 20px",
                        borderBottom: "1px solid",
                        borderColor: "border.neutral.low",
                      })}
                    >
                      <button
                        className={css({
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          bg: "surface.neutral.transparent",
                          border: "none",
                          cursor: "pointer",
                          _hover: { bg: "surface.neutral.high" },
                        })}
                      >
                        <Eye
                          size={16}
                          className={css({ color: "icon.neutral.base" })}
                        />
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
              bg: "canvas.neutral.02",
              border: "1px solid",
              borderColor: "border.neutral.base",
              borderRadius: "12px",
              padding: "20px",
            })}
          >
            <h3
              className={css({
                fontSize: "16px",
                fontWeight: "600",
                color: "text.neutral.base",
                marginBottom: "16px",
              })}
            >
              알림 수신 설정
            </h3>
            <div
              className={css({
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              })}
            >
              {/* Toggle 1: Deploy - ON */}
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.base",
                  })}
                >
                  배포 알림
                </span>
                <div
                  className={css({
                    position: "relative",
                    width: "44px",
                    height: "24px",
                    borderRadius: "9999px",
                    bg: "fill.primary.base",
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
                      bg: "canvas.neutral.02",
                    })}
                  />
                </div>
              </div>

              {/* Toggle 2: Incident - ON */}
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.base",
                  })}
                >
                  장애 알림
                </span>
                <div
                  className={css({
                    position: "relative",
                    width: "44px",
                    height: "24px",
                    borderRadius: "9999px",
                    bg: "fill.primary.base",
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
                      bg: "canvas.neutral.02",
                    })}
                  />
                </div>
              </div>

              {/* Toggle 3: Security - OFF */}
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.base",
                  })}
                >
                  보안 알림
                </span>
                <div
                  className={css({
                    position: "relative",
                    width: "44px",
                    height: "24px",
                    borderRadius: "9999px",
                    bg: "fill.neutral.base",
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
                      bg: "canvas.neutral.02",
                    })}
                  />
                </div>
              </div>

              {/* Toggle 4: Marketing - OFF + disabled */}
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  opacity: 0.38,
                })}
              >
                <span
                  className={css({
                    fontSize: "14px",
                    color: "text.neutral.base",
                  })}
                >
                  마케팅 알림
                </span>
                <div
                  className={css({
                    position: "relative",
                    width: "44px",
                    height: "24px",
                    borderRadius: "9999px",
                    bg: "fill.neutral.base",
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
                      bg: "canvas.neutral.02",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Alert Cards */}
          <div
            className={css({
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            })}
          >
            {/* Card 1: Success */}
            <div
              className={css({
                bg: "surface.positive.base",
                border: "1px solid",
                borderColor: "border.positive.base",
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
                  size={24}
                  className={css({ color: "icon.positive.base" })}
                />
                <button
                  className={css({
                    bg: "surface.neutral.transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                  })}
                >
                  <X
                    size={16}
                    className={css({ color: "icon.positive.base" })}
                  />
                </button>
              </div>
              <div>
                <h4
                  className={css({
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "text.positive.base",
                    marginBottom: "4px",
                  })}
                >
                  배포 완료
                </h4>
                <p
                  className={css({
                    fontSize: "13px",
                    color: "text.positive.base",
                  })}
                >
                  v2.4.1이 성공적으로 배포되었습니다.
                </p>
              </div>
              <button
                className={css({
                  padding: "7px 14px",
                  borderRadius: "8px",
                  bg: "surface.neutral.transparent",
                  border: "1px solid",
                  borderColor: "border.positive.highest",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "text.positive.base",
                  _hover: { bg: "surface.positive.high" },
                })}
              >
                배포 로그 보기
              </button>
            </div>

            {/* Card 2: Critical */}
            <div
              className={css({
                bg: "surface.critical.base",
                border: "1px solid",
                borderColor: "border.critical.base",
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
                  size={24}
                  className={css({ color: "icon.critical.base" })}
                />
                <button
                  className={css({
                    bg: "surface.neutral.transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                  })}
                >
                  <X
                    size={16}
                    className={css({ color: "icon.critical.base" })}
                  />
                </button>
              </div>
              <div>
                <h4
                  className={css({
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "text.critical.base",
                    marginBottom: "4px",
                  })}
                >
                  연결 실패
                </h4>
                <p
                  className={css({
                    fontSize: "13px",
                    color: "text.critical.base",
                  })}
                >
                  DB 연결이 실패했습니다.
                </p>
              </div>
              <div
                className={css({
                  display: "flex",
                  gap: "8px",
                })}
              >
                <button
                  className={css({
                    flex: 1,
                    padding: "7px 14px",
                    borderRadius: "8px",
                    bg: "fill.critical.base",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "inverse.text.base",
                    _hover: { bg: "surface.critical.high" },
                  })}
                >
                  즉시 확인
                </button>
                <button
                  className={css({
                    padding: "7px 14px",
                    borderRadius: "8px",
                    bg: "surface.neutral.transparent",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "13px",
                    color: "text.critical.base",
                    _hover: { bg: "surface.critical.high" },
                  })}
                >
                  무시
                </button>
              </div>
            </div>

            {/* Card 3: Warning */}
            <div
              className={css({
                bg: "surface.warning.base",
                border: "1px solid",
                borderColor: "border.warning.base",
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
                  size={24}
                  className={css({ color: "icon.warning.base" })}
                />
                <button
                  className={css({
                    bg: "surface.neutral.transparent",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                  })}
                >
                  <X
                    size={16}
                    className={css({ color: "icon.warning.base" })}
                  />
                </button>
              </div>
              <div>
                <h4
                  className={css({
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "text.warning.base",
                    marginBottom: "4px",
                  })}
                >
                  용량 경고
                </h4>
                <p
                  className={css({
                    fontSize: "13px",
                    color: "text.warning.base",
                  })}
                >
                  디스크 사용량이 85%입니다.
                </p>
              </div>
              <button
                className={css({
                  padding: "7px 14px",
                  borderRadius: "8px",
                  bg: "surface.neutral.transparent",
                  border: "1px solid",
                  borderColor: "border.warning.highest",
                  cursor: "pointer",
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "text.warning.base",
                  _hover: { bg: "surface.warning.high" },
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
