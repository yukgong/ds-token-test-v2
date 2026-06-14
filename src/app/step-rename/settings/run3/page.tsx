import { css } from '@ds-token-test/styled-system-intent-first-stepnames/css';
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
        backgroundColor: 'neutral.canvas.01',
      })}
    >
      {/* 사이드바 */}
      <aside
        className={css({
          width: '200px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'neutral.canvas.01',
          borderRight: '1px solid',
          borderColor: 'neutral.border.subtle',
          padding: '16px 0',
          overflowY: 'auto',
        })}
      >
        {/* 뒤로가기 */}
        <div className={css({ padding: '0 16px 12px' })}>
          <a
            href="#"
            className={css({
              color: 'neutral.text.subtle',
              textDecoration: 'none',
              fontSize: '13px',
            })}
          >
            ← 대시보드
          </a>
        </div>
        {/* 설정 제목 */}
        <div
          className={css({
            padding: '0 16px 16px',
            fontWeight: '700',
            fontSize: '16px',
            color: 'neutral.text.default',
          })}
        >
          설정
        </div>
        {/* 메뉴 항목들 */}
        <nav className={css({ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 8px' })}>
          {/* 프로필 — 활성 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: 'primary.surface.default',
              cursor: 'pointer',
            })}
          >
            <User
              size={16}
              className={css({ color: 'primary.icon.default' })}
            />
            <span className={css({ fontSize: '14px', color: 'primary.text.default', fontWeight: '600' })}>
              프로필
            </span>
          </div>
          {/* 구독 플랜 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
            })}
          >
            <CreditCard
              size={16}
              className={css({ color: 'neutral.icon.default', opacity: 0.5 })}
            />
            <span className={css({ fontSize: '14px', color: 'neutral.text.subtle' })}>구독 플랜</span>
          </div>
          {/* 보안 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
            })}
          >
            <ShieldCheck
              size={16}
              className={css({ color: 'neutral.icon.default', opacity: 0.5 })}
            />
            <span className={css({ fontSize: '14px', color: 'neutral.text.subtle' })}>보안</span>
          </div>
          {/* 알림 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
            })}
          >
            <Bell
              size={16}
              className={css({ color: 'neutral.icon.default', opacity: 0.5 })}
            />
            <span className={css({ fontSize: '14px', color: 'neutral.text.subtle' })}>알림</span>
          </div>
          {/* 위험 구역 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              cursor: 'pointer',
            })}
          >
            <AlertTriangle
              size={16}
              className={css({ color: 'critical.icon.default' })}
            />
            <span className={css({ fontSize: '14px', color: 'critical.text.default' })}>위험 구역</span>
          </div>
        </nav>
      </aside>

      {/* 오른쪽 콘텐츠 */}
      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          backgroundColor: 'neutral.canvas.01',
          padding: '24px',
        })}
      >
        {/* 브레드크럼 */}
        <nav
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            marginBottom: '20px',
          })}
        >
          <a href="#" className={css({ color: 'neutral.text.subtle', textDecoration: 'none' })}>
            홈
          </a>
          <span className={css({ color: 'neutral.text.subtle' })}>/</span>
          <a href="#" className={css({ color: 'neutral.text.subtle', textDecoration: 'none' })}>
            설정
          </a>
          <span className={css({ color: 'neutral.text.subtle' })}>/</span>
          <span className={css({ color: 'neutral.text.default', fontWeight: '600' })}>프로필</span>
        </nav>

        <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
          {/* 카드 1: 프로필 정보 */}
          <section
            className={css({
              backgroundColor: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              borderRadius: '10px',
              overflow: 'hidden',
            })}
          >
            <div className={css({ padding: '20px 24px' })}>
              <h2 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.default', marginBottom: '20px' })}>
                프로필 정보
              </h2>
              {/* 아바타 영역 */}
              <div className={css({ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' })}>
                <div
                  className={css({
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'primary.fill.default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'inverse.text.default',
                    flexShrink: 0,
                  })}
                >
                  K
                </div>
                <div className={css({ display: 'flex', gap: '8px' })}>
                  <button
                    className={css({
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.default',
                      backgroundColor: 'neutral.surface.transparent',
                      color: 'neutral.text.default',
                      fontSize: '13px',
                      cursor: 'pointer',
                    })}
                  >
                    사진 변경
                  </button>
                  <button
                    className={css({
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      backgroundColor: 'neutral.surface.transparent',
                      color: 'neutral.text.subtle',
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
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                    이름
                  </label>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    className={css({
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.default',
                      backgroundColor: 'neutral.surface.default',
                      color: 'neutral.text.default',
                      fontSize: '14px',
                      outline: 'none',
                      '&::placeholder': { color: 'neutral.text.muted' },
                    })}
                  />
                </div>
                {/* 이메일 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                    이메일
                  </label>
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className={css({
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.default',
                      backgroundColor: 'neutral.surface.default',
                      color: 'neutral.text.default',
                      fontSize: '14px',
                      outline: 'none',
                    })}
                  />
                </div>
                {/* 전화번호 — 비활성 */}
                <div
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    opacity: 0.38,
                  })}
                >
                  <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                    전화번호
                  </label>
                  <input
                    type="tel"
                    disabled
                    placeholder="전화번호"
                    className={css({
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.default',
                      backgroundColor: 'neutral.surface.strongest',
                      color: 'neutral.text.subtle',
                      fontSize: '14px',
                      outline: 'none',
                      cursor: 'not-allowed',
                    })}
                  />
                </div>
                {/* 부서 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                    부서
                  </label>
                  <input
                    type="text"
                    placeholder="부서를 입력하세요"
                    className={css({
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.default',
                      backgroundColor: 'neutral.surface.default',
                      color: 'neutral.text.default',
                      fontSize: '14px',
                      outline: 'none',
                    })}
                  />
                </div>
              </div>
              {/* 소개 textarea */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '4px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                  소개
                </label>
                <textarea
                  rows={3}
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    width: '100%',
                  })}
                />
                <span className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>최대 200자</span>
              </div>
            </div>
            {/* 구분선 + 버튼 */}
            <div
              className={css({
                borderTop: '1px solid',
                borderColor: 'neutral.border.subtle',
                padding: '16px 24px',
                display: 'flex',
                gap: '8px',
              })}
            >
              <button
                className={css({
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'primary.fill.default',
                  color: 'inverse.text.default',
                  fontWeight: '600',
                  fontSize: '14px',
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
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.subtle',
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
              backgroundColor: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              borderRadius: '10px',
              padding: '20px 24px',
            })}
          >
            <h2 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.default', marginBottom: '16px' })}>
              구독 플랜
            </h2>
            {/* 현재 플랜 박스 */}
            <div
              className={css({
                backgroundColor: 'primary.surface.default',
                border: '1px solid',
                borderColor: 'primary.border.default',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Zap size={20} className={css({ color: 'primary.icon.default' })} />
                <div>
                  <div className={css({ fontSize: '15px', fontWeight: '700', color: 'primary.text.default' })}>Pro</div>
                  <div className={css({ fontSize: '13px', color: 'neutral.text.subtle' })}>2025년 9월 1일 갱신</div>
                </div>
              </div>
              <span
                className={css({
                  backgroundColor: 'primary.fill.default',
                  color: 'inverse.text.default',
                  fontSize: '12px',
                  fontWeight: '600',
                  padding: '4px 10px',
                  borderRadius: '20px',
                })}
              >
                현재 플랜
              </span>
            </div>
            {/* 정보 배너 */}
            <div
              className={css({
                backgroundColor: 'info.surface.default',
                border: '1px solid',
                borderColor: 'info.border.default',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              })}
            >
              <Info size={16} className={css({ color: 'info.icon.default', flexShrink: 0 })} />
              <span className={css({ fontSize: '13px', color: 'info.text.default' })}>
                결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
              </span>
            </div>
            {/* 버튼들 */}
            <div className={css({ display: 'flex', gap: '8px' })}>
              <button
                className={css({
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'primary.fill.default',
                  color: 'inverse.text.default',
                  fontWeight: '600',
                  fontSize: '14px',
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
                  borderColor: 'neutral.border.default',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.default',
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
              backgroundColor: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              borderRadius: '10px',
              padding: '20px 24px',
            })}
          >
            <h2 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.default', marginBottom: '16px' })}>
              비밀번호 변경
            </h2>
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' })}>
              {/* 1. 현재 비밀번호 — 기본 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                  현재 비밀번호
                </label>
                <input
                  type="password"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
              </div>
              {/* 2. 새 비밀번호 — 포커스 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                  새 비밀번호
                </label>
                <input
                  type="password"
                  placeholder="새 비밀번호를 입력하세요"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'primary.border.emphasis',
                    backgroundColor: 'neutral.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    outline: '2px solid',
                    outlineColor: 'focus.border',
                    outlineOffset: '1px',
                    '&::placeholder': { color: 'neutral.text.muted' },
                  })}
                />
              </div>
              {/* 3. 비밀번호 확인 — 오류 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  defaultValue="abc"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'critical.border.default',
                    backgroundColor: 'critical.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
                <div className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
                  <XCircle size={14} className={css({ color: 'critical.icon.default', flexShrink: 0 })} />
                  <span className={css({ fontSize: '12px', color: 'critical.text.default' })}>
                    비밀번호가 일치하지 않습니다.
                  </span>
                </div>
              </div>
              {/* 4. 새 이메일 — 성공 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                  새 이메일 (선택)
                </label>
                <input
                  type="email"
                  defaultValue="user@example.com"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'positive.border.default',
                    backgroundColor: 'positive.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
                <div className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
                  <CheckCircle2 size={14} className={css({ color: 'positive.icon.default', flexShrink: 0 })} />
                  <span className={css({ fontSize: '12px', color: 'positive.text.default' })}>
                    사용 가능한 이메일입니다.
                  </span>
                </div>
              </div>
              {/* 5. 사용자 ID — 비활성 */}
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  opacity: 0.38,
                })}
              >
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.default' })}>
                  사용자 ID
                </label>
                <input
                  type="text"
                  disabled
                  defaultValue="user_12847"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.subtle',
                    backgroundColor: 'neutral.surface.strongest',
                    color: 'neutral.text.subtle',
                    fontSize: '14px',
                    outline: 'none',
                    cursor: 'not-allowed',
                  })}
                />
                <span className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>변경 불가</span>
              </div>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'primary.fill.default',
                color: 'inverse.text.default',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              저장
            </button>
          </section>

          {/* 카드 4: 보안 */}
          <section
            className={css({
              backgroundColor: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              borderRadius: '10px',
              padding: '20px 24px',
            })}
          >
            <h2 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.default', marginBottom: '16px' })}>
              보안 설정
            </h2>
            {/* 2단계 인증 */}
            <div className={css({ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '16px' })}>
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <ShieldCheck size={20} className={css({ color: 'positive.icon.default', flexShrink: 0, marginTop: '2px' })} />
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.default', marginBottom: '4px' })}>
                    2단계 인증
                  </div>
                  <div className={css({ fontSize: '13px', color: 'neutral.text.subtle' })}>계정 보안이 강화됩니다</div>
                </div>
              </div>
              <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
                {/* 토글 — 켜진 상태 */}
                <div
                  className={css({
                    width: '44px',
                    height: '24px',
                    borderRadius: '12px',
                    backgroundColor: 'primary.fill.default',
                    position: 'relative',
                    cursor: 'pointer',
                    flexShrink: 0,
                  })}
                >
                  <div
                    className={css({
                      position: 'absolute',
                      top: '3px',
                      right: '3px',
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      backgroundColor: 'neutral.canvas.01',
                    })}
                  />
                </div>
                {/* 활성화됨 뱃지 */}
                <span
                  className={css({
                    fontSize: '11px',
                    fontWeight: '600',
                    color: 'positive.text.default',
                    backgroundColor: 'positive.surface.default',
                    border: '1px solid',
                    borderColor: 'positive.border.default',
                    padding: '2px 8px',
                    borderRadius: '20px',
                  })}
                >
                  활성화됨
                </span>
              </div>
            </div>
            {/* 구분선 */}
            <div className={css({ borderTop: '1px solid', borderColor: 'neutral.border.subtle', marginBottom: '16px' })} />
            {/* 활성 세션 */}
            <div className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.default', marginBottom: '12px' })}>
              활성 세션
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' })}>
              {/* 세션 1 — 현재 */}
              <div
                className={css({
                  backgroundColor: 'primary.surface.default',
                  border: '1px solid',
                  borderColor: 'primary.border.default',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                  <Monitor size={18} className={css({ color: 'primary.icon.default', flexShrink: 0 })} />
                  <div>
                    <div className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.default' })}>
                      Chrome · macOS
                    </div>
                    <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>현재 위치 · 방금 전</div>
                  </div>
                </div>
                <span
                  className={css({
                    backgroundColor: 'primary.fill.default',
                    color: 'inverse.text.default',
                    fontSize: '12px',
                    fontWeight: '600',
                    padding: '3px 10px',
                    borderRadius: '20px',
                  })}
                >
                  현재
                </span>
              </div>
              {/* 세션 2 */}
              <div
                className={css({
                  backgroundColor: 'neutral.surface.default',
                  border: '1px solid',
                  borderColor: 'neutral.border.default',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                  <Smartphone size={18} className={css({ color: 'neutral.icon.default', flexShrink: 0 })} />
                  <div>
                    <div className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.default' })}>
                      Safari · iPhone
                    </div>
                    <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>서울 · 2시간 전</div>
                  </div>
                </div>
                <button
                  className={css({
                    padding: '5px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'critical.border.default',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'critical.text.default',
                    fontSize: '13px',
                    cursor: 'pointer',
                  })}
                >
                  종료
                </button>
              </div>
              {/* 세션 3 */}
              <div
                className={css({
                  backgroundColor: 'neutral.surface.default',
                  border: '1px solid',
                  borderColor: 'neutral.border.default',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                  <Monitor size={18} className={css({ color: 'neutral.icon.default', flexShrink: 0 })} />
                  <div>
                    <div className={css({ fontSize: '13px', fontWeight: '600', color: 'neutral.text.default' })}>
                      Firefox · Windows
                    </div>
                    <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>부산 · 3일 전</div>
                  </div>
                </div>
                <button
                  className={css({
                    padding: '5px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'critical.border.default',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'critical.text.default',
                    fontSize: '13px',
                    cursor: 'pointer',
                  })}
                >
                  종료
                </button>
              </div>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid',
                borderColor: 'critical.border.default',
                backgroundColor: 'neutral.surface.transparent',
                color: 'critical.text.default',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              모든 다른 세션 종료
            </button>
          </section>

          {/* 카드 5: 알림 설정 */}
          <section
            className={css({
              backgroundColor: 'neutral.canvas.02',
              border: '1px solid',
              borderColor: 'neutral.border.default',
              borderRadius: '10px',
              padding: '20px 24px',
            })}
          >
            <h2 className={css({ fontSize: '16px', fontWeight: '700', color: 'neutral.text.default', marginBottom: '16px' })}>
              이메일 알림
            </h2>
            {/* 주의 배너 */}
            <div
              className={css({
                backgroundColor: 'warning.surface.default',
                border: '1px solid',
                borderColor: 'warning.border.default',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              })}
            >
              <AlertTriangle size={16} className={css({ color: 'warning.icon.default', flexShrink: 0 })} />
              <span className={css({ fontSize: '13px', color: 'warning.text.default' })}>
                일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
              </span>
            </div>
            {/* 알림 목록 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' })}>
              {/* 1. 시스템 알림 — 체크됨 + 비활성 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  opacity: 0.38,
                })}
              >
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    backgroundColor: 'primary.fill.default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.default', fontSize: '11px', fontWeight: '700' })}>✓</span>
                </div>
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.default' })}>시스템 알림</div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>서비스 이용에 필요한 필수 공지</div>
                </div>
              </div>
              {/* 2. 결제 알림 — 체크됨 */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    backgroundColor: 'primary.fill.default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.default', fontSize: '11px', fontWeight: '700' })}>✓</span>
                </div>
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.default' })}>결제 알림</div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>영수증 및 결제 관련 안내</div>
                </div>
              </div>
              {/* 3. 배포 알림 — 체크됨 */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    backgroundColor: 'primary.fill.default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.default', fontSize: '11px', fontWeight: '700' })}>✓</span>
                </div>
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.default' })}>배포 알림</div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>배포 완료 및 실패 알림</div>
                </div>
              </div>
              {/* 4. 보안 알림 — 체크됨 */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    backgroundColor: 'primary.fill.default',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.default', fontSize: '11px', fontWeight: '700' })}>✓</span>
                </div>
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.default' })}>보안 알림</div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>로그인 및 보안 이벤트</div>
                </div>
              </div>
              {/* 5. 마케팅 알림 — 미체크 */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                />
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.default' })}>마케팅 알림</div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>제품 업데이트 및 프로모션</div>
                </div>
              </div>
              {/* 6. 뉴스레터 — 미체크 */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                />
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.default' })}>뉴스레터</div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.subtle' })}>월간 뉴스레터</div>
                </div>
              </div>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: 'primary.fill.default',
                color: 'inverse.text.default',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              저장
            </button>
          </section>

          {/* 카드 6: 위험 구역 */}
          <section
            className={css({
              backgroundColor: 'critical.surface.default',
              border: '1px solid',
              borderColor: 'critical.border.default',
              borderRadius: '10px',
              padding: '20px 24px',
            })}
          >
            {/* 헤더 */}
            <div className={css({ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' })}>
              <AlertTriangle size={20} className={css({ color: 'critical.icon.default' })} />
              <h2 className={css({ fontSize: '16px', fontWeight: '700', color: 'critical.text.default' })}>
                위험 구역
              </h2>
            </div>
            {/* 액션 1 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid',
                borderColor: 'critical.border.default',
                marginBottom: '16px',
              })}
            >
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.default', marginBottom: '4px' })}>
                  계정 비활성화
                </div>
                <div className={css({ fontSize: '13px', color: 'neutral.text.subtle', maxWidth: '400px' })}>
                  계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
                </div>
              </div>
              <button
                className={css({
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'critical.border.default',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'critical.text.default',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  flexShrink: 0,
                  marginLeft: '16px',
                })}
              >
                비활성화
              </button>
            </div>
            {/* 액션 2 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}
            >
              <div>
                <div className={css({ fontSize: '14px', fontWeight: '600', color: 'neutral.text.default', marginBottom: '4px' })}>
                  계정 영구 삭제
                </div>
                <div className={css({ fontSize: '13px', color: 'neutral.text.subtle', maxWidth: '400px' })}>
                  계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
                </div>
              </div>
              <button
                className={css({
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'critical.fill.default',
                  color: 'inverse.text.default',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  flexShrink: 0,
                  marginLeft: '16px',
                })}
              >
                영구 삭제
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
