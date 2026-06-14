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
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 12px',
          backgroundColor: 'canvas.neutral.01',
          borderRight: '1px solid',
          borderRightColor: 'border.neutral.low',
          overflowY: 'auto',
        })}`}
      >
        {/* 뒤로가기 */}
        <a
          href="#"
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            marginBottom: '24px',
            fontSize: '13px',
            color: 'text.neutral.low',
            textDecoration: 'none',
          })}
        >
          ← 대시보드
        </a>

        {/* 제목 */}
        <h2
          className={css({
            fontSize: '16px',
            fontWeight: '700',
            color: 'text.neutral.base',
            marginBottom: '16px',
          })}
        >
          설정
        </h2>

        {/* 메뉴 항목 목록 */}
        <nav className={css({ display: 'flex', flexDirection: 'column', gap: '2px' })}>
          {/* 프로필 — 활성 상태 */}
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
              className={css({ color: 'icon.primary.base', flexShrink: 0 })}
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
              className={css({ color: 'icon.neutral.base', flexShrink: 0, opacity: 0.6 })}
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
              className={css({ color: 'icon.neutral.base', flexShrink: 0, opacity: 0.6 })}
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
              className={css({ color: 'icon.neutral.base', flexShrink: 0, opacity: 0.6 })}
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
              className={css({ color: 'icon.critical.base', flexShrink: 0 })}
            />
            <span className={css({ fontSize: '14px', color: 'text.critical.base' })}>
              위험 구역
            </span>
          </div>
        </nav>
      </aside>

      {/* 오른쪽 콘텐츠 영역 */}
      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          backgroundColor: 'canvas.neutral.01',
          padding: '32px 40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        })}
      >
        {/* 브레드크럼 */}
        <nav className={css({ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px' })}>
          <a
            href="#"
            className={css({
              color: 'text.neutral.low',
              textDecoration: 'none',
              _hover: { color: 'text.primary.base' },
            })}
          >
            홈
          </a>
          <span className={css({ color: 'text.neutral.low' })}>/</span>
          <a
            href="#"
            className={css({
              color: 'text.neutral.low',
              textDecoration: 'none',
              _hover: { color: 'text.primary.base' },
            })}
          >
            설정
          </a>
          <span className={css({ color: 'text.neutral.low' })}>/</span>
          <span className={css({ color: 'text.neutral.base', fontWeight: '500' })}>프로필</span>
        </nav>

        {/* 카드 1: 프로필 정보 */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            overflow: 'hidden',
          })}
        >
          <div className={css({ padding: '24px' })}>
            <h2 className={css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.base', marginBottom: '20px' })}>
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
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.transparent',
                    color: 'text.neutral.base',
                    fontSize: '13px',
                    cursor: 'pointer',
                  })}
                >
                  사진 변경
                </button>
                <button
                  className={css({
                    padding: '6px 14px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'surface.neutral.transparent',
                    color: 'text.neutral.low',
                    fontSize: '13px',
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
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                  이름
                </label>
                <input
                  type="text"
                  placeholder="이름 입력"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.base',
                    color: 'text.neutral.base',
                    fontSize: '14px',
                    outline: 'none',
                    _placeholder: { color: 'text.neutral.lowest' },
                  })}
                />
              </div>

              {/* 이메일 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="이메일 입력"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.base',
                    color: 'text.neutral.base',
                    fontSize: '14px',
                    outline: 'none',
                    _placeholder: { color: 'text.neutral.lowest' },
                  })}
                />
              </div>

              {/* 전화번호 — 비활성화 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
                <label
                  className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base', opacity: 0.38 })}
                >
                  전화번호
                </label>
                <input
                  type="tel"
                  value="010-0000-0000"
                  disabled
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.low',
                    backgroundColor: 'surface.neutral.high',
                    color: 'text.neutral.low',
                    fontSize: '14px',
                    outline: 'none',
                    opacity: 0.38,
                    cursor: 'not-allowed',
                  })}
                />
              </div>

              {/* 부서 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                  부서
                </label>
                <input
                  type="text"
                  placeholder="부서 입력"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'border.neutral.base',
                    backgroundColor: 'surface.neutral.base',
                    color: 'text.neutral.base',
                    fontSize: '14px',
                    outline: 'none',
                    _placeholder: { color: 'text.neutral.lowest' },
                  })}
                />
              </div>
            </div>

            {/* 소개 textarea */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '8px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                소개
              </label>
              <textarea
                placeholder="소개를 입력하세요"
                rows={3}
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  color: 'text.neutral.base',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                  width: '100%',
                  boxSizing: 'border-box',
                  _placeholder: { color: 'text.neutral.lowest' },
                })}
              />
              <span className={css({ fontSize: '12px', color: 'text.neutral.low' })}>최대 200자</span>
            </div>
          </div>

          {/* 하단 버튼 영역 */}
          <div
            className={css({
              padding: '16px 24px',
              borderTop: '1px solid',
              borderTopColor: 'border.neutral.low',
              display: 'flex',
              gap: '8px',
            })}
          >
            <button
              className={css({
                padding: '8px 20px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.primary.base',
                color: 'inverse.text.base',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              변경사항 저장
            </button>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'surface.neutral.transparent',
                color: 'text.neutral.low',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              취소
            </button>
          </div>
        </section>

        {/* 카드 2: 구독 플랜 */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.base', marginBottom: '20px' })}>
            구독 플랜
          </h2>

          {/* 현재 플랜 박스 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px',
              borderRadius: '8px',
              backgroundColor: 'surface.primary.base',
              border: '1px solid',
              borderColor: 'border.primary.base',
              marginBottom: '12px',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <Zap size={20} className={css({ color: 'icon.primary.base', flexShrink: 0 })} />
              <div>
                <div className={css({ fontSize: '15px', fontWeight: '700', color: 'text.primary.base' })}>Pro</div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>2025년 9월 1일 갱신</div>
              </div>
            </div>
            <span
              className={css({
                padding: '4px 10px',
                borderRadius: '999px',
                backgroundColor: 'fill.primary.base',
                color: 'inverse.text.base',
                fontSize: '12px',
                fontWeight: '500',
              })}
            >
              현재 플랜
            </span>
          </div>

          {/* Info 배너 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: 'surface.info.base',
              border: '1px solid',
              borderColor: 'border.info.base',
              marginBottom: '20px',
            })}
          >
            <Info size={16} className={css({ color: 'icon.info.base', flexShrink: 0 })} />
            <span className={css({ fontSize: '13px', color: 'text.info.base' })}>
              결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
            </span>
          </div>

          {/* 하단 버튼 */}
          <div className={css({ display: 'flex', gap: '8px' })}>
            <button
              className={css({
                padding: '8px 20px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.primary.base',
                color: 'inverse.text.base',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              Enterprise로 업그레이드
            </button>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'border.neutral.base',
                backgroundColor: 'surface.neutral.transparent',
                color: 'text.neutral.base',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              플랜 비교 보기
            </button>
          </div>
        </section>

        {/* 카드 3: 비밀번호 변경 */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.base', marginBottom: '20px' })}>
            비밀번호 변경
          </h2>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
            {/* 1. 현재 비밀번호 — 기본 상태 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                현재 비밀번호
              </label>
              <input
                type="password"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  color: 'text.neutral.base',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
            </div>

            {/* 2. 새 비밀번호 — 포커스 상태 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                새 비밀번호
              </label>
              <input
                type="password"
                placeholder="새 비밀번호 입력"
                data-focused="true"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '2px solid',
                  borderColor: 'border.primary.highest',
                  backgroundColor: 'surface.neutral.base',
                  color: 'text.neutral.base',
                  fontSize: '14px',
                  outline: '2px solid',
                  outlineColor: 'focus.border',
                  outlineOffset: '1px',
                  _placeholder: { color: 'text.neutral.lowest' },
                })}
              />
            </div>

            {/* 3. 비밀번호 확인 — 오류 상태 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                비밀번호 확인
              </label>
              <input
                type="password"
                defaultValue="abc"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.base',
                  backgroundColor: 'surface.critical.base',
                  color: 'text.neutral.base',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <XCircle size={13} className={css({ color: 'icon.critical.base', flexShrink: 0 })} />
                <span className={css({ fontSize: '12px', color: 'text.critical.base' })}>
                  비밀번호가 일치하지 않습니다.
                </span>
              </div>
            </div>

            {/* 4. 새 이메일 — 성공 상태 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                새 이메일 (선택)
              </label>
              <input
                type="email"
                defaultValue="user@example.com"
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.positive.base',
                  backgroundColor: 'surface.positive.base',
                  color: 'text.neutral.base',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <CheckCircle2 size={13} className={css({ color: 'icon.positive.base', flexShrink: 0 })} />
                <span className={css({ fontSize: '12px', color: 'text.positive.base' })}>
                  사용 가능한 이메일입니다.
                </span>
              </div>
            </div>

            {/* 5. 사용자 ID — 비활성화 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '4px' })}>
              <label
                className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base', opacity: 0.38 })}
              >
                사용자 ID
              </label>
              <input
                type="text"
                defaultValue="user_12847"
                disabled
                className={css({
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.neutral.low',
                  backgroundColor: 'surface.neutral.high',
                  color: 'text.neutral.low',
                  fontSize: '14px',
                  outline: 'none',
                  opacity: 0.38,
                  cursor: 'not-allowed',
                })}
              />
              <span className={css({ fontSize: '12px', color: 'text.neutral.low', opacity: 0.38 })}>변경 불가</span>
            </div>
          </div>

          <div className={css({ marginTop: '20px' })}>
            <button
              className={css({
                padding: '8px 20px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.primary.base',
                color: 'inverse.text.base',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              저장
            </button>
          </div>
        </section>

        {/* 카드 4: 보안 설정 */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.base', marginBottom: '20px' })}>
            보안 설정
          </h2>

          {/* 2단계 인증 토글 행 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '16px',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <ShieldCheck size={20} className={css({ color: 'icon.positive.base', flexShrink: 0, marginTop: '2px' })} />
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '600', color: 'text.neutral.base' })}>
                  2단계 인증
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>계정 보안이 강화됩니다</div>
              </div>
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
              {/* 켜진 상태 토글 */}
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
                    backgroundColor: 'inverse.text.base',
                  })}
                />
              </div>
              {/* 활성화됨 뱃지 */}
              <span
                className={css({
                  padding: '2px 8px',
                  borderRadius: '999px',
                  backgroundColor: 'surface.positive.base',
                  border: '1px solid',
                  borderColor: 'border.positive.base',
                  color: 'text.positive.base',
                  fontSize: '11px',
                  fontWeight: '500',
                })}
              >
                활성화됨
              </span>
            </div>
          </div>

          <hr
            className={css({
              border: 'none',
              borderTop: '1px solid',
              borderTopColor: 'border.neutral.low',
              marginBottom: '16px',
            })}
          />

          {/* 활성 세션 */}
          <h3 className={css({ fontSize: '15px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '12px' })}>
            활성 세션
          </h3>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
            {/* 세션 1 — 현재 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: 'surface.primary.base',
                border: '1px solid',
                borderColor: 'border.primary.base',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Monitor size={16} className={css({ color: 'icon.primary.base', flexShrink: 0 })} />
                <div>
                  <div className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                    Chrome · macOS
                  </div>
                  <div className={css({ fontSize: '11px', color: 'text.neutral.low' })}>현재 위치 · 방금 전</div>
                </div>
              </div>
              <span
                className={css({
                  padding: '3px 10px',
                  borderRadius: '999px',
                  backgroundColor: 'fill.primary.base',
                  color: 'inverse.text.base',
                  fontSize: '11px',
                  fontWeight: '500',
                })}
              >
                현재
              </span>
            </div>

            {/* 세션 2 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: 'surface.neutral.base',
                border: '1px solid',
                borderColor: 'border.neutral.base',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Smartphone size={16} className={css({ color: 'icon.neutral.base', flexShrink: 0 })} />
                <div>
                  <div className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                    Safari · iPhone
                  </div>
                  <div className={css({ fontSize: '11px', color: 'text.neutral.low' })}>서울 · 2시간 전</div>
                </div>
              </div>
              <button
                className={css({
                  padding: '4px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.base',
                  backgroundColor: 'surface.neutral.transparent',
                  color: 'text.critical.base',
                  fontSize: '12px',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>

            {/* 세션 3 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 14px',
                borderRadius: '8px',
                backgroundColor: 'surface.neutral.base',
                border: '1px solid',
                borderColor: 'border.neutral.base',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                <Monitor size={16} className={css({ color: 'icon.neutral.base', flexShrink: 0 })} />
                <div>
                  <div className={css({ fontSize: '13px', fontWeight: '500', color: 'text.neutral.base' })}>
                    Firefox · Windows
                  </div>
                  <div className={css({ fontSize: '11px', color: 'text.neutral.low' })}>부산 · 3일 전</div>
                </div>
              </div>
              <button
                className={css({
                  padding: '4px 12px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'border.critical.base',
                  backgroundColor: 'surface.neutral.transparent',
                  color: 'text.critical.base',
                  fontSize: '12px',
                  cursor: 'pointer',
                })}
              >
                종료
              </button>
            </div>
          </div>

          <div className={css({ marginTop: '12px' })}>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'border.critical.base',
                backgroundColor: 'surface.neutral.transparent',
                color: 'text.critical.base',
                fontSize: '13px',
                cursor: 'pointer',
              })}
            >
              모든 다른 세션 종료
            </button>
          </div>
        </section>

        {/* 카드 5: 알림 설정 */}
        <section
          className={css({
            backgroundColor: 'canvas.neutral.02',
            border: '1px solid',
            borderColor: 'border.neutral.base',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2 className={css({ fontSize: '18px', fontWeight: '700', color: 'text.neutral.base', marginBottom: '16px' })}>
            이메일 알림
          </h2>

          {/* Warning 배너 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 16px',
              borderRadius: '8px',
              backgroundColor: 'surface.warning.base',
              border: '1px solid',
              borderColor: 'border.warning.base',
              marginBottom: '20px',
            })}
          >
            <AlertTriangle size={16} className={css({ color: 'icon.warning.base', flexShrink: 0 })} />
            <span className={css({ fontSize: '13px', color: 'text.warning.base' })}>
              일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
            </span>
          </div>

          {/* 알림 항목 목록 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' })}>
            {/* 1. 시스템 알림 — 체크 + 비활성화 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px', opacity: 0.38 })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.primary.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontSize: '11px', lineHeight: 1 })}>✓</span>
              </div>
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>
                  시스템 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>
                  서비스 이용에 필요한 필수 공지
                </div>
              </div>
            </div>

            {/* 2. 결제 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.primary.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontSize: '11px', lineHeight: 1 })}>✓</span>
              </div>
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>
                  결제 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>영수증 및 결제 관련 안내</div>
              </div>
            </div>

            {/* 3. 배포 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.primary.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontSize: '11px', lineHeight: 1 })}>✓</span>
              </div>
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>
                  배포 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>배포 완료 및 실패 알림</div>
              </div>
            </div>

            {/* 4. 보안 알림 — 체크됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'fill.primary.base',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                })}
              >
                <span className={css({ color: 'inverse.text.base', fontSize: '11px', lineHeight: 1 })}>✓</span>
              </div>
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>
                  보안 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>로그인 및 보안 이벤트</div>
              </div>
            </div>

            {/* 5. 마케팅 알림 — 체크 안됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  flexShrink: 0,
                  marginTop: '1px',
                })}
              />
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>
                  마케팅 알림
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>제품 업데이트 및 프로모션</div>
              </div>
            </div>

            {/* 6. 뉴스레터 — 체크 안됨 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '10px' })}>
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  border: '1px solid',
                  borderColor: 'border.neutral.base',
                  backgroundColor: 'surface.neutral.base',
                  flexShrink: 0,
                  marginTop: '1px',
                })}
              />
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '500', color: 'text.neutral.base' })}>
                  뉴스레터
                </div>
                <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>월간 뉴스레터</div>
              </div>
            </div>
          </div>

          <button
            className={css({
              padding: '8px 20px',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'fill.primary.base',
              color: 'inverse.text.base',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
            })}
          >
            저장
          </button>
        </section>

        {/* 카드 6: 위험 구역 */}
        <section
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
            <AlertTriangle size={20} className={css({ color: 'icon.critical.base', flexShrink: 0 })} />
            <h2 className={css({ fontSize: '18px', fontWeight: '700', color: 'text.critical.base' })}>위험 구역</h2>
          </div>

          {/* 액션 1 — 계정 비활성화 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              paddingBottom: '16px',
              borderBottom: '1px solid',
              borderBottomColor: 'border.critical.base',
              marginBottom: '16px',
            })}
          >
            <div>
              <div className={css({ fontSize: '14px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '4px' })}>
                계정 비활성화
              </div>
              <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>
                계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
              </div>
            </div>
            <button
              className={css({
                flexShrink: 0,
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'border.critical.base',
                backgroundColor: 'surface.neutral.transparent',
                color: 'text.critical.base',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              비활성화
            </button>
          </div>

          {/* 액션 2 — 계정 영구 삭제 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            })}
          >
            <div>
              <div className={css({ fontSize: '14px', fontWeight: '600', color: 'text.neutral.base', marginBottom: '4px' })}>
                계정 영구 삭제
              </div>
              <div className={css({ fontSize: '12px', color: 'text.neutral.low' })}>
                계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
              </div>
            </div>
            <button
              className={css({
                flexShrink: 0,
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'fill.critical.base',
                color: 'inverse.text.base',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              영구 삭제
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
