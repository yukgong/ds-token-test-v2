import { css } from '@ds-token-test/styled-system-intent-first/css';
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

// ─────────────────────────────────────────────
// Accent bar — static per-intent classes (no inline style)
// ─────────────────────────────────────────────

const accentBarPositive = css({ width: '4px', flexShrink: 0, backgroundColor: 'positive.fill.base' });
const accentBarPositiveFaded = css({ width: '4px', flexShrink: 0, backgroundColor: 'positive.fill.base', opacity: 0.38 });
const accentBarCritical = css({ width: '4px', flexShrink: 0, backgroundColor: 'critical.fill.base' });
const accentBarWarning = css({ width: '4px', flexShrink: 0, backgroundColor: 'warning.fill.base' });
const accentBarWarningFaded = css({ width: '4px', flexShrink: 0, backgroundColor: 'warning.fill.base', opacity: 0.38 });
const accentBarInfo = css({ width: '4px', flexShrink: 0, backgroundColor: 'info.fill.base' });
const accentBarInfoFaded = css({ width: '4px', flexShrink: 0, backgroundColor: 'info.fill.base', opacity: 0.38 });
const accentBarPrimary = css({ width: '4px', flexShrink: 0, backgroundColor: 'primary.fill.base' });

// ─────────────────────────────────────────────
// Header
// ─────────────────────────────────────────────

function Header() {
  return (
    <header
      className={css({
        // 헤더는 레이아웃 구조 → canvas
        backgroundColor: 'neutral.canvas.01',
        borderBottomWidth: '1px',
        borderBottomStyle: 'solid',
        borderBottomColor: 'neutral.border.base',
        flexShrink: 0,
      })}
    >
      {/* Title row */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '24px',
          paddingRight: '24px',
          paddingTop: '14px',
          paddingBottom: '14px',
        })}
      >
        {/* Left: Bell icon + title */}
        <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
          <Bell size={20} className={css({ color: 'neutral.icon.base' })} />
          <span
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.base',
            })}
          >
            알림 센터
          </span>
        </div>

        {/* Right: disabled ghost button + settings icon button */}
        <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
          {/* 모두 읽음 처리 — ghost button, disabled (opacity: 0.38) */}
          <button
            disabled
            className={css({
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '7px',
              paddingBottom: '7px',
              borderRadius: '6px',
              fontSize: '13px',
              color: 'neutral.text.base',
              // 버튼 컴포넌트 표면 → surface
              backgroundColor: 'neutral.surface.transparent',
              border: 'none',
              cursor: 'not-allowed',
              opacity: 0.38,
            })}
          >
            모두 읽음 처리
          </button>

          {/* Settings ghost icon button */}
          <button
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '6px',
              backgroundColor: 'neutral.surface.transparent',
              border: 'none',
              cursor: 'pointer',
            })}
          >
            <Settings size={18} className={css({ color: 'neutral.icon.base' })} />
          </button>
        </div>
      </div>

      {/* Tab bar */}
      <div
        className={css({
          display: 'flex',
          paddingLeft: '24px',
          paddingRight: '24px',
        })}
      >
        {/* Active tab: primary accent underline + primary text */}
        <button
          className={css({
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '10px',
            paddingBottom: '10px',
            fontSize: '14px',
            fontWeight: '600',
            color: 'primary.text.base',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottomWidth: '2px',
            borderBottomStyle: 'solid',
            borderBottomColor: 'primary.border.highest',
            cursor: 'pointer',
            marginBottom: '-1px',
          })}
        >
          전체
        </button>

        {/* Inactive tabs — disabled (opacity: 0.38) */}
        {['읽지 않음', '완료됨'].map((label) => (
          <button
            key={label}
            className={css({
              paddingLeft: '16px',
              paddingRight: '16px',
              paddingTop: '10px',
              paddingBottom: '10px',
              fontSize: '14px',
              color: 'neutral.text.base',
              backgroundColor: 'transparent',
              border: 'none',
              borderBottomWidth: '2px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'transparent',
              cursor: 'pointer',
              opacity: 0.38,
              marginBottom: '-1px',
            })}
          >
            {label}
          </button>
        ))}
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────
// Sidebar
// ─────────────────────────────────────────────

function Sidebar() {
  const categories = ['전체', '시스템', '결제', '배포', '보안', '마케팅'];

  return (
    <aside
      className={css({
        width: '200px',
        flexShrink: 0,
        // 가장 연한 중립 배경 — 레이아웃 패널 → canvas
        backgroundColor: 'neutral.canvas.02',
        borderRightWidth: '1px',
        borderRightStyle: 'solid',
        borderRightColor: 'neutral.border.base',
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      })}
    >
      {/* Counter card 1 — 읽지 않음 (primary) */}
      {/* 카운터 카드: 컨테이너지만 의미색을 직접 가진 작은 패널 → surface.base(가장 연한) */}
      <div
        className={css({
          backgroundColor: 'primary.surface.base',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'primary.border.base',
          borderRadius: '10px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        })}
      >
        <Bell size={18} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
        <div>
          <div className={css({ fontSize: '20px', fontWeight: '700', color: 'primary.text.base' })}>
            8
          </div>
          <div className={css({ fontSize: '11px', color: 'neutral.text.low' })}>읽지 않음</div>
        </div>
      </div>

      {/* Counter card 2 — 즉시 확인 (critical) */}
      <div
        className={css({
          backgroundColor: 'critical.surface.base',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'critical.border.base',
          borderRadius: '10px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        })}
      >
        <AlertCircle size={18} className={css({ color: 'critical.icon.base', flexShrink: 0 })} />
        <div>
          <div className={css({ fontSize: '20px', fontWeight: '700', color: 'critical.text.base' })}>
            2
          </div>
          <div className={css({ fontSize: '11px', color: 'neutral.text.low' })}>즉시 확인</div>
        </div>
      </div>

      {/* Counter card 3 — 주의 필요 (warning) */}
      <div
        className={css({
          backgroundColor: 'warning.surface.base',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'warning.border.base',
          borderRadius: '10px',
          padding: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        })}
      >
        <AlertTriangle size={18} className={css({ color: 'warning.icon.base', flexShrink: 0 })} />
        <div>
          <div className={css({ fontSize: '20px', fontWeight: '700', color: 'warning.text.base' })}>
            3
          </div>
          <div className={css({ fontSize: '11px', color: 'neutral.text.low' })}>주의 필요</div>
        </div>
      </div>

      {/* Divider */}
      <hr
        className={css({
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'neutral.border.low',
          margin: '4px 0',
        })}
      />

      {/* Category filters */}
      {categories.map((cat) => {
        const selected = cat === '전체';
        return (
          <button
            key={cat}
            className={css({
              display: 'block',
              width: '100%',
              paddingLeft: '12px',
              paddingRight: '12px',
              paddingTop: '8px',
              paddingBottom: '8px',
              borderRadius: '9999px',
              fontSize: '13px',
              textAlign: 'left',
              cursor: 'pointer',
              border: 'none',
              // 선택됨: primary fill(채움 트랙 슬롯) + inverse text
              // 미선택: neutral surface(컴포넌트 표면) + neutral text
              backgroundColor: selected ? 'primary.fill.base' : 'neutral.surface.base',
              color: selected ? 'inverse.text.base' : 'neutral.text.base',
              fontWeight: selected ? '600' : '400',
            })}
          >
            {cat}
          </button>
        );
      })}
    </aside>
  );
}

// ─────────────────────────────────────────────
// Card body — shared inner layout
// ─────────────────────────────────────────────

interface CardBodyProps {
  isUnread: boolean;
  icon: React.ReactNode;
  title: string;
  body: string;
  time: string;
  badge: React.ReactNode;
  actions?: React.ReactNode;
}

function CardBody({ isUnread, icon, title, body, time, badge, actions }: CardBodyProps) {
  return (
    <div
      className={css({
        flex: 1,
        // 알림 카드 본체: 구조를 이루는 패널 배경 → canvas
        // 읽지 않음: primary.canvas 없으므로 primary.surface.base 사용 (의미색 가장 연한 면)
        // 읽음: neutral.canvas.01 (기본 밝은 배경)
        backgroundColor: isUnread ? 'primary.surface.base' : 'neutral.canvas.01',
        padding: '14px 44px 14px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        position: 'relative',
      })}
    >
      {/* Close button — ghost, top-right */}
      <button
        className={css({
          position: 'absolute',
          top: '10px',
          right: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '28px',
          height: '28px',
          borderRadius: '6px',
          backgroundColor: 'neutral.surface.transparent',
          border: 'none',
          cursor: 'pointer',
        })}
      >
        <X size={14} className={css({ color: 'neutral.icon.base' })} />
      </button>

      {/* Icon + Title */}
      <div className={css({ display: 'flex', alignItems: 'center', gap: '8px' })}>
        {icon}
        <span
          className={css({
            fontSize: '14px',
            fontWeight: '600',
            color: isUnread ? 'neutral.text.base' : 'neutral.text.low',
          })}
        >
          {title}
        </span>
      </div>

      {/* Body text — disabled (opacity: 0.38) */}
      <p
        className={css({
          fontSize: '13px',
          color: 'neutral.text.base',
          lineHeight: '1.5',
          opacity: 0.38,
          marginLeft: '26px',
        })}
      >
        {body}
      </p>

      {/* Footer: time + badge + actions */}
      <div
        className={css({
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexWrap: 'wrap',
          marginTop: '2px',
          marginLeft: '26px',
        })}
      >
        {/* 시간 — disabled (opacity: 0.38) */}
        <span
          className={css({
            fontSize: '12px',
            color: 'neutral.text.base',
            opacity: 0.38,
          })}
        >
          {time}
        </span>
        {badge}
        {actions && (
          <div className={css({ display: 'flex', gap: '6px', flexWrap: 'wrap' })}>
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// Notification List
// ─────────────────────────────────────────────

function NotificationList() {
  // ── Badges ──────────────────────────────────

  // 완료됨 — positive outline (뱃지 컴포넌트 표면 → surface)
  const BadgePositiveOutline = (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '600',
        backgroundColor: 'positive.surface.base',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'positive.border.base',
        color: 'positive.text.base',
      })}
    >
      완료됨
    </span>
  );

  // 즉시 확인 — critical solid fill + inverse text
  const BadgeCriticalSolid = (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '600',
        backgroundColor: 'critical.fill.base',
        color: 'inverse.text.base',
      })}
    >
      즉시 확인
    </span>
  );

  // 주의 — warning outline
  const BadgeWarningOutline = (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '600',
        backgroundColor: 'warning.surface.base',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'warning.border.base',
        color: 'warning.text.base',
      })}
    >
      주의
    </span>
  );

  // 안내 — info outline
  const BadgeInfoOutline = (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '600',
        backgroundColor: 'info.surface.base',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'info.border.base',
        color: 'info.text.base',
      })}
    >
      안내
    </span>
  );

  // 새 기능 — primary solid fill + inverse text
  const BadgePrimarySolid = (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '600',
        backgroundColor: 'primary.fill.base',
        color: 'inverse.text.base',
      })}
    >
      새 기능
    </span>
  );

  // 완료됨 (읽음, opacity 낮게) — positive outline faded
  const BadgePositiveOutlineFaded = (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '600',
        backgroundColor: 'positive.surface.base',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'positive.border.base',
        color: 'positive.text.base',
        opacity: 0.38,
      })}
    >
      완료됨
    </span>
  );

  // 처리됨 — neutral outline
  const BadgeNeutralProcessed = (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '600',
        backgroundColor: 'neutral.surface.base',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'neutral.border.base',
        color: 'neutral.text.low',
      })}
    >
      처리됨
    </span>
  );

  // 안내 (읽음) — neutral outline
  const BadgeNeutralInfo = (
    <span
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        paddingLeft: '8px',
        paddingRight: '8px',
        paddingTop: '2px',
        paddingBottom: '2px',
        borderRadius: '9999px',
        fontSize: '11px',
        fontWeight: '600',
        backgroundColor: 'neutral.surface.base',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'neutral.border.base',
        color: 'neutral.text.low',
      })}
    >
      안내
    </span>
  );

  // ── Action buttons ───────────────────────────

  // 배포 로그 보기 — positive outline
  const BtnPositiveOutline = (
    <button
      className={css({
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: 'neutral.surface.transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'positive.border.highest',
        color: 'positive.text.base',
        cursor: 'pointer',
      })}
    >
      배포 로그 보기
    </button>
  );

  // 상세 보기 — critical filled
  const BtnCriticalSolid = (
    <button
      className={css({
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: 'critical.fill.base',
        border: 'none',
        color: 'inverse.text.base',
        cursor: 'pointer',
      })}
    >
      상세 보기
    </button>
  );

  // 무시 — ghost, disabled (opacity: 0.38)
  const BtnIgnoreGhostDisabled = (
    <button
      disabled
      className={css({
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '6px',
        fontSize: '12px',
        backgroundColor: 'neutral.surface.transparent',
        border: 'none',
        color: 'neutral.text.base',
        cursor: 'not-allowed',
        opacity: 0.38,
      })}
    >
      무시
    </button>
  );

  // 리소스 모니터 열기 — warning outline
  const BtnWarningOutline = (
    <button
      className={css({
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: 'neutral.surface.transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'warning.border.highest',
        color: 'warning.text.base',
        cursor: 'pointer',
      })}
    >
      리소스 모니터 열기
    </button>
  );

  // 일정 확인 — info outline
  const BtnInfoOutline = (
    <button
      className={css({
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: 'neutral.surface.transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'info.border.highest',
        color: 'info.text.base',
        cursor: 'pointer',
      })}
    >
      일정 확인
    </button>
  );

  // 지금 확인 — primary filled
  const BtnPrimarySolid = (
    <button
      className={css({
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '500',
        backgroundColor: 'primary.fill.base',
        border: 'none',
        color: 'inverse.text.base',
        cursor: 'pointer',
      })}
    >
      지금 확인
    </button>
  );

  // 영수증 보기 — ghost, disabled (opacity: 0.38)
  const BtnReceiptGhostDisabled = (
    <button
      disabled
      className={css({
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '6px',
        fontSize: '12px',
        backgroundColor: 'neutral.surface.transparent',
        border: 'none',
        color: 'neutral.text.base',
        cursor: 'not-allowed',
        opacity: 0.38,
      })}
    >
      영수증 보기
    </button>
  );

  // 약관 보기 — ghost
  const BtnTermsGhost = (
    <button
      className={css({
        paddingLeft: '12px',
        paddingRight: '12px',
        paddingTop: '5px',
        paddingBottom: '5px',
        borderRadius: '6px',
        fontSize: '12px',
        backgroundColor: 'neutral.surface.transparent',
        border: 'none',
        color: 'neutral.text.base',
        cursor: 'pointer',
      })}
    >
      약관 보기
    </button>
  );

  // 공통 카드 래퍼 스타일 (rounded + border)
  const cardWrap = css({
    display: 'flex',
    borderRadius: '10px',
    overflow: 'hidden',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'neutral.border.low',
  });

  return (
    <main
      className={css({
        flex: 1,
        // 오른쪽 목록 영역: 레이아웃 배경 → canvas
        backgroundColor: 'neutral.canvas.02',
        overflowY: 'auto',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      })}
    >
      {/* Card 1 — 정상 완료 (읽지 않음) */}
      <div className={cardWrap}>
        <div className={accentBarPositive} />
        <CardBody
          isUnread
          icon={<CheckCircle2 size={18} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />}
          title="배포 v2.4.1 완료"
          body="프로덕션 서버에 성공적으로 배포되었습니다. 모든 헬스체크가 통과했습니다."
          time="방금 전"
          badge={BadgePositiveOutline}
          actions={BtnPositiveOutline}
        />
      </div>

      {/* Card 2 — 심각한 문제 (읽지 않음) */}
      <div className={cardWrap}>
        <div className={accentBarCritical} />
        <CardBody
          isUnread
          icon={<XCircle size={18} className={css({ color: 'critical.icon.base', flexShrink: 0 })} />}
          title="DB 연결 오류"
          body="데이터베이스 연결이 끊어졌습니다. 서비스 장애가 발생하고 있습니다. 즉시 확인하세요."
          time="3분 전"
          badge={BadgeCriticalSolid}
          actions={<>{BtnCriticalSolid}{BtnIgnoreGhostDisabled}</>}
        />
      </div>

      {/* Card 3 — 주의 필요 (읽지 않음) */}
      <div className={cardWrap}>
        <div className={accentBarWarning} />
        <CardBody
          isUnread
          icon={<AlertTriangle size={18} className={css({ color: 'warning.icon.base', flexShrink: 0 })} />}
          title="메모리 사용량 경고"
          body="서버 메모리 사용량이 78%에 도달했습니다. 임계치(85%)에 근접하고 있습니다."
          time="15분 전"
          badge={BadgeWarningOutline}
          actions={BtnWarningOutline}
        />
      </div>

      {/* Card 4 — 일반 안내 (읽지 않음) */}
      <div className={cardWrap}>
        <div className={accentBarInfo} />
        <CardBody
          isUnread
          icon={<Info size={18} className={css({ color: 'info.icon.base', flexShrink: 0 })} />}
          title="시스템 점검 예정"
          body="2025년 6월 10일 02:00–04:00에 정기 시스템 점검이 예정되어 있습니다."
          time="1시간 전"
          badge={BadgeInfoOutline}
          actions={BtnInfoOutline}
        />
      </div>

      {/* Card 5 — 메인 컬러/기능 (읽지 않음) */}
      <div className={cardWrap}>
        <div className={accentBarPrimary} />
        <CardBody
          isUnread
          icon={<Zap size={18} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />}
          title="새 기능 출시"
          body="대시보드 분석 기능이 업데이트되었습니다. 실시간 차트와 커스텀 리포트를 사용해 보세요."
          time="2시간 전"
          badge={BadgePrimarySolid}
          actions={BtnPrimarySolid}
        />
      </div>

      {/* Card 6 — 정상 완료 (읽음) */}
      <div className={cardWrap}>
        <div className={accentBarPositiveFaded} />
        <CardBody
          isUnread={false}
          icon={<CheckCircle2 size={18} className={css({ color: 'positive.icon.base', flexShrink: 0, opacity: 0.38 })} />}
          title="결제 처리 완료"
          body="Pro 플랜 월정액 ₩49,000이 정상 결제되었습니다."
          time="어제"
          badge={BadgePositiveOutlineFaded}
          actions={BtnReceiptGhostDisabled}
        />
      </div>

      {/* Card 7 — 주의 필요 (읽음) */}
      <div className={cardWrap}>
        <div className={accentBarWarningFaded} />
        <CardBody
          isUnread={false}
          icon={<AlertCircle size={18} className={css({ color: 'warning.icon.base', flexShrink: 0, opacity: 0.38 })} />}
          title="API 응답 지연 감지"
          body="결제 API 평균 응답시간이 2초를 초과했습니다. (정상 처리됨)"
          time="2일 전"
          badge={BadgeNeutralProcessed}
        />
      </div>

      {/* Card 8 — 일반 안내 (읽음) */}
      <div className={cardWrap}>
        <div className={accentBarInfoFaded} />
        <CardBody
          isUnread={false}
          icon={<Info size={18} className={css({ color: 'info.icon.base', flexShrink: 0, opacity: 0.38 })} />}
          title="약관 업데이트 안내"
          body="서비스 이용약관이 2025년 7월 1일부로 변경됩니다."
          time="3일 전"
          badge={BadgeNeutralInfo}
          actions={BtnTermsGhost}
        />
      </div>

      {/* Divider */}
      <hr
        className={css({
          borderTopWidth: '1px',
          borderTopStyle: 'solid',
          borderTopColor: 'neutral.border.low',
          margin: '8px 0',
        })}
      />

      {/* 빈 상태 카드 — 구조적 컨테이너 → canvas.03 */}
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '32px',
          borderRadius: '10px',
          backgroundColor: 'neutral.canvas.03',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: 'neutral.border.base',
          textAlign: 'center',
        })}
      >
        <BellOff size={32} className={css({ color: 'neutral.icon.base', opacity: 0.38 })} />
        <p className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.low' })}>
          모든 알림을 확인했습니다
        </p>
        <p className={css({ fontSize: '13px', color: 'neutral.text.base', opacity: 0.38 })}>
          새로운 알림이 도착하면 여기에 표시됩니다.
        </p>
      </div>
    </main>
  );
}

// ─────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────

export default function NotificationsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        overflow: 'hidden',
        // 페이지 최하단 배경 → canvas.01
        backgroundColor: 'neutral.canvas.01',
        fontFamily: 'sans-serif',
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
