import { css } from '@ds-token-test/styled-system-intent-first-slotfirst/css';
import {
  User,
  CreditCard,
  ShieldCheck,
  Bell,
  AlertTriangle,
  Zap,
  Info,
  XCircle,
  CheckCircle2,
  Monitor,
  Smartphone,
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'canvas.neutral.01',
      })}
    >
      {/* 왼쪽 설정 메뉴 */}
      <aside
        className={`dark ${css({
          width: '200px',
          flexShrink: 0,
          height: '100vh',
          overflowY: 'auto',
          backgroundColor: 'canvas.neutral.01',
          borderRight: '1px solid',
          borderRightColor: 'border.neutral.low',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 12px',
          gap: '4px',
        })}`}
      >
        {/* 뒤로가기 링크 */}
        <a
          href="#"
          className={css({
            display: 'block',
            fontSize: '13px',
            color: 'text.neutral.low',
            textDecoration: 'none',
            marginBottom: '16px',
            paddingLeft: '4px',
          })}
        >
          ← 대시보드
        </a>

        {/* 제목 */}
        <p
          className={css({
            fontSize: '18px',
            fontWeight: '700',
            color: 'text.neutral.base',
            marginBottom: '12px',
            paddingLeft: '4px',
          })}
        >
          설정
        </p>

        {/* 프로필 — 활성 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            backgroundColor: 'surface.primary.base',
            cursor: 'pointer',
          })}
        >
          <User
            size={16}
            className={css({ color: 'icon.primary.base' })}
          />
          <span className={css({ fontSize: '14px', color: 'text.primary.base', fontWeight: '500' })}>
            프로필
          </span>
        </div>

        {/* 구독 플랜 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <CreditCard
            size={16}
            className={css({ color: 'icon.neutral.base', opacity: 0.6 })}
          />
          <span className={css({ fontSize: '14px', color: 'text.neutral.low' })}>
            구독 플랜
          </span>
        </div>

        {/* 보안 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <ShieldCheck
            size={16}
            className={css({ color: 'icon.neutral.base', opacity: 0.6 })}
          />
          <span className={css({ fontSize: '14px', color: 'text.neutral.low' })}>
            보안
          </span>
        </div>

        {/* 알림 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <Bell
            size={16}
            className={css({ color: 'icon.neutral.base', opacity: 0.6 })}
          />
          <span className={css({ fontSize: '14px', color: 'text.neutral.low' })}>
            알림
          </span>
        </div>

        {/* 위험 구역 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 10px',
            borderRadius: '6px',
            cursor: 'pointer',
          })}
        >
          <AlertTriangle
            size={16}
            className={css({ color: 'icon.critical.base' })}
          />
          <span className={css({ fontSize: '14px', color: 'text.critical.base' })}>
            위험 구역
          </span>
        </div>
      </aside>

      {/* 오른쪽 콘텐츠 영역 */}
      <main
        className={css({
          flex: 1,
          height: '100vh',
          overflowY: 'auto',
          backgroundColor: 'canvas.neutral.01',
          padding: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        })}
      >
        {/* 브레드크럼 */}
        <nav
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
          })}
        >
          <a href="#" className={css({ color: 'text.neutral.low', textDecoration: 'none', _hover: { color: 'text.primary.base' } })}>
            홈
          </a>
          <span className={css({ color: 'text.neutral.low' })}>/</span>
          <a href="#" className={css({ color: 'text.neutral.low', textDecoration: 'none', _hover: { color: 'text.primary.base' } })}>
            설정
          </a>
          <span className={css({ color: 'text.neutral.low' })}>/</span>
          <span className={css({ color: 'text.neutral.base', fontWeight: '500' })}>프로필</span>
        </nav>

        {/* 카드 1: 프로필 정보 */}
        <div
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            overflow: 'hidden',
          })}
        >
          <div className={css({ padding: '24px' })}>
            <h2 className={css({ fontSize: '16px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '20px' })}>
              프로필 정보
            </h2>

            {/* 아바타 영역 */}
            <div className={css({ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' })}>
              <div
                className={css({
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  backgroundColor: 'fill.primary.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                })}
              >
                <span className={css({ fontSize: '28px', fontWeight: '700', color: 'inverse.text.base' })}>K</span>
              </div>
              <div className={css({ display: 'flex', gap: '8px' })}>
                <button
                  className={css({
                    padding: '6px 14px',
                    fontSize: '13px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.transparent',
                    color: 'text.neutral.base',
                    cursor: 'pointer',
                  })}
                >
                  사진 변경
                </button>
                <button
                  className={css({
                    padding: '6px 14px',
                    fontSize: '13px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'surface.neutral.transparent',
                    color: 'text.neutral.low',
                    cursor: 'pointer',
                  })}
                >
                  삭제
                </button>
              </div>
            </div>

            {/* 입력 필드 2열 그리드 */}
            <div
              className={css({
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '16px',
              })}
            >
              {/* 이름 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>이름</label>
                <input
                  type="text"
                  placeholder="홍길동"
                  className={css({
                    padding: '8px 12px',
                    fontSize: '14px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.base',
                    color: 'text.neutral.base',
                    _placeholder: { color: 'text.neutral.lowest' },
                    outline: 'none',
                  })}
                />
              </div>

              {/* 이메일 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>이메일</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className={css({
                    padding: '8px 12px',
                    fontSize: '14px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.base',
                    color: 'text.neutral.base',
                    _placeholder: { color: 'text.neutral.lowest' },
                    outline: 'none',
                  })}
                />
              </div>

              {/* 전화번호 — 비활성화 */}
              <div
                className={css({ display: 'flex', flexDirection: 'column', gap: '6px', opacity: 0.38 })}
              >
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>전화번호</label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  disabled
                  className={css({
                    padding: '8px 12px',
                    fontSize: '14px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.high',
                    color: 'text.neutral.low',
                    cursor: 'not-allowed',
                    outline: 'none',
                  })}
                />
              </div>

              {/* 부서 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>부서</label>
                <input
                  type="text"
                  placeholder="개발팀"
                  className={css({
                    padding: '8px 12px',
                    fontSize: '14px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.base',
                    color: 'text.neutral.base',
                    _placeholder: { color: 'text.neutral.lowest' },
                    outline: 'none',
                  })}
                />
              </div>
            </div>

            {/* 소개 textarea */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>소개</label>
              <textarea
                rows={3}
                className={css({
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  color: 'text.neutral.base',
                  resize: 'vertical',
                  outline: 'none',
                  width: '100%',
                })}
              />
              <span className={css({ fontSize: '12px', color: 'text.neutral.low' })}>최대 200자</span>
            </div>
          </div>

          {/* 하단 버튼 영역 */}
          <div
            className={css({
              borderTop: '1px solid',
              borderTopColor: 'border.neutral.low',
              padding: '16px 24px',
              display: 'flex',
              gap: '8px',
            })}
          >
            <button
              className={css({
                padding: '8px 18px',
                fontSize: '14px',
                fontWeight: '500',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.primary.base',
                color: 'inverse.text.base',
                cursor: 'pointer',
              })}
            >
              변경사항 저장
            </button>
            <button
              className={css({
                padding: '8px 18px',
                fontSize: '14px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'surface.neutral.transparent',
                color: 'text.neutral.low',
                cursor: 'pointer',
              })}
            >
              취소
            </button>
          </div>
        </div>

        {/* 카드 2: 구독 플랜 */}
        <div
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ fontSize: '16px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '16px' })}>
            구독 플랜
          </h2>

          {/* 현재 플랜 박스 */}
          <div
            className={css({
              backgroundColor: 'surface.primary.base',
              border: '1px solid',
              borderColor: 'border.primary.base',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <Zap size={20} className={css({ color: 'icon.primary.base' })} />
              <div>
                <p className={css({ fontSize: '15px', fontWeight: '700', color: 'text.primary.base' })}>Pro</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>2025년 9월 1일 갱신</p>
              </div>
            </div>
            <span
              className={css({
                padding: '4px 10px',
                fontSize: '12px',
                fontWeight: '500',
                borderRadius: '20px',
                backgroundColor: 'fill.primary.base',
                color: 'inverse.text.base',
              })}
            >
              현재 플랜
            </span>
          </div>

          {/* 안내 배너 */}
          <div
            className={css({
              backgroundColor: 'surface.info.base',
              border: '1px solid',
              borderColor: 'border.info.base',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
            })}
          >
            <Info size={16} className={css({ color: 'icon.info.base', flexShrink: 0 })} />
            <p className={css({ fontSize: '13px', color: 'text.info.base' })}>
              결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
            </p>
          </div>

          {/* 버튼 2개 */}
          <div className={css({ display: 'flex', gap: '8px' })}>
            <button
              className={css({
                padding: '8px 18px',
                fontSize: '14px',
                fontWeight: '500',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.primary.base',
                color: 'inverse.text.base',
                cursor: 'pointer',
              })}
            >
              Enterprise로 업그레이드
            </button>
            <button
              className={css({
                padding: '8px 18px',
                fontSize: '14px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                backgroundColor: 'surface.neutral.transparent',
                color: 'text.neutral.base',
                cursor: 'pointer',
              })}
            >
              플랜 비교 보기
            </button>
          </div>
        </div>

        {/* 카드 3: 비밀번호 변경 */}
        <div
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ fontSize: '16px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '20px' })}>
            비밀번호 변경
          </h2>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
            {/* 1. 현재 비밀번호 — 기본 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>현재 비밀번호</label>
              <input
                type="password"
                className={css({
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  color: 'text.neutral.base',
                  outline: 'none',
                })}
              />
            </div>

            {/* 2. 새 비밀번호 — 포커스 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>새 비밀번호</label>
              <input
                type="password"
                placeholder="새 비밀번호 입력"
                className={css({
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  border: '2px solid',
                  borderColor: 'border.primary.highest',
                  backgroundColor: 'surface.neutral.base',
                  color: 'text.neutral.base',
                  outline: '2px solid',
                  outlineColor: 'focus.border',
                  outlineOffset: '1px',
                  _placeholder: { color: 'text.neutral.lowest' },
                })}
              />
            </div>

            {/* 3. 비밀번호 확인 — 오류 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>비밀번호 확인</label>
              <input
                type="password"
                defaultValue="abc"
                className={css({
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.base',
                  backgroundColor: 'surface.critical.base',
                  color: 'text.neutral.base',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <XCircle size={14} className={css({ color: 'icon.critical.base', flexShrink: 0 })} />
                <span className={css({ fontSize: '12px', color: 'text.critical.base' })}>비밀번호가 일치하지 않습니다.</span>
              </div>
            </div>

            {/* 4. 새 이메일 — 성공 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>새 이메일 (선택)</label>
              <input
                type="email"
                defaultValue="user@example.com"
                className={css({
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.positive.base',
                  backgroundColor: 'surface.positive.base',
                  color: 'text.neutral.base',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <CheckCircle2 size={14} className={css({ color: 'icon.positive.base', flexShrink: 0 })} />
                <span className={css({ fontSize: '12px', color: 'text.positive.base' })}>사용 가능한 이메일입니다.</span>
              </div>
            </div>

            {/* 5. 사용자 ID — 비활성화 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', opacity: 0.38 })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>사용자 ID</label>
              <input
                type="text"
                defaultValue="user_12847"
                disabled
                className={css({
                  padding: '8px 12px',
                  fontSize: '14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.high',
                  color: 'text.neutral.low',
                  cursor: 'not-allowed',
                  outline: 'none',
                })}
              />
              <span className={css({ fontSize: '12px', color: 'text.neutral.low' })}>변경 불가</span>
            </div>
          </div>

          <button
            className={css({
              marginTop: '20px',
              padding: '8px 18px',
              fontSize: '14px',
              fontWeight: '500',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'fill.primary.base',
              color: 'inverse.text.base',
              cursor: 'pointer',
            })}
          >
            저장
          </button>
        </div>

        {/* 카드 4: 보안 */}
        <div
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ fontSize: '16px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '20px' })}>
            보안 설정
          </h2>

          {/* 2단계 인증 토글 행 */}
          <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' })}>
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <ShieldCheck size={20} className={css({ color: 'icon.positive.base' })} />
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>2단계 인증</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>계정 보안이 강화됩니다</p>
              </div>
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
              {/* 토글 — 켜진 상태 */}
              <div
                className={css({
                  width: '44px',
                  height: '24px',
                  borderRadius: '12px',
                  backgroundColor: 'fill.primary.base',
                  position: 'relative',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <div
                  className={css({
                    position: 'absolute',
                    top: '2px',
                    right: '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'canvas.neutral.02',
                  })}
                />
              </div>
              {/* 활성화됨 뱃지 */}
              <span
                className={css({
                  padding: '2px 8px',
                  fontSize: '11px',
                  fontWeight: '500',
                  borderRadius: '20px',
                  backgroundColor: 'surface.positive.base',
                  border: '1px solid',
                  borderColor: 'border.positive.base',
                  color: 'text.positive.base',
                })}
              >
                활성화됨
              </span>
            </div>
          </div>

          <hr className={css({ border: 'none', borderTop: '1px solid', borderTopColor: 'border.neutral.low', margin: '16px 0' })} />

          {/* 활성 세션 */}
          <h3 className={css({ fontSize: '14px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '12px' })}>
            활성 세션
          </h3>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
            {/* 세션 1 — 현재 */}
            <div
              className={css({
                backgroundColor: 'surface.primary.base',
                border: '1px solid',
                borderColor: 'border.primary.base',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Monitor size={16} className={css({ color: 'icon.primary.base' })} />
                <div>
                  <p className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>Chrome · macOS</p>
                  <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>현재 위치 · 방금 전</p>
                </div>
              </div>
              <span
                className={css({
                  padding: '3px 10px',
                  fontSize: '12px',
                  fontWeight: '500',
                  borderRadius: '20px',
                  backgroundColor: 'fill.primary.base',
                  color: 'inverse.text.base',
                })}
              >
                현재
              </span>
            </div>

            {/* 세션 2 */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.base',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Smartphone size={16} className={css({ color: 'icon.neutral.base' })} />
                <div>
                  <p className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>Safari · iPhone</p>
                  <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>서울 · 2시간 전</p>
                </div>
              </div>
              <button
                className={css({
                  padding: '5px 12px',
                  fontSize: '12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.base',
                  backgroundColor: 'surface.neutral.transparent',
                  color: 'text.critical.base',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>

            {/* 세션 3 */}
            <div
              className={css({
                backgroundColor: 'surface.neutral.base',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Monitor size={16} className={css({ color: 'icon.neutral.base' })} />
                <div>
                  <p className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>Firefox · Windows</p>
                  <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>부산 · 3일 전</p>
                </div>
              </div>
              <button
                className={css({
                  padding: '5px 12px',
                  fontSize: '12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.base',
                  backgroundColor: 'surface.neutral.transparent',
                  color: 'text.critical.base',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>
          </div>

          <button
            className={css({
              marginTop: '12px',
              padding: '8px 18px',
              fontSize: '14px',
              borderRadius: '6px',
              border: '1px solid',
              borderColor: 'border.critical.base',
              backgroundColor: 'surface.neutral.transparent',
              color: 'text.critical.base',
              cursor: 'pointer',
            })}
          >
            모든 다른 세션 종료
          </button>
        </div>

        {/* 카드 5: 알림 설정 */}
        <div
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ fontSize: '16px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '16px' })}>
            이메일 알림
          </h2>

          {/* 주의 배너 */}
          <div
            className={css({
              backgroundColor: 'surface.warning.base',
              border: '1px solid',
              borderColor: 'border.warning.base',
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            })}
          >
            <AlertTriangle size={16} className={css({ color: 'icon.warning.base', flexShrink: 0 })} />
            <p className={css({ fontSize: '13px', color: 'text.warning.base' })}>
              일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
            </p>
          </div>

          {/* 알림 항목 목록 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
            {/* 1. 시스템 알림 — 체크됨 + 비활성화 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px', opacity: 0.38 })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.primary.base',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontSize: '12px', fontWeight: '700', lineHeight: 1 })}>✓</span>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>시스템 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>서비스 이용에 필요한 필수 공지</p>
              </div>
            </div>

            {/* 2. 결제 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.primary.base',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontSize: '12px', fontWeight: '700', lineHeight: 1 })}>✓</span>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>결제 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>영수증 및 결제 관련 안내</p>
              </div>
            </div>

            {/* 3. 배포 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.primary.base',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontSize: '12px', fontWeight: '700', lineHeight: 1 })}>✓</span>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>배포 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>배포 완료 및 실패 알림</p>
              </div>
            </div>

            {/* 4. 보안 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.primary.base',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontSize: '12px', fontWeight: '700', lineHeight: 1 })}>✓</span>
              </div>
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>보안 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>로그인 및 보안 이벤트</p>
              </div>
            </div>

            {/* 5. 마케팅 알림 — 체크 안됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              />
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>마케팅 알림</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>제품 업데이트 및 프로모션</p>
              </div>
            </div>

            {/* 6. 뉴스레터 — 체크 안됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  flexShrink: 0,
                  marginTop: '2px',
                })}
              />
              <div>
                <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>뉴스레터</p>
                <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>월간 뉴스레터</p>
              </div>
            </div>
          </div>

          <button
            className={css({
              marginTop: '20px',
              padding: '8px 18px',
              fontSize: '14px',
              fontWeight: '500',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'fill.primary.base',
              color: 'inverse.text.base',
              cursor: 'pointer',
            })}
          >
            저장
          </button>
        </div>

        {/* 카드 6: 위험 구역 */}
        <div
          className={css({
            backgroundColor: 'surface.critical.base',
            border: '1px solid',
            borderColor: 'border.critical.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          {/* 헤더 */}
          <div className={css({ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' })}>
            <AlertTriangle size={18} className={css({ color: 'icon.critical.base' })} />
            <h2 className={css({ fontSize: '16px', fontWeight: '600', color: 'text.critical.base' })}>위험 구역</h2>
          </div>

          {/* 액션 1 */}
          <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px' })}>
            <div>
              <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base', marginBottom: '4px' })}>계정 비활성화</p>
              <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.</p>
            </div>
            <button
              className={css({
                flexShrink: 0,
                marginLeft: '16px',
                padding: '7px 14px',
                fontSize: '13px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'border.critical.base',
                backgroundColor: 'surface.neutral.transparent',
                color: 'text.critical.base',
                cursor: 'pointer',
              })}
            >
              비활성화
            </button>
          </div>

          <hr className={css({ border: 'none', borderTop: '1px solid', borderTopColor: 'border.critical.base', margin: '0 0 16px 0' })} />

          {/* 액션 2 */}
          <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'space-between' })}>
            <div>
              <p className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base', marginBottom: '4px' })}>계정 영구 삭제</p>
              <p className={css({ fontSize: '12px', color: 'text.neutral.low' })}>계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.</p>
            </div>
            <button
              className={css({
                flexShrink: 0,
                marginLeft: '16px',
                padding: '7px 14px',
                fontSize: '13px',
                fontWeight: '500',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.critical.base',
                color: 'inverse.text.base',
                cursor: 'pointer',
              })}
            >
              영구 삭제
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
