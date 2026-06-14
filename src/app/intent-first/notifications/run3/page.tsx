import { css } from '@ds-token-test/styled-system-intent-first/css';
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

// ─── Header ───────────────────────────────────────────────────────────────────

const pageRoot = css({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

const headerBar = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'neutral.canvas.01',
  borderBottom: '1px solid',
  borderColor: 'neutral.border.base',
  flexShrink: 0,
});

const headerTop = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 20px',
});

const headerLeft = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const headerBellIcon = css({
  color: 'neutral.icon.base',
});

const headerTitle = css({
  fontSize: '18px',
  fontWeight: '600',
  color: 'neutral.text.base',
  margin: 0,
});

const headerRight = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

const ghostButtonDisabled = css({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  padding: '6px 12px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.text.base',
  fontSize: '13px',
  cursor: 'not-allowed',
  opacity: 0.38,
});

const iconButton = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.icon.base',
  cursor: 'pointer',
});

const tabBar = css({
  display: 'flex',
  padding: '0 20px',
});

const tabActive = css({
  padding: '10px 16px',
  fontSize: '14px',
  fontWeight: '600',
  color: 'primary.text.base',
  border: 'none',
  borderBottom: '2px solid',
  borderBottomColor: 'primary.border.highest',
  backgroundColor: 'neutral.surface.transparent',
  cursor: 'pointer',
});

const tabInactive = css({
  padding: '10px 16px',
  fontSize: '14px',
  fontWeight: '400',
  color: 'neutral.text.base',
  border: 'none',
  borderBottom: '2px solid transparent',
  backgroundColor: 'neutral.surface.transparent',
  cursor: 'pointer',
  opacity: 0.38,
});

// ─── Layout ───────────────────────────────────────────────────────────────────

const bodyLayout = css({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
});

// ─── Sidebar ──────────────────────────────────────────────────────────────────

const sidebar = css({
  width: '200px',
  flexShrink: 0,
  backgroundColor: 'neutral.canvas.02',
  borderRight: '1px solid',
  borderColor: 'neutral.border.base',
  overflowY: 'auto',
  padding: '16px 12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const counterCardPrimary = css({
  borderRadius: '8px',
  padding: '10px 12px',
  border: '1px solid',
  borderColor: 'primary.border.base',
  backgroundColor: 'primary.surface.base',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const counterCardCritical = css({
  borderRadius: '8px',
  padding: '10px 12px',
  border: '1px solid',
  borderColor: 'critical.border.base',
  backgroundColor: 'critical.surface.base',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const counterCardWarning = css({
  borderRadius: '8px',
  padding: '10px 12px',
  border: '1px solid',
  borderColor: 'warning.border.base',
  backgroundColor: 'warning.surface.base',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const counterIconRow = css({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

const numPrimary = css({
  fontSize: '20px',
  fontWeight: '700',
  color: 'primary.text.base',
});

const numCritical = css({
  fontSize: '20px',
  fontWeight: '700',
  color: 'critical.text.base',
});

const numWarning = css({
  fontSize: '20px',
  fontWeight: '700',
  color: 'warning.text.base',
});

const counterLabel = css({
  fontSize: '11px',
  color: 'neutral.text.low',
});

const divider = css({
  height: '1px',
  backgroundColor: 'neutral.border.low',
  margin: '4px 0',
});

const filterSelected = css({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '9999px',
  fontSize: '13px',
  fontWeight: '500',
  backgroundColor: 'primary.fill.base',
  color: 'inverse.text.base',
  cursor: 'pointer',
  border: 'none',
  width: '100%',
  textAlign: 'left',
});

const filterUnselected = css({
  display: 'flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '9999px',
  fontSize: '13px',
  fontWeight: '400',
  backgroundColor: 'neutral.surface.base',
  color: 'neutral.text.base',
  cursor: 'pointer',
  border: 'none',
  width: '100%',
  textAlign: 'left',
});

// ─── Notification List ────────────────────────────────────────────────────────

const notifList = css({
  flex: 1,
  overflowY: 'auto',
  backgroundColor: 'neutral.canvas.02',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const cardUnread = css({
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid',
  borderColor: 'neutral.border.low',
  backgroundColor: 'primary.surface.base',
});

const cardRead = css({
  display: 'flex',
  borderRadius: '8px',
  overflow: 'hidden',
  border: '1px solid',
  borderColor: 'neutral.border.low',
  backgroundColor: 'neutral.canvas.01',
});

// Left accent strips — unread
const accentPositive = css({ width: '4px', flexShrink: 0, backgroundColor: 'positive.fill.base' });
const accentCritical = css({ width: '4px', flexShrink: 0, backgroundColor: 'critical.fill.base' });
const accentWarning = css({ width: '4px', flexShrink: 0, backgroundColor: 'warning.fill.base' });
const accentInfo = css({ width: '4px', flexShrink: 0, backgroundColor: 'info.fill.base' });
const accentPrimary = css({ width: '4px', flexShrink: 0, backgroundColor: 'primary.fill.base' });

// Left accent strips — read (dimmed)
const accentPositiveDim = css({ width: '4px', flexShrink: 0, backgroundColor: 'positive.fill.base', opacity: 0.38 });
const accentWarningDim = css({ width: '4px', flexShrink: 0, backgroundColor: 'warning.fill.base', opacity: 0.38 });
const accentInfoDim = css({ width: '4px', flexShrink: 0, backgroundColor: 'info.fill.base', opacity: 0.38 });

const cardBody = css({
  flex: 1,
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  minWidth: 0,
});

const cardTopRow = css({
  display: 'flex',
  alignItems: 'flex-start',
  gap: '8px',
});

const titleStrong = css({
  flex: 1,
  fontSize: '14px',
  fontWeight: '600',
  color: 'neutral.text.base',
});

const titleMuted = css({
  flex: 1,
  fontSize: '14px',
  fontWeight: '500',
  color: 'neutral.text.low',
});

const closeBtn = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '24px',
  height: '24px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.icon.base',
  cursor: 'pointer',
  flexShrink: 0,
});

const bodyText = css({
  fontSize: '13px',
  lineHeight: '1.5',
  color: 'neutral.text.base',
  opacity: 0.38,
});

const footerRow = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexWrap: 'wrap',
  marginTop: '4px',
});

const timeText = css({
  fontSize: '12px',
  color: 'neutral.text.base',
  opacity: 0.38,
  marginRight: 'auto',
});

// ─── Badges ───────────────────────────────────────────────────────────────────

const badgePositiveOutline = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  backgroundColor: 'positive.surface.base',
  color: 'positive.text.base',
  border: '1px solid',
  borderColor: 'positive.border.base',
});

const badgeCriticalSolid = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  backgroundColor: 'critical.fill.base',
  color: 'inverse.text.base',
});

const badgeWarningOutline = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  backgroundColor: 'warning.surface.base',
  color: 'warning.text.base',
  border: '1px solid',
  borderColor: 'warning.border.base',
});

const badgeInfoOutline = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  backgroundColor: 'info.surface.base',
  color: 'info.text.base',
  border: '1px solid',
  borderColor: 'info.border.base',
});

const badgePrimarySolid = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  backgroundColor: 'primary.fill.base',
  color: 'inverse.text.base',
});

const badgePositiveOutlineDim = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  backgroundColor: 'positive.surface.base',
  color: 'positive.text.base',
  border: '1px solid',
  borderColor: 'positive.border.base',
  opacity: 0.38,
});

const badgeNeutral = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '4px',
  fontSize: '11px',
  fontWeight: '500',
  backgroundColor: 'neutral.surface.base',
  color: 'neutral.text.low',
  border: '1px solid',
  borderColor: 'neutral.border.base',
});

// ─── Action Buttons ───────────────────────────────────────────────────────────

const btnPositiveOutline = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  backgroundColor: 'neutral.surface.transparent',
  color: 'positive.text.base',
  border: '1px solid',
  borderColor: 'positive.border.highest',
  cursor: 'pointer',
});

const btnCriticalFilled = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  backgroundColor: 'critical.fill.base',
  color: 'inverse.text.base',
  border: 'none',
  cursor: 'pointer',
});

const btnGhostDim = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.text.base',
  border: 'none',
  cursor: 'not-allowed',
  opacity: 0.38,
});

const btnWarningOutline = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  backgroundColor: 'neutral.surface.transparent',
  color: 'warning.text.base',
  border: '1px solid',
  borderColor: 'warning.border.highest',
  cursor: 'pointer',
});

const btnInfoOutline = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  backgroundColor: 'neutral.surface.transparent',
  color: 'info.text.base',
  border: '1px solid',
  borderColor: 'info.border.highest',
  cursor: 'pointer',
});

const btnPrimaryFilled = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  backgroundColor: 'primary.fill.base',
  color: 'inverse.text.base',
  border: 'none',
  cursor: 'pointer',
});

const btnGhostReadDim = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.text.base',
  border: 'none',
  cursor: 'pointer',
  opacity: 0.38,
});

const btnGhost = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '12px',
  fontWeight: '500',
  backgroundColor: 'neutral.surface.transparent',
  color: 'neutral.text.base',
  border: 'none',
  cursor: 'pointer',
});

// ─── Icon helpers ─────────────────────────────────────────────────────────────

const iconPositive = css({ color: 'positive.icon.base', flexShrink: 0, marginTop: '1px' });
const iconCritical = css({ color: 'critical.icon.base', flexShrink: 0, marginTop: '1px' });
const iconWarning = css({ color: 'warning.icon.base', flexShrink: 0, marginTop: '1px' });
const iconInfo = css({ color: 'info.icon.base', flexShrink: 0, marginTop: '1px' });
const iconPrimary = css({ color: 'primary.icon.base', flexShrink: 0, marginTop: '1px' });
const iconPositiveDim = css({ color: 'positive.icon.base', flexShrink: 0, marginTop: '1px', opacity: 0.38 });
const iconWarningDim = css({ color: 'warning.icon.base', flexShrink: 0, marginTop: '1px', opacity: 0.38 });
const iconInfoDim = css({ color: 'info.icon.base', flexShrink: 0, marginTop: '1px', opacity: 0.38 });

// ─── Empty State ──────────────────────────────────────────────────────────────

const emptyState = css({
  borderRadius: '8px',
  padding: '24px',
  backgroundColor: 'neutral.surface.base',
  border: '1px solid',
  borderColor: 'neutral.border.base',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
  textAlign: 'center',
  marginTop: '8px',
});

const emptyIcon = css({
  color: 'neutral.icon.base',
  opacity: 0.38,
});

const emptyTitle = css({
  fontSize: '14px',
  fontWeight: '500',
  color: 'neutral.text.low',
});

const emptyDesc = css({
  fontSize: '13px',
  color: 'neutral.text.base',
  opacity: 0.38,
});

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NotificationsPage() {
  return (
    <div className={pageRoot}>
      {/* ── Header ── */}
      <header className={headerBar}>
        <div className={headerTop}>
          <div className={headerLeft}>
            <Bell size={20} className={headerBellIcon} />
            <h1 className={headerTitle}>알림 센터</h1>
          </div>
          <div className={headerRight}>
            <button className={ghostButtonDisabled} disabled aria-disabled="true">
              모두 읽음 처리
            </button>
            <button className={iconButton} aria-label="설정">
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <nav className={tabBar}>
          <button className={tabActive}>전체</button>
          <button className={tabInactive}>읽지 않음</button>
          <button className={tabInactive}>완료됨</button>
        </nav>
      </header>

      {/* ── Body ── */}
      <div className={bodyLayout}>

        {/* ── Sidebar ── */}
        <aside className={sidebar}>
          {/* Counter cards */}
          <div className={counterCardPrimary}>
            <div className={counterIconRow}>
              <Bell size={16} className={css({ color: 'primary.icon.base' })} />
            </div>
            <span className={numPrimary}>8</span>
            <span className={counterLabel}>읽지 않음</span>
          </div>

          <div className={counterCardCritical}>
            <div className={counterIconRow}>
              <AlertCircle size={16} className={css({ color: 'critical.icon.base' })} />
            </div>
            <span className={numCritical}>2</span>
            <span className={counterLabel}>즉시 확인</span>
          </div>

          <div className={counterCardWarning}>
            <div className={counterIconRow}>
              <AlertTriangle size={16} className={css({ color: 'warning.icon.base' })} />
            </div>
            <span className={numWarning}>3</span>
            <span className={counterLabel}>주의 필요</span>
          </div>

          <div className={divider} />

          <button className={filterSelected}>전체</button>
          <button className={filterUnselected}>시스템</button>
          <button className={filterUnselected}>결제</button>
          <button className={filterUnselected}>배포</button>
          <button className={filterUnselected}>보안</button>
          <button className={filterUnselected}>마케팅</button>
        </aside>

        {/* ── Notification List ── */}
        <main className={notifList}>

          {/* 알림 1 — 정상 완료 (읽지 않음) */}
          <article className={cardUnread}>
            <div className={accentPositive} />
            <div className={cardBody}>
              <div className={cardTopRow}>
                <CheckCircle2 size={18} className={iconPositive} />
                <span className={titleStrong}>배포 v2.4.1 완료</span>
                <button className={closeBtn} aria-label="닫기"><X size={14} /></button>
              </div>
              <p className={bodyText}>프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.</p>
              <div className={footerRow}>
                <span className={timeText}>방금 전</span>
                <span className={badgePositiveOutline}>완료됨</span>
                <button className={btnPositiveOutline}>배포 로그 보기</button>
              </div>
            </div>
          </article>

          {/* 알림 2 — 심각한 문제 (읽지 않음) */}
          <article className={cardUnread}>
            <div className={accentCritical} />
            <div className={cardBody}>
              <div className={cardTopRow}>
                <XCircle size={18} className={iconCritical} />
                <span className={titleStrong}>DB 연결 오류</span>
                <button className={closeBtn} aria-label="닫기"><X size={14} /></button>
              </div>
              <p className={bodyText}>데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.</p>
              <div className={footerRow}>
                <span className={timeText}>3분 전</span>
                <span className={badgeCriticalSolid}>즉시 확인</span>
                <button className={btnCriticalFilled}>상세 보기</button>
                <button className={btnGhostDim} disabled aria-disabled="true">무시</button>
              </div>
            </div>
          </article>

          {/* 알림 3 — 주의 필요 (읽지 않음) */}
          <article className={cardUnread}>
            <div className={accentWarning} />
            <div className={cardBody}>
              <div className={cardTopRow}>
                <AlertTriangle size={18} className={iconWarning} />
                <span className={titleStrong}>메모리 사용량 경고</span>
                <button className={closeBtn} aria-label="닫기"><X size={14} /></button>
              </div>
              <p className={bodyText}>서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.</p>
              <div className={footerRow}>
                <span className={timeText}>15분 전</span>
                <span className={badgeWarningOutline}>주의</span>
                <button className={btnWarningOutline}>리소스 모니터 열기</button>
              </div>
            </div>
          </article>

          {/* 알림 4 — 일반 안내 (읽지 않음) */}
          <article className={cardUnread}>
            <div className={accentInfo} />
            <div className={cardBody}>
              <div className={cardTopRow}>
                <Info size={18} className={iconInfo} />
                <span className={titleStrong}>시스템 점검 예정</span>
                <button className={closeBtn} aria-label="닫기"><X size={14} /></button>
              </div>
              <p className={bodyText}>2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.</p>
              <div className={footerRow}>
                <span className={timeText}>1시간 전</span>
                <span className={badgeInfoOutline}>안내</span>
                <button className={btnInfoOutline}>일정 확인</button>
              </div>
            </div>
          </article>

          {/* 알림 5 — 메인 컬러/기능 (읽지 않음) */}
          <article className={cardUnread}>
            <div className={accentPrimary} />
            <div className={cardBody}>
              <div className={cardTopRow}>
                <Zap size={18} className={iconPrimary} />
                <span className={titleStrong}>새 기능 출시</span>
                <button className={closeBtn} aria-label="닫기"><X size={14} /></button>
              </div>
              <p className={bodyText}>대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.</p>
              <div className={footerRow}>
                <span className={timeText}>2시간 전</span>
                <span className={badgePrimarySolid}>새 기능</span>
                <button className={btnPrimaryFilled}>지금 확인</button>
              </div>
            </div>
          </article>

          {/* 알림 6 — 정상 완료 (읽음) */}
          <article className={cardRead}>
            <div className={accentPositiveDim} />
            <div className={cardBody}>
              <div className={cardTopRow}>
                <CheckCircle2 size={18} className={iconPositiveDim} />
                <span className={titleMuted}>결제 처리 완료</span>
                <button className={closeBtn} aria-label="닫기"><X size={14} /></button>
              </div>
              <p className={bodyText}>Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.</p>
              <div className={footerRow}>
                <span className={timeText}>어제</span>
                <span className={badgePositiveOutlineDim}>완료됨</span>
                <button className={btnGhostReadDim}>영수증 보기</button>
              </div>
            </div>
          </article>

          {/* 알림 7 — 주의 필요 (읽음) */}
          <article className={cardRead}>
            <div className={accentWarningDim} />
            <div className={cardBody}>
              <div className={cardTopRow}>
                <AlertCircle size={18} className={iconWarningDim} />
                <span className={titleMuted}>API 응답 지연 감지</span>
                <button className={closeBtn} aria-label="닫기"><X size={14} /></button>
              </div>
              <p className={bodyText}>결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)</p>
              <div className={footerRow}>
                <span className={timeText}>2일 전</span>
                <span className={badgeNeutral}>처리됨</span>
              </div>
            </div>
          </article>

          {/* 알림 8 — 일반 안내 (읽음) */}
          <article className={cardRead}>
            <div className={accentInfoDim} />
            <div className={cardBody}>
              <div className={cardTopRow}>
                <Info size={18} className={iconInfoDim} />
                <span className={titleMuted}>약관 업데이트 안내</span>
                <button className={closeBtn} aria-label="닫기"><X size={14} /></button>
              </div>
              <p className={bodyText}>서비스 이용약관이 2025년 7월 1일부로 변경됩니다.</p>
              <div className={footerRow}>
                <span className={timeText}>3일 전</span>
                <span className={badgeNeutral}>안내</span>
                <button className={btnGhost}>약관 보기</button>
              </div>
            </div>
          </article>

          {/* Divider + Empty state */}
          <div className={divider} />

          <div className={emptyState}>
            <BellOff size={32} className={emptyIcon} />
            <span className={emptyTitle}>모든 알림을 확인했습니다</span>
            <span className={emptyDesc}>새로운 알림이 도착하면 여기에 표시됩니다.</span>
          </div>
        </main>
      </div>
    </div>
  );
}
