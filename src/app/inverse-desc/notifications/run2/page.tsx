import { css } from '@ds-token-test/styled-system-intent-first-slotfirst/css';
import {
  Bell,
  Settings,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Zap,
  X,
  BellOff,
} from 'lucide-react';

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  return (
    <header
      className={css({
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'canvas.neutral.01',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'border.neutral.base',
        flexShrink: 0,
      })}
    >
      {/* Top row */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: '6',
          py: '4',
        })}
      >
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          <Bell
            size={20}
            className={css({ color: 'icon.neutral.base' })}
          />
          <span
            className={css({
              fontSize: 'xl',
              fontWeight: 'semibold',
              color: 'text.neutral.base',
            })}
          >
            알림 센터
          </span>
        </div>

        <div className={css({ display: 'flex', alignItems: 'center', gap: '2' })}>
          {/* "모두 읽음 처리" ghost button — disabled */}
          <button
            className={css({
              px: '3',
              py: '1.5',
              borderRadius: 'md',
              backgroundColor: 'surface.neutral.transparent',
              color: 'text.neutral.base',
              fontSize: 'sm',
              cursor: 'not-allowed',
              opacity: 0.38,
              border: 'none',
            })}
            disabled
          >
            모두 읽음 처리
          </button>

          {/* Settings ghost icon button */}
          <button
            className={css({
              p: '2',
              borderRadius: 'md',
              backgroundColor: 'surface.neutral.transparent',
              border: 'none',
              cursor: 'pointer',
            })}
          >
            <Settings
              size={18}
              className={css({ color: 'icon.neutral.base' })}
            />
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          px: '6',
          gap: '1',
        })}
      >
        {/* Active tab: 전체 */}
        <button
          className={css({
            px: '4',
            py: '2',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'border.primary.highest',
            color: 'text.primary.base',
            fontWeight: 'semibold',
            fontSize: 'sm',
            backgroundColor: 'surface.neutral.transparent',
            border: 'none',
            borderBottom: '2px solid',
            cursor: 'pointer',
          })}
        >
          전체
        </button>

        {/* Inactive tabs */}
        {['읽지 않음', '완료됨'].map((label) => (
          <button
            key={label}
            className={css({
              px: '4',
              py: '2',
              color: 'text.neutral.base',
              fontSize: 'sm',
              backgroundColor: 'surface.neutral.transparent',
              border: 'none',
              opacity: 0.38,
              cursor: 'pointer',
            })}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar() {
  return (
    <aside
      className={css({
        width: '200px',
        flexShrink: 0,
        backgroundColor: 'canvas.neutral.02',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'border.neutral.base',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '4',
        p: '4',
      })}
    >
      {/* Summary counter cards */}
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}>
        {/* Unread card */}
        <div
          className={css({
            backgroundColor: 'surface.primary.base',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'border.primary.base',
            borderRadius: 'lg',
            p: '3',
            display: 'flex',
            alignItems: 'center',
            gap: '2',
          })}
        >
          <Bell size={16} className={css({ color: 'icon.primary.base' })} />
          <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.primary.base' })}>
            8
          </span>
          <span className={css({ fontSize: 'xs', color: 'text.primary.base' })}>읽지 않음</span>
        </div>

        {/* Critical card */}
        <div
          className={css({
            backgroundColor: 'surface.critical.base',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'border.critical.base',
            borderRadius: 'lg',
            p: '3',
            display: 'flex',
            alignItems: 'center',
            gap: '2',
          })}
        >
          <AlertCircle size={16} className={css({ color: 'icon.critical.base' })} />
          <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.critical.base' })}>
            2
          </span>
          <span className={css({ fontSize: 'xs', color: 'text.critical.base' })}>즉시 확인</span>
        </div>

        {/* Warning card */}
        <div
          className={css({
            backgroundColor: 'surface.warning.base',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'border.warning.base',
            borderRadius: 'lg',
            p: '3',
            display: 'flex',
            alignItems: 'center',
            gap: '2',
          })}
        >
          <AlertTriangle size={16} className={css({ color: 'icon.warning.base' })} />
          <span className={css({ fontSize: 'lg', fontWeight: 'bold', color: 'text.warning.base' })}>
            3
          </span>
          <span className={css({ fontSize: 'xs', color: 'text.warning.base' })}>주의 필요</span>
        </div>
      </div>

      {/* Divider */}
      <hr
        className={css({
          border: 'none',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'border.neutral.low',
        })}
      />

      {/* Category filters */}
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '1' })}>
        {/* Selected: 전체 */}
        <button
          className={css({
            px: '3',
            py: '1.5',
            borderRadius: 'full',
            backgroundColor: 'fill.primary.base',
            color: 'inverse.text.base',
            fontSize: 'sm',
            fontWeight: 'medium',
            border: 'none',
            textAlign: 'left',
            cursor: 'pointer',
          })}
        >
          전체
        </button>

        {/* Unselected categories */}
        {['시스템', '결제', '배포', '보안', '마케팅'].map((cat) => (
          <button
            key={cat}
            className={css({
              px: '3',
              py: '1.5',
              borderRadius: 'full',
              backgroundColor: 'surface.neutral.base',
              color: 'text.neutral.base',
              fontSize: 'sm',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
            })}
          >
            {cat}
          </button>
        ))}
      </div>
    </aside>
  );
}

// ─── Badge ────────────────────────────────────────────────────────────────────

interface BadgeProps {
  variant: 'positive-outline' | 'critical-filled' | 'warning-outline' | 'info-outline' | 'primary-filled' | 'neutral-outline';
  children: React.ReactNode;
  dimmed?: boolean;
}

function Badge({ variant, children, dimmed }: BadgeProps) {
  const styles = {
    'positive-outline': css({
      backgroundColor: 'surface.positive.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.positive.base',
      color: 'text.positive.base',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
    'critical-filled': css({
      backgroundColor: 'fill.critical.base',
      color: 'inverse.text.base',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
    'warning-outline': css({
      backgroundColor: 'surface.warning.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.warning.base',
      color: 'text.warning.base',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
    'info-outline': css({
      backgroundColor: 'surface.info.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.info.base',
      color: 'text.info.base',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
    'primary-filled': css({
      backgroundColor: 'fill.primary.base',
      color: 'inverse.text.base',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
    'neutral-outline': css({
      backgroundColor: 'surface.neutral.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.neutral.base',
      color: 'text.neutral.low',
      px: '2',
      py: '0.5',
      borderRadius: 'full',
      fontSize: 'xs',
      fontWeight: 'medium',
    }),
  };

  return (
    <span
      className={styles[variant]}
      style={dimmed ? { opacity: 0.38 } : undefined}
    >
      {children}
    </span>
  );
}

// ─── Notification Card ────────────────────────────────────────────────────────

interface NotificationCardProps {
  accentColor: 'positive' | 'critical' | 'warning' | 'info' | 'primary';
  isUnread: boolean;
  icon: React.ReactNode;
  title: string;
  body: string;
  time: string;
  badge: React.ReactNode;
  actions: React.ReactNode;
  accentDimmed?: boolean;
  iconDimmed?: boolean;
  titleDimmed?: boolean;
}

function NotificationCard({
  accentColor,
  isUnread,
  icon,
  title,
  body,
  time,
  badge,
  actions,
  accentDimmed,
  iconDimmed,
  titleDimmed,
}: NotificationCardProps) {
  const accentFillMap = {
    positive: css({ backgroundColor: 'fill.positive.base' }),
    critical: css({ backgroundColor: 'fill.critical.base' }),
    warning: css({ backgroundColor: 'fill.warning.base' }),
    info: css({ backgroundColor: 'fill.info.base' }),
    primary: css({ backgroundColor: 'fill.primary.base' }),
  };

  return (
    <div
      className={css({
        display: 'flex',
        position: 'relative',
        borderRadius: 'lg',
        overflow: 'hidden',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border.neutral.base',
        backgroundColor: isUnread ? 'surface.primary.base' : 'canvas.neutral.01',
      })}
    >
      {/* Left accent border */}
      <div
        className={accentFillMap[accentColor]}
        style={{
          width: '4px',
          flexShrink: 0,
          opacity: accentDimmed ? 0.38 : 1,
        }}
      />

      {/* Content */}
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        {/* Icon + title row */}
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '3', pr: '8' })}>
          <div style={{ opacity: iconDimmed ? 0.38 : 1, flexShrink: 0, marginTop: '2px' }}>
            {icon}
          </div>
          <span
            className={css({
              fontWeight: 'semibold',
              fontSize: 'sm',
              color: titleDimmed ? 'text.neutral.low' : 'text.neutral.base',
            })}
          >
            {title}
          </span>
        </div>

        {/* Body */}
        <p
          className={css({ fontSize: 'sm', color: 'text.neutral.base', lineHeight: '1.5' })}
          style={{ opacity: 0.38 }}
        >
          {body}
        </p>

        {/* Footer: time + badge + actions */}
        <div className={css({ display: 'flex', alignItems: 'center', gap: '2', flexWrap: 'wrap' })}>
          <span
            className={css({ fontSize: 'xs', color: 'text.neutral.base' })}
            style={{ opacity: 0.38 }}
          >
            {time}
          </span>
          {badge}
          <div className={css({ display: 'flex', gap: '2', ml: 'auto' })}>{actions}</div>
        </div>
      </div>

      {/* X close button — top-right */}
      <button
        className={css({
          position: 'absolute',
          top: '3',
          right: '3',
          p: '1',
          borderRadius: 'sm',
          backgroundColor: 'surface.neutral.transparent',
          border: 'none',
          cursor: 'pointer',
        })}
      >
        <X size={14} className={css({ color: 'icon.neutral.base' })} />
      </button>
    </div>
  );
}

// ─── Action Buttons ───────────────────────────────────────────────────────────

function FilledButton({
  intent,
  children,
  dimmed,
}: {
  intent: 'critical' | 'primary' | 'positive';
  children: React.ReactNode;
  dimmed?: boolean;
}) {
  const bgMap = {
    critical: css({
      backgroundColor: 'fill.critical.base',
      color: 'inverse.text.base',
      px: '3',
      py: '1',
      borderRadius: 'md',
      fontSize: 'xs',
      fontWeight: 'medium',
      border: 'none',
      cursor: 'pointer',
    }),
    primary: css({
      backgroundColor: 'fill.primary.base',
      color: 'inverse.text.base',
      px: '3',
      py: '1',
      borderRadius: 'md',
      fontSize: 'xs',
      fontWeight: 'medium',
      border: 'none',
      cursor: 'pointer',
    }),
    positive: css({
      backgroundColor: 'fill.positive.base',
      color: 'inverse.text.base',
      px: '3',
      py: '1',
      borderRadius: 'md',
      fontSize: 'xs',
      fontWeight: 'medium',
      border: 'none',
      cursor: 'pointer',
    }),
  };

  return (
    <button className={bgMap[intent]} style={dimmed ? { opacity: 0.38 } : undefined}>
      {children}
    </button>
  );
}

function OutlineButton({
  intent,
  children,
  dimmed,
}: {
  intent: 'positive' | 'warning' | 'info' | 'neutral';
  children: React.ReactNode;
  dimmed?: boolean;
}) {
  const styleMap = {
    positive: css({
      backgroundColor: 'surface.neutral.transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.positive.highest',
      color: 'text.positive.base',
      px: '3',
      py: '1',
      borderRadius: 'md',
      fontSize: 'xs',
      fontWeight: 'medium',
      cursor: 'pointer',
    }),
    warning: css({
      backgroundColor: 'surface.neutral.transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.warning.highest',
      color: 'text.warning.base',
      px: '3',
      py: '1',
      borderRadius: 'md',
      fontSize: 'xs',
      fontWeight: 'medium',
      cursor: 'pointer',
    }),
    info: css({
      backgroundColor: 'surface.neutral.transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.info.highest',
      color: 'text.info.base',
      px: '3',
      py: '1',
      borderRadius: 'md',
      fontSize: 'xs',
      fontWeight: 'medium',
      cursor: 'pointer',
    }),
    neutral: css({
      backgroundColor: 'surface.neutral.transparent',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.neutral.base',
      color: 'text.neutral.base',
      px: '3',
      py: '1',
      borderRadius: 'md',
      fontSize: 'xs',
      fontWeight: 'medium',
      cursor: 'pointer',
    }),
  };

  return (
    <button className={styleMap[intent]} style={dimmed ? { opacity: 0.38 } : undefined}>
      {children}
    </button>
  );
}

function GhostButton({
  children,
  dimmed,
}: {
  children: React.ReactNode;
  dimmed?: boolean;
}) {
  return (
    <button
      className={css({
        backgroundColor: 'surface.neutral.transparent',
        color: 'text.neutral.base',
        px: '3',
        py: '1',
        borderRadius: 'md',
        fontSize: 'xs',
        border: 'none',
        cursor: 'pointer',
      })}
      style={dimmed ? { opacity: 0.38 } : undefined}
    >
      {children}
    </button>
  );
}

// ─── Notification List ────────────────────────────────────────────────────────

function NotificationList() {
  return (
    <main
      className={css({
        flex: 1,
        overflowY: 'auto',
        backgroundColor: 'canvas.neutral.02',
        p: '4',
        display: 'flex',
        flexDirection: 'column',
        gap: '3',
      })}
    >
      {/* Card 1 — positive, unread */}
      <NotificationCard
        accentColor="positive"
        isUnread
        icon={<CheckCircle2 size={18} className={css({ color: 'icon.positive.base' })} />}
        title="배포 v2.4.1 완료"
        body="프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다."
        time="방금 전"
        badge={<Badge variant="positive-outline">완료됨</Badge>}
        actions={<OutlineButton intent="positive">배포 로그 보기</OutlineButton>}
      />

      {/* Card 2 — critical, unread */}
      <NotificationCard
        accentColor="critical"
        isUnread
        icon={<XCircle size={18} className={css({ color: 'icon.critical.base' })} />}
        title="DB 연결 오류"
        body="데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요."
        time="3분 전"
        badge={<Badge variant="critical-filled">즉시 확인</Badge>}
        actions={
          <>
            <FilledButton intent="critical">상세 보기</FilledButton>
            <GhostButton dimmed>무시</GhostButton>
          </>
        }
      />

      {/* Card 3 — warning, unread */}
      <NotificationCard
        accentColor="warning"
        isUnread
        icon={<AlertTriangle size={18} className={css({ color: 'icon.warning.base' })} />}
        title="메모리 사용량 경고"
        body="서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다."
        time="15분 전"
        badge={<Badge variant="warning-outline">주의</Badge>}
        actions={<OutlineButton intent="warning">리소스 모니터 열기</OutlineButton>}
      />

      {/* Card 4 — info, unread */}
      <NotificationCard
        accentColor="info"
        isUnread
        icon={<Info size={18} className={css({ color: 'icon.info.base' })} />}
        title="시스템 점검 예정"
        body="2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다."
        time="1시간 전"
        badge={<Badge variant="info-outline">안내</Badge>}
        actions={<OutlineButton intent="info">일정 확인</OutlineButton>}
      />

      {/* Card 5 — primary, unread */}
      <NotificationCard
        accentColor="primary"
        isUnread
        icon={<Zap size={18} className={css({ color: 'icon.primary.base' })} />}
        title="새 기능 출시"
        body="대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요."
        time="2시간 전"
        badge={<Badge variant="primary-filled">새 기능</Badge>}
        actions={<FilledButton intent="primary">지금 확인</FilledButton>}
      />

      {/* Card 6 — positive, read */}
      <NotificationCard
        accentColor="positive"
        isUnread={false}
        accentDimmed
        iconDimmed
        titleDimmed
        icon={<CheckCircle2 size={18} className={css({ color: 'icon.positive.base' })} />}
        title="결제 처리 완료"
        body="Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다."
        time="어제"
        badge={<Badge variant="positive-outline" dimmed>완료됨</Badge>}
        actions={<GhostButton dimmed>영수증 보기</GhostButton>}
      />

      {/* Card 7 — warning, read */}
      <NotificationCard
        accentColor="warning"
        isUnread={false}
        accentDimmed
        iconDimmed
        titleDimmed
        icon={<AlertCircle size={18} className={css({ color: 'icon.warning.base' })} />}
        title="API 응답 지연 감지"
        body="결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)"
        time="2일 전"
        badge={<Badge variant="neutral-outline">처리됨</Badge>}
        actions={null}
      />

      {/* Card 8 — info, read */}
      <NotificationCard
        accentColor="info"
        isUnread={false}
        accentDimmed
        iconDimmed
        titleDimmed
        icon={<Info size={18} className={css({ color: 'icon.info.base' })} />}
        title="약관 업데이트 안내"
        body="서비스 이용약관이 2025년 7월 1일부로 변경됩니다."
        time="3일 전"
        badge={<Badge variant="neutral-outline">안내</Badge>}
        actions={<GhostButton>약관 보기</GhostButton>}
      />

      {/* Divider */}
      <hr
        className={css({
          border: 'none',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'border.neutral.low',
          my: '1',
        })}
      />

      {/* Empty state */}
      <div
        className={css({
          backgroundColor: 'canvas.neutral.02',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'border.neutral.base',
          borderRadius: 'lg',
          p: '6',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2',
          textAlign: 'center',
        })}
      >
        <BellOff
          size={28}
          className={css({ color: 'icon.neutral.base' })}
          style={{ opacity: 0.38 }}
        />
        <span className={css({ fontSize: 'sm', color: 'text.neutral.low', fontWeight: 'medium' })}>
          모든 알림을 확인했습니다
        </span>
        <span
          className={css({ fontSize: 'xs', color: 'text.neutral.base' })}
          style={{ opacity: 0.38 }}
        >
          새로운 알림이 도착하면 여기에 표시됩니다.
        </span>
      </div>
    </main>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'canvas.neutral.01',
      })}
    >
      <Header />
      <div className={css({ display: 'flex', flex: 1, overflow: 'hidden' })}>
        <Sidebar />
        <NotificationList />
      </div>
    </div>
  );
}
