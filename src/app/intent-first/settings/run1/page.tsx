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
      {/* 왼쪽 설정 메뉴 */}
      <aside
        className={css({
          width: '200px',
          flexShrink: 0,
          backgroundColor: 'neutral.canvas.01',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 0',
          borderRight: '1px solid',
          borderColor: 'neutral.border.low',
          overflowY: 'auto',
        })}
      >
        {/* 뒤로가기 링크 */}
        <div className={css({ padding: '0 16px 16px' })}>
          <a
            href="#"
            className={css({
              color: 'neutral.text.low',
              fontSize: '14px',
              textDecoration: 'none',
              display: 'block',
            })}
          >
            ← 대시보드
          </a>
        </div>

        {/* 제목 */}
        <div className={css({ padding: '0 16px 16px' })}>
          <h2
            className={css({
              color: 'neutral.text.base',
              fontSize: '18px',
              fontWeight: '700',
              margin: 0,
            })}
          >
            설정
          </h2>
        </div>

        {/* 메뉴 항목 */}
        <nav className={css({ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 8px' })}>
          {/* 프로필 — 활성 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              backgroundColor: 'primary.surface.base',
              textDecoration: 'none',
            })}
          >
            <User
              size={16}
              className={css({ color: 'primary.icon.base' })}
            />
            <span className={css({ color: 'primary.text.base', fontSize: '14px', fontWeight: '500' })}>
              프로필
            </span>
          </a>

          {/* 구독 플랜 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              textDecoration: 'none',
            })}
          >
            <CreditCard
              size={16}
              className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
            />
            <span className={css({ color: 'neutral.text.low', fontSize: '14px' })}>구독 플랜</span>
          </a>

          {/* 보안 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              textDecoration: 'none',
            })}
          >
            <ShieldCheck
              size={16}
              className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
            />
            <span className={css({ color: 'neutral.text.low', fontSize: '14px' })}>보안</span>
          </a>

          {/* 알림 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              textDecoration: 'none',
            })}
          >
            <Bell
              size={16}
              className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
            />
            <span className={css({ color: 'neutral.text.low', fontSize: '14px' })}>알림</span>
          </a>

          {/* 위험 구역 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              textDecoration: 'none',
            })}
          >
            <AlertTriangle
              size={16}
              className={css({ color: 'critical.icon.base' })}
            />
            <span className={css({ color: 'critical.text.base', fontSize: '14px' })}>위험 구역</span>
          </a>
        </nav>
      </aside>

      {/* 오른쪽 콘텐츠 영역 */}
      <main
        className={css({
          flex: 1,
          backgroundColor: 'neutral.canvas.01',
          overflowY: 'auto',
          padding: '32px',
        })}
      >
        {/* 브레드크럼 */}
        <nav
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            marginBottom: '24px',
            fontSize: '14px',
          })}
        >
          <a href="#" className={css({ color: 'neutral.text.low', textDecoration: 'none' })}>
            홈
          </a>
          <span className={css({ color: 'neutral.text.lowest' })}>&#47;</span>
          <a href="#" className={css({ color: 'neutral.text.low', textDecoration: 'none' })}>
            설정
          </a>
          <span className={css({ color: 'neutral.text.lowest' })}>&#47;</span>
          <span className={css({ color: 'neutral.text.base', fontWeight: '500' })}>프로필</span>
        </nav>

        <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>

          {/* 카드 1: 프로필 정보 */}
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
                  margin: '0 0 20px 0',
                })}
              >
                프로필 정보
              </h3>

              {/* 아바타 영역 */}
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '24px',
                })}
              >
                <div
                  className={css({
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    backgroundColor: 'primary.fill.base',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
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
                  <button
                    className={css({
                      padding: '6px 14px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.base',
                      color: 'neutral.text.base',
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
                      backgroundColor: 'neutral.surface.transparent',
                      color: 'neutral.text.low',
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
                  <label className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: '500' })}>
                    이름
                  </label>
                  <input
                    type="text"
                    placeholder="이름을 입력하세요"
                    className={css({
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.base',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                      _placeholder: { color: 'neutral.text.lowest' },
                    })}
                  />
                </div>

                {/* 이메일 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: '500' })}>
                    이메일
                  </label>
                  <input
                    type="email"
                    placeholder="이메일을 입력하세요"
                    className={css({
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.base',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                    })}
                  />
                </div>

                {/* 전화번호 — 비활성화 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label
                    className={css({
                      color: 'neutral.text.base',
                      fontSize: '13px',
                      fontWeight: '500',
                      opacity: 0.38,
                    })}
                  >
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
                      borderColor: 'neutral.border.low',
                      backgroundColor: 'neutral.surface.high',
                      color: 'neutral.text.low',
                      fontSize: '14px',
                      outline: 'none',
                      opacity: 0.38,
                    })}
                  />
                </div>

                {/* 부서 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: '500' })}>
                    부서
                  </label>
                  <input
                    type="text"
                    placeholder="부서를 입력하세요"
                    className={css({
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: '1px solid',
                      borderColor: 'neutral.border.base',
                      backgroundColor: 'neutral.surface.base',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                    })}
                  />
                </div>
              </div>

              {/* 소개 textarea */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: '500' })}>
                  소개
                </label>
                <textarea
                  placeholder="소개를 입력하세요"
                  rows={3}
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    _placeholder: { color: 'neutral.text.lowest' },
                  })}
                />
                <span className={css({ color: 'neutral.text.low', fontSize: '12px' })}>최대 200자</span>
              </div>
            </div>

            {/* 구분선 + 하단 버튼 */}
            <div
              className={css({
                borderTop: '1px solid',
                borderColor: 'neutral.border.low',
                padding: '16px 24px',
                display: 'flex',
                gap: '8px',
              })}
            >
              <button
                className={css({
                  padding: '8px 20px',
                  borderRadius: '6px',
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
                className={css({
                  padding: '8px 20px',
                  borderRadius: '6px',
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

          {/* 카드 2: 구독 플랜 */}
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
                margin: '0 0 20px 0',
              })}
            >
              구독 플랜
            </h3>

            {/* 현재 플랜 박스 */}
            <div
              className={css({
                backgroundColor: 'primary.surface.base',
                border: '1px solid',
                borderColor: 'primary.border.base',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Zap
                  size={20}
                  className={css({ color: 'primary.icon.base' })}
                />
                <div>
                  <div
                    className={css({
                      color: 'primary.text.base',
                      fontSize: '15px',
                      fontWeight: '700',
                    })}
                  >
                    Pro
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '13px' })}>
                    2025년 9월 1일 갱신
                  </div>
                </div>
              </div>
              <div
                className={css({
                  backgroundColor: 'primary.fill.base',
                  color: 'inverse.text.base',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: '600',
                })}
              >
                현재 플랜
              </div>
            </div>

            {/* Info 배너 */}
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
              <Info
                size={16}
                className={css({ color: 'info.icon.base', flexShrink: 0 })}
              />
              <span className={css({ color: 'info.text.base', fontSize: '14px' })}>
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
                className={css({
                  padding: '8px 20px',
                  borderRadius: '6px',
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

          {/* 카드 3: 비밀번호 변경 */}
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
                margin: '0 0 20px 0',
              })}
            >
              비밀번호 변경
            </h3>

            <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>

              {/* 1. 현재 비밀번호 — 기본 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: '500' })}>
                  현재 비밀번호
                </label>
                <input
                  type="password"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
              </div>

              {/* 2. 새 비밀번호 — 포커스 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: '500' })}>
                  새 비밀번호
                </label>
                <input
                  type="password"
                  placeholder="새 비밀번호를 입력하세요"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'primary.border.highest',
                    backgroundColor: 'neutral.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: '2px solid',
                    outlineColor: 'focus.border',
                    outlineOffset: '1px',
                    _placeholder: { color: 'neutral.text.lowest' },
                  })}
                />
              </div>

              {/* 3. 비밀번호 확인 — 오류 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: '500' })}>
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  defaultValue="abc"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'critical.border.base',
                    backgroundColor: 'critical.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
                <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                  <XCircle
                    size={14}
                    className={css({ color: 'critical.icon.base' })}
                  />
                  <span className={css({ color: 'critical.text.base', fontSize: '12px' })}>
                    비밀번호가 일치하지 않습니다.
                  </span>
                </div>
              </div>

              {/* 4. 새 이메일 — 성공 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ color: 'neutral.text.base', fontSize: '13px', fontWeight: '500' })}>
                  새 이메일 (선택)
                </label>
                <input
                  type="email"
                  defaultValue="user@example.com"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'positive.border.base',
                    backgroundColor: 'positive.surface.base',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
                <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                  <CheckCircle2
                    size={14}
                    className={css({ color: 'positive.icon.base' })}
                  />
                  <span className={css({ color: 'positive.text.base', fontSize: '12px' })}>
                    사용 가능한 이메일입니다.
                  </span>
                </div>
              </div>

              {/* 5. 사용자 ID — 비활성화 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label
                  className={css({
                    color: 'neutral.text.base',
                    fontSize: '13px',
                    fontWeight: '500',
                    opacity: 0.38,
                  })}
                >
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
                    borderColor: 'neutral.border.low',
                    backgroundColor: 'neutral.surface.high',
                    color: 'neutral.text.low',
                    fontSize: '14px',
                    outline: 'none',
                    opacity: 0.38,
                  })}
                />
                <span className={css({ color: 'neutral.text.low', fontSize: '12px', opacity: 0.38 })}>
                  변경 불가
                </span>
              </div>
            </div>

            <div className={css({ marginTop: '20px' })}>
              <button
                className={css({
                  padding: '8px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'primary.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                })}
              >
                비밀번호 변경
              </button>
            </div>
          </div>

          {/* 카드 4: 보안 */}
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
                margin: '0 0 20px 0',
              })}
            >
              보안 설정
            </h3>

            {/* 2단계 인증 토글 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <ShieldCheck
                  size={20}
                  className={css({ color: 'positive.icon.base' })}
                />
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '15px', fontWeight: '500' })}>
                    2단계 인증
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '13px' })}>
                    계정 보안이 강화됩니다
                  </div>
                </div>
              </div>
              <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
                {/* 토글 — 켜진 상태 */}
                <div
                  className={css({
                    width: '44px',
                    height: '24px',
                    borderRadius: '12px',
                    backgroundColor: 'primary.fill.base',
                    position: 'relative',
                    cursor: 'pointer',
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
                <div
                  className={css({
                    backgroundColor: 'positive.surface.base',
                    border: '1px solid',
                    borderColor: 'positive.border.base',
                    color: 'positive.text.base',
                    padding: '2px 8px',
                    borderRadius: '20px',
                    fontSize: '11px',
                    fontWeight: '600',
                  })}
                >
                  활성화됨
                </div>
              </div>
            </div>

            {/* 구분선 */}
            <div
              className={css({
                borderTop: '1px solid',
                borderColor: 'neutral.border.low',
                marginBottom: '16px',
              })}
            />

            {/* 활성 세션 */}
            <h4
              className={css({
                color: 'neutral.text.base',
                fontSize: '15px',
                fontWeight: '600',
                margin: '0 0 12px 0',
              })}
            >
              활성 세션
            </h4>

            <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px' })}>
              {/* 세션 1 — 현재 */}
              <div
                className={css({
                  backgroundColor: 'primary.surface.base',
                  border: '1px solid',
                  borderColor: 'primary.border.base',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                  <Monitor
                    size={16}
                    className={css({ color: 'primary.icon.base' })}
                  />
                  <div>
                    <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                      Chrome · macOS
                    </div>
                    <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                      현재 위치 · 방금 전
                    </div>
                  </div>
                </div>
                <div
                  className={css({
                    backgroundColor: 'primary.fill.base',
                    color: 'inverse.text.base',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '600',
                  })}
                >
                  현재
                </div>
              </div>

              {/* 세션 2 */}
              <div
                className={css({
                  backgroundColor: 'neutral.surface.base',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                  <Smartphone
                    size={16}
                    className={css({ color: 'neutral.icon.base' })}
                  />
                  <div>
                    <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                      Safari · iPhone
                    </div>
                    <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                      서울 · 2시간 전
                    </div>
                  </div>
                </div>
                <button
                  className={css({
                    padding: '5px 12px',
                    borderRadius: '6px',
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

              {/* 세션 3 */}
              <div
                className={css({
                  backgroundColor: 'neutral.surface.base',
                  border: '1px solid',
                  borderColor: 'neutral.border.base',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                })}
              >
                <div className={css({ display: 'flex', alignItems: 'center', gap: '10px' })}>
                  <Monitor
                    size={16}
                    className={css({ color: 'neutral.icon.base' })}
                  />
                  <div>
                    <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                      Firefox · Windows
                    </div>
                    <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                      부산 · 3일 전
                    </div>
                  </div>
                </div>
                <button
                  className={css({
                    padding: '5px 12px',
                    borderRadius: '6px',
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

            {/* 모든 다른 세션 종료 */}
            <div className={css({ marginTop: '12px' })}>
              <button
                className={css({
                  padding: '8px 20px',
                  borderRadius: '6px',
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
          </div>

          {/* 카드 5: 알림 설정 */}
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
                margin: '0 0 16px 0',
              })}
            >
              이메일 알림
            </h3>

            {/* Warning 배너 */}
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
              <AlertTriangle
                size={16}
                className={css({ color: 'warning.icon.base', flexShrink: 0 })}
              />
              <span className={css({ color: 'warning.text.base', fontSize: '14px' })}>
                일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
              </span>
            </div>

            {/* 알림 항목 목록 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>

              {/* 1. 시스템 알림 — 체크됨 + 비활성화 */}
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
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', fontWeight: '700' })}>✓</span>
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

              {/* 2. 결제 알림 — 체크됨 */}
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
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', fontWeight: '700' })}>✓</span>
                </div>
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    결제 알림
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                    영수증 및 결제 관련 안내
                  </div>
                </div>
              </div>

              {/* 3. 배포 알림 — 체크됨 */}
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
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', fontWeight: '700' })}>✓</span>
                </div>
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    배포 알림
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                    배포 완료 및 실패 알림
                  </div>
                </div>
              </div>

              {/* 4. 보안 알림 — 체크됨 */}
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
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', fontWeight: '700' })}>✓</span>
                </div>
                <div>
                  <div className={css({ color: 'neutral.text.base', fontSize: '14px', fontWeight: '500' })}>
                    보안 알림
                  </div>
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                    로그인 및 보안 이벤트
                  </div>
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

              {/* 6. 뉴스레터 — 체크 안됨 */}
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
                  <div className={css({ color: 'neutral.text.low', fontSize: '12px' })}>
                    월간 뉴스레터
                  </div>
                </div>
              </div>
            </div>

            <div className={css({ marginTop: '20px' })}>
              <button
                className={css({
                  padding: '8px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'primary.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                })}
              >
                알림 설정 저장
              </button>
            </div>
          </div>

          {/* 카드 6: 위험 구역 */}
          <div
            className={css({
              backgroundColor: 'critical.surface.base',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'critical.border.base',
              padding: '24px',
            })}
          >
            {/* 헤더 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '20px',
              })}
            >
              <AlertTriangle
                size={20}
                className={css({ color: 'critical.icon.base' })}
              />
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

            {/* 액션 1 — 계정 비활성화 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '16px',
                borderBottom: '1px solid',
                borderColor: 'critical.border.base',
              })}
            >
              <div>
                <div className={css({ color: 'neutral.text.base', fontSize: '15px', fontWeight: '500' })}>
                  계정 비활성화
                </div>
                <div className={css({ color: 'neutral.text.low', fontSize: '13px', marginTop: '4px' })}>
                  계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
                </div>
              </div>
              <button
                className={css({
                  flexShrink: 0,
                  marginLeft: '16px',
                  padding: '7px 16px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'critical.border.base',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'critical.text.base',
                  fontSize: '14px',
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
                paddingTop: '16px',
              })}
            >
              <div>
                <div className={css({ color: 'neutral.text.base', fontSize: '15px', fontWeight: '500' })}>
                  계정 영구 삭제
                </div>
                <div className={css({ color: 'neutral.text.low', fontSize: '13px', marginTop: '4px' })}>
                  계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
                </div>
              </div>
              <button
                className={css({
                  flexShrink: 0,
                  marginLeft: '16px',
                  padding: '7px 16px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'critical.fill.base',
                  color: 'inverse.text.base',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
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
