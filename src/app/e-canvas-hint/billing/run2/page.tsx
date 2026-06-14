import {
  LayoutDashboard,
  CreditCard,
  Users,
  Settings,
  LogOut,
  Check,
  X,
  AlertTriangle,
  AlertCircle,
  Download,
  FileText,
  TrendingUp,
  Calendar,
} from "lucide-react";
import { css } from "@ds-token-test/styled-system-intent-first/css";

export default function BillingPage() {
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
          bg: "neutral.canvas.01",
          borderRight: "1px solid",
          borderColor: "neutral.border.low",
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
            className={css({ color: "primary.icon.base" })}
          />
          <span
            className={css({
              fontSize: "18px",
              fontWeight: "700",
              color: "neutral.text.base",
            })}
          >
            Mildang
          </span>
        </div>

        {/* Nav */}
        <nav className={css({ flex: 1, padding: "8px" })}>
          {/* Active: 결제 내역 */}
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
            <CreditCard
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
              결제 내역
            </span>
          </div>

          {/* 대시보드 */}
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
            <LayoutDashboard
              size={18}
              className={css({ color: "neutral.icon.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
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

          {/* 설정 — disabled */}
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
            <Settings
              size={18}
              className={css({ color: "neutral.icon.base" })}
            />
            <span
              className={css({
                fontSize: "14px",
                color: "neutral.text.base",
              })}
            >
              설정
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

      {/* Main Content */}
      <main
        className={css({
          flex: 1,
          overflow: "auto",
          bg: "neutral.canvas.01",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        })}
      >
        {/* ── 섹션 1: 플랜 선택 ── */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          })}
        >
          {/* Free 카드 */}
          <div
            className={css({
              bg: "neutral.canvas.02",
              border: "1px solid",
              borderColor: "neutral.border.base",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            })}
          >
            <div className={css({ padding: "24px", flex: 1 })}>
              <div
                className={css({
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "neutral.text.base",
                  marginBottom: "8px",
                })}
              >
                Free
              </div>
              <div
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "neutral.text.base",
                  marginBottom: "20px",
                })}
              >
                ₩0/월
              </div>

              {/* Features */}
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                })}
              >
                {/* Included x3 */}
                {["사용자 1명", "프로젝트 3개", "기본 지원"].map((feat) => (
                  <div
                    key={feat}
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    })}
                  >
                    <Check
                      size={16}
                      className={css({ color: "positive.icon.base", flexShrink: 0 })}
                    />
                    <span
                      className={css({
                        fontSize: "14px",
                        color: "neutral.text.base",
                      })}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
                {/* Excluded x2 */}
                {["고급 분석", "우선 지원"].map((feat) => (
                  <div
                    key={feat}
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      opacity: 0.38,
                    })}
                  >
                    <X
                      size={16}
                      className={css({ color: "neutral.icon.base", flexShrink: 0 })}
                    />
                    <span
                      className={css({
                        fontSize: "14px",
                        color: "neutral.text.base",
                      })}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className={css({ padding: "0 24px 24px" })}>
              <button
                className={css({
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  bg: "neutral.surface.base",
                  border: "1px solid",
                  borderColor: "neutral.border.base",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "neutral.text.base",
                  cursor: "not-allowed",
                  opacity: 0.38,
                })}
              >
                현재 플랜
              </button>
            </div>
          </div>

          {/* Pro 카드 (추천/현재) */}
          <div
            className={css({
              bg: "primary.surface.base",
              border: "1px solid",
              borderColor: "primary.border.high",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            })}
          >
            {/* 상단 배너 */}
            <div
              className={css({
                bg: "primary.fill.base",
                padding: "8px 24px",
                textAlign: "center",
              })}
            >
              <span
                className={css({
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "inverse.text.base",
                })}
              >
                추천
              </span>
            </div>

            <div className={css({ padding: "24px", flex: 1 })}>
              {/* Plan name + badge */}
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "8px",
                })}
              >
                <div
                  className={css({
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "primary.text.base",
                  })}
                >
                  Pro
                </div>
                <span
                  className={css({
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    bg: "primary.fill.base",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "inverse.text.base",
                  })}
                >
                  현재 플랜
                </span>
              </div>

              <div
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "primary.text.base",
                  marginBottom: "20px",
                })}
              >
                ₩49,000/월
              </div>

              {/* Features */}
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                })}
              >
                {/* Included x5 */}
                {["사용자 10명", "프로젝트 무제한", "고급 분석", "우선 지원", "API 접근"].map((feat) => (
                  <div
                    key={feat}
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    })}
                  >
                    <Check
                      size={16}
                      className={css({ color: "primary.icon.base", flexShrink: 0 })}
                    />
                    <span
                      className={css({
                        fontSize: "14px",
                        color: "neutral.text.base",
                      })}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
                {/* Excluded x1 */}
                <div
                  className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    opacity: 0.38,
                  })}
                >
                  <X
                    size={16}
                    className={css({ color: "neutral.icon.base", flexShrink: 0 })}
                  />
                  <span
                    className={css({
                      fontSize: "14px",
                      color: "neutral.text.base",
                    })}
                  >
                    전담 매니저
                  </span>
                </div>
              </div>
            </div>

            <div className={css({ padding: "0 24px 16px" })}>
              <button
                className={css({
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  bg: "primary.fill.base",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "inverse.text.base",
                  cursor: "not-allowed",
                  opacity: 0.38,
                })}
              >
                현재 사용 중
              </button>
            </div>

            <div
              className={css({
                padding: "0 24px 24px",
                textAlign: "center",
                opacity: 0.38,
              })}
            >
              <span
                className={css({
                  fontSize: "13px",
                  color: "neutral.text.base",
                })}
              >
                다음 결제일: 2025년 9월 1일
              </span>
            </div>
          </div>

          {/* Enterprise 카드 */}
          <div
            className={css({
              bg: "neutral.canvas.02",
              border: "1px solid",
              borderColor: "neutral.border.base",
              borderRadius: "12px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            })}
          >
            <div className={css({ padding: "24px", flex: 1 })}>
              <div
                className={css({
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "neutral.text.base",
                  marginBottom: "8px",
                })}
              >
                Enterprise
              </div>
              <div
                className={css({
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "neutral.text.base",
                  marginBottom: "20px",
                })}
              >
                맞춤 견적
              </div>

              {/* Features */}
              <div
                className={css({
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginBottom: "24px",
                })}
              >
                {["사용자 무제한", "프로젝트 무제한", "고급 분석", "전담 매니저", "SLA 보장", "온프레미스 옵션"].map((feat) => (
                  <div
                    key={feat}
                    className={css({
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    })}
                  >
                    <Check
                      size={16}
                      className={css({ color: "positive.icon.base", flexShrink: 0 })}
                    />
                    <span
                      className={css({
                        fontSize: "14px",
                        color: "neutral.text.base",
                      })}
                    >
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className={css({ padding: "0 24px 24px" })}>
              <button
                className={css({
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  bg: "primary.fill.base",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "inverse.text.base",
                  cursor: "pointer",
                })}
              >
                영업팀 문의
              </button>
            </div>
          </div>
        </div>

        {/* ── 섹션 2: 결제 수단 ── */}
        <div
          className={css({
            bg: "neutral.canvas.02",
            border: "1px solid",
            borderColor: "neutral.border.base",
            borderRadius: "12px",
            padding: "24px",
          })}
        >
          <h2
            className={css({
              fontSize: "16px",
              fontWeight: "700",
              color: "neutral.text.base",
              marginBottom: "16px",
            })}
          >
            등록된 결제 수단
          </h2>

          {/* Card display */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "16px",
            })}
          >
            {/* Card art */}
            <div
              className={css({
                width: "160px",
                height: "96px",
                borderRadius: "8px",
                bg: "neutral.canvas.03",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "12px",
                flexShrink: 0,
              })}
            >
              <CreditCard
                size={20}
                className={css({ color: "neutral.icon.base", opacity: 0.38 })}
              />
              <span
                className={css({
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "neutral.text.base",
                })}
              >
                •••• •••• •••• 4242
              </span>
            </div>

            {/* Card info */}
            <div className={css({ flex: 1 })}>
              <div
                className={css({
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "6px",
                })}
              >
                <span
                  className={css({
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "neutral.text.base",
                  })}
                >
                  Visa
                </span>
                <span
                  className={css({
                    padding: "2px 8px",
                    borderRadius: "9999px",
                    bg: "positive.surface.base",
                    border: "1px solid",
                    borderColor: "positive.border.base",
                    fontSize: "12px",
                    color: "positive.text.base",
                  })}
                >
                  유효
                </span>
              </div>
              <span
                className={css({
                  fontSize: "14px",
                  color: "neutral.text.low",
                })}
              >
                만료일 12/26
              </span>
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
                  padding: "7px 14px",
                  borderRadius: "8px",
                  bg: "neutral.surface.transparent",
                  border: "1px solid",
                  borderColor: "neutral.border.base",
                  fontSize: "14px",
                  color: "neutral.text.base",
                  cursor: "pointer",
                })}
              >
                변경
              </button>
              <button
                className={css({
                  padding: "7px 14px",
                  borderRadius: "8px",
                  bg: "neutral.surface.transparent",
                  border: "none",
                  fontSize: "14px",
                  color: "critical.text.base",
                  cursor: "pointer",
                })}
              >
                삭제
              </button>
            </div>
          </div>

          {/* Warning banner */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "12px 16px",
              borderRadius: "8px",
              bg: "warning.surface.base",
              border: "1px solid",
              borderColor: "warning.border.base",
            })}
          >
            <AlertTriangle
              size={18}
              className={css({ color: "warning.icon.base", flexShrink: 0 })}
            />
            <span
              className={css({
                flex: 1,
                fontSize: "14px",
                color: "warning.text.base",
              })}
            >
              결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
            </span>
            <span
              className={css({
                fontSize: "14px",
                fontWeight: "600",
                color: "warning.text.base",
                cursor: "pointer",
                textDecoration: "underline",
              })}
            >
              카드 변경
            </span>
          </div>
        </div>

        {/* ── 섹션 3: 결제 내역 테이블 ── */}
        <div
          className={css({
            bg: "neutral.canvas.02",
            border: "1px solid",
            borderColor: "neutral.border.base",
            borderRadius: "12px",
            overflow: "hidden",
          })}
        >
          {/* Header */}
          <div
            className={css({
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px 20px",
              borderBottom: "1px solid",
              borderColor: "neutral.border.low",
            })}
          >
            <h2
              className={css({
                fontSize: "16px",
                fontWeight: "700",
                color: "neutral.text.base",
              })}
            >
              결제 내역
            </h2>
            <button
              className={css({
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "7px 14px",
                borderRadius: "8px",
                bg: "neutral.surface.transparent",
                border: "1px solid",
                borderColor: "neutral.border.base",
                fontSize: "14px",
                color: "neutral.text.base",
                cursor: "pointer",
              })}
            >
              <Download
                size={16}
                className={css({ color: "neutral.icon.base" })}
              />
              CSV 내보내기
            </button>
          </div>

          <table className={css({ width: "100%", borderCollapse: "collapse" })}>
            <thead>
              <tr className={css({ bg: "neutral.canvas.01" })}>
                {["날짜", "내역", "금액", "상태", "액션"].map((col) => (
                  <th
                    key={col}
                    className={css({
                      padding: "10px 20px",
                      textAlign: "left",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: "neutral.text.base",
                      opacity: 0.38,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      borderBottom: "1px solid",
                      borderColor: "neutral.border.low",
                    })}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Row 1 */}
              <tr className={css({ bg: "neutral.canvas.02" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-08-01
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  Pro 플랜 (8월)
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  ₩49,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "positive.surface.base", border: "1px solid", borderColor: "positive.border.base", fontSize: "12px", color: "positive.text.base" })}>
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <button className={css({ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "8px", bg: "neutral.surface.transparent", border: "none", cursor: "pointer" })}>
                    <FileText size={16} className={css({ color: "neutral.icon.base" })} />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className={css({ bg: "neutral.canvas.03" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-07-01
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  Pro 플랜 (7월)
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  ₩49,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "positive.surface.base", border: "1px solid", borderColor: "positive.border.base", fontSize: "12px", color: "positive.text.base" })}>
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <button className={css({ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "8px", bg: "neutral.surface.transparent", border: "none", cursor: "pointer" })}>
                    <FileText size={16} className={css({ color: "neutral.icon.base" })} />
                  </button>
                </td>
              </tr>

              {/* Row 3 */}
              <tr className={css({ bg: "neutral.canvas.02" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-06-15
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  추가 사용자 시트
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  ₩9,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "positive.surface.base", border: "1px solid", borderColor: "positive.border.base", fontSize: "12px", color: "positive.text.base" })}>
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <button className={css({ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "8px", bg: "neutral.surface.transparent", border: "none", cursor: "pointer" })}>
                    <FileText size={16} className={css({ color: "neutral.icon.base" })} />
                  </button>
                </td>
              </tr>

              {/* Row 4 — 결제 실패 (critical bg) */}
              <tr className={css({ bg: "critical.surface.base" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-06-01
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  Pro 플랜 (6월)
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  ₩49,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "critical.fill.base", border: "1px solid", borderColor: "critical.border.base", fontSize: "12px", color: "inverse.text.base" })}>
                    결제 실패
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <button className={css({ padding: "5px 12px", borderRadius: "8px", bg: "neutral.surface.transparent", border: "1px solid", borderColor: "critical.border.base", fontSize: "13px", color: "critical.text.base", cursor: "pointer" })}>
                    재시도
                  </button>
                </td>
              </tr>

              {/* Row 5 */}
              <tr className={css({ bg: "neutral.canvas.02" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-05-28
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  Pro 플랜 (6월) 재시도
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  ₩49,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "positive.surface.base", border: "1px solid", borderColor: "positive.border.base", fontSize: "12px", color: "positive.text.base" })}>
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <button className={css({ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "8px", bg: "neutral.surface.transparent", border: "none", cursor: "pointer" })}>
                    <FileText size={16} className={css({ color: "neutral.icon.base" })} />
                  </button>
                </td>
              </tr>

              {/* Row 6 */}
              <tr className={css({ bg: "neutral.canvas.03" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-05-01
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  Pro 플랜 (5월)
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  ₩49,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "positive.surface.base", border: "1px solid", borderColor: "positive.border.base", fontSize: "12px", color: "positive.text.base" })}>
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <button className={css({ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "8px", bg: "neutral.surface.transparent", border: "none", cursor: "pointer" })}>
                    <FileText size={16} className={css({ color: "neutral.icon.base" })} />
                  </button>
                </td>
              </tr>

              {/* Row 7 — 처리 중 (warning) */}
              <tr className={css({ bg: "neutral.canvas.02" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-04-01
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  Pro 플랜 (4월)
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  ₩49,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "warning.surface.base", border: "1px solid", borderColor: "warning.border.base", fontSize: "12px", color: "warning.text.base" })}>
                    처리 중
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ fontSize: "14px", color: "neutral.text.low" })}>—</span>
                </td>
              </tr>

              {/* Row 8 — 환불 완료 (info) */}
              <tr className={css({ bg: "neutral.canvas.03" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-03-10
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  환불 처리
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  -₩49,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "info.surface.base", border: "1px solid", borderColor: "info.border.base", fontSize: "12px", color: "info.text.base" })}>
                    환불 완료
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <button className={css({ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "8px", bg: "neutral.surface.transparent", border: "none", cursor: "pointer" })}>
                    <FileText size={16} className={css({ color: "neutral.icon.base" })} />
                  </button>
                </td>
              </tr>

              {/* Row 9 */}
              <tr className={css({ bg: "neutral.canvas.02" })}>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.low", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  2025-03-01
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  Pro 플랜 (3월)
                </td>
                <td className={css({ padding: "12px 20px", fontSize: "14px", color: "neutral.text.base", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  ₩49,000
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <span className={css({ padding: "3px 8px", borderRadius: "9999px", bg: "positive.surface.base", border: "1px solid", borderColor: "positive.border.base", fontSize: "12px", color: "positive.text.base" })}>
                    결제 완료
                  </span>
                </td>
                <td className={css({ padding: "12px 20px", borderBottom: "1px solid", borderColor: "neutral.border.low" })}>
                  <button className={css({ display: "flex", alignItems: "center", justifyContent: "center", width: "32px", height: "32px", borderRadius: "8px", bg: "neutral.surface.transparent", border: "none", cursor: "pointer" })}>
                    <FileText size={16} className={css({ color: "neutral.icon.base" })} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* ── 섹션 4: 청구 요약 카드 ── */}
        <div
          className={css({
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          })}
        >
          {/* 이번 달 청구 */}
          <div
            className={css({
              bg: "neutral.canvas.02",
              border: "1px solid",
              borderColor: "neutral.border.base",
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
              <TrendingUp
                size={20}
                className={css({ color: "positive.icon.base" })}
              />
              <span
                className={css({
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  bg: "positive.surface.base",
                  border: "1px solid",
                  borderColor: "positive.border.base",
                  fontSize: "12px",
                  color: "positive.text.base",
                })}
              >
                정상 결제
              </span>
            </div>
            <div
              className={css({
                fontSize: "28px",
                fontWeight: "700",
                color: "neutral.text.base",
                marginBottom: "8px",
              })}
            >
              ₩58,000
            </div>
            <div
              className={css({
                fontSize: "13px",
                color: "neutral.text.low",
              })}
            >
              이번 달 청구
            </div>
            <div
              className={css({
                fontSize: "13px",
                color: "neutral.text.low",
                marginTop: "4px",
              })}
            >
              Pro ₩49,000 + 추가 ₩9,000
            </div>
          </div>

          {/* 미결제 금액 */}
          <div
            className={css({
              bg: "critical.surface.base",
              border: "1px solid",
              borderColor: "critical.border.base",
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
              <AlertCircle
                size={20}
                className={css({ color: "critical.icon.base" })}
              />
              <span
                className={css({
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  bg: "critical.fill.base",
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "inverse.text.base",
                })}
              >
                미결제
              </span>
            </div>
            <div
              className={css({
                fontSize: "28px",
                fontWeight: "700",
                color: "critical.text.base",
                marginBottom: "8px",
              })}
            >
              ₩49,000
            </div>
            <div
              className={css({
                fontSize: "13px",
                color: "critical.text.base",
                marginBottom: "16px",
              })}
            >
              미결제 금액
            </div>
            <button
              className={css({
                width: "100%",
                padding: "8px",
                borderRadius: "8px",
                bg: "critical.fill.base",
                border: "none",
                fontSize: "14px",
                fontWeight: "600",
                color: "inverse.text.base",
                cursor: "pointer",
              })}
            >
              지금 결제
            </button>
          </div>

          {/* 다음 결제일 */}
          <div
            className={css({
              bg: "neutral.canvas.02",
              border: "1px solid",
              borderColor: "neutral.border.base",
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
              <Calendar
                size={20}
                className={css({ color: "info.icon.base" })}
              />
              <span
                className={css({
                  padding: "2px 8px",
                  borderRadius: "9999px",
                  bg: "info.surface.base",
                  border: "1px solid",
                  borderColor: "info.border.base",
                  fontSize: "12px",
                  color: "info.text.base",
                })}
              >
                예정
              </span>
            </div>
            <div
              className={css({
                fontSize: "22px",
                fontWeight: "700",
                color: "neutral.text.base",
                marginBottom: "8px",
              })}
            >
              2025년 9월 1일
            </div>
            <div
              className={css({
                fontSize: "13px",
                color: "neutral.text.low",
              })}
            >
              다음 결제일
            </div>
            <div
              className={css({
                fontSize: "13px",
                color: "neutral.text.low",
                marginTop: "4px",
              })}
            >
              Pro 플랜 월정액 ₩49,000
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
