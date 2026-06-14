import { css } from '@ds-token-test/styled-system-intent-first/css';
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
  TrendingUp,
  Calendar,
  Download,
  FileText,
  RotateCcw,
} from 'lucide-react';

// ── Sidebar ──────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside
      className={`dark ${css({
        width: '240px',
        minHeight: '100vh',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'neutral.canvas.02',
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
          padding: '20px 16px',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.base',
        })}
      >
        <LayoutDashboard
          size={22}
          className={css({ color: 'neutral.icon.base' })}
        />
        <span
          className={css({
            color: 'neutral.text.base',
            fontWeight: '700',
            fontSize: '16px',
          })}
        >
          Mildang
        </span>
      </div>

      {/* Nav */}
      <nav
        className={css({
          flex: 1,
          padding: '12px 8px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
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
          <CreditCard
            size={18}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              color: 'neutral.text.base',
              fontWeight: '600',
              fontSize: '14px',
            })}
          >
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
          <LayoutDashboard
            size={18}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              color: 'neutral.text.base',
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
            padding: '10px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <Users
            size={18}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              color: 'neutral.text.base',
              fontSize: '14px',
            })}
          >
            사용자 관리
          </span>
        </div>

        {/* 설정 (비활성 opacity 0.38) */}
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
          <Settings
            size={18}
            className={css({ color: 'neutral.icon.base' })}
          />
          <span
            className={css({
              color: 'neutral.text.base',
              fontSize: '14px',
            })}
          >
            설정
          </span>
        </div>
      </nav>

      {/* Logout */}
      <div
        className={css({
          padding: '16px 8px',
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
          <span
            className={css({
              color: 'critical.text.base',
              fontSize: '14px',
              fontWeight: '500',
            })}
          >
            로그아웃
          </span>
        </div>
      </div>
    </aside>
  );
}

// ── Section 1: Plan Cards ────────────────────────────────────────────────────

function FreePlanCard() {
  const included = ['기본 기능 5개', '사용자 1명', '1GB 스토리지'];
  const excluded = ['고급 분석', '우선 지원'];

  return (
    <div
      className={css({
        backgroundColor: 'neutral.canvas.01',
        border: '1px solid',
        borderColor: 'neutral.border.base',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        flex: 1,
      })}
    >
      <div>
        <p
          className={css({
            color: 'neutral.text.base',
            fontWeight: '700',
            fontSize: '18px',
            margin: 0,
          })}
        >
          Free
        </p>
        <p
          className={css({
            color: 'neutral.text.base',
            fontSize: '28px',
            fontWeight: '700',
            marginTop: '8px',
          })}
        >
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
        {included.map((feat) => (
          <li
            key={feat}
            className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
          >
            <Check
              size={16}
              className={css({ color: 'positive.icon.base', flexShrink: 0 })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
              {feat}
            </span>
          </li>
        ))}
        {excluded.map((feat) => (
          <li
            key={feat}
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              opacity: 0.38,
            })}
          >
            <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={css({
          padding: '10px 16px',
          borderRadius: '8px',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          backgroundColor: 'neutral.surface.base',
          color: 'neutral.text.base',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'not-allowed',
          opacity: 0.38,
        })}
        disabled
      >
        현재 플랜
      </button>
    </div>
  );
}

function ProPlanCard() {
  const included = [
    '기본 기능 전체',
    '사용자 10명',
    '50GB 스토리지',
    '고급 분석',
    '우선 지원',
  ];
  const excluded = ['전용 인프라'];

  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        border: '2px solid',
        borderColor: 'primary.border.highest',
        overflow: 'hidden',
        flex: 1,
      })}
    >
      {/* Top banner */}
      <div
        className={css({
          backgroundColor: 'primary.fill.base',
          padding: '8px 16px',
          textAlign: 'center',
        })}
      >
        <span
          className={css({
            color: 'inverse.text.base',
            fontSize: '12px',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          })}
        >
          추천
        </span>
      </div>

      <div
        className={css({
          backgroundColor: 'primary.surface.base',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          flex: 1,
        })}
      >
        {/* Plan name + badge */}
        <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
          <p
            className={css({
              color: 'primary.text.base',
              fontWeight: '700',
              fontSize: '18px',
              margin: 0,
            })}
          >
            Pro
          </p>
          <span
            className={css({
              backgroundColor: 'primary.fill.base',
              color: 'inverse.text.base',
              fontSize: '11px',
              fontWeight: '600',
              padding: '2px 8px',
              borderRadius: '999px',
            })}
          >
            현재 플랜
          </span>
        </div>

        <p
          className={css({
            color: 'primary.text.base',
            fontSize: '28px',
            fontWeight: '700',
            margin: 0,
          })}
        >
          ₩49,000/월
        </p>

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
          {included.map((feat) => (
            <li
              key={feat}
              className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
            >
              <Check
                size={16}
                className={css({ color: 'primary.icon.base', flexShrink: 0 })}
              />
              <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
                {feat}
              </span>
            </li>
          ))}
          {excluded.map((feat) => (
            <li
              key={feat}
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                opacity: 0.38,
              })}
            >
              <X size={16} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
              <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
                {feat}
              </span>
            </li>
          ))}
        </ul>

        <button
          className={css({
            padding: '10px 16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'primary.fill.base',
            color: 'inverse.text.base',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'not-allowed',
            opacity: 0.38,
          })}
          disabled
        >
          현재 사용 중
        </button>

        <p
          className={css({
            color: 'neutral.text.low',
            fontSize: '12px',
            textAlign: 'center',
            margin: 0,
            opacity: 0.38,
          })}
        >
          다음 결제일: 2025년 9월 1일
        </p>
      </div>
    </div>
  );
}

function EnterprisePlanCard() {
  const features = [
    '기본 기능 전체',
    '무제한 사용자',
    '무제한 스토리지',
    '고급 분석',
    '전담 지원',
    '전용 인프라',
  ];

  return (
    <div
      className={css({
        backgroundColor: 'neutral.canvas.01',
        border: '1px solid',
        borderColor: 'neutral.border.base',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        flex: 1,
      })}
    >
      <div>
        <p
          className={css({
            color: 'neutral.text.base',
            fontWeight: '700',
            fontSize: '18px',
            margin: 0,
          })}
        >
          Enterprise
        </p>
        <p
          className={css({
            color: 'neutral.text.base',
            fontSize: '28px',
            fontWeight: '700',
            marginTop: '8px',
          })}
        >
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
        {features.map((feat) => (
          <li
            key={feat}
            className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}
          >
            <Check
              size={16}
              className={css({ color: 'positive.icon.base', flexShrink: 0 })}
            />
            <span className={css({ color: 'neutral.text.base', fontSize: '14px' })}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={css({
          padding: '10px 16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: 'primary.fill.base',
          color: 'inverse.text.base',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
        })}
      >
        영업팀 문의
      </button>
    </div>
  );
}

// ── Section 2: Payment Method ─────────────────────────────────────────────────

function PaymentMethodSection() {
  return (
    <div
      className={css({
        backgroundColor: 'neutral.canvas.01',
        border: '1px solid',
        borderColor: 'neutral.border.base',
        borderRadius: '12px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      })}
    >
      <h2
        className={css({
          color: 'neutral.text.base',
          fontSize: '16px',
          fontWeight: '700',
          margin: 0,
        })}
      >
        등록된 결제 수단
      </h2>

      {/* Card display row */}
      <div className={css({ display: 'flex', alignItems: 'center', gap: '20px' })}>
        {/* Card art */}
        <div
          className={css({
            width: '148px',
            height: '92px',
            borderRadius: '8px',
            backgroundColor: 'neutral.surface.base',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '12px 14px',
          })}
        >
          <CreditCard
            size={20}
            className={css({ color: 'neutral.icon.base', opacity: 0.38 })}
          />
          <span
            className={css({
              color: 'neutral.text.base',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.06em',
            })}
          >
            •••• •••• •••• 4242
          </span>
        </div>

        {/* Card info */}
        <div className={css({ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' })}>
          <span
            className={css({
              color: 'neutral.text.base',
              fontWeight: '700',
              fontSize: '16px',
            })}
          >
            Visa
          </span>
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
            <span className={css({ color: 'neutral.text.low', fontSize: '14px' })}>
              12/26
            </span>
            <span
              className={css({
                backgroundColor: 'positive.surface.base',
                border: '1px solid',
                borderColor: 'positive.border.base',
                color: 'positive.text.base',
                fontSize: '11px',
                fontWeight: '600',
                padding: '2px 8px',
                borderRadius: '999px',
              })}
            >
              유효
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className={css({ display: 'flex', gap: '8px', flexShrink: 0 })}>
          <button
            className={css({
              padding: '8px 14px',
              borderRadius: '8px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              backgroundColor: 'neutral.surface.transparent',
              color: 'neutral.text.base',
              fontSize: '14px',
              fontWeight: '500',
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
              color: 'critical.text.base',
              fontSize: '14px',
              fontWeight: '500',
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
          gap: '12px',
          backgroundColor: 'warning.surface.base',
          border: '1px solid',
          borderColor: 'warning.border.base',
          borderRadius: '8px',
          padding: '12px 16px',
        })}
      >
        <AlertTriangle
          size={18}
          className={css({ color: 'warning.icon.base', flexShrink: 0 })}
        />
        <span className={css({ color: 'neutral.text.base', fontSize: '14px', flex: 1 })}>
          결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
        </span>
        <span
          className={css({
            color: 'warning.text.base',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          })}
        >
          카드 변경
        </span>
      </div>
    </div>
  );
}

// ── Section 3: Billing History Table ─────────────────────────────────────────

type BadgeVariant = 'positive' | 'critical' | 'warning' | 'info';

function StatusBadge({ label, variant }: { label: string; variant: BadgeVariant }) {
  if (variant === 'critical') {
    return (
      <span
        className={css({
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: 'critical.fill.base',
          color: 'inverse.text.base',
          fontSize: '11px',
          fontWeight: '600',
          padding: '3px 10px',
          borderRadius: '999px',
          whiteSpace: 'nowrap',
        })}
      >
        {label}
      </span>
    );
  }
  if (variant === 'warning') {
    return (
      <span
        className={css({
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: 'warning.surface.base',
          border: '1px solid',
          borderColor: 'warning.border.base',
          color: 'warning.text.base',
          fontSize: '11px',
          fontWeight: '600',
          padding: '3px 10px',
          borderRadius: '999px',
          whiteSpace: 'nowrap',
        })}
      >
        {label}
      </span>
    );
  }
  if (variant === 'info') {
    return (
      <span
        className={css({
          display: 'inline-flex',
          alignItems: 'center',
          backgroundColor: 'info.surface.base',
          border: '1px solid',
          borderColor: 'info.border.base',
          color: 'info.text.base',
          fontSize: '11px',
          fontWeight: '600',
          padding: '3px 10px',
          borderRadius: '999px',
          whiteSpace: 'nowrap',
        })}
      >
        {label}
      </span>
    );
  }
  // positive
  return (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        backgroundColor: 'positive.surface.base',
        border: '1px solid',
        borderColor: 'positive.border.base',
        color: 'positive.text.base',
        fontSize: '11px',
        fontWeight: '600',
        padding: '3px 10px',
        borderRadius: '999px',
        whiteSpace: 'nowrap',
      })}
    >
      {label}
    </span>
  );
}

interface BillingRow {
  date: string;
  description: string;
  amount: string;
  statusLabel: string;
  statusVariant: BadgeVariant;
  action: 'receipt' | 'retry' | 'detail' | 'none';
  isFailure?: boolean;
}

const billingRows: BillingRow[] = [
  {
    date: '2025-08-01',
    description: 'Pro 플랜 (8월)',
    amount: '₩49,000',
    statusLabel: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-07-01',
    description: 'Pro 플랜 (7월)',
    amount: '₩49,000',
    statusLabel: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-06-15',
    description: '추가 사용자 시트',
    amount: '₩9,000',
    statusLabel: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-06-01',
    description: 'Pro 플랜 (6월)',
    amount: '₩49,000',
    statusLabel: '결제 실패',
    statusVariant: 'critical',
    action: 'retry',
    isFailure: true,
  },
  {
    date: '2025-05-28',
    description: 'Pro 플랜 (6월) 재시도',
    amount: '₩49,000',
    statusLabel: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-05-01',
    description: 'Pro 플랜 (5월)',
    amount: '₩49,000',
    statusLabel: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-04-01',
    description: 'Pro 플랜 (4월)',
    amount: '₩49,000',
    statusLabel: '처리 중',
    statusVariant: 'warning',
    action: 'none',
  },
  {
    date: '2025-03-10',
    description: '환불 처리',
    amount: '-₩49,000',
    statusLabel: '환불 완료',
    statusVariant: 'info',
    action: 'detail',
  },
  {
    date: '2025-03-01',
    description: 'Pro 플랜 (3월)',
    amount: '₩49,000',
    statusLabel: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
];

function BillingHistoryTable() {
  return (
    <div
      className={css({
        backgroundColor: 'neutral.canvas.01',
        border: '1px solid',
        borderColor: 'neutral.border.base',
        borderRadius: '12px',
        overflow: 'hidden',
      })}
    >
      {/* Section header */}
      <div
        className={css({
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 24px',
          borderBottom: '1px solid',
          borderColor: 'neutral.border.base',
        })}
      >
        <h2
          className={css({
            color: 'neutral.text.base',
            fontSize: '16px',
            fontWeight: '700',
            margin: 0,
          })}
        >
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
            color: 'neutral.text.base',
            fontSize: '13px',
            fontWeight: '500',
            cursor: 'pointer',
          })}
        >
          <Download size={14} className={css({ color: 'neutral.icon.base' })} />
          CSV 내보내기
        </button>
      </div>

      <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
        <thead>
          <tr className={css({ backgroundColor: 'neutral.canvas.03' })}>
            {['날짜', '내역', '금액', '상태', '액션'].map((h) => (
              <th
                key={h}
                className={css({
                  padding: '10px 20px',
                  textAlign: 'left',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: 'neutral.text.base',
                  textTransform: 'uppercase',
                  letterSpacing: '0.07em',
                  opacity: 0.38,
                  borderBottom: '1px solid',
                  borderColor: 'neutral.border.base',
                })}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {billingRows.map((row, idx) => (
            <tr
              key={`${row.date}-${row.description}`}
              className={css({
                backgroundColor: row.isFailure
                  ? 'critical.surface.base'
                  : idx % 2 === 1
                  ? 'neutral.canvas.02'
                  : 'neutral.canvas.01',
                borderBottom: '1px solid',
                borderColor: 'neutral.border.low',
              })}
            >
              <td
                className={css({
                  padding: '13px 20px',
                  color: 'neutral.text.low',
                  fontSize: '13px',
                  whiteSpace: 'nowrap',
                })}
              >
                {row.date}
              </td>
              <td
                className={css({
                  padding: '13px 20px',
                  color: 'neutral.text.base',
                  fontSize: '13px',
                })}
              >
                {row.description}
              </td>
              <td
                className={css({
                  padding: '13px 20px',
                  color: 'neutral.text.base',
                  fontSize: '13px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap',
                })}
              >
                {row.amount}
              </td>
              <td className={css({ padding: '13px 20px' })}>
                <StatusBadge label={row.statusLabel} variant={row.statusVariant} />
              </td>
              <td className={css({ padding: '13px 20px' })}>
                {(row.action === 'receipt' || row.action === 'detail') && (
                  <button
                    className={css({
                      display: 'inline-flex',
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
                    <FileText
                      size={16}
                      className={css({ color: 'neutral.icon.base' })}
                    />
                  </button>
                )}
                {row.action === 'retry' && (
                  <button
                    className={css({
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'critical.border.highest',
                      backgroundColor: 'neutral.surface.transparent',
                      color: 'critical.text.base',
                      fontSize: '12px',
                      fontWeight: '500',
                      cursor: 'pointer',
                    })}
                  >
                    <RotateCcw
                      size={13}
                      className={css({ color: 'critical.icon.base' })}
                    />
                    재시도
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
  );
}

// ── Section 4: Billing Summary Cards ─────────────────────────────────────────

function BillingSummaryCards() {
  return (
    <div
      className={css({
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
      })}
    >
      {/* 이번 달 청구 */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.01',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        })}
      >
        <TrendingUp size={24} className={css({ color: 'positive.icon.base' })} />
        <p
          className={css({
            fontSize: '28px',
            fontWeight: '700',
            color: 'neutral.text.base',
            margin: 0,
          })}
        >
          ₩58,000
        </p>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            backgroundColor: 'positive.surface.base',
            border: '1px solid',
            borderColor: 'positive.border.base',
            color: 'positive.text.base',
            fontSize: '11px',
            fontWeight: '600',
            padding: '2px 8px',
            borderRadius: '999px',
          })}
        >
          정상 결제
        </span>
        <p className={css({ fontSize: '13px', color: 'neutral.text.low', margin: 0 })}>
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
          gap: '12px',
        })}
      >
        <AlertCircle size={24} className={css({ color: 'critical.icon.base' })} />
        <p
          className={css({
            fontSize: '28px',
            fontWeight: '700',
            color: 'critical.text.base',
            margin: 0,
          })}
        >
          ₩49,000
        </p>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            backgroundColor: 'critical.fill.base',
            color: 'inverse.text.base',
            fontSize: '11px',
            fontWeight: '600',
            padding: '2px 8px',
            borderRadius: '999px',
          })}
        >
          미결제
        </span>
        <button
          className={css({
            padding: '10px 16px',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'critical.fill.base',
            color: 'inverse.text.base',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: 'auto',
          })}
        >
          지금 결제
        </button>
      </div>

      {/* 다음 결제일 */}
      <div
        className={css({
          backgroundColor: 'neutral.canvas.01',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        })}
      >
        <Calendar size={24} className={css({ color: 'info.icon.base' })} />
        <p
          className={css({
            fontSize: '22px',
            fontWeight: '700',
            color: 'neutral.text.base',
            margin: 0,
          })}
        >
          2025년 9월 1일
        </p>
        <span
          className={css({
            display: 'inline-flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            backgroundColor: 'info.surface.base',
            border: '1px solid',
            borderColor: 'info.border.base',
            color: 'info.text.base',
            fontSize: '11px',
            fontWeight: '600',
            padding: '2px 8px',
            borderRadius: '999px',
          })}
        >
          예정
        </span>
        <p className={css({ fontSize: '13px', color: 'neutral.text.low', margin: 0 })}>
          Pro 플랜 월정액 ₩49,000
        </p>
      </div>
    </div>
  );
}

// ── Page Root ─────────────────────────────────────────────────────────────────

export default function BillingPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
      })}
    >
      <Sidebar />

      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          backgroundColor: 'neutral.canvas.02',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '28px',
        })}
      >
        {/* Page title */}
        <div>
          <h1
            className={css({
              fontSize: '24px',
              fontWeight: '700',
              color: 'neutral.text.base',
              margin: 0,
            })}
          >
            결제 및 구독 관리
          </h1>
          <p
            className={css({
              fontSize: '14px',
              color: 'neutral.text.low',
              marginTop: '4px',
            })}
          >
            플랜 선택, 결제 수단, 청구 내역을 관리하세요.
          </p>
        </div>

        {/* Section 1: Plan selection */}
        <section>
          <h2
            className={css({
              color: 'neutral.text.base',
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '12px',
              margin: '0 0 12px',
            })}
          >
            플랜 선택
          </h2>
          <div className={css({ display: 'flex', gap: '16px', alignItems: 'stretch' })}>
            <FreePlanCard />
            <ProPlanCard />
            <EnterprisePlanCard />
          </div>
        </section>

        {/* Section 2: Payment method */}
        <PaymentMethodSection />

        {/* Section 3: Billing table */}
        <BillingHistoryTable />

        {/* Section 4: Billing summary */}
        <section>
          <h2
            className={css({
              color: 'neutral.text.base',
              fontSize: '15px',
              fontWeight: '600',
              margin: '0 0 12px',
            })}
          >
            청구 요약
          </h2>
          <BillingSummaryCards />
        </section>
      </main>
    </div>
  );
}
