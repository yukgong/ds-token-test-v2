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
  ChevronRight,
} from 'lucide-react';

export default function SettingsPage() {
  return (
    <div
      className={css({
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: 'neutral.canvas.01',
      })}
    >
      {/* 왼쪽 설정 메뉴 */}
      <aside
        className={`dark ${css({
          width: '200px',
          flexShrink: 0,
          backgroundColor: 'neutral.canvas.02',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 0',
          borderRight: '1px solid',
          borderRightColor: 'neutral.border.low',
        })}`}
      >
        {/* 뒤로가기 */}
        <a
          href="#"
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '0 16px 16px',
            color: 'neutral.text.low',
            fontSize: '13px',
            textDecoration: 'none',
          })}
        >
          ← 대시보드
        </a>

        {/* 설정 제목 */}
        <div
          className={css({
            padding: '0 16px 16px',
            color: 'neutral.text.base',
            fontWeight: '700',
            fontSize: '16px',
          })}
        >
          설정
        </div>

        {/* 메뉴 항목들 */}
        <nav className={css({ display: 'flex', flexDirection: 'column', gap: '2px', padding: '0 8px' })}>
          {/* 프로필 — 활성 상태 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: 'primary.surface.base',
              color: 'primary.text.base',
              textDecoration: 'none',
              fontSize: '14px',
            })}
          >
            <User
              size={16}
              className={css({ color: 'primary.icon.base' })}
            />
            프로필
          </a>

          {/* 구독 플랜 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              color: 'neutral.text.low',
              textDecoration: 'none',
              fontSize: '14px',
            })}
          >
            <CreditCard
              size={16}
              className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
            />
            구독 플랜
          </a>

          {/* 보안 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              color: 'neutral.text.low',
              textDecoration: 'none',
              fontSize: '14px',
            })}
          >
            <ShieldCheck
              size={16}
              className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
            />
            보안
          </a>

          {/* 알림 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              color: 'neutral.text.low',
              textDecoration: 'none',
              fontSize: '14px',
            })}
          >
            <Bell
              size={16}
              className={css({ color: 'neutral.icon.base', opacity: 0.6 })}
            />
            알림
          </a>

          {/* 위험 구역 */}
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
              borderRadius: '6px',
              color: 'critical.text.base',
              textDecoration: 'none',
              fontSize: '14px',
            })}
          >
            <AlertTriangle
              size={16}
              className={css({ color: 'critical.icon.base' })}
            />
            위험 구역
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
            fontSize: '13px',
          })}
        >
          <a
            href="#"
            className={css({
              color: 'neutral.text.low',
              textDecoration: 'none',
              _hover: { color: 'primary.text.base' },
            })}
          >
            홈
          </a>
          <span className={css({ color: 'neutral.text.low' })}>/</span>
          <a
            href="#"
            className={css({
              color: 'neutral.text.low',
              textDecoration: 'none',
              _hover: { color: 'primary.text.base' },
            })}
          >
            설정
          </a>
          <span className={css({ color: 'neutral.text.low' })}>/</span>
          <span className={css({ color: 'neutral.text.base', fontWeight: '500' })}>프로필</span>
        </nav>

        <div className={css({ display: 'flex', flexDirection: 'column', gap: '24px' })}>

          {/* 카드 1: 프로필 정보 */}
          <div
            className={css({
              backgroundColor: 'neutral.surface.base',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              overflow: 'hidden',
            })}
          >
            <div className={css({ padding: '24px' })}>
              <h2
                className={css({
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'neutral.text.base',
                  marginBottom: '20px',
                })}
              >
                프로필 정보
              </h2>

              {/* 아바타 영역 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '24px',
                })}
              >
                <div
                  className={css({
                    width: '80px',
                    height: '80px',
                    borderRadius: '9999px',
                    backgroundColor: 'primary.fill.base',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'inverse.text.base',
                    flexShrink: 0,
                  })}
                >
                  K
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
                  <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
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
                      backgroundColor: 'neutral.canvas.01',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                      '&::placeholder': { color: 'neutral.text.low' },
                    })}
                  />
                </div>

                {/* 이메일 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
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
                      backgroundColor: 'neutral.canvas.01',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                      '&::placeholder': { color: 'neutral.text.low' },
                    })}
                  />
                </div>

                {/* 전화번호 — 비활성화 */}
                <div
                  className={css({
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    opacity: 0.38,
                  })}
                >
                  <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
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
                      cursor: 'not-allowed',
                    })}
                  />
                </div>

                {/* 부서 */}
                <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                  <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
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
                      backgroundColor: 'neutral.canvas.01',
                      color: 'neutral.text.base',
                      fontSize: '14px',
                      outline: 'none',
                      '&::placeholder': { color: 'neutral.text.low' },
                    })}
                  />
                </div>
              </div>

              {/* 소개 textarea */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '8px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
                  소개
                </label>
                <textarea
                  rows={3}
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.canvas.01',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    '&::placeholder': { color: 'neutral.text.low' },
                  })}
                  placeholder="자기소개를 입력하세요"
                />
                <span className={css({ fontSize: '12px', color: 'neutral.text.low' })}>최대 200자</span>
              </div>
            </div>

            {/* 구분선 + 하단 버튼 */}
            <div
              className={css({
                borderTop: '1px solid',
                borderTopColor: 'neutral.border.low',
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
              backgroundColor: 'neutral.surface.base',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              padding: '24px',
            })}
          >
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '600',
                color: 'neutral.text.base',
                marginBottom: '20px',
              })}
            >
              구독 플랜
            </h2>

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
                <Zap size={20} className={css({ color: 'primary.icon.base' })} />
                <div>
                  <div
                    className={css({
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'primary.text.base',
                    })}
                  >
                    Pro
                  </div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>
                    2025년 9월 1일 갱신
                  </div>
                </div>
              </div>
              <span
                className={css({
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  backgroundColor: 'primary.fill.base',
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
              <span className={css({ fontSize: '13px', color: 'info.text.base' })}>
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
                  backgroundColor: 'neutral.surface.base',
                  color: 'neutral.text.base',
                  fontSize: '14px',
                  cursor: 'pointer',
                })}
              >
                플랜 비교 보기
              </button>
            </div>
          </div>

          {/* 카드 3: 비밀번호 변경 (입력 상태 쇼케이스) */}
          <div
            className={css({
              backgroundColor: 'neutral.surface.base',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              padding: '24px',
            })}
          >
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '600',
                color: 'neutral.text.base',
                marginBottom: '20px',
              })}
            >
              비밀번호 변경
            </h2>

            <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '20px' })}>
              {/* 1. 현재 비밀번호 — 기본 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
                  현재 비밀번호
                </label>
                <input
                  type="password"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'neutral.border.base',
                    backgroundColor: 'neutral.canvas.01',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: 'none',
                  })}
                />
              </div>

              {/* 2. 새 비밀번호 — 포커스 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
                  새 비밀번호
                </label>
                <input
                  type="password"
                  placeholder="새 비밀번호를 입력하세요"
                  className={css({
                    padding: '8px 12px',
                    borderRadius: '6px',
                    border: '2px solid',
                    borderColor: 'primary.border.base',
                    backgroundColor: 'neutral.canvas.01',
                    color: 'neutral.text.base',
                    fontSize: '14px',
                    outline: '2px solid',
                    outlineColor: 'focus.border',
                    outlineOffset: '1px',
                    '&::placeholder': { color: 'neutral.text.low' },
                  })}
                />
              </div>

              {/* 3. 비밀번호 확인 — 오류 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
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
                  <XCircle size={14} className={css({ color: 'critical.icon.base', flexShrink: 0 })} />
                  <span className={css({ fontSize: '12px', color: 'critical.text.base' })}>
                    비밀번호가 일치하지 않습니다.
                  </span>
                </div>
              </div>

              {/* 4. 새 이메일 — 성공 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
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
                  <CheckCircle2 size={14} className={css({ color: 'positive.icon.base', flexShrink: 0 })} />
                  <span className={css({ fontSize: '12px', color: 'positive.text.base' })}>
                    사용 가능한 이메일입니다.
                  </span>
                </div>
              </div>

              {/* 5. 사용자 ID — 비활성화 */}
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  opacity: 0.38,
                })}
              >
                <label className={css({ fontSize: '13px', fontWeight: '500', color: 'neutral.text.base' })}>
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
                    cursor: 'not-allowed',
                  })}
                />
                <span className={css({ fontSize: '12px', color: 'neutral.text.low' })}>변경 불가</span>
              </div>
            </div>

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
              저장
            </button>
          </div>

          {/* 카드 4: 보안 */}
          <div
            className={css({
              backgroundColor: 'neutral.surface.base',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              padding: '24px',
            })}
          >
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '600',
                color: 'neutral.text.base',
                marginBottom: '20px',
              })}
            >
              보안 설정
            </h2>

            {/* 2단계 인증 토글 행 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                gap: '16px',
                marginBottom: '20px',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
                <ShieldCheck size={20} className={css({ color: 'positive.icon.base', flexShrink: 0, marginTop: '2px' })} />
                <div>
                  <div className={css({ fontSize: '15px', fontWeight: '500', color: 'neutral.text.base' })}>
                    2단계 인증
                  </div>
                  <div className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
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
                    borderRadius: '9999px',
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
                      width: '18px',
                      height: '18px',
                      borderRadius: '9999px',
                      backgroundColor: 'neutral.canvas.01',
                    })}
                  />
                </div>
                {/* 활성화됨 뱃지 */}
                <span
                  className={css({
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    backgroundColor: 'positive.surface.base',
                    border: '1px solid',
                    borderColor: 'positive.border.base',
                    color: 'positive.text.base',
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
                borderTopColor: 'neutral.border.low',
                marginBottom: '20px',
              })}
            />

            {/* 활성 세션 */}
            <div
              className={css({
                fontSize: '15px',
                fontWeight: '600',
                color: 'neutral.text.base',
                marginBottom: '12px',
              })}
            >
              활성 세션
            </div>

            <div className={css({ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' })}>
              {/* 세션 1 — 현재 세션 */}
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
                  <Monitor size={18} className={css({ color: 'primary.icon.base', flexShrink: 0 })} />
                  <div>
                    <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                      Chrome · macOS
                    </div>
                    <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>
                      현재 위치 · 방금 전
                    </div>
                  </div>
                </div>
                <span
                  className={css({
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    backgroundColor: 'primary.fill.base',
                    color: 'inverse.text.base',
                    fontSize: '12px',
                    fontWeight: '500',
                  })}
                >
                  현재
                </span>
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
                  <Smartphone size={18} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                  <div>
                    <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                      Safari · iPhone
                    </div>
                    <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>
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
                  <Smartphone size={18} className={css({ color: 'neutral.icon.base', flexShrink: 0 })} />
                  <div>
                    <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                      Firefox · Windows
                    </div>
                    <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>
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

          {/* 카드 5: 알림 설정 */}
          <div
            className={css({
              backgroundColor: 'neutral.surface.base',
              borderRadius: '12px',
              border: '1px solid',
              borderColor: 'neutral.border.low',
              padding: '24px',
            })}
          >
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '600',
                color: 'neutral.text.base',
                marginBottom: '20px',
              })}
            >
              이메일 알림
            </h2>

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
              <AlertTriangle size={16} className={css({ color: 'warning.icon.base', flexShrink: 0 })} />
              <span className={css({ fontSize: '13px', color: 'warning.text.base' })}>
                일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
              </span>
            </div>

            {/* 알림 항목 목록 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' })}>
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
                    marginTop: '1px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', lineHeight: 1 })}>✓</span>
                </div>
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                    시스템 알림
                  </div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>
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
                    marginTop: '1px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', lineHeight: 1 })}>✓</span>
                </div>
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                    결제 알림
                  </div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>영수증 및 결제 관련 안내</div>
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
                    marginTop: '1px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', lineHeight: 1 })}>✓</span>
                </div>
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                    배포 알림
                  </div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>배포 완료 및 실패 알림</div>
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
                    marginTop: '1px',
                  })}
                >
                  <span className={css({ color: 'inverse.text.base', fontSize: '12px', lineHeight: 1 })}>✓</span>
                </div>
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                    보안 알림
                  </div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>로그인 및 보안 이벤트</div>
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
                    backgroundColor: 'neutral.canvas.01',
                    flexShrink: 0,
                    marginTop: '1px',
                  })}
                />
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                    마케팅 알림
                  </div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>제품 업데이트 및 프로모션</div>
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
                    backgroundColor: 'neutral.canvas.01',
                    flexShrink: 0,
                    marginTop: '1px',
                  })}
                />
                <div>
                  <div className={css({ fontSize: '14px', fontWeight: '500', color: 'neutral.text.base' })}>
                    뉴스레터
                  </div>
                  <div className={css({ fontSize: '12px', color: 'neutral.text.low' })}>월간 뉴스레터</div>
                </div>
              </div>
            </div>

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
              저장
            </button>
          </div>

          {/* 카드 6: 위험 구역 */}
          <div
            className={css({
              backgroundColor: 'critical.surface.base',
              border: '1px solid',
              borderColor: 'critical.border.base',
              borderRadius: '12px',
              overflow: 'hidden',
            })}
          >
            {/* 카드 헤더 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '20px 24px 16px',
                borderBottom: '1px solid',
                borderBottomColor: 'critical.border.base',
              })}
            >
              <AlertTriangle size={20} className={css({ color: 'critical.icon.base' })} />
              <h2 className={css({ fontSize: '18px', fontWeight: '600', color: 'critical.text.base' })}>
                위험 구역
              </h2>
            </div>

            <div className={css({ padding: '0 24px' })}>
              {/* 액션 1: 계정 비활성화 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '20px 0',
                  borderBottom: '1px solid',
                  borderBottomColor: 'critical.border.base',
                })}
              >
                <div>
                  <div className={css({ fontSize: '15px', fontWeight: '500', color: 'neutral.text.base' })}>
                    계정 비활성화
                  </div>
                  <div className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
                    계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
                  </div>
                </div>
                <button
                  className={css({
                    padding: '7px 16px',
                    borderRadius: '6px',
                    border: '1px solid',
                    borderColor: 'critical.border.base',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'critical.text.base',
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    flexShrink: 0,
                  })}
                >
                  비활성화
                </button>
              </div>

              {/* 액션 2: 계정 영구 삭제 */}
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  padding: '20px 0',
                })}
              >
                <div>
                  <div className={css({ fontSize: '15px', fontWeight: '500', color: 'neutral.text.base' })}>
                    계정 영구 삭제
                  </div>
                  <div className={css({ fontSize: '13px', color: 'neutral.text.low' })}>
                    계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
                  </div>
                </div>
                <button
                  className={css({
                    padding: '7px 16px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: 'critical.fill.base',
                    color: 'inverse.text.base',
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    cursor: 'pointer',
                    flexShrink: 0,
                  })}
                >
                  영구 삭제
                </button>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
