import { css } from '@ds-token-test/styled-system-intent-first-stepnames/css';
import {
  User,
  CreditCard,
  ShieldCheck,
  Bell,
  AlertTriangle,
  ChevronLeft,
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
        backgroundColor: 'neutral.canvas.01',
        fontFamily: 'sans-serif',
      })}
    >
      {/* 왼쪽 설정 메뉴 */}
      <nav
        className={css({
          width: '200px',
          flexShrink: 0,
          backgroundColor: 'neutral.canvas.01',
          borderRight: '1px solid',
          borderColor: 'neutral.border.subtle',
          display: 'flex',
          flexDirection: 'column',
          padding: '24px 0',
          gap: '8px',
        })}
      >
        {/* 뒤로가기 */}
        <div
          className={css({
            paddingX: '16px',
            marginBottom: '8px',
          })}
        >
          <a
            href="#"
            className={css({
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: 'neutral.text.subtle',
              textDecoration: 'none',
              fontSize: '13px',
            })}
          >
            <ChevronLeft className={css({ color: 'neutral.icon.default' })} size={14} />
            대시보드
          </a>
        </div>

        {/* 메뉴 제목 */}
        <div
          className={css({
            paddingX: '16px',
            marginBottom: '12px',
          })}
        >
          <span
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.default',
            })}
          >
            설정
          </span>
        </div>

        {/* 프로필 — 활성 */}
        <div
          className={css({
            marginX: '8px',
            borderRadius: '8px',
            backgroundColor: 'primary.surface.default',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          })}
        >
          <User
            className={css({ color: 'primary.icon.default', flexShrink: 0 })}
            size={16}
          />
          <span
            className={css({
              fontSize: '14px',
              fontWeight: '600',
              color: 'primary.text.default',
            })}
          >
            프로필
          </span>
        </div>

        {/* 구독 플랜 */}
        <div
          className={css({
            marginX: '8px',
            borderRadius: '8px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          })}
        >
          <CreditCard
            className={css({ color: 'neutral.icon.default', flexShrink: 0, opacity: 0.6 })}
            size={16}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            구독 플랜
          </span>
        </div>

        {/* 보안 */}
        <div
          className={css({
            marginX: '8px',
            borderRadius: '8px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          })}
        >
          <ShieldCheck
            className={css({ color: 'neutral.icon.default', flexShrink: 0, opacity: 0.6 })}
            size={16}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            보안
          </span>
        </div>

        {/* 알림 */}
        <div
          className={css({
            marginX: '8px',
            borderRadius: '8px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          })}
        >
          <Bell
            className={css({ color: 'neutral.icon.default', flexShrink: 0, opacity: 0.6 })}
            size={16}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'neutral.text.subtle',
            })}
          >
            알림
          </span>
        </div>

        {/* 위험 구역 */}
        <div
          className={css({
            marginX: '8px',
            borderRadius: '8px',
            padding: '10px 12px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            cursor: 'pointer',
          })}
        >
          <AlertTriangle
            className={css({ color: 'critical.icon.default', flexShrink: 0 })}
            size={16}
          />
          <span
            className={css({
              fontSize: '14px',
              color: 'critical.text.default',
            })}
          >
            위험 구역
          </span>
        </div>
      </nav>

      {/* 오른쪽 콘텐츠 영역 */}
      <main
        className={css({
          flex: 1,
          overflowY: 'auto',
          backgroundColor: 'neutral.canvas.01',
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
          <a
            href="#"
            className={css({
              color: 'neutral.text.subtle',
              textDecoration: 'none',
            })}
          >
            홈
          </a>
          <span className={css({ color: 'neutral.text.muted' })}>/</span>
          <a
            href="#"
            className={css({
              color: 'neutral.text.subtle',
              textDecoration: 'none',
            })}
          >
            설정
          </a>
          <span className={css({ color: 'neutral.text.muted' })}>/</span>
          <span className={css({ color: 'neutral.text.default', fontWeight: '600' })}>
            프로필
          </span>
        </nav>

        {/* 카드 1: 프로필 정보 */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            borderRadius: '12px',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            overflow: 'hidden',
          })}
        >
          <div className={css({ padding: '24px' })}>
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '700',
                color: 'neutral.text.default',
                marginBottom: '24px',
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
                    fontSize: '28px',
                    fontWeight: '700',
                    color: 'inverse.text.default',
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
                    backgroundColor: 'neutral.surface.transparent',
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
              {/* 이름 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label
                  className={css({
                    fontSize: '13px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  이름
                </label>
                <input
                  type="text"
                  placeholder="홍길동"
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

              {/* 이메일 */}
              <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
                <label
                  className={css({
                    fontSize: '13px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  이메일
                </label>
                <input
                  type="email"
                  placeholder="user@example.com"
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

              {/* 전화번호 — 비활성화 */}
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
                    fontSize: '13px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  전화번호
                </label>
                <input
                  type="tel"
                  placeholder="010-0000-0000"
                  disabled
                  className={css({
                    padding: '10px 12px',
                    borderRadius: '8px',
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
                <label
                  className={css({
                    fontSize: '13px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  부서
                </label>
                <input
                  type="text"
                  placeholder="디자인팀"
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
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'neutral.text.default',
                })}
              >
                소개
              </label>
              <textarea
                placeholder="자기소개를 입력하세요"
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
                  width: '100%',
                  boxSizing: 'border-box',
                  _placeholder: { color: 'neutral.text.muted' },
                })}
              />
              <span
                className={css({
                  fontSize: '12px',
                  color: 'neutral.text.subtle',
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
              gap: '12px',
              alignItems: 'center',
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

        {/* 카드 2: 구독 플랜 */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            borderRadius: '12px',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.default',
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
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'center', gap: '12px' })}>
              <Zap
                className={css({ color: 'primary.icon.default', flexShrink: 0 })}
                size={20}
              />
              <div>
                <p
                  className={css({
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'primary.text.default',
                  })}
                >
                  Pro
                </p>
                <p
                  className={css({
                    fontSize: '13px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  2025년 9월 1일 갱신
                </p>
              </div>
            </div>
            <span
              className={css({
                padding: '4px 10px',
                borderRadius: '999px',
                backgroundColor: 'primary.fill.default',
                color: 'inverse.text.default',
                fontSize: '12px',
                fontWeight: '600',
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
            })}
          >
            <Info
              className={css({ color: 'info.icon.default', flexShrink: 0 })}
              size={16}
            />
            <p
              className={css({
                fontSize: '13px',
                color: 'info.text.default',
              })}
            >
              결제일이 7일 후입니다. 카드 정보를 확인해 주세요.
            </p>
          </div>

          {/* 버튼 2개 */}
          <div className={css({ display: 'flex', gap: '12px' })}>
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
                backgroundColor: 'neutral.surface.transparent',
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

        {/* 카드 3: 비밀번호 변경 */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            borderRadius: '12px',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.default',
            })}
          >
            비밀번호 변경
          </h2>

          {/* 1. 현재 비밀번호 — 기본 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
            <label
              className={css({
                fontSize: '13px',
                fontWeight: '500',
                color: 'neutral.text.default',
              })}
            >
              현재 비밀번호
            </label>
            <input
              type="password"
              placeholder="현재 비밀번호 입력"
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

          {/* 2. 새 비밀번호 — 포커스 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
            <label
              className={css({
                fontSize: '13px',
                fontWeight: '500',
                color: 'neutral.text.default',
              })}
            >
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
                outlineOffset: '1px',
                _placeholder: { color: 'neutral.text.muted' },
              })}
            />
          </div>

          {/* 3. 비밀번호 확인 — 오류 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
            <label
              className={css({
                fontSize: '13px',
                fontWeight: '500',
                color: 'neutral.text.default',
              })}
            >
              비밀번호 확인
            </label>
            <input
              type="password"
              defaultValue="abc"
              className={css({
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'critical.border.emphasis',
                backgroundColor: 'critical.surface.default',
                color: 'neutral.text.default',
                fontSize: '14px',
                outline: 'none',
              })}
            />
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              })}
            >
              <XCircle
                className={css({ color: 'critical.icon.default', flexShrink: 0 })}
                size={14}
              />
              <span
                className={css({
                  fontSize: '12px',
                  color: 'critical.text.default',
                })}
              >
                비밀번호가 일치하지 않습니다.
              </span>
            </div>
          </div>

          {/* 4. 새 이메일 — 성공 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '6px' })}>
            <label
              className={css({
                fontSize: '13px',
                fontWeight: '500',
                color: 'neutral.text.default',
              })}
            >
              새 이메일 (선택)
            </label>
            <input
              type="email"
              defaultValue="user@example.com"
              className={css({
                padding: '10px 12px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'positive.border.emphasis',
                backgroundColor: 'positive.surface.default',
                color: 'neutral.text.default',
                fontSize: '14px',
                outline: 'none',
              })}
            />
            <div
              className={css({
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              })}
            >
              <CheckCircle2
                className={css({ color: 'positive.icon.default', flexShrink: 0 })}
                size={14}
              />
              <span
                className={css({
                  fontSize: '12px',
                  color: 'positive.text.default',
                })}
              >
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
            <label
              className={css({
                fontSize: '13px',
                fontWeight: '500',
                color: 'neutral.text.default',
              })}
            >
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
            <span
              className={css({
                fontSize: '12px',
                color: 'neutral.text.muted',
              })}
            >
              변경 불가
            </span>
          </div>

          <button
            className={css({
              alignSelf: 'flex-start',
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

        {/* 카드 4: 보안 */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            borderRadius: '12px',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.default',
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
            })}
          >
            <div className={css({ display: 'flex', alignItems: 'flex-start', gap: '12px' })}>
              <ShieldCheck
                className={css({ color: 'positive.icon.default', flexShrink: 0, marginTop: '2px' })}
                size={20}
              />
              <div>
                <p
                  className={css({
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'neutral.text.default',
                    marginBottom: '2px',
                  })}
                >
                  2단계 인증
                </p>
                <p
                  className={css({
                    fontSize: '13px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  계정 보안이 강화됩니다
                </p>
              </div>
            </div>
            <div className={css({ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' })}>
              {/* 토글 켜진 상태 */}
              <div
                className={css({
                  width: '44px',
                  height: '24px',
                  borderRadius: '999px',
                  backgroundColor: 'primary.fill.default',
                  position: 'relative',
                  cursor: 'pointer',
                  flexShrink: 0,
                })}
              >
                <div
                  className={css({
                    position: 'absolute',
                    right: '2px',
                    top: '2px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'inverse.text.default',
                  })}
                />
              </div>
              {/* 활성화됨 뱃지 */}
              <span
                className={css({
                  padding: '2px 8px',
                  borderRadius: '999px',
                  backgroundColor: 'positive.surface.default',
                  border: '1px solid',
                  borderColor: 'positive.border.default',
                  color: 'positive.text.default',
                  fontSize: '11px',
                  fontWeight: '600',
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
              borderColor: 'neutral.border.subtle',
              margin: '0',
            })}
          />

          {/* 활성 세션 */}
          <div>
            <h3
              className={css({
                fontSize: '15px',
                fontWeight: '600',
                color: 'neutral.text.default',
                marginBottom: '12px',
              })}
            >
              활성 세션
            </h3>
            <div className={css({ display: 'flex', flexDirection: 'column', gap: '10px' })}>
              {/* 현재 세션 */}
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
                  <Monitor
                    className={css({ color: 'primary.icon.default', flexShrink: 0 })}
                    size={18}
                  />
                  <div>
                    <p
                      className={css({
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'neutral.text.default',
                      })}
                    >
                      Chrome · macOS
                    </p>
                    <p
                      className={css({
                        fontSize: '12px',
                        color: 'neutral.text.subtle',
                      })}
                    >
                      현재 위치 · 방금 전
                    </p>
                  </div>
                </div>
                <span
                  className={css({
                    padding: '4px 10px',
                    borderRadius: '999px',
                    backgroundColor: 'primary.fill.default',
                    color: 'inverse.text.default',
                    fontSize: '12px',
                    fontWeight: '600',
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
                  <Smartphone
                    className={css({ color: 'neutral.icon.default', flexShrink: 0 })}
                    size={18}
                  />
                  <div>
                    <p
                      className={css({
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'neutral.text.default',
                      })}
                    >
                      Safari · iPhone
                    </p>
                    <p
                      className={css({
                        fontSize: '12px',
                        color: 'neutral.text.subtle',
                      })}
                    >
                      서울 · 2시간 전
                    </p>
                  </div>
                </div>
                <button
                  className={css({
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'critical.border.emphasis',
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
                  <Monitor
                    className={css({ color: 'neutral.icon.default', flexShrink: 0 })}
                    size={18}
                  />
                  <div>
                    <p
                      className={css({
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'neutral.text.default',
                      })}
                    >
                      Firefox · Windows
                    </p>
                    <p
                      className={css({
                        fontSize: '12px',
                        color: 'neutral.text.subtle',
                      })}
                    >
                      부산 · 3일 전
                    </p>
                  </div>
                </div>
                <button
                  className={css({
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: '1px solid',
                    borderColor: 'critical.border.emphasis',
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

            <button
              className={css({
                marginTop: '12px',
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'critical.border.emphasis',
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

        {/* 카드 5: 알림 설정 */}
        <div
          className={css({
            backgroundColor: 'neutral.canvas.02',
            borderRadius: '12px',
            border: '1px solid',
            borderColor: 'neutral.border.default',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          })}
        >
          <h2
            className={css({
              fontSize: '18px',
              fontWeight: '700',
              color: 'neutral.text.default',
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
            })}
          >
            <AlertTriangle
              className={css({ color: 'warning.icon.default', flexShrink: 0 })}
              size={16}
            />
            <p
              className={css({
                fontSize: '13px',
                color: 'warning.text.default',
              })}
            >
              일부 알림을 끄면 중요 서비스 공지를 놓칠 수 있습니다.
            </p>
          </div>

          {/* 알림 항목 목록 */}
          <div className={css({ display: 'flex', flexDirection: 'column', gap: '14px' })}>

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
                  backgroundColor: 'primary.fill.default',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                })}
              >
                <span
                  className={css({
                    color: 'inverse.text.default',
                    fontSize: '11px',
                    fontWeight: '700',
                    lineHeight: 1,
                  })}
                >
                  ✓
                </span>
              </div>
              <div>
                <p
                  className={css({
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  시스템 알림
                </p>
                <p
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  서비스 이용에 필요한 필수 공지
                </p>
              </div>
            </div>

            {/* 2. 결제 알림 — 체크됨 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              })}
            >
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'primary.fill.default',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                })}
              >
                <span
                  className={css({
                    color: 'inverse.text.default',
                    fontSize: '11px',
                    fontWeight: '700',
                    lineHeight: 1,
                  })}
                >
                  ✓
                </span>
              </div>
              <div>
                <p
                  className={css({
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  결제 알림
                </p>
                <p
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  영수증 및 결제 관련 안내
                </p>
              </div>
            </div>

            {/* 3. 배포 알림 — 체크됨 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              })}
            >
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'primary.fill.default',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                })}
              >
                <span
                  className={css({
                    color: 'inverse.text.default',
                    fontSize: '11px',
                    fontWeight: '700',
                    lineHeight: 1,
                  })}
                >
                  ✓
                </span>
              </div>
              <div>
                <p
                  className={css({
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  배포 알림
                </p>
                <p
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  배포 완료 및 실패 알림
                </p>
              </div>
            </div>

            {/* 4. 보안 알림 — 체크됨 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              })}
            >
              <div
                className={css({
                  width: '18px',
                  height: '18px',
                  borderRadius: '4px',
                  backgroundColor: 'primary.fill.default',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '2px',
                })}
              >
                <span
                  className={css({
                    color: 'inverse.text.default',
                    fontSize: '11px',
                    fontWeight: '700',
                    lineHeight: 1,
                  })}
                >
                  ✓
                </span>
              </div>
              <div>
                <p
                  className={css({
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  보안 알림
                </p>
                <p
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  로그인 및 보안 이벤트
                </p>
              </div>
            </div>

            {/* 5. 마케팅 알림 — 체크 안됨 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              })}
            >
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
                <p
                  className={css({
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  마케팅 알림
                </p>
                <p
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  제품 업데이트 및 프로모션
                </p>
              </div>
            </div>

            {/* 6. 뉴스레터 — 체크 안됨 */}
            <div
              className={css({
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
              })}
            >
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
                <p
                  className={css({
                    fontSize: '14px',
                    fontWeight: '500',
                    color: 'neutral.text.default',
                  })}
                >
                  뉴스레터
                </p>
                <p
                  className={css({
                    fontSize: '12px',
                    color: 'neutral.text.subtle',
                  })}
                >
                  월간 뉴스레터
                </p>
              </div>
            </div>
          </div>

          <button
            className={css({
              alignSelf: 'flex-start',
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

        {/* 카드 6: 위험 구역 */}
        <div
          className={css({
            backgroundColor: 'critical.surface.default',
            borderRadius: '12px',
            border: '1px solid',
            borderColor: 'critical.border.default',
            overflow: 'hidden',
          })}
        >
          {/* 카드 헤더 */}
          <div
            className={css({
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderBottom: '1px solid',
              borderColor: 'critical.border.default',
            })}
          >
            <AlertTriangle
              className={css({ color: 'critical.icon.default', flexShrink: 0 })}
              size={20}
            />
            <h2
              className={css({
                fontSize: '18px',
                fontWeight: '700',
                color: 'critical.text.default',
              })}
            >
              위험 구역
            </h2>
          </div>

          {/* 액션 1: 계정 비활성화 */}
          <div
            className={css({
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              borderBottom: '1px solid',
              borderColor: 'critical.border.default',
            })}
          >
            <div>
              <p
                className={css({
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'neutral.text.default',
                  marginBottom: '4px',
                })}
              >
                계정 비활성화
              </p>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.subtle',
                })}
              >
                계정을 일시적으로 비활성화합니다. 언제든 재활성화할 수 있습니다.
              </p>
            </div>
            <button
              className={css({
                flexShrink: 0,
                padding: '10px 20px',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'critical.border.emphasis',
                backgroundColor: 'neutral.surface.transparent',
                color: 'critical.text.default',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
              })}
            >
              비활성화
            </button>
          </div>

          {/* 액션 2: 계정 영구 삭제 */}
          <div
            className={css({
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
            })}
          >
            <div>
              <p
                className={css({
                  fontSize: '15px',
                  fontWeight: '600',
                  color: 'neutral.text.default',
                  marginBottom: '4px',
                })}
              >
                계정 영구 삭제
              </p>
              <p
                className={css({
                  fontSize: '13px',
                  color: 'neutral.text.subtle',
                })}
              >
                계정과 모든 데이터가 영구 삭제됩니다. 되돌릴 수 없습니다.
              </p>
            </div>
            <button
              className={css({
                flexShrink: 0,
                padding: '10px 20px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: 'critical.fill.default',
                color: 'inverse.text.default',
                fontSize: '14px',
                fontWeight: '600',
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
