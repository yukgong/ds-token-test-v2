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
        minHeight: '100vh',
        backgroundColor: 'neutral.canvas.01',
      })}
    >
      {/* ── 왼쪽 설정 메뉴 ── */}
      <aside
        className={css({
          width: '200px',
          flexShrink: 0,
          backgroundColor: 'neutral.canvas.01',
          borderRight: '1px solid',
          borderColor: 'neutral.border.subtle',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 12px',
          gap: '8px',
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflowY: 'auto',
        })}
      >
        {/* 뒤로가기 링크 */}
        <a
          href="#"
          className={css({
            color: 'neutral.text.subtle',
            fontSize: '13px',
            marginBottom: '8px',
            display: 'block',
            textDecoration: 'none',
          })}
        >
          ← 대시보드
        </a>

        {/* 설정 제목 */}
        <h1
          className={css({
            color: 'neutral.text.default',
            fontSize: '16px',
            fontWeight: '700',
            marginBottom: '12px',
          })}
        >
          설정
        </h1>

        {/* 활성 메뉴: 프로필 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '8px',
            backgroundColor: 'primary.surface.default',
            cursor: 'pointer',
          })}
        >
          <User
            size={16}
            className={css({ color: 'primary.icon.default' })}
          />
          <span
            className={css({
              color: 'primary.text.default',
              fontSize: '14px',
              fontWeight: '600',
            })}
          >
            프로필
          </span>
        </div>

        {/* 비활성 메뉴: 구독 플랜 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <CreditCard
            size={16}
            className={css({ color: 'neutral.icon.default', opacity: 0.38 })}
          />
          <span
            className={css({
              color: 'neutral.text.subtle',
              fontSize: '14px',
              opacity: 0.38,
            })}
          >
            구독 플랜
          </span>
        </div>

        {/* 비활성 메뉴: 보안 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <ShieldCheck
            size={16}
            className={css({ color: 'neutral.icon.default', opacity: 0.38 })}
          />
          <span
            className={css({
              color: 'neutral.text.subtle',
              fontSize: '14px',
              opacity: 0.38,
            })}
          >
            보안
          </span>
        </div>

        {/* 비활성 메뉴: 알림 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <Bell
            size={16}
            className={css({ color: 'neutral.icon.default', opacity: 0.38 })}
          />
          <span
            className={css({
              color: 'neutral.text.subtle',
              fontSize: '14px',
              opacity: 0.38,
            })}
          >
            알림
          </span>
        </div>

        {/* 비활성 메뉴: 위험 구역 */}
        <div
          className={css({
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            borderRadius: '8px',
            cursor: 'pointer',
          })}
        >
          <AlertTriangle
            size={16}
            className={css({ color: 'critical.icon.default' })}
          />
          <span
            className={css({
              color: 'critical.text.default',
              fontSize: '14px',
            })}
          >
            위험 구역
          </span>
        </div>
      </aside>

      {/* ── 오른쪽 콘텐츠 영역 ── */}
      <main
        className={css({
          flex: 1,
          backgroundColor: 'neutral.canvas.01',
          padding: '32px',
          overflowY: 'auto',
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
          <a
            href="#"
            className={css({
              color: 'neutral.text.subtle',
              textDecoration: 'none',
            })}
          >
            홈
          </a>
          <span className={css({ color: 'neutral.text.subtle' })}>/</span>
          <a
            href="#"
            className={css({
              color: 'neutral.text.subtle',
              textDecoration: 'none',
            })}
          >
            설정
          </a>
          <span className={css({ color: 'neutral.text.subtle' })}>/</span>
          <span className={css({ color: 'neutral.text.default', fontWeight: '600' })}>
            프로필
          </span>
        </nav>

        {/* ── 카드 1: 프로필 정보 ── */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            borderRadius: '12px',
            overflow: 'hidden',
          })}
        >
          <div className={css({ padding: '24px' })}>
            <h2
              className={css({
                color: 'neutral.text.default',
                fontSize: '18px',
                fontWeight: '700',
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
                  borderRadius: '50%',
                  backgroundColor: 'primary.fill.default',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                })}
              >
                <span
                  className={css({
                    color: 'inverse.text.default',
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
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '13px',
                    fontWeight: '500',
                    cursor: 'pointer',
                  })}
                >
                  사진 변경
                </button>
                <button
                  className={css({
                    padding: '8px 16px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: 'neutral.surface.transparent',
                    color: 'neutral.text.subtle',
                    fontSize: '13px',
                    fontWeight: '500',
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
              {/* 이름 - 기본 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label
                  className={css({
                    color: 'neutral.text.default',
                    fontSize: '13px',
                    fontWeight: '500',
                  })}
                >
                  이름
                </label>
                <input
                  type="text"
                  placeholder="이름 입력"
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    outline: 'none',
                    _placeholder: { color: 'neutral.text.muted' },
                  })}
                />
              </div>

              {/* 이메일 - 기본 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label
                  className={css({
                    color: 'neutral.text.default',
                    fontSize: '13px',
                    fontWeight: '500',
                  })}
                >
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="이메일 입력"
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    outline: 'none',
                    _placeholder: { color: 'neutral.text.muted' },
                  })}
                />
              </div>

              {/* 전화번호 - 비활성 */}
              <div
                className={css({
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  opacity: 0.38,
                })}
              >
                <label
                  className={css({
                    color: 'neutral.text.default',
                    fontSize: '13px',
                    fontWeight: '500',
                  })}
                >
                  전화번호
                </label>
                <input
                  type="tel"
                  placeholder="전화번호 입력"
                  disabled
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.subtle',
                    backgroundColor: 'neutral.surface.strongest',
                    color: 'neutral.text.subtle',
                    fontSize: '14px',
                    outline: 'none',
                    cursor: 'not-allowed',
                  })}
                />
              </div>

              {/* 부서 - 기본 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label
                  className={css({
                    color: 'neutral.text.default',
                    fontSize: '13px',
                    fontWeight: '500',
                  })}
                >
                  부서
                </label>
                <input
                  type="text"
                  placeholder="부서 입력"
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'neutral.border.default',
                    backgroundColor: 'neutral.surface.default',
                    color: 'neutral.text.default',
                    fontSize: '14px',
                    outline: 'none',
                    _placeholder: { color: 'neutral.text.muted' },
                  })}
                />
              </div>
            </div>

            {/* 소개 textarea */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label
                className={css({
                  color: 'neutral.text.default',
                  fontSize: '13px',
                  fontWeight: '500',
                })}
              >
                소개
              </label>
              <textarea
                rows={3}
                className={css({
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'neutral.border.default',
                  backgroundColor: 'neutral.surface.default',
                  color: 'neutral.text.default',
                  fontSize: '14px',
                  outline: 'none',
                  resize: 'vertical',
                  _placeholder: { color: 'neutral.text.muted' },
                })}
                placeholder="자기소개를 입력하세요"
              />
              <span
                className={css({
                  color: 'neutral.text.subtle',
                  fontSize: '12px',
                })}
              >
                최대 200자
              </span>
            </div>
          </div>

          {/* 구분선 + 버튼 영역 */}
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
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'primary.fill.default',
                color: 'inverse.text.default',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              변경사항 저장
            </button>
            <button
              className={css({
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'neutral.surface.transparent',
                color: 'neutral.text.subtle',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              취소
            </button>
          </div>
        </div>

        {/* ── 카드 2: 구독 플랜 ── */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2
            className={css({
              color: 'neutral.text.default',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '16px',
            })}
          >
            구독 플랜
          </h2>

          {/* 현재 플랜 박스 */}
          <div
            className={css({
              backgroundColor: 'primary.surface.default',
              border: '1px solid',
              borderColor: 'primary.border.default',
              borderRadius: '10px',
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
                <div
                  className={css({
                    color: 'primary.text.default',
                    fontSize: '15px',
                    fontWeight: '700',
                  })}
                >
                  Pro
                </div>
                <div
                  className={css({
                    color: 'neutral.text.subtle',
                    fontSize: '13px',
                  })}
                >
                  2025년 9월 1일 갱신
                </div>
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

          {/* Info 배너 */}
          <div
            className={css({
              backgroundColor: 'info.surface.default',
              border: '1px solid',
              borderColor: 'info.border.default',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '16px',
            })}
          >
            <Info size={16} className={css({ color: 'info.icon.default', flexShrink: 0 })} />
            <span className={css({ color: 'info.text.default', fontSize: '13px' })}>
              결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
            </span>
          </div>

          {/* 버튼 2개 */}
          <div className={css({ display: 'flex', gap: '8px' })}>
            <button
              className={css({
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'primary.fill.default',
                color: 'inverse.text.default',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              Enterprise로 업그레이드
            </button>
            <button
              className={css({
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'neutral.border.default',
                backgroundColor: 'neutral.surface.default',
                color: 'neutral.text.default',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              플랜 비교 보기
            </button>
          </div>
        </div>

        {/* ── 카드 3: 비밀번호 변경 ── */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2
            className={css({
              color: 'neutral.text.default',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '20px',
            })}
          >
            비밀번호 변경
          </h2>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
            {/* 1. 현재 비밀번호 - 기본 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ color: 'neutral.text.default', fontSize: '13px', fontWeight: '500' })}>
                현재 비밀번호
              </label>
              <input
                type="password"
                className={css({
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'neutral.border.default',
                  backgroundColor: 'neutral.surface.default',
                  color: 'neutral.text.default',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
            </div>

            {/* 2. 새 비밀번호 - 포커스 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ color: 'neutral.text.default', fontSize: '13px', fontWeight: '500' })}>
                새 비밀번호
              </label>
              <input
                type="password"
                placeholder="새 비밀번호 입력"
                className={css({
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '2px solid',
                  borderColor: 'primary.border.emphasis',
                  backgroundColor: 'neutral.surface.default',
                  color: 'neutral.text.default',
                  fontSize: '14px',
                  outline: '2px solid',
                  outlineColor: 'focus.border',
                  outlineOffset: '2px',
                  _placeholder: { color: 'neutral.text.muted' },
                })}
              />
            </div>

            {/* 3. 비밀번호 확인 - 오류 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ color: 'neutral.text.default', fontSize: '13px', fontWeight: '500' })}>
                비밀번호 확인
              </label>
              <input
                type="password"
                defaultValue="abc"
                className={css({
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'critical.border.default',
                  backgroundColor: 'critical.surface.default',
                  color: 'neutral.text.default',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <XCircle size={14} className={css({ color: 'critical.icon.default', flexShrink: 0 })} />
                <span className={css({ color: 'critical.text.default', fontSize: '12px' })}>
                  비밀번호가 일치하지 않습니다.
                </span>
              </div>
            </div>

            {/* 4. 새 이메일 - 성공 */}
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
              <label className={css({ color: 'neutral.text.default', fontSize: '13px', fontWeight: '500' })}>
                새 이메일 (선택)
              </label>
              <input
                type="email"
                defaultValue="user@example.com"
                className={css({
                  padding: '10px 12px',
                  borderRadius: '8px',
                  border: '1px solid',
                  borderColor: 'positive.border.default',
                  backgroundColor: 'positive.surface.default',
                  color: 'neutral.text.default',
                  fontSize: '14px',
                  outline: 'none',
                })}
              />
              <div className={css({ display: 'flex', alignItems: 'center', gap: '4px' })}>
                <CheckCircle2 size={14} className={css({ color: 'positive.icon.default', flexShrink: 0 })} />
                <span className={css({ color: 'positive.text.default', fontSize: '12px' })}>
                  사용 가능한 이메일입니다.
                </span>
              </div>
            </div>

            {/* 5. 사용자 ID - 비활성 */}
            <div
              className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                opacity: 0.38,
              })}
            >
              <label className={css({ color: 'neutral.text.default', fontSize: '13px', fontWeight: '500' })}>
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
                  borderColor: 'neutral.border.subtle',
                  backgroundColor: 'neutral.surface.strongest',
                  color: 'neutral.text.subtle',
                  fontSize: '14px',
                  outline: 'none',
                  cursor: 'not-allowed',
                })}
              />
              <span className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                변경 불가
              </span>
            </div>
          </div>

          <div className={css({ marginTop: '20px' })}>
            <button
              className={css({
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'primary.fill.default',
                color: 'inverse.text.default',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              저장
            </button>
          </div>
        </div>

        {/* ── 카드 4: 보안 ── */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2
            className={css({
              color: 'neutral.text.default',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '20px',
            })}
          >
            보안 설정
          </h2>

          {/* 2단계 인증 토글 행 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <ShieldCheck size={20} className={css({ color: 'positive.icon.default', flexShrink: 0 })} />
              <div>
                <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '600' })}>
                  2단계 인증
                </div>
                <div className={css({ color: 'neutral.text.subtle', fontSize: '13px' })}>
                  계정 보안이 강화됩니다
                </div>
              </div>
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
              {/* 켜진 상태 토글 */}
              <div
                className={css({
                  width: '44px',
                  height: '24px',
                  borderRadius: '12px',
                  backgroundColor: 'primary.fill.default',
                  position: 'relative',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '2px',
                })}
              >
                <div
                  className={css({
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'inverse.text.default',
                    marginLeft: 'auto',
                  })}
                />
              </div>
              {/* 활성화됨 뱃지 */}
              <span
                className={css({
                  backgroundColor: 'positive.surface.default',
                  border: '1px solid',
                  borderColor: 'positive.border.default',
                  color: 'positive.text.default',
                  fontSize: '11px',
                  fontWeight: '600',
                  padding: '2px 8px',
                  borderRadius: '20px',
                })}
              >
                활성화됨
              </span>
            </div>
          </div>

          {/* 구분선 */}
          <div
            className={css({
              borderTop: '1px solid',
              borderColor: 'neutral.border.subtle',
              marginBottom: '20px',
            })}
          />

          {/* 활성 세션 */}
          <h3
            className={css({
              color: 'neutral.text.default',
              fontSize: '15px',
              fontWeight: '600',
              marginBottom: '12px',
            })}
          >
            활성 세션
          </h3>

          <div className={css({ display: 'flex', flexDirection: 'column', gap: '10px' })}>
            {/* 세션 1: 현재 */}
            <div
              className={css({
                backgroundColor: 'primary.surface.default',
                border: '1px solid',
                borderColor: 'primary.border.default',
                borderRadius: '10px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Monitor size={18} className={css({ color: 'primary.icon.default' })} />
                <div>
                  <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                    Chrome · macOS
                  </div>
                  <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                    현재 위치 · 방금 전
                  </div>
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
                현재
              </span>
            </div>

            {/* 세션 2 */}
            <div
              className={css({
                backgroundColor: 'neutral.surface.default',
                border: '1px solid',
                borderColor: 'neutral.border.default',
                borderRadius: '10px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Smartphone size={18} className={css({ color: 'neutral.icon.default' })} />
                <div>
                  <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                    Safari · iPhone
                  </div>
                  <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                    서울 · 2시간 전
                  </div>
                </div>
              </div>
              <button
                className={css({
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'critical.border.default',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'critical.text.default',
                  fontSize: '13px',
                  fontWeight: '500',
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
                borderRadius: '10px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              })}
            >
              <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
                <Monitor size={18} className={css({ color: 'neutral.icon.default' })} />
                <div>
                  <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                    Firefox · Windows
                  </div>
                  <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                    부산 · 3일 전
                  </div>
                </div>
              </div>
              <button
                className={css({
                  padding: '6px 14px',
                  borderRadius: '6px',
                  border: '1px solid',
                  borderColor: 'critical.border.default',
                  backgroundColor: 'neutral.surface.transparent',
                  color: 'critical.text.default',
                  fontSize: '13px',
                  fontWeight: '500',
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
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'critical.border.default',
                backgroundColor: 'neutral.surface.transparent',
                color: 'critical.text.default',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              모든 다른 세션 종료
            </button>
          </div>
        </div>

        {/* ── 카드 5: 알림 설정 ── */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          <h2
            className={css({
              color: 'neutral.text.default',
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '16px',
            })}
          >
            이메일 알림
          </h2>

          {/* Warning 배너 */}
          <div
            className={css({
              backgroundColor: 'warning.surface.default',
              border: '1px solid',
              borderColor: 'warning.border.default',
              borderRadius: '10px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '20px',
            })}
          >
            <AlertTriangle size={16} className={css({ color: 'warning.icon.default', flexShrink: 0 })} />
            <span className={css({ color: 'warning.text.default', fontSize: '13px' })}>
              일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
            </span>
          </div>

          {/* 알림 항목 목록 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '16px' })}>
            {/* 1. 시스템 알림 - 체크됨 + 비활성 */}
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
                <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                  시스템 알림
                </div>
                <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                  서비스 이용에 필요한 필수 공지
                </div>
              </div>
            </div>

            {/* 2. 결제 알림 - 체크됨 */}
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
                <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                  결제 알림
                </div>
                <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                  영수증 및 결제 관련 안내
                </div>
              </div>
            </div>

            {/* 3. 배포 알림 - 체크됨 */}
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
                <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                  배포 알림
                </div>
                <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                  배포 완료 및 실패 알림
                </div>
              </div>
            </div>

            {/* 4. 보안 알림 - 체크됨 */}
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
                <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                  보안 알림
                </div>
                <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                  로그인 및 보안 이벤트
                </div>
              </div>
            </div>

            {/* 5. 마케팅 알림 - 체크 안됨 */}
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
                <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                  마케팅 알림
                </div>
                <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                  제품 업데이트 및 프로모션
                </div>
              </div>
            </div>

            {/* 6. 뉴스레터 - 체크 안됨 */}
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
                <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '500' })}>
                  뉴스레터
                </div>
                <div className={css({ color: 'neutral.text.subtle', fontSize: '12px' })}>
                  월간 뉴스레터
                </div>
              </div>
            </div>
          </div>

          <div className={css({ marginTop: '20px' })}>
            <button
              className={css({
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'primary.fill.default',
                color: 'inverse.text.default',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
              })}
            >
              저장
            </button>
          </div>
        </div>

        {/* ── 카드 6: 위험 구역 ── */}
        <div
          className={css({
            backgroundColor: 'critical.surface.default',
            border: '1px solid',
            borderColor: 'critical.border.default',
            borderRadius: '12px',
            padding: '24px',
          })}
        >
          {/* 카드 헤더 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px',
            })}
          >
            <AlertTriangle size={20} className={css({ color: 'critical.icon.default' })} />
            <h2
              className={css({
                color: 'critical.text.default',
                fontSize: '18px',
                fontWeight: '700',
              })}
            >
              위험 구역
            </h2>
          </div>

          {/* 액션 1: 계정 비활성화 */}
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
              <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '600' })}>
                계정 비활성화
              </div>
              <div className={css({ color: 'neutral.text.subtle', fontSize: '13px', marginTop: '4px' })}>
                계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
              </div>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'critical.border.default',
                backgroundColor: 'neutral.surface.transparent',
                color: 'critical.text.default',
                fontSize: '13px',
                fontWeight: '500',
                cursor: 'pointer',
                flexShrink: 0,
                marginLeft: '16px',
              })}
            >
              비활성화
            </button>
          </div>

          {/* 액션 2: 영구 삭제 */}
          <div
            className={css({
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            })}
          >
            <div>
              <div className={css({ color: 'neutral.text.default', fontSize: '14px', fontWeight: '600' })}>
                계정 영구 삭제
              </div>
              <div className={css({ color: 'neutral.text.subtle', fontSize: '13px', marginTop: '4px' })}>
                계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
              </div>
            </div>
            <button
              className={css({
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'critical.fill.default',
                color: 'inverse.text.default',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                flexShrink: 0,
                marginLeft: '16px',
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
