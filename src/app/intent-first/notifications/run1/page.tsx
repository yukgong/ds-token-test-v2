import {
  Bell,
  BellOff,
  Settings,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  AlertCircle,
  Info,
  Zap,
  X,
} from 'lucide-react';
import { css } from '@ds-token-test/styled-system-intent-first/css';

// ────────────────────────────────────────────────────────────────────────────
// Layout
// ────────────────────────────────────────────────────────────────────────────

const pageWrapperStyle = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',
  backgroundColor: 'neutral.canvas.01',
  color: 'neutral.text.base',
  fontFamily: 'sans-serif',
  fontSize: '14px',
});

const bodyStyle = css({
  display: 'flex',
  flex: '1',
  overflow: 'hidden',
});

// ────────────────────────────────────────────────────────────────────────────
// Header
// ────────────────────────────────────────────────────────────────────────────

const headerStyle = css({
  backgroundColor: 'neutral.canvas.01',
  borderBottom: '1px solid',
  borderColor: 'neutral.border.base',
  padding: '0 24px',
  flexShrink: '0',
});

const headerTopStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '56px',
});

const headerLeftStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const headerTitleStyle = css({
  fontSize: '16px',
  fontWeight: '600',
  color: 'neutral.text.base',
});

const headerRightStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

// "모두 읽음 처리" ghost button — disabled (opacity: 0.38)
const markAllReadButtonStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  padding: '6px 12px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.text.base',
  cursor: 'not-allowed',
  fontSize: '14px',
  opacity: 0.38,
});

const ghostIconButtonStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '32px',
  height: '32px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.icon.base',
  cursor: 'pointer',
});

// ────────────────────────────────────────────────────────────────────────────
// Tab bar
// ────────────────────────────────────────────────────────────────────────────

const tabBarStyle = css({
  display: 'flex',
  gap: '0',
  borderTop: '1px solid',
  borderColor: 'neutral.border.low',
});

const tabActiveStyle = css({
  padding: '10px 16px',
  color: 'primary.text.base',
  fontWeight: '600',
  fontSize: '14px',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  borderBottom: '2px solid',
  borderBottomColor: 'primary.fill.base',
});

const tabInactiveStyle = css({
  padding: '10px 16px',
  color: 'neutral.text.base',
  fontWeight: '400',
  fontSize: '14px',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  borderBottom: '2px solid transparent',
  opacity: 0.38,
});

// ────────────────────────────────────────────────────────────────────────────
// Sidebar
// ────────────────────────────────────────────────────────────────────────────

const sidebarStyle = css({
  width: '200px',
  flexShrink: '0',
  backgroundColor: 'neutral.canvas.02',
  borderRight: '1px solid',
  borderColor: 'neutral.border.base',
  overflowY: 'auto',
  padding: '16px 12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const counterCardPrimaryStyle = css({
  backgroundColor: 'primary.surface.base',
  border: '1px solid',
  borderColor: 'primary.border.base',
  borderRadius: '8px',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const counterCardCriticalStyle = css({
  backgroundColor: 'critical.surface.base',
  border: '1px solid',
  borderColor: 'critical.border.base',
  borderRadius: '8px',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const counterCardWarningStyle = css({
  backgroundColor: 'warning.surface.base',
  border: '1px solid',
  borderColor: 'warning.border.base',
  borderRadius: '8px',
  padding: '12px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const counterInfoStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '2px',
});

const counterNumberPrimaryStyle = css({
  fontSize: '20px',
  fontWeight: '700',
  color: 'primary.text.base',
  lineHeight: '1',
});

const counterNumberCriticalStyle = css({
  fontSize: '20px',
  fontWeight: '700',
  color: 'critical.text.base',
  lineHeight: '1',
});

const counterNumberWarningStyle = css({
  fontSize: '20px',
  fontWeight: '700',
  color: 'warning.text.base',
  lineHeight: '1',
});

const counterLabelStyle = css({
  fontSize: '12px',
  color: 'neutral.text.low',
});

const sidebarDividerStyle = css({
  borderTop: '1px solid',
  borderColor: 'neutral.border.low',
  margin: '4px 0',
});

const filterActiveStyle = css({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '9999px',
  backgroundColor: 'primary.fill.base',
  color: 'inverse.text.base',
  fontWeight: '600',
  fontSize: '13px',
  cursor: 'pointer',
  border: 'none',
  width: '100%',
  textAlign: 'left',
});

const filterInactiveStyle = css({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '9999px',
  backgroundColor: 'neutral.surface.base',
  color: 'neutral.text.base',
  fontSize: '13px',
  cursor: 'pointer',
  border: 'none',
  width: '100%',
  textAlign: 'left',
});

// ────────────────────────────────────────────────────────────────────────────
// Notification list
// ────────────────────────────────────────────────────────────────────────────

const notificationListStyle = css({
  flex: '1',
  overflowY: 'auto',
  backgroundColor: 'neutral.canvas.02',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

// Card wrappers
const cardUnreadStyle = css({
  position: 'relative',
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid',
  borderColor: 'neutral.border.base',
  backgroundColor: 'primary.surface.base',
});

const cardReadStyle = css({
  position: 'relative',
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid',
  borderColor: 'neutral.border.base',
  backgroundColor: 'neutral.canvas.01',
});

// Left accent strips — unread (full opacity)
const accentPositiveStyle = css({
  width: '4px',
  flexShrink: '0',
  backgroundColor: 'positive.fill.base',
});

const accentCriticalStyle = css({
  width: '4px',
  flexShrink: '0',
  backgroundColor: 'critical.fill.base',
});

const accentWarningStyle = css({
  width: '4px',
  flexShrink: '0',
  backgroundColor: 'warning.fill.base',
});

const accentInfoStyle = css({
  width: '4px',
  flexShrink: '0',
  backgroundColor: 'info.fill.base',
});

const accentPrimaryStyle = css({
  width: '4px',
  flexShrink: '0',
  backgroundColor: 'primary.fill.base',
});

// Left accent strips — read (opacity: 0.38)
const accentPositiveReadStyle = css({
  width: '4px',
  flexShrink: '0',
  backgroundColor: 'positive.fill.base',
  opacity: 0.38,
});

const accentWarningReadStyle = css({
  width: '4px',
  flexShrink: '0',
  backgroundColor: 'warning.fill.base',
  opacity: 0.38,
});

const accentInfoReadStyle = css({
  width: '4px',
  flexShrink: '0',
  backgroundColor: 'info.fill.base',
  opacity: 0.38,
});

// Card body
const cardBodyStyle = css({
  flex: '1',
  padding: '14px 40px 14px 12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  minWidth: '0',
});

const cardHeaderRowStyle = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
});

// Title styles
const cardTitleUnreadStyle = css({
  flex: '1',
  fontWeight: '600',
  fontSize: '14px',
  color: 'neutral.text.base',
});

// 읽음 상태: 중간 명도 (neutral.text.low)
const cardTitleReadStyle = css({
  flex: '1',
  fontWeight: '500',
  fontSize: '14px',
  color: 'neutral.text.low',
});

// Body text — opacity 0.38
const cardBodyTextStyle = css({
  fontSize: '13px',
  color: 'neutral.text.base',
  lineHeight: '1.5',
  opacity: 0.38,
});

const cardFooterStyle = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexWrap: 'wrap',
});

// Time — opacity 0.38
const cardTimeStyle = css({
  fontSize: '12px',
  color: 'neutral.text.base',
  marginRight: 'auto',
  opacity: 0.38,
});

const cardCloseButtonStyle = css({
  position: 'absolute',
  top: '8px',
  right: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.icon.base',
  cursor: 'pointer',
  flexShrink: '0',
});

// ────────────────────────────────────────────────────────────────────────────
// Badges
// ────────────────────────────────────────────────────────────────────────────

const badgePositiveOutlineStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '11px',
  fontWeight: '600',
  backgroundColor: 'positive.surface.base',
  border: '1px solid',
  borderColor: 'positive.border.base',
  color: 'positive.text.base',
});

// 읽음 상태 badge — opacity 0.38
const badgePositiveOutlineReadStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '11px',
  fontWeight: '600',
  backgroundColor: 'positive.surface.base',
  border: '1px solid',
  borderColor: 'positive.border.base',
  color: 'positive.text.base',
  opacity: 0.38,
});

const badgeCriticalSolidStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '11px',
  fontWeight: '600',
  backgroundColor: 'critical.fill.base',
  color: 'inverse.text.base',
  border: 'none',
});

const badgeWarningOutlineStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '11px',
  fontWeight: '600',
  backgroundColor: 'warning.surface.base',
  border: '1px solid',
  borderColor: 'warning.border.base',
  color: 'warning.text.base',
});

const badgeInfoOutlineStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '11px',
  fontWeight: '600',
  backgroundColor: 'info.surface.base',
  border: '1px solid',
  borderColor: 'info.border.base',
  color: 'info.text.base',
});

const badgePrimarySolidStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '11px',
  fontWeight: '600',
  backgroundColor: 'primary.fill.base',
  color: 'inverse.text.base',
  border: 'none',
});

const badgeNeutralOutlineStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '11px',
  fontWeight: '600',
  backgroundColor: 'neutral.surface.base',
  border: '1px solid',
  borderColor: 'neutral.border.base',
  color: 'neutral.text.low',
});

// ────────────────────────────────────────────────────────────────────────────
// Action buttons
// ────────────────────────────────────────────────────────────────────────────

const btnPositiveOutlineStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'positive.border.highest',
  backgroundColor: 'neutral.surface.transparent',
  color: 'positive.text.base',
  cursor: 'pointer',
});

const btnCriticalSolidStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  border: 'none',
  backgroundColor: 'critical.fill.base',
  color: 'inverse.text.base',
  cursor: 'pointer',
});

// "무시" ghost button — disabled (opacity: 0.38)
const btnGhostDisabledStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.text.base',
  cursor: 'not-allowed',
  opacity: 0.38,
});

const btnWarningOutlineStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'warning.border.highest',
  backgroundColor: 'neutral.surface.transparent',
  color: 'warning.text.base',
  cursor: 'pointer',
});

const btnInfoOutlineStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'info.border.highest',
  backgroundColor: 'neutral.surface.transparent',
  color: 'info.text.base',
  cursor: 'pointer',
});

const btnPrimarySolidStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  border: 'none',
  backgroundColor: 'primary.fill.base',
  color: 'inverse.text.base',
  cursor: 'pointer',
});

// 읽음 상태 ghost button — disabled (opacity: 0.38)
const btnGhostReadDisabledStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.text.base',
  cursor: 'not-allowed',
  opacity: 0.38,
});

const btnGhostStyle = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.text.base',
  cursor: 'pointer',
});

// ────────────────────────────────────────────────────────────────────────────
// Divider + Empty state
// ────────────────────────────────────────────────────────────────────────────

const listDividerStyle = css({
  borderTop: '1px solid',
  borderColor: 'neutral.border.base',
  margin: '4px 0',
});

const emptyStateStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  padding: '32px 16px',
  borderRadius: '8px',
  border: '1px solid',
  borderColor: 'neutral.border.base',
  backgroundColor: 'neutral.surface.base',
  textAlign: 'center',
});

const emptyIconStyle = css({
  color: 'neutral.icon.base',
  opacity: 0.38,
});

const emptyTitleStyle = css({
  fontSize: '14px',
  fontWeight: '500',
  color: 'neutral.text.low',
});

const emptyDescStyle = css({
  fontSize: '12px',
  color: 'neutral.text.base',
  opacity: 0.38,
});

// ────────────────────────────────────────────────────────────────────────────
// Page component
// ────────────────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  return (
    <div className={pageWrapperStyle}>
      {/* ── Header ── */}
      <header className={headerStyle}>
        <div className={headerTopStyle}>
          <div className={headerLeftStyle}>
            <Bell size={20} className={css({ color: 'neutral.icon.base' })} />
            <span className={headerTitleStyle}>알림 센터</span>
          </div>
          <div className={headerRightStyle}>
            {/* 비활성 ghost 버튼 (opacity: 0.38) */}
            <button className={markAllReadButtonStyle} disabled>
              모두 읽음 처리
            </button>
            <button className={ghostIconButtonStyle}>
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div className={tabBarStyle}>
          <button className={tabActiveStyle}>전체</button>
          {/* 비활성 탭 (opacity: 0.38) */}
          <button className={tabInactiveStyle}>읽지 않음</button>
          <button className={tabInactiveStyle}>완료됨</button>
        </div>
      </header>

      {/* ── Body ── */}
      <div className={bodyStyle}>
        {/* ── Sidebar ── */}
        <aside className={sidebarStyle}>
          {/* Counter cards */}
          <div className={counterCardPrimaryStyle}>
            <Bell size={18} className={css({ color: 'primary.icon.base', flexShrink: '0' })} />
            <div className={counterInfoStyle}>
              <div className={counterNumberPrimaryStyle}>8</div>
              <div className={counterLabelStyle}>읽지 않음</div>
            </div>
          </div>

          <div className={counterCardCriticalStyle}>
            <AlertCircle size={18} className={css({ color: 'critical.icon.base', flexShrink: '0' })} />
            <div className={counterInfoStyle}>
              <div className={counterNumberCriticalStyle}>2</div>
              <div className={counterLabelStyle}>즉시 확인</div>
            </div>
          </div>

          <div className={counterCardWarningStyle}>
            <AlertTriangle size={18} className={css({ color: 'warning.icon.base', flexShrink: '0' })} />
            <div className={counterInfoStyle}>
              <div className={counterNumberWarningStyle}>3</div>
              <div className={counterLabelStyle}>주의 필요</div>
            </div>
          </div>

          <div className={sidebarDividerStyle} />

          {/* Category filters */}
          <button className={filterActiveStyle}>전체</button>
          <button className={filterInactiveStyle}>시스템</button>
          <button className={filterInactiveStyle}>결제</button>
          <button className={filterInactiveStyle}>배포</button>
          <button className={filterInactiveStyle}>보안</button>
          <button className={filterInactiveStyle}>마케팅</button>
        </aside>

        {/* ── Notification list ── */}
        <main className={notificationListStyle}>

          {/* ── 알림 1: 정상 완료 (읽지 않음) ── */}
          <article className={cardUnreadStyle}>
            <div className={accentPositiveStyle} />
            <div className={cardBodyStyle}>
              <div className={cardHeaderRowStyle}>
                <CheckCircle2 size={18} className={css({ color: 'positive.icon.base', flexShrink: '0' })} />
                <span className={cardTitleUnreadStyle}>배포 v2.4.1 완료</span>
              </div>
              <p className={cardBodyTextStyle}>
                프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
              </p>
              <div className={cardFooterStyle}>
                <span className={cardTimeStyle}>방금 전</span>
                <span className={badgePositiveOutlineStyle}>완료됨</span>
                <button className={btnPositiveOutlineStyle}>배포 로그 보기</button>
              </div>
            </div>
            <button className={cardCloseButtonStyle}>
              <X size={14} />
            </button>
          </article>

          {/* ── 알림 2: 심각한 문제 (읽지 않음) ── */}
          <article className={cardUnreadStyle}>
            <div className={accentCriticalStyle} />
            <div className={cardBodyStyle}>
              <div className={cardHeaderRowStyle}>
                <XCircle size={18} className={css({ color: 'critical.icon.base', flexShrink: '0' })} />
                <span className={cardTitleUnreadStyle}>DB 연결 오류</span>
              </div>
              <p className={cardBodyTextStyle}>
                데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
              </p>
              <div className={cardFooterStyle}>
                <span className={cardTimeStyle}>3분 전</span>
                <span className={badgeCriticalSolidStyle}>즉시 확인</span>
                <button className={btnCriticalSolidStyle}>상세 보기</button>
                {/* 비활성 ghost 버튼 (opacity: 0.38) */}
                <button className={btnGhostDisabledStyle} disabled>무시</button>
              </div>
            </div>
            <button className={cardCloseButtonStyle}>
              <X size={14} />
            </button>
          </article>

          {/* ── 알림 3: 주의 필요 (읽지 않음) ── */}
          <article className={cardUnreadStyle}>
            <div className={accentWarningStyle} />
            <div className={cardBodyStyle}>
              <div className={cardHeaderRowStyle}>
                <AlertTriangle size={18} className={css({ color: 'warning.icon.base', flexShrink: '0' })} />
                <span className={cardTitleUnreadStyle}>메모리 사용량 경고</span>
              </div>
              <p className={cardBodyTextStyle}>
                서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
              </p>
              <div className={cardFooterStyle}>
                <span className={cardTimeStyle}>15분 전</span>
                <span className={badgeWarningOutlineStyle}>주의</span>
                <button className={btnWarningOutlineStyle}>리소스 모니터 열기</button>
              </div>
            </div>
            <button className={cardCloseButtonStyle}>
              <X size={14} />
            </button>
          </article>

          {/* ── 알림 4: 일반 안내 (읽지 않음) ── */}
          <article className={cardUnreadStyle}>
            <div className={accentInfoStyle} />
            <div className={cardBodyStyle}>
              <div className={cardHeaderRowStyle}>
                <Info size={18} className={css({ color: 'info.icon.base', flexShrink: '0' })} />
                <span className={cardTitleUnreadStyle}>시스템 점검 예정</span>
              </div>
              <p className={cardBodyTextStyle}>
                2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
              </p>
              <div className={cardFooterStyle}>
                <span className={cardTimeStyle}>1시간 전</span>
                <span className={badgeInfoOutlineStyle}>안내</span>
                <button className={btnInfoOutlineStyle}>일정 확인</button>
              </div>
            </div>
            <button className={cardCloseButtonStyle}>
              <X size={14} />
            </button>
          </article>

          {/* ── 알림 5: 메인 컬러/기능 (읽지 않음) ── */}
          <article className={cardUnreadStyle}>
            <div className={accentPrimaryStyle} />
            <div className={cardBodyStyle}>
              <div className={cardHeaderRowStyle}>
                <Zap size={18} className={css({ color: 'primary.icon.base', flexShrink: '0' })} />
                <span className={cardTitleUnreadStyle}>새 기능 출시</span>
              </div>
              <p className={cardBodyTextStyle}>
                대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
              </p>
              <div className={cardFooterStyle}>
                <span className={cardTimeStyle}>2시간 전</span>
                <span className={badgePrimarySolidStyle}>새 기능</span>
                <button className={btnPrimarySolidStyle}>지금 확인</button>
              </div>
            </div>
            <button className={cardCloseButtonStyle}>
              <X size={14} />
            </button>
          </article>

          {/* ── 알림 6: 정상 완료 (읽음) ── */}
          <article className={cardReadStyle}>
            {/* 읽음 — accent opacity: 0.38 */}
            <div className={accentPositiveReadStyle} />
            <div className={cardBodyStyle}>
              <div className={cardHeaderRowStyle}>
                {/* 읽음 — 아이콘 opacity: 0.38 */}
                <CheckCircle2
                  size={18}
                  className={css({ color: 'positive.icon.base', flexShrink: '0', opacity: 0.38 })}
                />
                {/* 읽음 — 제목: 중간 명도 */}
                <span className={cardTitleReadStyle}>결제 처리 완료</span>
              </div>
              <p className={cardBodyTextStyle}>
                Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
              </p>
              <div className={cardFooterStyle}>
                <span className={cardTimeStyle}>어제</span>
                {/* 읽음 — badge opacity: 0.38 */}
                <span className={badgePositiveOutlineReadStyle}>완료됨</span>
                {/* 읽음 — ghost 비활성 (opacity: 0.38) */}
                <button className={btnGhostReadDisabledStyle} disabled>영수증 보기</button>
              </div>
            </div>
            <button className={cardCloseButtonStyle}>
              <X size={14} />
            </button>
          </article>

          {/* ── 알림 7: 주의 필요 (읽음) ── */}
          <article className={cardReadStyle}>
            {/* 읽음 — accent opacity: 0.38 */}
            <div className={accentWarningReadStyle} />
            <div className={cardBodyStyle}>
              <div className={cardHeaderRowStyle}>
                {/* 읽음 — 아이콘 opacity: 0.38 */}
                <AlertCircle
                  size={18}
                  className={css({ color: 'warning.icon.base', flexShrink: '0', opacity: 0.38 })}
                />
                {/* 읽음 — 제목: 중간 명도 */}
                <span className={cardTitleReadStyle}>API 응답 지연 감지</span>
              </div>
              <p className={cardBodyTextStyle}>
                결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
              </p>
              <div className={cardFooterStyle}>
                <span className={cardTimeStyle}>2일 전</span>
                <span className={badgeNeutralOutlineStyle}>처리됨</span>
              </div>
            </div>
            <button className={cardCloseButtonStyle}>
              <X size={14} />
            </button>
          </article>

          {/* ── 알림 8: 일반 안내 (읽음) ── */}
          <article className={cardReadStyle}>
            {/* 읽음 — accent opacity: 0.38 */}
            <div className={accentInfoReadStyle} />
            <div className={cardBodyStyle}>
              <div className={cardHeaderRowStyle}>
                {/* 읽음 — 아이콘 opacity: 0.38 */}
                <Info
                  size={18}
                  className={css({ color: 'info.icon.base', flexShrink: '0', opacity: 0.38 })}
                />
                {/* 읽음 — 제목: 중간 명도 */}
                <span className={cardTitleReadStyle}>약관 업데이트 안내</span>
              </div>
              <p className={cardBodyTextStyle}>
                서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
              </p>
              <div className={cardFooterStyle}>
                <span className={cardTimeStyle}>3일 전</span>
                <span className={badgeNeutralOutlineStyle}>안내</span>
                <button className={btnGhostStyle}>약관 보기</button>
              </div>
            </div>
            <button className={cardCloseButtonStyle}>
              <X size={14} />
            </button>
          </article>

          {/* ── 구분선 + 빈 상태 ── */}
          <div className={listDividerStyle} />

          <div className={emptyStateStyle}>
            <BellOff size={32} className={emptyIconStyle} />
            <p className={emptyTitleStyle}>모든 알림을 확인했습니다</p>
            <p className={emptyDescStyle}>새로운 알림이 도착하면 여기에 표시됩니다.</p>
          </div>
        </main>
      </div>
    </div>
  );
}
