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
  RefreshCw,
} from 'lucide-react';
import { css } from '@ds-token-test/styled-system-intent-first/css';

// run3 — intent-first token ergonomics test

// ── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside
      className={`dark ${css({
        width: '240px',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'neutral.canvas.02',
        flexShrink: 0,
      })}`}
    >
      {/* Logo */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '24px 20px 20px',
          borderBottom: '1px solid',
          borderBottomColor: 'neutral.border.low',
        })}
      >
        <LayoutDashboard
          size={22}
          className={css({ color: 'neutral.icon.base' })}
        />
        <span
          className={css({
            fontSize: '16px',
            fontWeight: '700',
            color: 'neutral.text.base',
          })}
        >
          Mildang
        </span>
      </div>

      {/* Nav */}
      <nav
        className={css({
          flex: 1,
          padding: '8px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        })}
      >
        {/* Active: 결제 내역 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            backgroundColor: 'overlay.lighten.hover',
            cursor: 'pointer',
          })}
        >
          <CreditCard size={18} className={css({ color: 'neutral.icon.base' })} />
          <span className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.base' })}>
            결제 내역
          </span>
        </div>

        {/* 대시보드 */}
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
          <LayoutDashboard size={18} className={css({ color: 'neutral.icon.base' })} />
          <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>대시보드</span>
        </div>

        {/* 사용자 관리 */}
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
          <Users size={18} className={css({ color: 'neutral.icon.base' })} />
          <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>사용자 관리</span>
        </div>

        {/* 설정 (비활성) */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '10px 12px',
            borderRadius: '8px',
            cursor: 'not-allowed',
            opacity: 0.38,
          })}
        >
          <Settings size={18} className={css({ color: 'neutral.icon.base' })} />
          <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>설정</span>
        </div>
      </nav>

      {/* Logout */}
      <div
        className={css({
          padding: '16px 12px 24px',
          borderTop: '1px solid',
          borderTopColor: 'neutral.border.low',
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
          <LogOut size={18} className={css({ color: 'critical.icon.base' })} />
          <span className={css({ fontSize: '14px', color: 'critical.text.base' })}>로그아웃</span>
        </div>
      </div>
    </aside>
  );
}

// ── Plan Section ──────────────────────────────────────────────────────────────

function PlanSection() {
  return (
    <section className={css({ marginBottom: '32px' })}>
      <h2
        className={css({
          fontSize: '20px',
          fontWeight: '700',
          color: 'neutral.text.base',
          marginBottom: '16px',
        })}
      >
        플랜 선택
      </h2>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        })}
      >
        {/* ── Free Card ── */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <div>
            <p
              className={css({
                fontSize: '20px',
                fontWeight: '700',
                color: 'neutral.text.base',
                marginBottom: '8px',
              })}
            >
              Free
            </p>
            <p className={css({ fontSize: '28px', fontWeight: '800', color: 'neutral.text.base' })}>
              ₩0/월
            </p>
          </div>
          <ul
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              flex: 1,
            })}
          >
            {['최대 5명 사용자', '기본 대시보드', '이메일 지원'].map((feature) => (
              <li
                key={feature}
                className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
              >
                <Check size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>{feature}</span>
              </li>
            ))}
            {['고급 분석', 'API 접근'].map((feature) => (
              <li
                key={feature}
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  opacity: 0.38,
                })}
              >
                <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={css({
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              backgroundColor: 'neutral.surface.base',
              fontSize: '14px',
              fontWeight: '600',
              color: 'neutral.text.base',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            현재 플랜
          </button>
        </div>

        {/* ── Pro Card ── */}
        <div
          className={css({
            backgroundColor: 'primary.surface.base',
            border: '1px solid',
            borderColor: 'primary.border.high',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          {/* Banner */}
          <div
            className={css({
              backgroundColor: 'primary.fill.base',
              padding: '8px 16px',
              textAlign: 'center',
            })}
          >
            <span className={css({ fontSize: '13px', fontWeight: '700', color: 'inverse.text.base' })}>
              추천
            </span>
          </div>

          <div
            className={css({
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              flex: 1,
            })}
          >
            <div>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  marginBottom: '8px',
                })}
              >
                <p
                  className={css({ fontSize: '20px', fontWeight: '700', color: 'primary.text.base' })}
                >
                  Pro
                </p>
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '700',
                    backgroundColor: 'primary.fill.base',
                    color: 'inverse.text.base',
                    borderRadius: '99px',
                    padding: '2px 8px',
                  })}
                >
                  현재 플랜
                </span>
              </div>
              <p
                className={css({ fontSize: '28px', fontWeight: '800', color: 'primary.text.base' })}
              >
                ₩49,000/월
              </p>
            </div>
            <ul
              className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                flex: 1,
              })}
            >
              {[
                '최대 50명 사용자',
                '고급 대시보드',
                '우선 이메일 지원',
                '고급 분석',
                'API 접근',
              ].map((feature) => (
                <li
                  key={feature}
                  className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
                >
                  <Check
                    size={16}
                    className={css({ color: 'primary.icon.base', flexShrink: 0 })}
                  />
                  <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
                    {feature}
                  </span>
                </li>
              ))}
              {['전담 매니저'].map((feature) => (
                <li
                  key={feature}
                  className={css({
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    opacity: 0.38,
                  })}
                >
                  <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                  <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={css({
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'primary.fill.base',
                fontSize: '14px',
                fontWeight: '600',
                color: 'inverse.text.base',
                cursor: 'not-allowed',
                opacity: 0.38,
              })}
            >
              현재 사용 중
            </button>
            <p
              className={css({
                fontSize: '12px',
                color: 'neutral.text.low',
                textAlign: 'center',
                opacity: 0.38,
              })}
            >
              다음 결제일: 2025년 9월 1일
            </p>
          </div>
        </div>

        {/* ── Enterprise Card ── */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <div>
            <p
              className={css({
                fontSize: '20px',
                fontWeight: '700',
                color: 'neutral.text.base',
                marginBottom: '8px',
              })}
            >
              Enterprise
            </p>
            <p className={css({ fontSize: '28px', fontWeight: '800', color: 'neutral.text.base' })}>
              맞춤 견적
            </p>
          </div>
          <ul
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              listStyle: 'none',
              padding: 0,
              margin: 0,
              flex: 1,
            })}
          >
            {[
              '무제한 사용자',
              '전용 대시보드',
              '24/7 전담 지원',
              '엔터프라이즈 분석',
              'API 완전 접근',
              '전담 매니저',
            ].map((feature) => (
              <li
                key={feature}
                className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
              >
                <Check size={16} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
          <button
            className={css({
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'primary.fill.base',
              fontSize: '14px',
              fontWeight: '600',
              color: 'inverse.text.base',
              cursor: 'pointer',
            })}
          >
            영업팀 문의
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Payment Method Section ────────────────────────────────────────────────────

function PaymentMethodSection() {
  return (
    <section className={css({ marginBottom: '32px' })}>
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '12px',
          padding: '24px',
        })}
      >
        <h2
          className={css({
            fontSize: '18px',
            fontWeight: '700',
            color: 'neutral.text.base',
            marginBottom: '20px',
          })}
        >
          등록된 결제 수단
        </h2>

        {/* Card display row */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '16px',
          })}
        >
          {/* Card art */}
          <div
            className={css({
              width: '160px',
              height: '96px',
              backgroundColor: 'neutral.surface.base',
              borderRadius: '8px',
              padding: '12px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexShrink: 0,
              border: '1px solid',
              borderColor: 'neutral.border.base',
            })}
          >
            <CreditCard
              size={20}
              className={css({ color: 'neutral.icon.base', opacity: 0.38 })}
            />
            <span
              className={css({
                fontSize: '13px',
                fontWeight: '600',
                color: 'neutral.text.base',
                letterSpacing: '2px',
              })}
            >
              &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4242
            </span>
          </div>

          {/* Card info */}
          <div className={css({ flex: 1 })}>
            <p
              className={css({
                fontSize: '16px',
                fontWeight: '700',
                color: 'neutral.text.base',
                marginBottom: '6px',
              })}
            >
              Visa
            </p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
              <span className={css({ fontSize: '14px', color: 'neutral.text.low' })}>12/26</span>
              <span
                className={css({
                  fontSize: '12px',
                  fontWeight: '600',
                  backgroundColor: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                  borderRadius: '99px',
                  padding: '2px 8px',
                })}
              >
                유효
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className={css({ display: 'flex', gap: '8px' })}>
            <button
              className={css({
                padding: '8px 14px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                backgroundColor: 'neutral.surface.transparent',
                fontSize: '14px',
                fontWeight: '500',
                color: 'neutral.text.base',
                cursor: 'pointer',
              })}
            >
              변경
            </button>
            <button
              className={css({
                padding: '8px 14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'neutral.surface.transparent',
                fontSize: '14px',
                fontWeight: '500',
                color: 'critical.text.base',
                cursor: 'pointer',
              })}
            >
              삭제
            </button>
          </div>
        </div>

        {/* Warning banner */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'warning.surface.base',
            border: '1px solid',
            borderColor: 'warning.border.base',
            borderRadius: '8px',
            padding: '12px 16px',
          })}
        >
          <AlertTriangle
            size={16}
            className={css({ color: 'warning.icon.base', flexShrink: 0 })}
          />
          <p className={css({ fontSize: '14px', color: 'warning.text.base', flex: 1 })}>
            결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.{' '}
            <span
              className={css({
                color: 'warning.text.base',
                fontWeight: '700',
                textDecoration: 'underline',
                cursor: 'pointer',
              })}
            >
              카드 변경
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Billing History Section ───────────────────────────────────────────────────

type BadgeVariant = 'positive' | 'critical' | 'warning' | 'info';

function StatusBadge({ variant, label }: { variant: BadgeVariant; label: string }) {
  const styles: Record<BadgeVariant, string> = {
    positive: css({
      fontSize: '12px',
      fontWeight: '600',
      backgroundColor: 'positive.surface.base',
      border: '1px solid',
      borderColor: 'positive.border.base',
      color: 'positive.text.base',
      borderRadius: '99px',
      padding: '2px 8px',
      whiteSpace: 'nowrap',
    }),
    critical: css({
      fontSize: '12px',
      fontWeight: '600',
      backgroundColor: 'critical.fill.base',
      color: 'inverse.text.base',
      borderRadius: '99px',
      padding: '2px 8px',
      whiteSpace: 'nowrap',
    }),
    warning: css({
      fontSize: '12px',
      fontWeight: '600',
      backgroundColor: 'warning.surface.base',
      border: '1px solid',
      borderColor: 'warning.border.base',
      color: 'warning.text.base',
      borderRadius: '99px',
      padding: '2px 8px',
      whiteSpace: 'nowrap',
    }),
    info: css({
      fontSize: '12px',
      fontWeight: '600',
      backgroundColor: 'info.surface.base',
      border: '1px solid',
      borderColor: 'info.border.base',
      color: 'info.text.base',
      borderRadius: '99px',
      padding: '2px 8px',
      whiteSpace: 'nowrap',
    }),
  };
  return <span className={styles[variant]}>{label}</span>;
}

type RowAction = 'receipt' | 'retry' | 'detail' | 'none';

interface BillingRow {
  date: string;
  description: string;
  amount: string;
  statusVariant: BadgeVariant;
  statusLabel: string;
  action: RowAction;
  isFailed?: boolean;
}

const billingRows: BillingRow[] = [
  {
    date: '2025-08-01',
    description: 'Pro 플랜 (8월)',
    amount: '₩49,000',
    statusVariant: 'positive',
    statusLabel: '결제 완료',
    action: 'receipt',
  },
  {
    date: '2025-07-01',
    description: 'Pro 플랜 (7월)',
    amount: '₩49,000',
    statusVariant: 'positive',
    statusLabel: '결제 완료',
    action: 'receipt',
  },
  {
    date: '2025-06-15',
    description: '추가 사용자 시트',
    amount: '₩9,000',
    statusVariant: 'positive',
    statusLabel: '결제 완료',
    action: 'receipt',
  },
  {
    date: '2025-06-01',
    description: 'Pro 플랜 (6월)',
    amount: '₩49,000',
    statusVariant: 'critical',
    statusLabel: '결제 실패',
    action: 'retry',
    isFailed: true,
  },
  {
    date: '2025-05-28',
    description: 'Pro 플랜 (6월) 재시도',
    amount: '₩49,000',
    statusVariant: 'positive',
    statusLabel: '결제 완료',
    action: 'receipt',
  },
  {
    date: '2025-05-01',
    description: 'Pro 플랜 (5월)',
    amount: '₩49,000',
    statusVariant: 'positive',
    statusLabel: '결제 완료',
    action: 'receipt',
  },
  {
    date: '2025-04-01',
    description: 'Pro 플랜 (4월)',
    amount: '₩49,000',
    statusVariant: 'warning',
    statusLabel: '처리 중',
    action: 'none',
  },
  {
    date: '2025-03-10',
    description: '환불 처리',
    amount: '-₩49,000',
    statusVariant: 'info',
    statusLabel: '환불 완료',
    action: 'detail',
  },
  {
    date: '2025-03-01',
    description: 'Pro 플랜 (3월)',
    amount: '₩49,000',
    statusVariant: 'positive',
    statusLabel: '결제 완료',
    action: 'receipt',
  },
];

function BillingHistorySection() {
  return (
    <section className={css({ marginBottom: '32px' })}>
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '12px',
          overflow: 'hidden',
        })}
      >
        {/* Header */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '1px solid',
            borderBottomColor: 'neutral.border.low',
          })}
        >
          <h2 className={css({ fontSize: '18px', fontWeight: '700', color: 'neutral.text.base' })}>
            결제 내역
          </h2>
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 14px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              backgroundColor: 'neutral.surface.transparent',
              fontSize: '14px',
              fontWeight: '500',
              color: 'neutral.text.base',
              cursor: 'pointer',
            })}
          >
            <Download size={14} className={css({ color: 'neutral.icon.base' })} />
            CSV 내보내기
          </button>
        </div>

        {/* Table */}
        <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
          <thead>
            <tr
              className={css({
                backgroundColor: 'neutral.canvas.01',
              })}
            >
              {['날짜', '내역', '금액', '상태', '액션'].map((header) => (
                <th
                  key={header}
                  className={css({
                    padding: '10px 16px',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'neutral.text.base',
                    textAlign: 'left',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    opacity: 0.38,
                  })}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {billingRows.map((row, idx) => (
              <tr
                key={row.date + row.description}
                className={css({
                  backgroundColor: row.isFailed
                    ? 'critical.surface.base'
                    : idx % 2 === 0
                    ? 'neutral.canvas.02'
                    : 'neutral.canvas.01',
                  borderBottom: '1px solid',
                  borderBottomColor: 'neutral.border.low',
                })}
              >
                <td
                  className={css({
                    padding: '14px 16px',
                    fontSize: '13px',
                    color: 'neutral.text.low',
                    whiteSpace: 'nowrap',
                  })}
                >
                  {row.date}
                </td>
                <td
                  className={css({
                    padding: '14px 16px',
                    fontSize: '14px',
                    color: 'neutral.text.base',
                  })}
                >
                  {row.description}
                </td>
                <td
                  className={css({
                    padding: '14px 16px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: 'neutral.text.base',
                    whiteSpace: 'nowrap',
                  })}
                >
                  {row.amount}
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  <StatusBadge variant={row.statusVariant} label={row.statusLabel} />
                </td>
                <td className={css({ padding: '14px 16px' })}>
                  {row.action === 'receipt' && (
                    <button
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: 'neutral.surface.transparent',
                        cursor: 'pointer',
                      })}
                    >
                      <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                    </button>
                  )}
                  {row.action === 'retry' && (
                    <button
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: 'critical.border.highest',
                        backgroundColor: 'neutral.surface.transparent',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'critical.text.base',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      })}
                    >
                      <RefreshCw size={12} className={css({ color: 'critical.icon.base' })} />
                      재시도
                    </button>
                  )}
                  {row.action === 'detail' && (
                    <button
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '32px',
                        height: '32px',
                        borderRadius: '6px',
                        border: 'none',
                        backgroundColor: 'neutral.surface.transparent',
                        cursor: 'pointer',
                      })}
                    >
                      <FileText size={16} className={css({ color: 'neutral.icon.base' })} />
                    </button>
                  )}
                  {row.action === 'none' && (
                    <span className={css({ color: 'neutral.text.lowest', fontSize: '14px' })}>
                      —
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

// ── Summary Cards Section ─────────────────────────────────────────────────────

function SummarySection() {
  return (
    <section>
      <div className={css({ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' })}>
        {/* 이번 달 청구 */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          })}
        >
          <TrendingUp size={22} className={css({ color: 'positive.icon.base' })} />
          <p
            className={css({
              fontSize: '28px',
              fontWeight: '800',
              color: 'neutral.text.base',
            })}
          >
            ₩58,000
          </p>
          <span
            className={css({
              alignSelf: 'flex-start',
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: 'positive.surface.base',
              color: 'positive.text.base',
              borderRadius: '99px',
              padding: '2px 8px',
            })}
          >
            정상 결제
          </span>
          <p className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            Pro ₩49,000 + 추가 ₩9,000
          </p>
        </div>

        {/* 미결제 금액 */}
        <div
          className={css({
            backgroundColor: 'critical.surface.base',
            border: '1px solid',
            borderColor: 'critical.border.base',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          })}
        >
          <AlertCircle size={22} className={css({ color: 'critical.icon.base' })} />
          <p
            className={css({
              fontSize: '28px',
              fontWeight: '800',
              color: 'critical.text.base',
            })}
          >
            ₩49,000
          </p>
          <span
            className={css({
              alignSelf: 'flex-start',
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: 'critical.fill.base',
              color: 'inverse.text.base',
              borderRadius: '99px',
              padding: '2px 8px',
            })}
          >
            미결제
          </span>
          <button
            className={css({
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'critical.fill.base',
              fontSize: '14px',
              fontWeight: '600',
              color: 'inverse.text.base',
              cursor: 'pointer',
              marginTop: '4px',
            })}
          >
            지금 결제
          </button>
        </div>

        {/* 다음 결제일 */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            borderRadius: '12px',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          })}
        >
          <Calendar size={22} className={css({ color: 'info.icon.base' })} />
          <p
            className={css({
              fontSize: '24px',
              fontWeight: '800',
              color: 'neutral.text.base',
            })}
          >
            2025년 9월 1일
          </p>
          <span
            className={css({
              alignSelf: 'flex-start',
              fontSize: '12px',
              fontWeight: '600',
              backgroundColor: 'info.surface.base',
              border: '1px solid',
              borderColor: 'info.border.base',
              color: 'info.text.base',
              borderRadius: '99px',
              padding: '2px 8px',
            })}
          >
            예정
          </span>
          <p className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
            Pro 플랜 월정액 ₩49,000
          </p>
        </div>
      </div>
    </section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function BillingPage() {
  return (
    <div
      className={css({
        display: 'flex',
        minHeight: '100vh',
      })}
    >
      <Sidebar />
      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          backgroundColor: 'neutral.canvas.01',
          padding: '32px',
        })}
      >
        <PlanSection />
        <PaymentMethodSection />
        <BillingHistorySection />
        <SummarySection />
      </main>
    </div>
  );
}
