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
  RefreshCw,
} from 'lucide-react';

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
        borderRight: '1px solid',
        borderColor: 'neutral.border.base',
        flexShrink: 0,
      })}`}
    >
      {/* 로고 */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '24px 20px 20px',
        })}
      >
        <LayoutDashboard
          size={22}
          className={css({ color: 'neutral.icon.base' })}
        />
        <span
          className={css({
            fontSize: '18px',
            fontWeight: '700',
            color: 'neutral.text.base',
          })}
        >
          Mildang
        </span>
      </div>

      {/* 네비 메뉴 */}
      <nav
        className={css({
          flex: 1,
          padding: '8px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
        })}
      >
        {/* 결제 내역 — 활성 */}
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
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '600',
              color: 'neutral.text.base',
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
          <LayoutDashboard size={18} className={css({ color: 'neutral.icon.base' })} />
          <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
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
          <Users size={18} className={css({ color: 'neutral.icon.base' })} />
          <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
            사용자 관리
          </span>
        </div>

        {/* 설정 — 비활성 */}
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
          <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
            설정
          </span>
        </div>
      </nav>

      {/* 로그아웃 */}
      <div
        className={css({
          padding: '16px 12px 24px',
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
          <LogOut size={18} className={css({ color: 'critical.icon.base' })} />
          <span className={css({ fontSize: '14px', color: 'critical.text.base' })}>
            로그아웃
          </span>
        </div>
      </div>
    </aside>
  );
}

// ── Section 1: 플랜 선택 ─────────────────────────────────────────────────────

function FreePlanCard() {
  const included = ['기본 대시보드', '사용자 5명', '기본 지원'];
  const excluded = ['고급 분석', '우선 지원'];
  return (
    <div
      className={css({
        flex: 1,
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
      <span
        className={css({
          fontSize: '20px',
          fontWeight: '700',
          color: 'neutral.text.base',
        })}
      >
        Free
      </span>
      <span
        className={css({
          fontSize: '28px',
          fontWeight: '700',
          color: 'neutral.text.base',
        })}
      >
        ₩0/월
      </span>
      <ul
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          listStyle: 'none',
          padding: '0',
          margin: '0',
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
            <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
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
            <X
              size={16}
              className={css({ color: 'neutral.icon.base', flexShrink: 0 })}
            />
            <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
              {feat}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={css({
          width: '100%',
          padding: '10px 0',
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
        disabled
      >
        현재 플랜
      </button>
    </div>
  );
}

function ProPlanCard() {
  const included = [
    '기본 대시보드',
    '사용자 50명',
    '고급 분석',
    '우선 지원',
    'API 접근',
  ];
  const excluded = ['무제한 사용자'];
  return (
    <div
      className={css({
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid',
        borderColor: 'primary.border.high',
        borderRadius: '12px',
        overflow: 'hidden',
      })}
    >
      {/* 추천 배너 */}
      <div
        className={css({
          backgroundColor: 'primary.fill.base',
          padding: '8px 24px',
          textAlign: 'center',
        })}
      >
        <span
          className={css({
            fontSize: '13px',
            fontWeight: '700',
            color: 'inverse.text.base',
          })}
        >
          추천
        </span>
      </div>

      {/* 카드 본문 */}
      <div
        className={css({
          flex: 1,
          backgroundColor: 'primary.surface.base',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          })}
        >
          <span
            className={css({
              fontSize: '20px',
              fontWeight: '700',
              color: 'primary.text.base',
            })}
          >
            Pro
          </span>
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
        <span
          className={css({
            fontSize: '28px',
            fontWeight: '700',
            color: 'primary.text.base',
          })}
        >
          ₩49,000/월
        </span>
        <ul
          className={css({
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            listStyle: 'none',
            padding: '0',
            margin: '0',
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
              <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
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
              <X
                size={16}
                className={css({ color: 'neutral.icon.base', flexShrink: 0 })}
              />
              <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
                {feat}
              </span>
            </li>
          ))}
        </ul>
        <button
          className={css({
            width: '100%',
            padding: '10px 0',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: 'primary.fill.base',
            fontSize: '14px',
            fontWeight: '600',
            color: 'inverse.text.base',
            cursor: 'not-allowed',
            opacity: 0.38,
          })}
          disabled
        >
          현재 사용 중
        </button>
        <p
          className={css({
            fontSize: '12px',
            color: 'neutral.text.base',
            textAlign: 'center',
            margin: '0',
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
  const included = [
    '기본 대시보드',
    '무제한 사용자',
    '고급 분석',
    '전담 지원',
    'API 접근',
    'SLA 보장',
  ];
  return (
    <div
      className={css({
        flex: 1,
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
      <span
        className={css({
          fontSize: '20px',
          fontWeight: '700',
          color: 'neutral.text.base',
        })}
      >
        Enterprise
      </span>
      <span
        className={css({
          fontSize: '28px',
          fontWeight: '700',
          color: 'neutral.text.base',
        })}
      >
        맞춤 견적
      </span>
      <ul
        className={css({
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          listStyle: 'none',
          padding: '0',
          margin: '0',
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
            <span className={css({ fontSize: '14px', color: 'neutral.text.base' })}>
              {feat}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={css({
          width: '100%',
          padding: '10px 0',
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
  );
}

function PlanSection() {
  return (
    <section>
      <h2
        className={css({
          fontSize: '18px',
          fontWeight: '700',
          color: 'neutral.text.base',
          marginBottom: '16px',
          marginTop: '0',
        })}
      >
        플랜 선택
      </h2>
      <div
        className={css({
          display: 'flex',
          gap: '16px',
          alignItems: 'stretch',
        })}
      >
        <FreePlanCard />
        <ProPlanCard />
        <EnterprisePlanCard />
      </div>
    </section>
  );
}

// ── Section 2: 결제 수단 ──────────────────────────────────────────────────────

function PaymentMethodSection() {
  return (
    <section>
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
        <h2
          className={css({
            fontSize: '18px',
            fontWeight: '700',
            color: 'neutral.text.base',
            margin: '0',
          })}
        >
          등록된 결제 수단
        </h2>

        {/* 카드 표시 행 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
          })}
        >
          {/* 카드 아트 */}
          <div
            className={css({
              width: '160px',
              height: '100px',
              borderRadius: '8px',
              backgroundColor: 'neutral.canvas.03',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              padding: '12px 14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              flexShrink: 0,
            })}
          >
            <CreditCard
              size={20}
              className={css({ color: 'neutral.icon.base', opacity: 0.38 })}
            />
            <span
              className={css({
                fontSize: '11px',
                fontWeight: '600',
                color: 'neutral.text.base',
                letterSpacing: '1px',
              })}
            >
              •••• •••• •••• 4242
            </span>
          </div>

          {/* 카드 정보 */}
          <div
            className={css({
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            })}
          >
            <span
              className={css({
                fontSize: '16px',
                fontWeight: '700',
                color: 'neutral.text.base',
              })}
            >
              Visa
            </span>
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              })}
            >
              <span className={css({ fontSize: '14px', color: 'neutral.text.low' })}>
                만료일 12/26
              </span>
              <span
                className={css({
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '2px 8px',
                  borderRadius: '999px',
                  backgroundColor: 'positive.surface.base',
                  border: '1px solid',
                  borderColor: 'positive.border.base',
                  color: 'positive.text.base',
                })}
              >
                유효
              </span>
            </div>
          </div>

          {/* 액션 버튼들 */}
          <div className={css({ display: 'flex', gap: '8px' })}>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'neutral.border.base',
                backgroundColor: 'neutral.surface.transparent',
                fontSize: '13px',
                fontWeight: '500',
                color: 'neutral.text.base',
                cursor: 'pointer',
              })}
            >
              변경
            </button>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'neutral.surface.transparent',
                fontSize: '13px',
                fontWeight: '500',
                color: 'critical.text.base',
                cursor: 'pointer',
              })}
            >
              삭제
            </button>
          </div>
        </div>

        {/* 만료 임박 경고 배너 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '12px 16px',
            borderRadius: '8px',
            backgroundColor: 'warning.surface.base',
            border: '1px solid',
            borderColor: 'warning.border.base',
          })}
        >
          <AlertTriangle
            size={18}
            className={css({ color: 'warning.icon.base', flexShrink: 0 })}
          />
          <span className={css({ fontSize: '14px', color: 'warning.text.base', flex: 1 })}>
            결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.{' '}
            <span
              className={css({
                fontWeight: '600',
                color: 'warning.text.base',
                cursor: 'pointer',
                textDecoration: 'underline',
              })}
            >
              카드 변경
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}

// ── Section 3: 결제 내역 테이블 ───────────────────────────────────────────────

type BadgeVariant = 'positive' | 'critical' | 'warning' | 'info';

function StatusBadge({ label, variant }: { label: string; variant: BadgeVariant }) {
  if (variant === 'critical') {
    return (
      <span
        className={css({
          display: 'inline-block',
          padding: '2px 8px',
          borderRadius: '999px',
          backgroundColor: 'critical.fill.base',
          fontSize: '12px',
          fontWeight: '600',
          color: 'inverse.text.base',
        })}
      >
        {label}
      </span>
    );
  }
  if (variant === 'positive') {
    return (
      <span
        className={css({
          display: 'inline-block',
          padding: '2px 8px',
          borderRadius: '999px',
          backgroundColor: 'positive.surface.base',
          border: '1px solid',
          borderColor: 'positive.border.base',
          fontSize: '12px',
          fontWeight: '600',
          color: 'positive.text.base',
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
          display: 'inline-block',
          padding: '2px 8px',
          borderRadius: '999px',
          backgroundColor: 'warning.surface.base',
          border: '1px solid',
          borderColor: 'warning.border.base',
          fontSize: '12px',
          fontWeight: '600',
          color: 'warning.text.base',
        })}
      >
        {label}
      </span>
    );
  }
  // info
  return (
    <span
      className={css({
        display: 'inline-block',
        padding: '2px 8px',
        borderRadius: '999px',
        backgroundColor: 'info.surface.base',
        border: '1px solid',
        borderColor: 'info.border.base',
        fontSize: '12px',
        fontWeight: '600',
        color: 'info.text.base',
      })}
    >
      {label}
    </span>
  );
}

const billingRows: {
  date: string;
  desc: string;
  amount: string;
  status: string;
  statusVariant: BadgeVariant;
  action: 'receipt' | 'retry' | 'detail' | 'none';
}[] = [
  {
    date: '2025-08-01',
    desc: 'Pro 플랜 (8월)',
    amount: '₩49,000',
    status: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-07-01',
    desc: 'Pro 플랜 (7월)',
    amount: '₩49,000',
    status: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-06-15',
    desc: '추가 사용자 시트',
    amount: '₩9,000',
    status: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-06-01',
    desc: 'Pro 플랜 (6월)',
    amount: '₩49,000',
    status: '결제 실패',
    statusVariant: 'critical',
    action: 'retry',
  },
  {
    date: '2025-05-28',
    desc: 'Pro 플랜 (6월) 재시도',
    amount: '₩49,000',
    status: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-05-01',
    desc: 'Pro 플랜 (5월)',
    amount: '₩49,000',
    status: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
  {
    date: '2025-04-01',
    desc: 'Pro 플랜 (4월)',
    amount: '₩49,000',
    status: '처리 중',
    statusVariant: 'warning',
    action: 'none',
  },
  {
    date: '2025-03-10',
    desc: '환불 처리',
    amount: '-₩49,000',
    status: '환불 완료',
    statusVariant: 'info',
    action: 'detail',
  },
  {
    date: '2025-03-01',
    desc: 'Pro 플랜 (3월)',
    amount: '₩49,000',
    status: '결제 완료',
    statusVariant: 'positive',
    action: 'receipt',
  },
];

function BillingHistorySection() {
  return (
    <section>
      <div
        className={css({
          backgroundColor: 'neutral.canvas.02',
          border: '1px solid',
          borderColor: 'neutral.border.base',
          borderRadius: '12px',
          overflow: 'hidden',
        })}
      >
        {/* 섹션 헤더 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 24px',
            borderBottom: '1px solid',
            borderColor: 'neutral.border.low',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.base',
              margin: '0',
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
              fontSize: '13px',
              fontWeight: '500',
              color: 'neutral.text.base',
              cursor: 'pointer',
            })}
          >
            <Download size={14} className={css({ color: 'neutral.icon.base' })} />
            CSV 내보내기
          </button>
        </div>

        {/* 테이블 */}
        <table className={css({ width: '100%', borderCollapse: 'collapse' })}>
          <thead>
            <tr className={css({ backgroundColor: 'neutral.canvas.01' })}>
              {['날짜', '내역', '금액', '상태', '액션'].map((h) => (
                <th
                  key={h}
                  className={css({
                    padding: '10px 16px',
                    textAlign: 'left',
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'neutral.text.base',
                    opacity: 0.38,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  })}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {billingRows.map((row, i) => (
              <tr
                key={`${row.date}-${row.desc}`}
                className={css({
                  backgroundColor:
                    row.statusVariant === 'critical'
                      ? 'critical.surface.base'
                      : i % 2 === 1
                      ? 'neutral.canvas.03'
                      : 'neutral.canvas.02',
                  borderBottom: '1px solid',
                  borderColor: 'neutral.border.low',
                })}
              >
                <td
                  className={css({
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: 'neutral.text.low',
                  })}
                >
                  {row.date}
                </td>
                <td
                  className={css({
                    padding: '12px 16px',
                    fontSize: '13px',
                    color: 'neutral.text.base',
                    fontWeight: '500',
                  })}
                >
                  {row.desc}
                </td>
                <td
                  className={css({
                    padding: '12px 16px',
                    fontSize: '13px',
                    fontWeight: '600',
                    color: 'neutral.text.base',
                  })}
                >
                  {row.amount}
                </td>
                <td className={css({ padding: '12px 16px' })}>
                  <StatusBadge label={row.status} variant={row.statusVariant} />
                </td>
                <td className={css({ padding: '12px 16px' })}>
                  {row.action === 'receipt' || row.action === 'detail' ? (
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
                      <FileText
                        size={16}
                        className={css({ color: 'neutral.icon.base' })}
                      />
                    </button>
                  ) : row.action === 'retry' ? (
                    <button
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: '1px solid',
                        borderColor: 'critical.border.base',
                        backgroundColor: 'neutral.surface.transparent',
                        fontSize: '12px',
                        fontWeight: '600',
                        color: 'critical.text.base',
                        cursor: 'pointer',
                      })}
                    >
                      <RefreshCw
                        size={13}
                        className={css({ color: 'critical.icon.base' })}
                      />
                      재시도
                    </button>
                  ) : (
                    <span
                      className={css({
                        fontSize: '13px',
                        color: 'neutral.text.lowest',
                      })}
                    >
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

// ── Section 4: 청구 요약 ──────────────────────────────────────────────────────

function BillingSummarySection() {
  return (
    <section>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        })}
      >
        {/* 이번 달 청구 */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.base',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          })}
        >
          <TrendingUp size={24} className={css({ color: 'positive.icon.base' })} />
          <span
            className={css({
              fontSize: '26px',
              fontWeight: '700',
              color: 'neutral.text.base',
            })}
          >
            ₩58,000
          </span>
          <span
            className={css({
              alignSelf: 'flex-start',
              display: 'inline-block',
              padding: '2px 8px',
              borderRadius: '999px',
              backgroundColor: 'positive.surface.base',
              border: '1px solid',
              borderColor: 'positive.border.base',
              fontSize: '12px',
              fontWeight: '600',
              color: 'positive.text.base',
            })}
          >
            정상 결제
          </span>
          <span className={css({ fontSize: '12px', color: 'neutral.text.low' })}>
            Pro ₩49,000 + 추가 ₩9,000
          </span>
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '600',
              color: 'neutral.text.base',
            })}
          >
            이번 달 청구
          </span>
        </div>

        {/* 미결제 금액 */}
        <div
          className={css({
            backgroundColor: 'critical.surface.base',
            border: '1px solid',
            borderColor: 'critical.border.base',
            borderRadius: '12px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          })}
        >
          <AlertCircle size={24} className={css({ color: 'critical.icon.base' })} />
          <span
            className={css({
              fontSize: '26px',
              fontWeight: '700',
              color: 'critical.text.base',
            })}
          >
            ₩49,000
          </span>
          <span
            className={css({
              alignSelf: 'flex-start',
              display: 'inline-block',
              padding: '2px 8px',
              borderRadius: '999px',
              backgroundColor: 'critical.fill.base',
              fontSize: '12px',
              fontWeight: '600',
              color: 'inverse.text.base',
            })}
          >
            미결제
          </span>
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '600',
              color: 'critical.text.base',
            })}
          >
            미결제 금액
          </span>
          <button
            className={css({
              width: '100%',
              padding: '10px 0',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: 'critical.fill.base',
              fontSize: '14px',
              fontWeight: '600',
              color: 'inverse.text.base',
              cursor: 'pointer',
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
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          })}
        >
          <Calendar size={24} className={css({ color: 'info.icon.base' })} />
          <span
            className={css({
              fontSize: '22px',
              fontWeight: '700',
              color: 'neutral.text.base',
            })}
          >
            2025년 9월 1일
          </span>
          <span
            className={css({
              alignSelf: 'flex-start',
              display: 'inline-block',
              padding: '2px 8px',
              borderRadius: '999px',
              backgroundColor: 'info.surface.base',
              border: '1px solid',
              borderColor: 'info.border.base',
              fontSize: '12px',
              fontWeight: '600',
              color: 'info.text.base',
            })}
          >
            예정
          </span>
          <span className={css({ fontSize: '12px', color: 'neutral.text.low' })}>
            Pro 플랜 월정액 ₩49,000
          </span>
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '600',
              color: 'neutral.text.base',
            })}
          >
            다음 결제일
          </span>
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
        backgroundColor: 'neutral.canvas.01',
      })}
    >
      <Sidebar />

      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          backgroundColor: 'neutral.canvas.01',
        })}
      >
        <PlanSection />
        <PaymentMethodSection />
        <BillingHistorySection />
        <BillingSummarySection />
      </main>
    </div>
  );
}
