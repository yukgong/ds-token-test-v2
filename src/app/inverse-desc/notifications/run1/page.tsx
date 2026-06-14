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
import { css } from '@ds-token-test/styled-system-intent-first-slotfirst/css';

// ────────────────────────────────────────────────────────────────────────────
// Header
// ────────────────────────────────────────────────────────────────────────────
function Header() {
  return (
    <header
      className={css({
        display: 'flex',
        flexDirection: 'column',
        bg: 'canvas.neutral.01',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'border.neutral.base',
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
        {/* Left: icon + title */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '2',
          })}
        >
          <Bell
            size={20}
            className={css({ color: 'icon.neutral.base' })}
          />
          <span
            className={css({
              fontSize: 'xl',
              fontWeight: 'bold',
              color: 'text.neutral.base',
            })}
          >
            알림 센터
          </span>
        </div>

        {/* Right: mark-all-read ghost button (disabled) + settings ghost button */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '2',
          })}
        >
          <button
            className={css({
              px: '3',
              py: '1.5',
              borderRadius: 'md',
              fontSize: 'sm',
              bg: 'surface.neutral.transparent',
              color: 'text.neutral.base',
              border: 'none',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
            disabled
          >
            모두 읽음 처리
          </button>
          <button
            className={css({
              p: '2',
              borderRadius: 'md',
              bg: 'surface.neutral.transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'icon.neutral.base',
            })}
          >
            <Settings size={18} />
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div
        className={css({
          display: 'flex',
          px: '6',
          gap: '0',
        })}
      >
        {/* Active tab */}
        <button
          className={css({
            px: '4',
            py: '2',
            fontSize: 'sm',
            fontWeight: 'semibold',
            color: 'text.primary.base',
            borderBottom: '2px solid',
            borderBottomColor: 'border.primary.highest',
            bg: 'surface.neutral.transparent',
            border: 'none',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
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
              fontSize: 'sm',
              color: 'text.neutral.base',
              bg: 'surface.neutral.transparent',
              border: 'none',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Left Sidebar
// ────────────────────────────────────────────────────────────────────────────
function Sidebar() {
  return (
    <aside
      className={css({
        w: '200px',
        flexShrink: 0,
        bg: 'canvas.neutral.02',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'border.neutral.base',
        display: 'flex',
        flexDirection: 'column',
        gap: '4',
        p: '4',
        overflowY: 'auto',
      })}
    >
      {/* Summary counter cards */}
      <div className={css({ display: 'flex', flexDirection: 'column', gap: '2' })}>
        {/* Unread card */}
        <div
          className={css({
            bg: 'surface.primary.base',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'border.primary.base',
            borderRadius: 'md',
            p: '3',
            display: 'flex',
            flexDirection: 'column',
            gap: '1',
          })}
        >
          <Bell size={16} className={css({ color: 'icon.primary.base' })} />
          <span
            className={css({
              fontSize: '2xl',
              fontWeight: 'bold',
              color: 'text.primary.base',
            })}
          >
            8
          </span>
          <span className={css({ fontSize: 'xs', color: 'text.primary.base' })}>
            읽지 않음
          </span>
        </div>

        {/* Error/danger card */}
        <div
          className={css({
            bg: 'surface.critical.base',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'border.critical.base',
            borderRadius: 'md',
            p: '3',
            display: 'flex',
            flexDirection: 'column',
            gap: '1',
          })}
        >
          <AlertCircle size={16} className={css({ color: 'icon.critical.base' })} />
          <span
            className={css({
              fontSize: '2xl',
              fontWeight: 'bold',
              color: 'text.critical.base',
            })}
          >
            2
          </span>
          <span className={css({ fontSize: 'xs', color: 'text.critical.base' })}>
            즉시 확인
          </span>
        </div>

        {/* Warning card */}
        <div
          className={css({
            bg: 'surface.warning.base',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'border.warning.base',
            borderRadius: 'md',
            p: '3',
            display: 'flex',
            flexDirection: 'column',
            gap: '1',
          })}
        >
          <AlertTriangle size={16} className={css({ color: 'icon.warning.base' })} />
          <span
            className={css({
              fontSize: '2xl',
              fontWeight: 'bold',
              color: 'text.warning.base',
            })}
          >
            3
          </span>
          <span className={css({ fontSize: 'xs', color: 'text.warning.base' })}>
            주의 필요
          </span>
        </div>
      </div>

      {/* Divider */}
      <hr
        className={css({
          borderColor: 'border.neutral.low',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          m: '0',
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
            fontSize: 'sm',
            fontWeight: 'medium',
            bg: 'fill.primary.base',
            color: 'inverse.text.base',
            border: 'none',
            cursor: 'pointer',
            textAlign: 'left',
          })}
        >
          전체
        </button>
        {/* Unselected */}
        {['시스템', '결제', '배포', '보안', '마케팅'].map((label) => (
          <button
            key={label}
            className={css({
              px: '3',
              py: '1.5',
              borderRadius: 'full',
              fontSize: 'sm',
              bg: 'surface.neutral.base',
              color: 'text.neutral.base',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              _hover: { bg: 'surface.neutral.high' },
            })}
          >
            {label}
          </button>
        ))}
      </div>
    </aside>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Badge helpers
// ────────────────────────────────────────────────────────────────────────────
type BadgeVariant =
  | 'positive-outline'
  | 'critical-filled'
  | 'warning-outline'
  | 'info-outline'
  | 'primary-filled'
  | 'neutral-outline';

function Badge({ variant, children }: { variant: BadgeVariant; children: React.ReactNode }) {
  const styles: Record<BadgeVariant, Parameters<typeof css>[0]> = {
    'positive-outline': {
      bg: 'surface.positive.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.positive.base',
      color: 'text.positive.base',
    },
    'critical-filled': {
      bg: 'fill.critical.base',
      border: 'none',
      color: 'inverse.text.base',
    },
    'warning-outline': {
      bg: 'surface.warning.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.warning.base',
      color: 'text.warning.base',
    },
    'info-outline': {
      bg: 'surface.info.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.info.base',
      color: 'text.info.base',
    },
    'primary-filled': {
      bg: 'fill.primary.base',
      border: 'none',
      color: 'inverse.text.base',
    },
    'neutral-outline': {
      bg: 'surface.neutral.base',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'border.neutral.base',
      color: 'text.neutral.low',
    },
  };

  return (
    <span
      className={css({
        px: '2',
        py: '0.5',
        borderRadius: 'full',
        fontSize: 'xs',
        fontWeight: 'medium',
        ...styles[variant],
      })}
    >
      {children}
    </span>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Notification Card
// ────────────────────────────────────────────────────────────────────────────
type AccentColor = 'positive' | 'critical' | 'warning' | 'info' | 'primary';

interface NotificationCardProps {
  accentColor: AccentColor;
  isUnread: boolean;
  icon: React.ReactNode;
  title: string;
  body: string;
  time: string;
  badge: React.ReactNode;
  actions?: React.ReactNode;
  iconOpacity?: boolean;
  titleOpacity?: boolean;
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
  iconOpacity = false,
  titleOpacity = false,
}: NotificationCardProps) {
  const accentFillMap: Record<AccentColor, string> = {
    positive: 'fill.positive.base',
    critical: 'fill.critical.base',
    warning: 'fill.warning.base',
    info: 'fill.info.base',
    primary: 'fill.primary.base',
  };

  return (
    <div
      className={css({
        position: 'relative',
        display: 'flex',
        borderRadius: 'lg',
        overflow: 'hidden',
        bg: isUnread ? 'surface.primary.base' : 'canvas.neutral.01',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'border.neutral.low',
      })}
    >
      {/* Left accent border */}
      <div
        className={css({
          w: '1',
          flexShrink: 0,
          bg: accentFillMap[accentColor] as any,
          opacity: isUnread ? 1 : 0.38,
        })}
      />

      {/* Content */}
      <div className={css({ flex: 1, p: '4', display: 'flex', flexDirection: 'column', gap: '2' })}>
        {/* Icon + title row */}
        <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '2' })}>
          <span className={css({ opacity: iconOpacity ? 0.38 : 1, flexShrink: 0, mt: '0.5' })}>
            {icon}
          </span>
          <span
            className={css({
              fontSize: 'sm',
              fontWeight: 'semibold',
              color: 'text.neutral.base',
              opacity: titleOpacity ? 0.38 : 1,
              flex: 1,
            })}
          >
            {title}
          </span>
        </div>

        {/* Body */}
        <p
          className={css({
            fontSize: 'xs',
            color: 'text.neutral.base',
            opacity: 0.38,
            m: '0',
          })}
        >
          {body}
        </p>

        {/* Footer: time + badge + actions */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2',
          })}
        >
          <span
            className={css({
              fontSize: 'xs',
              color: 'text.neutral.base',
              opacity: 0.38,
            })}
          >
            {time}
          </span>
          {badge}
          {actions}
        </div>
      </div>

      {/* X close button */}
      <button
        className={css({
          position: 'absolute',
          top: '2',
          right: '2',
          p: '1',
          borderRadius: 'md',
          bg: 'surface.neutral.transparent',
          border: 'none',
          cursor: 'pointer',
          color: 'icon.neutral.base',
          _hover: { bg: 'surface.neutral.high' },
        })}
      >
        <X size={14} />
      </button>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Notification List
// ────────────────────────────────────────────────────────────────────────────
function NotificationList() {
  return (
    <main
      className={css({
        flex: 1,
        overflowY: 'auto',
        bg: 'canvas.neutral.02',
        p: '6',
        display: 'flex',
        flexDirection: 'column',
        gap: '3',
      })}
    >
      {/* Card 1 — 정상 완료 (읽지 않음) */}
      <NotificationCard
        accentColor="positive"
        isUnread
        icon={<CheckCircle2 size={16} className={css({ color: 'icon.positive.base' })} />}
        title="배포 v2.4.1 완료"
        body="프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다."
        time="방금 전"
        badge={<Badge variant="positive-outline">완료됨</Badge>}
        actions={
          <button
            className={css({
              px: '2',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              bg: 'surface.neutral.transparent',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'border.positive.base',
              color: 'text.positive.base',
              cursor: 'pointer',
            })}
          >
            배포 로그 보기
          </button>
        }
      />

      {/* Card 2 — 심각한 문제 (읽지 않음) */}
      <NotificationCard
        accentColor="critical"
        isUnread
        icon={<XCircle size={16} className={css({ color: 'icon.critical.base' })} />}
        title="DB 연결 오류"
        body="데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요."
        time="3분 전"
        badge={<Badge variant="critical-filled">즉시 확인</Badge>}
        actions={
          <>
            <button
              className={css({
                px: '2',
                py: '1',
                borderRadius: 'md',
                fontSize: 'xs',
                bg: 'fill.critical.base',
                border: 'none',
                color: 'inverse.text.base',
                cursor: 'pointer',
              })}
            >
              상세 보기
            </button>
            <button
              className={css({
                px: '2',
                py: '1',
                borderRadius: 'md',
                fontSize: 'xs',
                bg: 'surface.neutral.transparent',
                border: 'none',
                color: 'text.neutral.base',
                cursor: 'pointer',
                opacity: 0.38,
              })}
            >
              무시
            </button>
          </>
        }
      />

      {/* Card 3 — 주의 필요 (읽지 않음) */}
      <NotificationCard
        accentColor="warning"
        isUnread
        icon={<AlertTriangle size={16} className={css({ color: 'icon.warning.base' })} />}
        title="메모리 사용량 경고"
        body="서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다."
        time="15분 전"
        badge={<Badge variant="warning-outline">주의</Badge>}
        actions={
          <button
            className={css({
              px: '2',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              bg: 'surface.neutral.transparent',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'border.warning.base',
              color: 'text.warning.base',
              cursor: 'pointer',
            })}
          >
            리소스 모니터 열기
          </button>
        }
      />

      {/* Card 4 — 일반 안내 (읽지 않음) */}
      <NotificationCard
        accentColor="info"
        isUnread
        icon={<Info size={16} className={css({ color: 'icon.info.base' })} />}
        title="시스템 점검 예정"
        body="2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다."
        time="1시간 전"
        badge={<Badge variant="info-outline">안내</Badge>}
        actions={
          <button
            className={css({
              px: '2',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              bg: 'surface.neutral.transparent',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'border.info.base',
              color: 'text.info.base',
              cursor: 'pointer',
            })}
          >
            일정 확인
          </button>
        }
      />

      {/* Card 5 — 메인 컬러/기능 (읽지 않음) */}
      <NotificationCard
        accentColor="primary"
        isUnread
        icon={<Zap size={16} className={css({ color: 'icon.primary.base' })} />}
        title="새 기능 출시"
        body="대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요."
        time="2시간 전"
        badge={<Badge variant="primary-filled">새 기능</Badge>}
        actions={
          <button
            className={css({
              px: '2',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              bg: 'fill.primary.base',
              border: 'none',
              color: 'inverse.text.base',
              cursor: 'pointer',
            })}
          >
            지금 확인
          </button>
        }
      />

      {/* Card 6 — 정상 완료 (읽음) */}
      <NotificationCard
        accentColor="positive"
        isUnread={false}
        iconOpacity
        titleOpacity
        icon={<CheckCircle2 size={16} className={css({ color: 'icon.positive.base' })} />}
        title="결제 처리 완료"
        body="Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다."
        time="어제"
        badge={<Badge variant="positive-outline">완료됨</Badge>}
        actions={
          <button
            className={css({
              px: '2',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              bg: 'surface.neutral.transparent',
              border: 'none',
              color: 'text.neutral.base',
              cursor: 'pointer',
              opacity: 0.38,
            })}
          >
            영수증 보기
          </button>
        }
      />

      {/* Card 7 — 주의 필요 (읽음) */}
      <NotificationCard
        accentColor="warning"
        isUnread={false}
        iconOpacity
        titleOpacity
        icon={<AlertCircle size={16} className={css({ color: 'icon.warning.base' })} />}
        title="API 응답 지연 감지"
        body="결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)"
        time="2일 전"
        badge={<Badge variant="neutral-outline">처리됨</Badge>}
      />

      {/* Card 8 — 일반 안내 (읽음) */}
      <NotificationCard
        accentColor="info"
        isUnread={false}
        iconOpacity
        titleOpacity
        icon={<Info size={16} className={css({ color: 'icon.info.base' })} />}
        title="약관 업데이트 안내"
        body="서비스 이용약관이 2025년 7월 1일부로 변경됩니다."
        time="3일 전"
        badge={<Badge variant="neutral-outline">안내</Badge>}
        actions={
          <button
            className={css({
              px: '2',
              py: '1',
              borderRadius: 'md',
              fontSize: 'xs',
              bg: 'surface.neutral.transparent',
              border: 'none',
              color: 'text.neutral.base',
              cursor: 'pointer',
            })}
          >
            약관 보기
          </button>
        }
      />

      {/* Divider */}
      <hr
        className={css({
          borderColor: 'border.neutral.low',
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
        })}
      />

      {/* Empty state card */}
      <div
        className={css({
          bg: 'canvas.neutral.02',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'border.neutral.base',
          borderRadius: 'lg',
          p: '8',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2',
        })}
      >
        <BellOff
          size={32}
          className={css({ color: 'icon.neutral.base', opacity: 0.38 })}
        />
        <span
          className={css({
            fontSize: 'sm',
            fontWeight: 'medium',
            color: 'text.neutral.low',
          })}
        >
          모든 알림을 확인했습니다
        </span>
        <span
          className={css({
            fontSize: 'xs',
            color: 'text.neutral.base',
            opacity: 0.38,
          })}
        >
          새로운 알림이 없습니다.
        </span>
      </div>
    </main>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// Page root
// ────────────────────────────────────────────────────────────────────────────
export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        h: '100vh',
        bg: 'canvas.neutral.01',
        overflow: 'hidden',
      })}
    >
      <Header />
      <div
        className={css({
          display: 'flex',
          flex: 1,
          overflow: 'hidden',
        })}
      >
        <Sidebar />
        <NotificationList />
      </div>
    </div>
  );
}
