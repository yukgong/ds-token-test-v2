import { css } from '@ds-token-test/styled-system-intent-first/css';
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
      })}
    >
      {/* ── Left Sidebar ── */}
      <aside
        className={css({
          width: '200px',
          flexShrink: 0,
          backgroundColor: 'neutral.canvas.01',
          borderRight: '1px solid',
          borderColor: 'neutral.border.low',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 8px',
          overflowY: 'auto',
        })}
      >
        {/* Back link */}
        <a
          href="#"
          className={css({
            color: 'neutral.text.low',
            fontSize: '14px',
            textDecoration: 'none',
            display: 'block',
            padding: '0 8px',
            marginBottom: '16px',
          })}
        >
          ← 대시보드
        </a>

        {/* Sidebar title */}
        <h2
          className={css({
            color: 'neutral.text.base',
            fontSize: '18px',
            fontWeight: '700',
            margin: '0 0 12px',
            padding: '0 8px',
          })}
        >
          설정
        </h2>

        {/* Menu items */}
        <nav className={css({ display: 'flex', flexDirection: 'column', gap: '2px' })}>
          {/* 프로필 — active */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'primary.surface.base',
              cursor: 'pointer',
            })}
          >
            <User size={16} className={css({ color: 'primary.icon.base' })} />
            <span className={css({ color: 'primary.text.base', fontSize: '14px', fontWeight: '500' })}>
              프로필
            </span>
          </div>

          {/* 구독 플랜 — inactive */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <CreditCard size={16} className={css({ color: 'neutral.icon.base' })} />
            <span className={css({ color: 'neutral.text.low', fontSize: '14px' })}>구독 플랜</span>
          </div>

          {/* 보안 — inactive */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <ShieldCheck size={16} className={css({ color: 'neutral.icon.base' })} />
            <span className={css({ color: 'neutral.text.low', fontSize: '14px' })}>보안</span>
          </div>

          {/* 알림 — inactive */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <Bell size={16} className={css({ color: 'neutral.icon.base' })} />
            <span className={css({ color: 'neutral.text.low', fontSize: '14px' })}>알림</span>
          </div>

          {/* 위험 구역 — destructive */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              cursor: 'pointer',
            })}
          >
            <AlertTriangle size={16} className={css({ color: 'critical.icon.base' })} />
            <span className={css({ color: 'critical.text.base', fontSize: '14px' })}>위험 구역</span>
          </div>
        </nav>
      </aside>

      {/* ── Right Content Area ── */}
      <main
        className={css({
          flex: 1,
          backgroundColor: 'neutral.canvas.01',
          overflowY: 'auto',
          padding: '32px',
        })}
      >
        {/* Breadcrumb */}
        <nav
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '24px',
            fontSize: '14px',
          })}
        >
          <a href="#" className={css({ color: 'neutral.text.low', textDecoration: 'none' })}>
            홈
          </a>
          <span className={css({ color: 'neutral.text.low' })}>/</span>
          <a href="#" className={css({ color: 'neutral.text.low', textDecoration: 'none' })}>
            설정
          </a>
          <span className={css({ color: 'neutral.text.low' })}>/</span>
          <span className={css({ color: 'neutral.text.base', fontWeight: '500' })}>프로필</span>
        </nav>

        <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>

          {/* ── Card 1: 프로필 정보 ── */}
          <div
            className={css({
              backgroundColor: 'neutral.canvas.02',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              overflow: 'hidden',
            })}
          >
            <div className={css({ padding: '24px' })}>
              <h3
                className={css({
                  color: 'neutral.text.base',
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: '0 0 20px',
                })}
              >
                프로필 정보
              </h3>

              {/* Avatar area */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px',
                })}
              >
                {/* Avatar circle */}
                <div
                  className={css({
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'primary.fill.base',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  })}
                >
                  <span
                    className={css({
                      color: 'inverse.text.base',
                      fontSize: '28px',
                      fontWeight: '700',
                    })}
                  >
                    K
                  </span>
                </div>
                <div className={css({ display: 'flex', gap: '8px' })}>
                  {/* outline button */}
                  <button
                    type="button"
                    className={css({
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.base',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      cursor: 'pointer',
                    })}
                  >
                    사진 변경
                  </button>
                  {/* ghost button */}
                  <button
                    type="button"
                    className={css({
                      padding: '8px 16px',
                      borderRadius: '8px',
                      border: 'none',
                      backgroundColor: 'neutral.surface.transparent',
                      color: 'neutral.text.low',
                      fontSize: '14px',
                      cursor: 'pointer',
                    })}
                  >
                    삭제
                  </button>
                </div>
              </div>

              {/* 2-column input grid */}
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
                  <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    이름
                  </label>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    className={css({
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.base',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                      '&::placeholder': { color: 'neutral.text.lowest' },
                    })}
                  />
                </div>

                {/* 이메일 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    이메일
                  </label>
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className={css({
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.base',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                      '&::placeholder': { color: 'neutral.text.lowest' },
                    })}
                  />
                </div>

                {/* 전화번호 — disabled */}
                <div
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    opacity: 0.38,
                  })}
                >
                  <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    전화번호
                  </label>
                  <input
                    type="tel"
                    disabled
                    placeholder="전화번호"
                    className={css({
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.high',
                      color: 'neutral.text.low',
                      fontSize: '14px',
                      outline: 'none',
                      cursor: 'not-allowed',
                    })}
                  />
                </div>

                {/* 부서 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    부서
                  </label>
                  <input
                    type="text"
                    placeholder="부서를 입력하세요"
                    className={css({
                      padding: '10px 12px',
                      borderRadius: '8px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.base',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                      '&::placeholder': { color: 'neutral.text.lowest' },
                    })}
                  />
                </div>
              </div>

              {/* 소개 textarea */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                  소개
                </label>
                <textarea
                  rows={4}
                  placeholder="소개를 입력하세요"
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    '&::placeholder': { color: 'neutral.text.lowest' },
                  })}
                />
                <span className={css({ color: 'neutral.text.low', fontSize: '12px' })}>최대 200자</span>
              </div>
            </div>

            {/* Divider + Save buttons */}
            <div
              className={css({
                borderTop: '1px solid',
                borderColor: 'neutral.border.low',
                padding: '16px 24px',
                display: 'flex',
                gap: '12px',
              })}
            >
              <button
                type="button"
                className={css({
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'primary.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                })}
              >
                변경사항 저장
              </button>
              <button
                type="button"
                className={css({
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.low',
                  fontSize: '14px',
                  cursor: 'pointer',
                })}
              >
                취소
              </button>
            </div>
          </div>

          {/* ── Card 2: 구독 플랜 ── */}
          <div
            className={css({
              backgroundColor: 'neutral.canvas.02',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              padding: '24px',
            })}
          >
            <h3
              className={css({
                color: 'neutral.text.base',
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 20px',
              })}
            >
              구독 플랜
            </h3>

            {/* Current plan box */}
            <div
              className={css({
                backgroundColor: 'primary.surface.base',
                border: '1px solid',
                borderColor: 'primary.border.base',
                borderRadius: '10px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Zap size={20} className={css({ color: 'primary.icon.base' })} />
                <div>
                  <div className={css({ color: 'primary.text.base', fontWeight: '700', fontSize: '16px' })}>
                    Pro
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '13px' })}>
                    2025년 9월 1일 갱신
                  </div>
                </div>
              </div>
              <span
                className={css({
                  backgroundColor: 'primary.fill.base',
                  color: 'inverse.text.base',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  fontSize: '12px',
                  fontWeight: '600',
                })}
              >
                현재 플랜
              </span>
            </div>

            {/* Info banner */}
            <div
              className={css({
                backgroundColor: 'info.surface.base',
                border: '1px solid',
                borderColor: 'info.border.base',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              })}
            >
              <Info size={16} className={css({ color: 'info.icon.base', flexShrink: 0 })} />
              <span className={css({ color: 'info.text.base', fontSize: '14px' })}>
                결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
              </span>
            </div>

            {/* Buttons */}
            <div className={css({ display: 'flex', gap: '12px' })}>
              <button
                type="button"
                className={css({
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'primary.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                })}
              >
                Enterprise로 업그레이드
              </button>
              <button
                type="button"
                className={css({
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'neutral.text.base',
                  fontSize: '14px',
                  cursor: 'pointer',
                })}
              >
                플랜 비교 보기
              </button>
            </div>
          </div>

          {/* ── Card 3: 비밀번호 변경 (Input State Showcase) ── */}
          <div
            className={css({
              backgroundColor: 'neutral.canvas.02',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              padding: '24px',
            })}
          >
            <h3
              className={css({
                color: 'neutral.text.base',
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 20px',
              })}
            >
              비밀번호 변경
            </h3>

            <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' })}>
              {/* 1. 현재 비밀번호 — default */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                  현재 비밀번호
                </label>
                <input
                  type="password"
                  placeholder="현재 비밀번호를 입력하세요"
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                    '&::placeholder': { color: 'neutral.text.lowest' },
                  })}
                />
              </div>

              {/* 2. 새 비밀번호 — focused */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                  새 비밀번호
                </label>
                <input
                  type="password"
                  placeholder="새 비밀번호를 입력하세요"
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'primary.border.highest',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: '2px solid',
                    outlineColor: 'focus.border',
                    outlineOffset: '1px',
                    '&::placeholder': { color: 'neutral.text.lowest' },
                  })}
                />
              </div>

              {/* 3. 비밀번호 확인 — error */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  defaultValue="abc"
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'critical.border.base',
                    backgroundColor: 'critical.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
                <div className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
                  <XCircle size={14} className={css({ color: 'critical.icon.base' })} />
                  <span className={css({ color: 'critical.text.base', fontSize: '13px' })}>
                    비밀번호가 일치하지 않습니다.
                  </span>
                </div>
              </div>

              {/* 4. 새 이메일 — success */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                  새 이메일 (선택)
                </label>
                <input
                  type="email"
                  defaultValue="user@example.com"
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'positive.border.base',
                    backgroundColor: 'positive.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
                <div className={css({ display: 'flex', alignItems: 'center', gap: '6px' })}>
                  <CheckCircle2 size={14} className={css({ color: 'positive.icon.base' })} />
                  <span className={css({ color: 'positive.text.base', fontSize: '13px' })}>
                    사용 가능한 이메일입니다.
                  </span>
                </div>
              </div>

              {/* 5. 사용자 ID — disabled */}
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  opacity: 0.38,
                })}
              >
                <label className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                  사용자 ID
                </label>
                <input
                  type="text"
                  defaultValue="user_12847"
                  disabled
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.low',
                    backgroundColor: 'neutral.surface.high',
                    color: 'neutral.text.low',
                    fontSize: '14px',
                    outline: 'none',
                    cursor: 'not-allowed',
                  })}
                />
                <span className={css({ color: 'neutral.text.low', fontSize: '12px' })}>변경 불가</span>
              </div>
            </div>

            <button
              type="button"
              className={css({
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'primary.fill.base',
                color: 'inverse.text.base',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              변경사항 저장
            </button>
          </div>

          {/* ── Card 4: 보안 설정 ── */}
          <div
            className={css({
              backgroundColor: 'neutral.canvas.02',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              padding: '24px',
            })}
          >
            <h3
              className={css({
                color: 'neutral.text.base',
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 20px',
              })}
            >
              보안 설정
            </h3>

            {/* 2FA toggle row */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <ShieldCheck size={20} className={css({ color: 'positive.icon.base' })} />
                <div>
                  <div className={css({ color: 'neutral.text.base', fontWeight: '500', fontSize: '15px' })}>
                    2단계 인증
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '13px' })}>
                    계정 보안이 강화됩니다
                  </div>
                </div>
              </div>
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  gap: '6px',
                })}
              >
                {/* Toggle — on state */}
                <div
                  className={css({
                    width: '48px',
                    height: '26px',
                    borderRadius: '999px',
                    backgroundColor: 'primary.fill.base',
                    position: 'relative',
                    cursor: 'pointer',
                  })}
                >
                  <div
                    className={css({
                      position: 'absolute',
                      top: '3px',
                      right: '3px',
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'neutral.canvas.01',
                    })}
                  />
                </div>
                {/* Active badge */}
                <span
                  className={css({
                    backgroundColor: 'positive.surface.base',
                    border: '1px solid',
                    borderColor: 'positive.border.base',
                    color: 'positive.text.base',
                    padding: '2px 10px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: '500',
                  })}
                >
                  활성화됨
                </span>
              </div>
            </div>

            {/* Divider */}
            <div
              className={css({
                borderTop: '1px solid',
                borderColor: 'neutral.border.low',
                marginBottom: '20px',
              })}
            />

            {/* Active Sessions */}
            <h4
              className={css({
                color: 'neutral.text.base',
                fontSize: '16px',
                fontWeight: '600',
                margin: '0 0 12px',
              })}
            >
              활성 세션
            </h4>

            <div className={css({ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' })}>
              {/* Session 1 — current */}
              <div
                className={css({
                  backgroundColor: 'primary.surface.base',
                  border: '1px solid',
                  borderColor: 'primary.border.base',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                  <Monitor size={18} className={css({ color: 'primary.icon.base' })} />
                  <div>
                    <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                      Chrome · macOS
                    </div>
                    <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                      현재 위치 · 방금 전
                    </div>
                  </div>
                </div>
                <span
                  className={css({
                    backgroundColor: 'primary.fill.base',
                    color: 'inverse.text.base',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '12px',
                    fontWeight: '600',
                  })}
                >
                  현재
                </span>
              </div>

              {/* Session 2 */}
              <div
                className={css({
                  backgroundColor: 'neutral.surface.base',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                  <Smartphone size={18} className={css({ color: 'neutral.icon.base' })} />
                  <div>
                    <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                      Safari · iPhone
                    </div>
                    <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>서울 · 2시간 전</div>
                  </div>
                </div>
                <button
                  type="button"
                  className={css({
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'critical.border.base',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'critical.text.base',
                    fontSize: '13px',
                    cursor: 'pointer',
                  })}
                >
                  종료
                </button>
              </div>

              {/* Session 3 */}
              <div
                className={css({
                  backgroundColor: 'neutral.surface.base',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  borderRadius: '10px',
                  padding: '14px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                  <Monitor size={18} className={css({ color: 'neutral.icon.base' })} />
                  <div>
                    <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                      Firefox · Windows
                    </div>
                    <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>부산 · 3일 전</div>
                  </div>
                </div>
                <button
                  type="button"
                  className={css({
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'critical.border.base',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'critical.text.base',
                    fontSize: '13px',
                    cursor: 'pointer',
                  })}
                >
                  종료
                </button>
              </div>
            </div>

            <button
              type="button"
              className={css({
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'critical.border.base',
                backgroundColor: 'neutral.surface.transparent',
                color: 'critical.text.base',
                fontSize: '14px',
                cursor: 'pointer',
              })}
            >
              모든 다른 세션 종료
            </button>
          </div>

          {/* ── Card 5: 알림 설정 ── */}
          <div
            className={css({
              backgroundColor: 'neutral.canvas.02',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.base',
              padding: '24px',
            })}
          >
            <h3
              className={css({
                color: 'neutral.text.base',
                fontSize: '18px',
                fontWeight: '600',
                margin: '0 0 20px',
              })}
            >
              이메일 알림
            </h3>

            {/* Warning banner */}
            <div
              className={css({
                backgroundColor: 'warning.surface.base',
                border: '1px solid',
                borderColor: 'warning.border.base',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              })}
            >
              <AlertTriangle size={16} className={css({ color: 'warning.icon.base', flexShrink: 0 })} />
              <span className={css({ color: 'warning.text.base', fontSize: '14px' })}>
                일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
              </span>
            </div>

            {/* Notification items */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' })}>

              {/* 1. 시스템 알림 — checked + disabled */}
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
                    backgroundColor: 'primary.fill.base',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', lineHeight: '1' })}>✓</span>
                </div>
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    시스템 알림
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                    서비스 이용에 필요한 필수 공지
                  </div>
                </div>
              </div>

              {/* 2. 결제 알림 — checked */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    backgroundColor: 'primary.fill.base',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', lineHeight: '1' })}>✓</span>
                </div>
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    결제 알림
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>영수증 및 결제 관련 안내</div>
                </div>
              </div>

              {/* 3. 배포 알림 — checked */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    backgroundColor: 'primary.fill.base',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', lineHeight: '1' })}>✓</span>
                </div>
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    배포 알림
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>배포 완료 및 실패 알림</div>
                </div>
              </div>

              {/* 4. 보안 알림 — checked */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    backgroundColor: 'primary.fill.base',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', lineHeight: '1' })}>✓</span>
                </div>
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    보안 알림
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>로그인 및 보안 이벤트</div>
                </div>
              </div>

              {/* 5. 마케팅 알림 — unchecked */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                />
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    마케팅 알림
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                    제품 업데이트 및 프로모션
                  </div>
                </div>
              </div>

              {/* 6. 뉴스레터 — unchecked */}
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <div
                  className={css({
                    width: '18px',
                    height: '18px',
                    borderRadius: '4px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    flexShrink: 0,
                    marginTop: '2px',
                  })}
                />
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    뉴스레터
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>월간 뉴스레터</div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className={css({
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'primary.fill.base',
                color: 'inverse.text.base',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              변경사항 저장
            </button>
          </div>

          {/* ── Card 6: 위험 구역 ── */}
          <div
            className={css({
              backgroundColor: 'critical.surface.base',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'critical.border.base',
              padding: '24px',
            })}
          >
            {/* Header */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '20px',
              })}
            >
              <AlertTriangle size={20} className={css({ color: 'critical.icon.base' })} />
              <h3
                className={css({
                  color: 'critical.text.base',
                  fontSize: '18px',
                  fontWeight: '600',
                  margin: 0,
                })}
              >
                위험 구역
              </h3>
            </div>

            {/* Action 1 — 계정 비활성화 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '20px',
                borderBottom: '1px solid',
                borderColor: 'critical.border.base',
                marginBottom: '20px',
              })}
            >
              <div>
                <div
                  className={css({
                    color: 'neutral.text.base',
                    fontSize: '15px',
                    fontWeight: '500',
                    marginBottom: '4px',
                  })}
                >
                  계정 비활성화
                </div>
                <div className={css({ color: 'neutral.text.low', fontSize: '13px' })}>
                  계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
                </div>
              </div>
              <button
                type="button"
                className={css({
                  padding: '8px 18px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'critical.border.base',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'critical.text.base',
                  fontSize: '14px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  marginLeft: '16px',
                })}
              >
                비활성화
              </button>
            </div>

            {/* Action 2 — 계정 영구 삭제 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}
            >
              <div>
                <div
                  className={css({
                    color: 'neutral.text.base',
                    fontSize: '15px',
                    fontWeight: '500',
                    marginBottom: '4px',
                  })}
                >
                  계정 영구 삭제
                </div>
                <div className={css({ color: 'neutral.text.low', fontSize: '13px' })}>
                  계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
                </div>
              </div>
              <button
                type="button"
                className={css({
                  padding: '8px 18px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'critical.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  flexShrink: 0,
                  marginLeft: '16px',
                })}
              >
                영구 삭제
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
