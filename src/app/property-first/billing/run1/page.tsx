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
import { css } from '@ds-token-test/styled-system-property-first/css';

// ─── Sidebar ────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside
      className={css({
        w: '240px',
        minH: '100vh',
        flexShrink: 0,
        bg: 'surface.neutral.emphasis',
        display: 'flex',
        flexDir: 'column',
        p: '6',
        gap: '2',
      })}
    >
      {/* Logo */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '2',
          mb: '4',
        })}
      >
        <LayoutDashboard size={24} className={css({ color: 'icon.inverse' })} />
        <span
          className={css({
            color: 'text.inverse',
            fontWeight: 'bold',
            fontSize: 'lg',
          })}
        >
          Mildang
        </span>
      </div>

      {/* Navigation */}
      <nav className={css({ display: 'flex', flexDir: 'column', gap: '1', flex: 1 })}>
        {/* Active: 결제 내역 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            px: '3',
            py: '2',
            borderRadius: 'md',
            bg: 'surface.neutral.default',
            cursor: 'pointer',
          })}
        >
          <CreditCard size={18} className={css({ color: 'icon.inverse' })} />
          <span className={css({ color: 'text.inverse', fontSize: 'sm', fontWeight: 'semibold' })}>
            결제 내역
          </span>
        </div>

        {/* 대시보드 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            px: '3',
            py: '2',
            borderRadius: 'md',
            cursor: 'pointer',
          })}
        >
          <LayoutDashboard size={18} className={css({ color: 'icon.inverse' })} />
          <span className={css({ color: 'text.inverse', fontSize: 'sm' })}>대시보드</span>
        </div>

        {/* 사용자 관리 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            px: '3',
            py: '2',
            borderRadius: 'md',
            cursor: 'pointer',
          })}
        >
          <Users size={18} className={css({ color: 'icon.inverse' })} />
          <span className={css({ color: 'text.inverse', fontSize: 'sm' })}>사용자 관리</span>
        </div>

        {/* 설정 — 비활성 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '3',
            px: '3',
            py: '2',
            borderRadius: 'md',
            cursor: 'pointer',
            opacity: 0.38,
          })}
        >
          <Settings size={18} className={css({ color: 'icon.inverse' })} />
          <span className={css({ color: 'text.inverse', fontSize: 'sm' })}>설정</span>
        </div>
      </nav>

      {/* 로그아웃 */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '2',
          cursor: 'pointer',
          px: '3',
          py: '2',
        })}
      >
        <LogOut size={18} className={css({ color: 'icon.critical.default' })} />
        <span className={css({ color: 'text.critical.default', fontSize: 'sm' })}>로그아웃</span>
      </div>
    </aside>
  );
}

// ─── Section 1: Plan Cards ──────────────────────────────────────────────────

function PlanCards() {
  return (
    <section className={css({ mb: '8' })}>
      <h2
        className={css({
          fontSize: 'xl',
          fontWeight: 'bold',
          color: 'text.neutral.default',
          mb: '4',
        })}
      >
        플랜 선택
      </h2>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4',
        })}
      >
        {/* Free Card */}
        <div
          className={css({
            bg: 'surface.neutral.ghost',
            border: '1px solid',
            borderColor: 'border.neutral.default',
            borderRadius: 'xl',
            p: '6',
            display: 'flex',
            flexDir: 'column',
            gap: '4',
          })}
        >
          <div>
            <p className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.neutral.default' })}>
              Free
            </p>
            <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.neutral.default', mt: '1' })}>
              ₩0<span className={css({ fontSize: 'sm', fontWeight: 'normal' })}>/월</span>
            </p>
          </div>
          <ul className={css({ display: 'flex', flexDir: 'column', gap: '2', flex: 1 })}>
            {['기본 대시보드', '최대 3명 사용자', '1GB 저장공간'].map((feature) => (
              <li key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                <Check size={16} className={css({ color: 'icon.positive.default', flexShrink: 0 })} />
                <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>{feature}</span>
              </li>
            ))}
            {['고급 분석', 'API 접근'].map((feature) => (
              <li
                key={feature}
                className={css({ display: 'flex', alignItems: 'center', gap: '2', opacity: 0.38 })}
              >
                <X size={16} className={css({ color: 'icon.neutral.default', flexShrink: 0 })} />
                <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={css({
              mt: 'auto',
              w: 'full',
              py: '2',
              borderRadius: 'md',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              bg: 'surface.neutral.ghost',
              color: 'text.neutral.default',
              fontSize: 'sm',
              fontWeight: 'medium',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
            disabled
          >
            현재 플랜
          </button>
        </div>

        {/* Pro Card */}
        <div
          className={css({
            border: '1px solid',
            borderColor: 'border.brand.emphasis',
            borderRadius: 'xl',
            overflow: 'hidden',
            display: 'flex',
            flexDir: 'column',
          })}
        >
          {/* Banner */}
          <div
            className={css({
              bg: 'fill.brand',
              px: '6',
              py: '2',
              textAlign: 'center',
            })}
          >
            <span className={css({ color: 'text.inverse', fontSize: 'sm', fontWeight: 'bold' })}>추천</span>
          </div>

          <div
            className={css({
              bg: 'surface.brand.subtle',
              p: '6',
              display: 'flex',
              flexDir: 'column',
              gap: '4',
              flex: 1,
            })}
          >
            <div>
              <div className={css({ display: 'flex', alignItems: 'center', gap: '2', mb: '1' })}>
                <p className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.brand.default' })}>Pro</p>
                <span
                  className={css({
                    px: '2',
                    py: '0.5',
                    borderRadius: 'full',
                    bg: 'fill.brand',
                    color: 'text.inverse',
                    fontSize: 'xs',
                    fontWeight: 'bold',
                  })}
                >
                  현재 플랜
                </span>
              </div>
              <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.brand.default' })}>
                ₩49,000<span className={css({ fontSize: 'sm', fontWeight: 'normal' })}>/월</span>
              </p>
            </div>

            <ul className={css({ display: 'flex', flexDir: 'column', gap: '2', flex: 1 })}>
              {[
                '기본 대시보드',
                '최대 20명 사용자',
                '100GB 저장공간',
                '고급 분석',
                'API 접근',
              ].map((feature) => (
                <li key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                  <Check size={16} className={css({ color: 'icon.brand.default', flexShrink: 0 })} />
                  <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>{feature}</span>
                </li>
              ))}
              {['엔터프라이즈 SLA'].map((feature) => (
                <li
                  key={feature}
                  className={css({ display: 'flex', alignItems: 'center', gap: '2', opacity: 0.38 })}
                >
                  <X size={16} className={css({ color: 'icon.neutral.default', flexShrink: 0 })} />
                  <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={css({
                mt: 'auto',
                w: 'full',
                py: '2',
                borderRadius: 'md',
                bg: 'fill.brand',
                color: 'text.inverse',
                fontSize: 'sm',
                fontWeight: 'medium',
                cursor: 'not-allowed',
                opacity: 0.38,
                border: 'none',
              })}
              disabled
            >
              현재 사용 중
            </button>

            <p className={css({ fontSize: 'xs', color: 'text.neutral.muted', textAlign: 'center', opacity: 0.38 })}>
              다음 결제일: 2025년 9월 1일
            </p>
          </div>
        </div>

        {/* Enterprise Card */}
        <div
          className={css({
            bg: 'surface.neutral.ghost',
            border: '1px solid',
            borderColor: 'border.neutral.default',
            borderRadius: 'xl',
            p: '6',
            display: 'flex',
            flexDir: 'column',
            gap: '4',
          })}
        >
          <div>
            <p className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.neutral.default' })}>
              Enterprise
            </p>
            <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.neutral.default', mt: '1' })}>
              맞춤 견적
            </p>
          </div>
          <ul className={css({ display: 'flex', flexDir: 'column', gap: '2', flex: 1 })}>
            {[
              '기본 대시보드',
              '무제한 사용자',
              '무제한 저장공간',
              '고급 분석',
              'API 접근',
              '엔터프라이즈 SLA',
            ].map((feature) => (
              <li key={feature} className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
                <Check size={16} className={css({ color: 'icon.positive.default', flexShrink: 0 })} />
                <span className={css({ fontSize: 'sm', color: 'text.neutral.default' })}>{feature}</span>
              </li>
            ))}
          </ul>
          <button
            className={css({
              mt: 'auto',
              w: 'full',
              py: '2',
              borderRadius: 'md',
              bg: 'fill.brand',
              color: 'text.inverse',
              fontSize: 'sm',
              fontWeight: 'medium',
              cursor: 'pointer',
              border: 'none',
            })}
          >
            영업팀 문의
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Payment Method ───────────────────────────────────────────────

function PaymentMethod() {
  return (
    <section className={css({ mb: '8' })}>
      <div
        className={css({
          bg: 'surface.neutral.ghost',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: 'xl',
          p: '6',
        })}
      >
        <h2 className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.neutral.default', mb: '4' })}>
          등록된 결제 수단
        </h2>

        {/* Card display */}
        <div className={css({ display: 'flex', alignItems: 'center', gap: '4', mb: '4' })}>
          {/* Card art */}
          <div
            className={css({
              bg: 'surface.neutral.muted',
              borderRadius: 'lg',
              p: '4',
              w: '160px',
              h: '100px',
              display: 'flex',
              flexDir: 'column',
              justifyContent: 'space-between',
              flexShrink: 0,
            })}
          >
            <CreditCard size={24} className={css({ color: 'icon.neutral.default', opacity: 0.38 })} />
            <span className={css({ fontSize: 'sm', fontWeight: 'bold', color: 'text.neutral.default', letterSpacing: 'wider' })}>
              •••• •••• •••• 4242
            </span>
          </div>

          {/* Card info */}
          <div className={css({ flex: 1 })}>
            <p className={css({ fontSize: 'base', fontWeight: 'bold', color: 'text.neutral.default', mb: '1' })}>Visa</p>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
              <span className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>12/26</span>
              <span
                className={css({
                  px: '2',
                  py: '0.5',
                  borderRadius: 'full',
                  bg: 'surface.positive.subtle',
                  border: '1px solid',
                  borderColor: 'border.positive.default',
                  color: 'text.positive.default',
                  fontSize: 'xs',
                  fontWeight: 'medium',
                })}
              >
                유효
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className={css({ display: 'flex', gap: '2', flexShrink: 0 })}>
            <button
              className={css({
                px: '3',
                py: '1.5',
                borderRadius: 'md',
                border: '1px solid',
                borderColor: 'border.neutral.default',
                bg: 'surface.transparent',
                color: 'text.neutral.default',
                fontSize: 'sm',
                cursor: 'pointer',
              })}
            >
              변경
            </button>
            <button
              className={css({
                px: '3',
                py: '1.5',
                borderRadius: 'md',
                border: 'none',
                bg: 'surface.transparent',
                color: 'text.critical.default',
                fontSize: 'sm',
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
            gap: '3',
            p: '3',
            borderRadius: 'lg',
            bg: 'surface.warning.subtle',
            border: '1px solid',
            borderColor: 'border.warning.default',
          })}
        >
          <AlertTriangle size={18} className={css({ color: 'icon.warning.default', flexShrink: 0 })} />
          <p className={css({ fontSize: 'sm', color: 'text.neutral.default', flex: 1 })}>
            결제 카드가 2개월 후 만료됩니다. 지금 업데이트하세요.
          </p>
          <span
            className={css({
              fontSize: 'sm',
              color: 'text.warning.default',
              fontWeight: 'medium',
              cursor: 'pointer',
              flexShrink: 0,
            })}
          >
            카드 변경
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Billing History Table ───────────────────────────────────────

type BadgeVariant = 'positive' | 'critical' | 'warning' | 'info';

function StatusBadge({ variant, label }: { variant: BadgeVariant; label: string }) {
  const styles: Record<BadgeVariant, string> = {
    positive: css({
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      bg: 'surface.positive.subtle',
      border: '1px solid',
      borderColor: 'border.positive.default',
      color: 'text.positive.default',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
    critical: css({
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      bg: 'fill.critical',
      color: 'text.inverse',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
    warning: css({
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      bg: 'surface.warning.subtle',
      border: '1px solid',
      borderColor: 'border.warning.default',
      color: 'text.warning.default',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
    info: css({
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      bg: 'surface.info.subtle',
      border: '1px solid',
      borderColor: 'border.info.default',
      color: 'text.info.default',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
  };

  return <span className={styles[variant]}>{label}</span>;
}

function BillingHistory() {
  const rows: {
    date: string;
    desc: string;
    amount: string;
    status: { variant: BadgeVariant; label: string };
    action: 'receipt' | 'retry' | 'detail' | 'none';
    isFailed?: boolean;
  }[] = [
    {
      date: '2025-08-01',
      desc: 'Pro 플랜 (8월)',
      amount: '₩49,000',
      status: { variant: 'positive', label: '결제 완료' },
      action: 'receipt',
    },
    {
      date: '2025-07-01',
      desc: 'Pro 플랜 (7월)',
      amount: '₩49,000',
      status: { variant: 'positive', label: '결제 완료' },
      action: 'receipt',
    },
    {
      date: '2025-06-15',
      desc: '추가 사용자 시트',
      amount: '₩9,000',
      status: { variant: 'positive', label: '결제 완료' },
      action: 'receipt',
    },
    {
      date: '2025-06-01',
      desc: 'Pro 플랜 (6월)',
      amount: '₩49,000',
      status: { variant: 'critical', label: '결제 실패' },
      action: 'retry',
      isFailed: true,
    },
    {
      date: '2025-05-28',
      desc: 'Pro 플랜 (6월) 재시도',
      amount: '₩49,000',
      status: { variant: 'positive', label: '결제 완료' },
      action: 'receipt',
    },
    {
      date: '2025-05-01',
      desc: 'Pro 플랜 (5월)',
      amount: '₩49,000',
      status: { variant: 'positive', label: '결제 완료' },
      action: 'receipt',
    },
    {
      date: '2025-04-01',
      desc: 'Pro 플랜 (4월)',
      amount: '₩49,000',
      status: { variant: 'warning', label: '처리 중' },
      action: 'none',
    },
    {
      date: '2025-03-10',
      desc: '환불 처리',
      amount: '-₩49,000',
      status: { variant: 'info', label: '환불 완료' },
      action: 'detail',
    },
    {
      date: '2025-03-01',
      desc: 'Pro 플랜 (3월)',
      amount: '₩49,000',
      status: { variant: 'positive', label: '결제 완료' },
      action: 'receipt',
    },
  ];

  return (
    <section className={css({ mb: '8' })}>
      <div
        className={css({
          bg: 'surface.neutral.ghost',
          border: '1px solid',
          borderColor: 'border.neutral.default',
          borderRadius: 'xl',
          overflow: 'hidden',
        })}
      >
        {/* Section header */}
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            px: '6',
            py: '4',
            borderBottom: '1px solid',
            borderColor: 'border.neutral.default',
          })}
        >
          <h2 className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.neutral.default' })}>
            결제 내역
          </h2>
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '1.5',
              px: '3',
              py: '1.5',
              borderRadius: 'md',
              border: '1px solid',
              borderColor: 'border.neutral.default',
              bg: 'surface.transparent',
              color: 'text.neutral.default',
              fontSize: 'sm',
              cursor: 'pointer',
            })}
          >
            <Download size={14} className={css({ color: 'icon.neutral.default' })} />
            CSV 내보내기
          </button>
        </div>

        {/* Table */}
        <table className={css({ w: 'full', borderCollapse: 'collapse' })}>
          <thead>
            <tr className={css({ bg: 'surface.neutral.subtle' })}>
              {['날짜', '내역', '금액', '상태', '액션'].map((h) => (
                <th
                  key={h}
                  className={css({
                    px: '4',
                    py: '3',
                    textAlign: 'left',
                    fontSize: 'xs',
                    fontWeight: 'semibold',
                    color: 'text.neutral.muted',
                    textTransform: 'uppercase',
                    letterSpacing: 'wider',
                    opacity: 0.38,
                  })}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={css({
                  bg: row.isFailed
                    ? 'surface.critical.subtle'
                    : i % 2 === 1
                    ? 'surface.neutral.subtle'
                    : 'surface.neutral.ghost',
                  borderBottom: '1px solid',
                  borderColor: 'border.neutral.subtle',
                })}
              >
                <td className={css({ px: '4', py: '3', fontSize: 'sm', color: 'text.neutral.muted' })}>
                  {row.date}
                </td>
                <td className={css({ px: '4', py: '3', fontSize: 'sm', color: 'text.neutral.default' })}>
                  {row.desc}
                </td>
                <td className={css({ px: '4', py: '3', fontSize: 'sm', fontWeight: 'medium', color: 'text.neutral.default' })}>
                  {row.amount}
                </td>
                <td className={css({ px: '4', py: '3' })}>
                  <StatusBadge variant={row.status.variant} label={row.status.label} />
                </td>
                <td className={css({ px: '4', py: '3' })}>
                  {row.action === 'receipt' && (
                    <button
                      className={css({
                        p: '1.5',
                        borderRadius: 'md',
                        border: 'none',
                        bg: 'surface.transparent',
                        color: 'icon.neutral.default',
                        cursor: 'pointer',
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  )}
                  {row.action === 'retry' && (
                    <button
                      className={css({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1',
                        px: '3',
                        py: '1',
                        borderRadius: 'md',
                        border: '1px solid',
                        borderColor: 'border.critical.default',
                        bg: 'surface.transparent',
                        color: 'text.critical.default',
                        fontSize: 'xs',
                        cursor: 'pointer',
                      })}
                    >
                      <RefreshCw size={12} />
                      재시도
                    </button>
                  )}
                  {row.action === 'detail' && (
                    <button
                      className={css({
                        p: '1.5',
                        borderRadius: 'md',
                        border: 'none',
                        bg: 'surface.transparent',
                        color: 'icon.neutral.default',
                        cursor: 'pointer',
                      })}
                    >
                      <FileText size={16} />
                    </button>
                  )}
                  {row.action === 'none' && (
                    <span className={css({ color: 'text.neutral.subtle', fontSize: 'sm' })}>—</span>
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

// ─── Section 4: Billing Summary ──────────────────────────────────────────────

function BillingSummary() {
  return (
    <section className={css({ mb: '8' })}>
      <div
        className={css({
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '4',
        })}
      >
        {/* 이번 달 청구 */}
        <div
          className={css({
            bg: 'surface.neutral.ghost',
            border: '1px solid',
            borderColor: 'border.neutral.default',
            borderRadius: 'xl',
            p: '6',
            display: 'flex',
            flexDir: 'column',
            gap: '3',
          })}
        >
          <TrendingUp size={24} className={css({ color: 'icon.positive.default' })} />
          <div>
            <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.neutral.default' })}>
              ₩58,000
            </p>
            <span
              className={css({
                display: 'inline-block',
                mt: '1',
                px: '2',
                py: '0.5',
                borderRadius: 'full',
                bg: 'surface.positive.subtle',
                border: '1px solid',
                borderColor: 'border.positive.default',
                color: 'text.positive.default',
                fontSize: 'xs',
                fontWeight: 'medium',
              })}
            >
              정상 결제
            </span>
          </div>
          <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
            Pro ₩49,000 + 추가 ₩9,000
          </p>
          <p className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'text.neutral.default' })}>
            이번 달 청구
          </p>
        </div>

        {/* 미결제 금액 */}
        <div
          className={css({
            bg: 'surface.critical.subtle',
            border: '1px solid',
            borderColor: 'border.critical.default',
            borderRadius: 'xl',
            p: '6',
            display: 'flex',
            flexDir: 'column',
            gap: '3',
          })}
        >
          <AlertCircle size={24} className={css({ color: 'icon.critical.default' })} />
          <div>
            <p className={css({ fontSize: '2xl', fontWeight: 'bold', color: 'text.critical.default' })}>
              ₩49,000
            </p>
            <span
              className={css({
                display: 'inline-block',
                mt: '1',
                px: '2',
                py: '0.5',
                borderRadius: 'full',
                bg: 'fill.critical',
                color: 'text.inverse',
                fontSize: 'xs',
                fontWeight: 'medium',
              })}
            >
              미결제
            </span>
          </div>
          <button
            className={css({
              mt: 'auto',
              w: 'full',
              py: '2',
              borderRadius: 'md',
              bg: 'fill.critical',
              color: 'text.inverse',
              fontSize: 'sm',
              fontWeight: 'bold',
              cursor: 'pointer',
              border: 'none',
            })}
          >
            지금 결제
          </button>
          <p className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'text.critical.default' })}>
            미결제 금액
          </p>
        </div>

        {/* 다음 결제일 */}
        <div
          className={css({
            bg: 'surface.neutral.ghost',
            border: '1px solid',
            borderColor: 'border.neutral.default',
            borderRadius: 'xl',
            p: '6',
            display: 'flex',
            flexDir: 'column',
            gap: '3',
          })}
        >
          <Calendar size={24} className={css({ color: 'icon.info.default' })} />
          <div>
            <p className={css({ fontSize: 'xl', fontWeight: 'bold', color: 'text.neutral.default' })}>
              2025년 9월 1일
            </p>
            <span
              className={css({
                display: 'inline-block',
                mt: '1',
                px: '2',
                py: '0.5',
                borderRadius: 'full',
                bg: 'surface.info.subtle',
                border: '1px solid',
                borderColor: 'border.info.default',
                color: 'text.info.default',
                fontSize: 'xs',
                fontWeight: 'medium',
              })}
            >
              예정
            </span>
          </div>
          <p className={css({ fontSize: 'sm', color: 'text.neutral.muted' })}>
            Pro 플랜 월정액 ₩49,000
          </p>
          <p className={css({ fontSize: 'sm', fontWeight: 'semibold', color: 'text.neutral.default' })}>
            다음 결제일
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function BillingPage() {
  return (
    <div
      className={css({
        display: 'flex',
        minH: '100vh',
        bg: 'surface.neutral.subtle',
      })}
    >
      <Sidebar />

      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          p: '8',
        })}
      >
        <div className={css({ maxW: '1100px', mx: 'auto' })}>
          <h1
            className={css({
              fontSize: '2xl',
              fontWeight: 'bold',
              color: 'text.neutral.default',
              mb: '8',
            })}
          >
            결제 및 구독 관리
          </h1>

          <PlanCards />
          <PaymentMethod />
          <BillingHistory />
          <BillingSummary />
        </div>
      </main>
    </div>
  );
}
