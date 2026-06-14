import { css } from '@ds-token-test/styled-system-property-first/css';
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

// ─── Token-mapped style constants ────────────────────────────────────────────

const pageWrapper2 = css({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  overflow: 'hidden',
  fontFamily: 'sans-serif',
  backgroundColor: 'surface.neutral.subtle',
});

// Header
const headerBar2 = css({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'surface.neutral.default',
  borderBottom: '1px solid',
  borderColor: 'border.neutral.default',
  flexShrink: 0,
});

const headerTop2 = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '12px 20px',
});

const headerLeft2 = css({ display: 'flex', alignItems: 'center', gap: '8px' });

const headerTitle2 = css({
  fontSize: '1.125rem',
  fontWeight: '700',
  color: 'text.neutral.default',
});

const headerRight2 = css({ display: 'flex', alignItems: 'center', gap: '8px' });

// "모두 읽음 처리" — ghost + disabled (opacity 0.38)
const btnMarkAllRead = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '6px 12px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'text.neutral.default',
  fontSize: '0.875rem',
  cursor: 'not-allowed',
  opacity: 0.38,
});

const btnSettingsIcon = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '6px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'icon.neutral.default',
  cursor: 'pointer',
});

// Tab bar
const tabBar2 = css({
  display: 'flex',
  padding: '0 20px',
});

const tabActive2 = css({
  padding: '8px 16px',
  fontSize: '0.875rem',
  fontWeight: '600',
  color: 'text.brand.default',
  border: 'none',
  borderBottom: '2px solid',
  borderBottomColor: 'border.brand.default',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
});

const tabInactive2 = css({
  padding: '8px 16px',
  fontSize: '0.875rem',
  fontWeight: '400',
  color: 'text.neutral.default',
  border: 'none',
  borderBottom: '2px solid transparent',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
  opacity: 0.38,
});

// Layout body
const layoutBody2 = css({
  display: 'flex',
  flex: 1,
  overflow: 'hidden',
});

// Sidebar
const sidebar2 = css({
  width: '200px',
  flexShrink: 0,
  backgroundColor: 'surface.neutral.subtle',
  borderRight: '1px solid',
  borderColor: 'border.neutral.default',
  overflowY: 'auto',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const ccBrand = css({
  borderRadius: '8px',
  border: '1px solid',
  borderColor: 'border.brand.default',
  backgroundColor: 'surface.brand.subtle',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const ccCritical = css({
  borderRadius: '8px',
  border: '1px solid',
  borderColor: 'border.critical.default',
  backgroundColor: 'surface.critical.subtle',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const ccWarning = css({
  borderRadius: '8px',
  border: '1px solid',
  borderColor: 'border.warning.default',
  backgroundColor: 'surface.warning.subtle',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

const ccRow = css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' });
const ccNumBrand = css({ fontSize: '1.25rem', fontWeight: '700', color: 'text.brand.default' });
const ccNumCritical = css({ fontSize: '1.25rem', fontWeight: '700', color: 'text.critical.default' });
const ccNumWarning = css({ fontSize: '1.25rem', fontWeight: '700', color: 'text.warning.default' });
const ccLabel = css({ fontSize: '0.6875rem', color: 'text.neutral.muted' });

const divider2 = css({ height: '1px', backgroundColor: 'border.neutral.default' });

const filterActive2 = css({
  padding: '5px 12px',
  borderRadius: '9999px',
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
  fontSize: '0.8125rem',
  fontWeight: '600',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
});

const filterInactive2 = css({
  padding: '5px 12px',
  borderRadius: '9999px',
  backgroundColor: 'surface.neutral.ghost',
  color: 'text.neutral.default',
  fontSize: '0.8125rem',
  fontWeight: '400',
  border: 'none',
  cursor: 'pointer',
  textAlign: 'left',
});

// Notification list
const notifList2 = css({
  flex: 1,
  overflowY: 'auto',
  backgroundColor: 'surface.neutral.subtle',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

// Cards
const cardUnread2 = css({
  display: 'flex',
  borderRadius: '8px',
  backgroundColor: 'surface.brand.subtle',
  overflow: 'hidden',
  position: 'relative',
});

const cardRead2 = css({
  display: 'flex',
  borderRadius: '8px',
  backgroundColor: 'surface.neutral.default',
  overflow: 'hidden',
  position: 'relative',
});

// Accent bars
const accentPositive2 = css({ width: '4px', flexShrink: 0, backgroundColor: 'fill.positive' });
const accentCritical2 = css({ width: '4px', flexShrink: 0, backgroundColor: 'fill.critical' });
const accentWarning2 = css({ width: '4px', flexShrink: 0, backgroundColor: 'fill.warning' });
const accentInfo2 = css({ width: '4px', flexShrink: 0, backgroundColor: 'fill.info' });
const accentBrand2 = css({ width: '4px', flexShrink: 0, backgroundColor: 'fill.brand' });
const accentPositiveDim = css({ width: '4px', flexShrink: 0, backgroundColor: 'fill.positive', opacity: 0.38 });
const accentWarningDim = css({ width: '4px', flexShrink: 0, backgroundColor: 'fill.warning', opacity: 0.38 });
const accentInfoDim = css({ width: '4px', flexShrink: 0, backgroundColor: 'fill.info', opacity: 0.38 });

const cardInner2 = css({
  flex: 1,
  padding: '12px 14px 12px 12px',
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

const cardTopRow2 = css({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  gap: '8px',
});

const cardTopLeft2 = css({ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 });

const cardTitle2 = css({
  fontSize: '0.9375rem',
  fontWeight: '600',
  color: 'text.neutral.default',
});

const cardTitleMuted2 = css({
  fontSize: '0.9375rem',
  fontWeight: '600',
  color: 'text.neutral.muted',
});

// Body text — dimmed with opacity per spec
const cardBodyText2 = css({
  fontSize: '0.875rem',
  color: 'text.neutral.default',
  lineHeight: 1.5,
  opacity: 0.38,
});

const cardFootRow2 = css({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexWrap: 'wrap',
});

const timeText2 = css({ fontSize: '0.75rem', color: 'text.neutral.muted', opacity: 0.38 });

// Close button
const closeBtn2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'icon.neutral.muted',
  cursor: 'pointer',
  flexShrink: 0,
  alignSelf: 'flex-start',
});

// Badges
const badgePositive2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '0.6875rem',
  fontWeight: '500',
  backgroundColor: 'surface.positive.subtle',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
});

const badgeCriticalFill2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '0.6875rem',
  fontWeight: '500',
  backgroundColor: 'fill.critical',
  color: 'text.inverse',
});

const badgeWarning2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '0.6875rem',
  fontWeight: '500',
  backgroundColor: 'surface.warning.subtle',
  border: '1px solid',
  borderColor: 'border.warning.default',
  color: 'text.warning.default',
});

const badgeInfo2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '0.6875rem',
  fontWeight: '500',
  backgroundColor: 'surface.info.subtle',
  border: '1px solid',
  borderColor: 'border.info.default',
  color: 'text.info.default',
});

const badgeBrandFill2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '0.6875rem',
  fontWeight: '500',
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
});

const badgePositiveDim2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '0.6875rem',
  fontWeight: '500',
  backgroundColor: 'surface.positive.subtle',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
  opacity: 0.38,
});

const badgeNeutral2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '2px 8px',
  borderRadius: '9999px',
  fontSize: '0.6875rem',
  fontWeight: '500',
  backgroundColor: 'surface.neutral.subtle',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  color: 'text.neutral.muted',
});

// Action buttons
const btnPositiveOutline2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8125rem',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'border.positive.default',
  color: 'text.positive.default',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
});

const btnCriticalFill2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8125rem',
  fontWeight: '500',
  border: 'none',
  backgroundColor: 'fill.critical',
  color: 'text.inverse',
  cursor: 'pointer',
});

const btnGhostDim2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8125rem',
  fontWeight: '400',
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'text.neutral.default',
  cursor: 'not-allowed',
  opacity: 0.38,
});

const btnWarningOutline2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8125rem',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'border.warning.default',
  color: 'text.warning.default',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
});

const btnInfoOutline2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8125rem',
  fontWeight: '500',
  border: '1px solid',
  borderColor: 'border.info.default',
  color: 'text.info.default',
  backgroundColor: 'surface.transparent',
  cursor: 'pointer',
});

const btnBrandFill2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8125rem',
  fontWeight: '500',
  border: 'none',
  backgroundColor: 'fill.brand',
  color: 'text.inverse',
  cursor: 'pointer',
});

const btnGhostDim3 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8125rem',
  fontWeight: '400',
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'text.neutral.default',
  cursor: 'pointer',
  opacity: 0.38,
});

const btnGhost2 = css({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: '6px',
  fontSize: '0.8125rem',
  fontWeight: '400',
  border: 'none',
  backgroundColor: 'surface.transparent',
  color: 'text.neutral.default',
  cursor: 'pointer',
});

// Empty state
const emptyState2 = css({
  borderRadius: '8px',
  backgroundColor: 'surface.neutral.ghost',
  border: '1px solid',
  borderColor: 'border.neutral.default',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '8px',
});

const emptyTitle2 = css({ fontSize: '0.9375rem', fontWeight: '500', color: 'text.neutral.muted' });
const emptyDesc2 = css({ fontSize: '0.875rem', color: 'text.neutral.subtle', opacity: 0.38 });

export default function NotificationsPage() {
  return (
    <div className={pageWrapper2}>
      {/* 상단 헤더 바 */}
      <header className={headerBar2}>
        <div className={headerTop2}>
          <div className={headerLeft2}>
            <Bell size={20} className={css({ color: 'icon.neutral.default' })} />
            <span className={headerTitle2}>알림 센터</span>
          </div>
          <div className={headerRight2}>
            {/* 모두 읽음 처리 — ghost + 비활성 opacity 0.38 */}
            <button className={btnMarkAllRead} disabled>
              모두 읽음 처리
            </button>
            <button className={btnSettingsIcon}>
              <Settings size={18} />
            </button>
          </div>
        </div>

        {/* 탭 바 */}
        <div className={tabBar2}>
          <button className={tabActive2}>전체</button>
          <button className={tabInactive2}>읽지 않음</button>
          <button className={tabInactive2}>완료됨</button>
        </div>
      </header>

      {/* 2열 레이아웃 */}
      <div className={layoutBody2}>
        {/* 왼쪽 필터 사이드바 */}
        <aside className={sidebar2}>
          {/* 요약 카운터 카드 3개 */}
          <div className={ccBrand}>
            <div className={ccRow}>
              <span className={ccNumBrand}>8</span>
              <Bell size={16} className={css({ color: 'icon.brand.default' })} />
            </div>
            <span className={ccLabel}>읽지 않음</span>
          </div>

          <div className={ccCritical}>
            <div className={ccRow}>
              <span className={ccNumCritical}>2</span>
              <AlertCircle size={16} className={css({ color: 'icon.critical.default' })} />
            </div>
            <span className={ccLabel}>즉시 확인</span>
          </div>

          <div className={ccWarning}>
            <div className={ccRow}>
              <span className={ccNumWarning}>3</span>
              <AlertTriangle size={16} className={css({ color: 'icon.warning.default' })} />
            </div>
            <span className={ccLabel}>주의 필요</span>
          </div>

          <div className={divider2} />

          {/* 카테고리 필터 */}
          <button className={filterActive2}>전체</button>
          <button className={filterInactive2}>시스템</button>
          <button className={filterInactive2}>결제</button>
          <button className={filterInactive2}>배포</button>
          <button className={filterInactive2}>보안</button>
          <button className={filterInactive2}>마케팅</button>
        </aside>

        {/* 오른쪽 알림 목록 */}
        <main className={notifList2}>

          {/* 알림 1 — 정상 완료 (읽지 않음) */}
          <div className={cardUnread2}>
            <div className={accentPositive2} />
            <div className={cardInner2}>
              <div className={cardTopRow2}>
                <div className={cardTopLeft2}>
                  <CheckCircle2 size={18} className={css({ color: 'icon.positive.default', flexShrink: 0 })} />
                  <span className={cardTitle2}>배포 v2.4.1 완료</span>
                </div>
                <button className={closeBtn2}><X size={14} /></button>
              </div>
              <p className={cardBodyText2}>
                프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다.
              </p>
              <div className={cardFootRow2}>
                <span className={timeText2}>방금 전</span>
                <span className={badgePositive2}>완료됨</span>
                <button className={btnPositiveOutline2}>배포 로그 보기</button>
              </div>
            </div>
          </div>

          {/* 알림 2 — 심각한 문제 (읽지 않음) */}
          <div className={cardUnread2}>
            <div className={accentCritical2} />
            <div className={cardInner2}>
              <div className={cardTopRow2}>
                <div className={cardTopLeft2}>
                  <XCircle size={18} className={css({ color: 'icon.critical.default', flexShrink: 0 })} />
                  <span className={cardTitle2}>DB 연결 오류</span>
                </div>
                <button className={closeBtn2}><X size={14} /></button>
              </div>
              <p className={cardBodyText2}>
                데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요.
              </p>
              <div className={cardFootRow2}>
                <span className={timeText2}>3분 전</span>
                <span className={badgeCriticalFill2}>즉시 확인</span>
                <button className={btnCriticalFill2}>상세 보기</button>
                <button className={btnGhostDim2} disabled>무시</button>
              </div>
            </div>
          </div>

          {/* 알림 3 — 주의 필요 (읽지 않음) */}
          <div className={cardUnread2}>
            <div className={accentWarning2} />
            <div className={cardInner2}>
              <div className={cardTopRow2}>
                <div className={cardTopLeft2}>
                  <AlertTriangle size={18} className={css({ color: 'icon.warning.default', flexShrink: 0 })} />
                  <span className={cardTitle2}>메모리 사용량 경고</span>
                </div>
                <button className={closeBtn2}><X size={14} /></button>
              </div>
              <p className={cardBodyText2}>
                서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다.
              </p>
              <div className={cardFootRow2}>
                <span className={timeText2}>15분 전</span>
                <span className={badgeWarning2}>주의</span>
                <button className={btnWarningOutline2}>리소스 모니터 열기</button>
              </div>
            </div>
          </div>

          {/* 알림 4 — 일반 안내 (읽지 않음) */}
          <div className={cardUnread2}>
            <div className={accentInfo2} />
            <div className={cardInner2}>
              <div className={cardTopRow2}>
                <div className={cardTopLeft2}>
                  <Info size={18} className={css({ color: 'icon.info.default', flexShrink: 0 })} />
                  <span className={cardTitle2}>시스템 점검 예정</span>
                </div>
                <button className={closeBtn2}><X size={14} /></button>
              </div>
              <p className={cardBodyText2}>
                2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다.
              </p>
              <div className={cardFootRow2}>
                <span className={timeText2}>1시간 전</span>
                <span className={badgeInfo2}>안내</span>
                <button className={btnInfoOutline2}>일정 확인</button>
              </div>
            </div>
          </div>

          {/* 알림 5 — 메인 컬러/기능 (읽지 않음) */}
          <div className={cardUnread2}>
            <div className={accentBrand2} />
            <div className={cardInner2}>
              <div className={cardTopRow2}>
                <div className={cardTopLeft2}>
                  <Zap size={18} className={css({ color: 'icon.brand.default', flexShrink: 0 })} />
                  <span className={cardTitle2}>새 기능 출시</span>
                </div>
                <button className={closeBtn2}><X size={14} /></button>
              </div>
              <p className={cardBodyText2}>
                대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요.
              </p>
              <div className={cardFootRow2}>
                <span className={timeText2}>2시간 전</span>
                <span className={badgeBrandFill2}>새 기능</span>
                <button className={btnBrandFill2}>지금 확인</button>
              </div>
            </div>
          </div>

          {/* 알림 6 — 정상 완료 (읽음) */}
          <div className={cardRead2}>
            <div className={accentPositiveDim} />
            <div className={cardInner2}>
              <div className={cardTopRow2}>
                <div className={cardTopLeft2}>
                  <span className={css({ opacity: 0.38, display: 'flex', flexShrink: 0 })}>
                    <CheckCircle2 size={18} className={css({ color: 'icon.positive.default' })} />
                  </span>
                  <span className={cardTitleMuted2}>결제 처리 완료</span>
                </div>
                <button className={closeBtn2}><X size={14} /></button>
              </div>
              <p className={cardBodyText2}>
                Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다.
              </p>
              <div className={cardFootRow2}>
                <span className={timeText2}>어제</span>
                <span className={badgePositiveDim2}>완료됨</span>
                <button className={btnGhostDim3} disabled>영수증 보기</button>
              </div>
            </div>
          </div>

          {/* 알림 7 — 주의 필요 (읽음) */}
          <div className={cardRead2}>
            <div className={accentWarningDim} />
            <div className={cardInner2}>
              <div className={cardTopRow2}>
                <div className={cardTopLeft2}>
                  <span className={css({ opacity: 0.38, display: 'flex', flexShrink: 0 })}>
                    <AlertCircle size={18} className={css({ color: 'icon.warning.default' })} />
                  </span>
                  <span className={cardTitleMuted2}>API 응답 지연 감지</span>
                </div>
                <button className={closeBtn2}><X size={14} /></button>
              </div>
              <p className={cardBodyText2}>
                결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)
              </p>
              <div className={cardFootRow2}>
                <span className={timeText2}>2일 전</span>
                <span className={badgeNeutral2}>처리됨</span>
              </div>
            </div>
          </div>

          {/* 알림 8 — 일반 안내 (읽음) */}
          <div className={cardRead2}>
            <div className={accentInfoDim} />
            <div className={cardInner2}>
              <div className={cardTopRow2}>
                <div className={cardTopLeft2}>
                  <span className={css({ opacity: 0.38, display: 'flex', flexShrink: 0 })}>
                    <Info size={18} className={css({ color: 'icon.info.default' })} />
                  </span>
                  <span className={cardTitleMuted2}>약관 업데이트 안내</span>
                </div>
                <button className={closeBtn2}><X size={14} /></button>
              </div>
              <p className={cardBodyText2}>
                서비스 이용약관이 2025년 7월 1일부로 변경됩니다.
              </p>
              <div className={cardFootRow2}>
                <span className={timeText2}>3일 전</span>
                <span className={badgeNeutral2}>안내</span>
                <button className={btnGhost2}>약관 보기</button>
              </div>
            </div>
          </div>

          {/* 구분선 */}
          <div className={divider2} />

          {/* 빈 상태 카드 */}
          <div className={emptyState2}>
            <span className={css({ opacity: 0.38 })}>
              <BellOff size={28} className={css({ color: 'icon.neutral.muted' })} />
            </span>
            <span className={emptyTitle2}>모든 알림을 확인했습니다</span>
            <span className={emptyDesc2}>더 이상 표시할 알림이 없습니다.</span>
          </div>

        </main>
      </div>
    </div>
  );
}
